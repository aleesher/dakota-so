import * as React from "react";
import { compose } from "recompose";
import { Query } from "@apollo/react-components";
import withFilters from "dakota-portal/dist/components/withFilters";
import MenuContext from "dakota-portal/dist/components/AppMenu/MenuContext";
import _get = require("lodash/get");

import Edit from "@material-ui/icons/Edit";
import i18n from "../../helpers/i18";
import LOCALE_FIELDS from "../../constants/locales/nl/initialInspections";

import SortableTable, {
  IMeta,
  createActionMenuColumn
} from "dakota-portal/dist/components/SortableTable";
import {
  ActionMenuIcon,
  Loader,
  TableHeader,
  ModalRoute
} from "dakota-portal/dist/components";

import filterHelper from "dakota-portal/dist/helpers/filterHelper";

import urls from "../../helpers/urls";
import { LeakageDetails, Moment } from "./partials";
import {
  TableHeaderWrapper,
  TableHeaderButton,
  TableHeaderLink
} from "../../components/TableWrapper";
import { FETCH_LEAKAGES, FETCH_ALL_SERVICE_ORDERS } from "./queries";
import { EXPORT_BUTTONS, PER_PAGE } from "./constants";
import tableHelper from "../../helpers/tableHelper";
import { COLUMNS } from "./constants";
import exportHelper from "../../helpers/exportHelper";
import { parseURL } from "../home/constants";
import { GeneralButton, withLockEntities } from "../../components";
import { Link } from "react-router-dom";
import PromotedFields from "./partials/PromotedFields";
import { ModalBox } from "dakota-portal/dist/components/ModalWrapper";

const IconEdit = ActionMenuIcon(Edit);
const Leakages = ({
  history,
  match,
  where,
  filter,
  client,
  actions: serviceOrderActions,
  getDisabledRows,
  executeSubscriptions
}) => {
  const menuContext = React.useContext(MenuContext);
  const [searchText, setSearchText] = React.useState("");
  const [meta, setMeta] = React.useState<IMeta>({
    activePage: 0,
    totalItems: 0,
    perPage: PER_PAGE
  });

  React.useEffect(executeSubscriptions, []);

  const parsed = parseURL(location.search.slice(1));
  if (parsed.type) {
    where.orderType = parsed.type;
  }
  const filters = searchText
    ? {
        AND: [
          where,
          {
            OR: [
              { code_contains: searchText },
              { ownerName_contains: searchText },
              { roofPartnerName_contains: searchText }
            ]
          }
        ]
      }
    : where;

  const variables = {
    skip: meta.activePage * meta.perPage,
    perPage: meta.perPage,
    where: filters,
    orderBy:
      meta.orderByKey && meta.orderByType
        ? `${meta.orderByKey}_${meta.orderByType.toUpperCase()}`
        : "id_DESC"
  };

  const title = `${parsed.type.charAt(0)}${parsed.type
    .slice(1)
    .toLocaleLowerCase()} Serviceorders`;
  const refetchQueries = [{ query: FETCH_LEAKAGES, variables }];
  const params = `?list=${match.url}&filter=${JSON.stringify(filter)}`;

  const onFetchCompeted = data => {
    setMeta({
      ...meta,
      totalItems: _get(data, "serviceOrdersConnection.aggregate.count", 0)
    });
  };

  return (
    <div>
      <TableHeaderWrapper>
        <TableHeader pageName={title} searchHandler={setSearchText} />
        <TableHeaderLink to={urls.LOG_MOMENT}>
          <TableHeaderButton>Logmomenten</TableHeaderButton>
        </TableHeaderLink>
        <TableHeaderLink to={urls.SO_PROMOTED}>
          <TableHeaderButton>Promoot velden</TableHeaderButton>
        </TableHeaderLink>
      </TableHeaderWrapper>
      <Query
        query={FETCH_LEAKAGES}
        variables={variables}
        onCompleted={onFetchCompeted}
      >
        {({ loading, data, error = null }) => {
          if (error) {
            return <div>`Error! ${error.message}`</div>;
          }

          if (loading) {
            return <Loader />;
          }

          const leakages = _get(data, "serviceOrders", []);

          return (
            <SortableTable
              columns={[
                createActionMenuColumn(
                  tableHelper.createActionMenuItems({
                    onClickEdit: ({ id }) => {
                      history.push(`${urls.SO_DETAILS}/${id}`);
                    },
                    onClickBlock: leakage =>
                      serviceOrderActions.block(leakage, refetchQueries),
                    onClickDelete: leakage =>
                      serviceOrderActions.delete(leakage, refetchQueries)
                  }),
                  leakages.length
                ),
                ...COLUMNS
              ]}
              onRowClick={({ id }) => history.push(`${urls.SO_DETAILS}/${id}`)}
              dataSource={leakages}
              onQueryChange={newMeta => setMeta(newMeta)}
              meta={meta}
              onExportClick={exportHelper.onExportClick(
                FETCH_ALL_SERVICE_ORDERS,
                "allServiceOrders",
                variables,
                COLUMNS,
                client,
                _get(data, "serviceOrdersConnection.aggregate.count", 0)
              )}
              exportButtons={EXPORT_BUTTONS}
              exportTypes={["excel", "pdf"]}
              filterFields={{ ...LOCALE_FIELDS.field, ...LOCALE_FIELDS.filter }}
              filters={filterHelper.separateFilters(filters, searchText)}
              pageName={i18n.t("ServiceOrder.serviceOrders")}
              fileName={`dakota-so-${i18n
                .t("ServiceOrder.serviceOrders")
                .toLocaleLowerCase()}`}
              searchText={searchText}
              showTotalNumber
              disabledRows={getDisabledRows(leakages)}
              rowFullyDisabled
            />
          );
        }}
      </Query>
      <ModalRoute
        component={LeakageDetails}
        path={`${urls.SO_DETAILS}/:id`}
        parentPath={match.url}
        variant="wide"
      />
      <ModalBox
        component={PromotedFields}
        path={urls.SO_PROMOTED}
        parentPath={match.url}
        variant="wide"
        chartModal
      />
      <ModalRoute
        component={Moment}
        path={urls.LOG_MOMENT}
        parentPath={match.url}
        variant="wide"
      />
    </div>
  );
};

export default compose(
  withFilters({
    entityName: "ServiceOrder",
    preDefinedFilters: [
      {
        title: "Ordersoort",
        key: "postalCode",
        type: "String"
      }
    ],
    i18n
  }),
  withLockEntities({
    entity: "serviceOrder"
  })
)(Leakages);
