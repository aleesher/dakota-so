import React from "react";
import _get from "lodash/get";
import _isArray from "lodash/isArray";
import _isEmpty from "lodash/isEmpty";
import Grid from "@material-ui/core/Grid";

import SortableTable, {
  IMeta,
  createActionMenuColumn
} from "dakota-portal/dist/components/SortableTable";

import { woTableColumns } from "../constants";
import { getDefaultFormValues } from "../helpers";
import { META } from "../../home/constants";
import tableHelper from "../../../helpers/tableHelper";

import {
  FormCard,
  CardTitle,
  TransparentButton
} from "../../serviceOrder/styles";

interface IProps {
  workOrders: any[];
  onSelectRow: (wo) => void;
  onSubmit: (values: object) => any;
  isRowChecked: (rowData: object) => any;
  disabledRows: any[];
  selectedWO: object;
  onSelectWO: (wo: object) => void;
  onDeleteWO: (wo: object) => void;
  routeProps: object;
  onOpenMomentHistory: () => void;
  isWOLocked: (wo: object, action: string) => boolean;
}

export default ({
  workOrders,
  onSelectRow,
  onSubmit,
  disabledRows,
  selectedWO,
  onSelectWO,
  onDeleteWO,
  isRowChecked,
  routeProps,
  onOpenMomentHistory,
  isWOLocked
}: IProps) => {
  const [meta, setMeta] = React.useState<IMeta>(META);
  const [showForm, toggleForm] = React.useState<boolean>(false);

  const handleSelectRow = (item?: any) => {
    const wos = item ? item : workOrders;
    onSelectRow(wos);
  };

  const handleSubmit = values => {
    toggleForm(false);
    onSubmit(values);
  };

  return (
    <FormCard>
      <Grid container xs={12}>
        <Grid xs={6} item>
          <CardTitle hasborder="false">Werkorder informatie</CardTitle>
        </Grid>
        <Grid xs={6} item container justify="flex-end" alignItems="center">
          <TransparentButton
            height="56px"
            onClick={() => {
              onSelectWO({});
              toggleForm(!showForm);
            }}
          >
            Toevoegen werkorder
          </TransparentButton>
        </Grid>
      </Grid>
      <>
        <SortableTable
          columns={[
            createActionMenuColumn(
              tableHelper.createActionMenuItems({
                onClickEdit: wo => {
                  if (!isWOLocked(wo, "edit")) {
                    toggleForm(true);
                    onSelectWO(wo);
                  }
                },
                onClickBlock: () => null,
                onClickDelete: wo => {
                  if (!isWOLocked(wo, "delete")) {
                    onDeleteWO(wo);
                  }
                }
              }),
              workOrders.length
            ),
            ...woTableColumns(
              handleSelectRow,
              isRowChecked,
              onOpenMomentHistory
            )
          ]}
          dataSource={workOrders}
          onRowClick={() => null}
          pageName={"WorkOrderCreation"}
          meta={meta}
          onQueryChange={setMeta}
          hidePagination
          onSubmitForm={showForm ? handleSubmit : null}
          onValueChange={() => null}
          disabledRows={disabledRows}
          formValues={
            !_isEmpty(selectedWO)
              ? selectedWO
              : getDefaultFormValues(workOrders) || {}
          }
          routeProps={routeProps}
          rowFullyDisabled
        />
      </>
    </FormCard>
  );
};
