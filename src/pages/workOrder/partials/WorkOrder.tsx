import React from "react";
import _get from "lodash/get";
import _omit from "lodash/omit";
import _isEmpty from "lodash/isEmpty";
import _isArray from "lodash/isArray";
import _map from "lodash/map";
import _union from "lodash/union";

import Loader from "dakota-portal/dist/components/Loader";

import WorkOrderTable from "./WorkOrderTable";
import { withLockEntities } from "../../../components";

import { IWOState } from "../models";
import {
  DEFAULT_LOG_MOMENT_CODE,
  FORM_VALUES,
  FORM_FIELDS_TO_IGNORE,
  STATUSES
} from "../constants";
import client from "../../../../dev/apollo";
import {
  FETCH_WORK_ORDERS,
  CREATE_WORK_ORDER,
  DELETE_WORK_ORDER,
  FETCH_MOMENTS
} from "../queries";
import {
  generateWorkorderNumber,
  convertFieldsToNumber,
  generateUpdateMutation
} from "../helpers";
import { notification } from "../../../helpers";

import { LoaderWrapper } from "../../serviceOrder/styles";

interface IProps {
  onSubmit: () => void;
  soCode: string;
  soDescription: string;
  routeProps: object;
  onOpenMomentHistory?: () => void;
  currentUser: object;
  getDisabledRows: (workOrders: object[]) => void;
  executeSubscriptions: () => void;
  updateWoTotal: (total: number) => void;
  exportBlockedWOIds: string[];
}

class WorkOrder extends React.Component<IProps, IWOState> {
  constructor(props) {
    super(props);
    this.state = {
      formikValues: FORM_VALUES,
      workOrders: [],
      isLoading: true,
      selectedWO: {}
    };
  }

  async componentDidMount() {
    const { executeSubscriptions } = this.props;
    executeSubscriptions();
    await this.handleFetchWO();
  }

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  handleFetchWO = async () => {
    try {
      const { soCode, updateWoTotal } = this.props;

      if (soCode) {
        const res = await client.query({
          query: FETCH_WORK_ORDERS,
          variables: { soCode },
          fetchPolicy: "no-cache"
        });

        const workOrders = _get(res, "data.workOrders", []);

        if (!!workOrders.length) {
          updateWoTotal(workOrders.length);
          this.setState({ workOrders, isLoading: false });
          return;
        }

        await this.handleCreateWO();
      } else {
        this.setIsLoading(false);
      }
    } catch (err) {
      this.setIsLoading(false);
      console.warn(err);
    }
  };

  handleSubmit = async (values?: object) => {
    if (!values) {
      this.setState({ selectedWO: {} });
      return;
    }

    const { selectedWO } = this.state;

    if (!!_get(selectedWO, "id")) {
      await this.handleEditWO(values);
    } else {
      await this.handleCreateWO(values);
    }
  };

  handleFetchMoment = async (code: number) => {
    try {
      const result = await client.query({
        query: FETCH_MOMENTS,
        variables: { where: { code } }
      });
      const moments = _get(result, "data.moments", []);
      if (!_isEmpty(moments)) {
        return _get(moments, `[0].id`);
      }

      return null;
    } catch (err) {
      console.error(err.message);
    }
  };

  handleCreateWO = async (values?: object) => {
    try {
      const { soCode, currentUser } = this.props;
      let formValues = {};

      if (_isEmpty(values)) {
        formValues = {
          ...convertFieldsToNumber(_omit(FORM_VALUES, ["employee"])),
          code: generateWorkorderNumber()
        };
      } else {
        formValues = {
          ...convertFieldsToNumber(_omit(values, FORM_FIELDS_TO_IGNORE))
        };
      }

      const momentId = await this.handleFetchMoment(DEFAULT_LOG_MOMENT_CODE);

      const data = {
        ...formValues,
        soCode,
        serviceOrder: { connect: { code: soCode } },
        moment: { connect: { id: momentId } },
        status: STATUSES.created.status,
        updatedByUserId: _get(currentUser, "id", "")
      };

      const res = await client.mutate({
        mutation: CREATE_WORK_ORDER,
        variables: { data }
      });

      const newWorkOrder = _get(res, "data.createWorkOrder", {});

      if (!_isEmpty(newWorkOrder)) {
        await this.handleFetchWO();

        notification.addNotification({
          title: "Nieuwe werkorderaanmaak",
          message: "Wijzigingen succesvol opgeslagen"
        });
      } else {
        this.setIsLoading(false);
      }
    } catch (err) {
      this.setIsLoading(false);
      console.warn(err);
    }
  };

  handleSendOrRetrieveWO = async wo => {
    try {
      const { currentUser, exportBlockedWOIds } = this.props;
      const workOrders = (_isArray(wo) ? wo : [wo]).filter(
        wo => parseInt(_get(wo, "moment.code", 1), 10) < 45
      );

      const hasBlockedWO = workOrders.some(
        workOrder =>
          exportBlockedWOIds.includes(workOrder.id) || workOrder.isExportBlcoked
      );
      if (hasBlockedWO) {
        return;
      }

      this.setIsLoading(true);

      let orderIsSent: boolean = false;

      if (_isArray(wo)) {
        orderIsSent = workOrders.some(wo => !wo.orderIsSent);
      } else {
        orderIsSent = !_get(wo, "orderIsSent");
      }
      // todo
      const { status, code } = orderIsSent
        ? STATUSES.emergencyRepairPerformed
        : STATUSES.created;

      const momentId = await this.handleFetchMoment(code);

      await Promise.all([
        ...workOrders.map(wo =>
          client.mutate(
            generateUpdateMutation(wo, {
              orderIsSent,
              status,
              moment: { connect: { id: momentId } },
              updatedByUserId: _get(currentUser, "id", "")
            })
          )
        )
      ]);

      await this.handleFetchWO();

      notification.addNotification({
        title: `Werkorders succesvol ${
          orderIsSent ? "verzonden" : "opgehaald"
        }`,
        message: "Wijzigingen succesvol opgeslagen"
      });
    } catch (err) {
      this.setIsLoading(false);
      console.warn(err);
    }
  };

  handleSelectWO = wo => this.setState({ selectedWO: wo });

  handleEditWO = async wo => {
    try {
      this.setIsLoading(true);
      const { currentUser } = this.props;
      const disabledWOs = this.handleGetRows(this.state.workOrders);
      if (disabledWOs.includes(wo.id)) {
        this.setIsLoading(false);
        return;
      }
      await client.mutate(
        generateUpdateMutation(wo, {
          ..._omit(wo, [...FORM_FIELDS_TO_IGNORE, "code"]),
          updatedByUserId: _get(currentUser, "id", "")
        })
      );
      await this.handleFetchWO();
    } catch (err) {
      this.setIsLoading(false);
      console.error(err.message);
    }
  };

  handleDeleteWO = async wo => {
    try {
      this.setIsLoading(true);
      await client.mutate({
        mutation: DELETE_WORK_ORDER,
        variables: { where: { id: wo.id } }
      });
      await this.handleFetchWO();
    } catch (err) {
      this.setIsLoading(false);
      console.error(err.message);
    }
  };

  isRowChecked = rowData => {
    return parseInt(_get(rowData, "moment.code", 1), 10) > 5;
  };

  handleGetRows = workOrders => {
    const { getDisabledRows } = this.props;
    const logMomentCodes = _map(STATUSES, ({ code }) => code);
    const filteredRows = workOrders.filter(
      w =>
        !logMomentCodes.includes(parseInt(_get(w, "moment.code", 1), 10)) ||
        parseInt(_get(w, "moment.code", 1), 10) >= 45 ||
        w.isLocked
    );

    return _union(getDisabledRows(filteredRows));
  };

  isWOLocked = (disabledRows: string[]) => (wo: object, action: string) => {
    let isLocked =
      disabledRows.includes(_get(wo, "id")) || _get(wo, "isLocked");
    if (action === "delete") {
      const { exportBlockedWOIds } = this.props;
      isLocked =
        isLocked ||
        exportBlockedWOIds.includes(_get(wo, "id")) ||
        _get(wo, "isExportBlocked");
    }

    return isLocked;
  };

  render() {
    const { routeProps, onOpenMomentHistory } = this.props;
    const { workOrders = [], isLoading, selectedWO } = this.state;
    const disabledRows = this.handleGetRows(workOrders);

    return (
      <>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <WorkOrderTable
          onSelectRow={this.handleSendOrRetrieveWO}
          workOrders={workOrders}
          onSubmit={this.handleSubmit}
          disabledRows={disabledRows}
          selectedWO={selectedWO}
          onSelectWO={this.handleSelectWO}
          onDeleteWO={this.handleDeleteWO}
          isRowChecked={this.isRowChecked}
          routeProps={routeProps}
          onOpenMomentHistory={onOpenMomentHistory}
          isWOLocked={this.isWOLocked(disabledRows)}
        />
      </>
    );
  }
}

export default withLockEntities({ entity: "workOrder" })(WorkOrder);
