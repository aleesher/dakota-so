import React from "react";
import _get from "lodash/get";
import _set from "lodash/set";
import _isEmpty from "lodash/isEmpty";
import _filter from "lodash/filter";
import _reduce from "lodash/reduce";

import SortableTable, {
  IMeta
} from "dakota-portal/dist/components/SortableTable";
import { ModalRouteProps } from "dakota-portal/dist/components/ModalRoute";
import Loader from "dakota-portal/dist/components/Loader";

import client from "../../../dev/apollo";
import { META } from "../../pages/home/constants";
import { tableColumns } from "./constants";
import { FETCH_WORK_ORDERS } from "./queries";

import { LoaderWrapper } from "../../pages/serviceOrder/styles";
import { ModalBody, ModalHeader, ModalCloseIcon } from "../SearchModal/styles";

interface IProps extends ModalRouteProps {
  onClose: () => void;
  closeModal: () => void;
  soCode: string;
}

const MomentHistory = ({ onClose, closeModal, soCode, ...rest }: IProps) => {
  const [meta, setMeta] = React.useState<IMeta>(META);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [dataSource, setDataSource] = React.useState<object>({
    workOrders: [],
    totalItems: 0
  });

  React.useEffect(() => {
    handleFetch(meta);
  }, []);

  React.useEffect(() => {
    handleFetch(meta);
  }, [meta]);

  const handleFetch = async (meta: IMeta, page?: number) => {
    setIsLoading(true);
    const activePage = !_isEmpty(page) ? page : meta.activePage;
    const variables = {
      where: { serviceOrder: { code: soCode } },
      ...meta,
      totalItems: _get(dataSource, "totalItems", 0),
      skip: activePage * meta.perPage,
      activePage
    };

    client
      .query({ query: FETCH_WORK_ORDERS, variables })
      .then(res => {
        const totalItems = _get(
          res,
          "data.workOrdersConnection.aggregate.count",
          0
        );
        setDataSource({
          workOrders: _get(res, "data.workOrders") || [],
          totalItems
        });
        setIsLoading(false);
      })
      .catch(err => {
        console.warn(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      <ModalHeader>
        Logmomenten history
        <ModalCloseIcon onClick={closeModal} />
      </ModalHeader>
      <ModalBody>
        <SortableTable
          isNotConfigurable
          columns={tableColumns}
          dataSource={_get(dataSource, "workOrders", [])}
          onRowClick={() => null}
          meta={{ ...meta, totalItems: _get(dataSource, "totalItems", 0) }}
          onQueryChange={setMeta}
          routeProps={rest}
        />
      </ModalBody>
    </>
  );
};

export default MomentHistory;
