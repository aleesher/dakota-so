import * as React from "react";
import { compose } from "recompose";
import { Query } from "@apollo/react-components";
import { useMutation } from "@apollo/react-hooks";
import withFilters from "dakota-portal/dist/components/withFilters";
import MenuContext from "dakota-portal/dist/components/AppMenu/MenuContext";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Link } from "react-router-dom";

import Edit from "@material-ui/icons/Edit";

import SortableTable, {
  IMeta,
  createActionMenuColumn
} from "dakota-portal/dist/components/SortableTable";
import {
  ModalRoute,
  ActionMenuIcon,
  Loader,
  TableHeader
} from "dakota-portal/dist/components";

import filterHelper from "dakota-portal/dist/helpers/filterHelper";

import { generateCode } from "../../helpers";
import i18n from "../../helpers/i18";
import {
  TableHeaderWrapper,
  TableControl,
  ModalBoxs
} from "../../components/TableWrapper";
import { CustomStyle as Button } from "../../components/GeneralButton/style";
import {
  FETCH_CONTRACTS,
  FETCH_ALL_CONTRACTS,
  DUBLICATE_CONTRACT,
  CREATE_CONTRACT
} from "./queries";
import tableHelper from "../../helpers/tableHelper";
import { COLUMNS, EXPORT_BUTTONS, PER_PAGE } from "./constants";
import exportHelper from "../../helpers/exportHelper";
import LOCALE_FIELDS from "./../../constants/locales/nl/serviceContracts";
import ContractDetails from "./partials/contractDetails";
import { withLockEntities } from "../../components";
import Index from "./partials/indexeren";
import { GeneralButton } from "../../components";

const IconEdit = ActionMenuIcon(Edit);
const Contracts = ({
  history,
  match,
  where,
  filter,
  client,
  actions: serviceContractActions,
  getDisabledRows,
  executeSubscriptions
}) => {
  const [dublicateContract] = useMutation(DUBLICATE_CONTRACT);
  const [createContract] = useMutation(CREATE_CONTRACT);
  const menuContext = React.useContext(MenuContext);
  const [contracts, setContracts] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [meta, setMeta] = React.useState<IMeta>({
    activePage: 0,
    totalItems: 0,
    perPage: PER_PAGE
  });

  let whereInput = where;
  if (_get(where, "AND") && _isEmpty(_get(where, "AND"))) {
    whereInput = _get(history, "location.state.filters", {});
  } else {
    whereInput = { ...where, ..._get(history, "location.state.filters", {}) };
  }

  React.useEffect(executeSubscriptions, []);

  const filters = searchText
    ? {
        AND: [
          whereInput,
          {
            OR: [
              { code_contains: searchText },
              { name_contains: searchText },
              { customerCode_contains: searchText },
              { city_contains: searchText }
            ]
          }
        ]
      }
    : whereInput;

  const variables = {
    skip: meta.activePage * meta.perPage,
    perPage: meta.perPage,
    where: filters,
    orderBy:
      meta.orderByKey && meta.orderByType
        ? `${meta.orderByKey}_${meta.orderByType.toUpperCase()}`
        : "id_DESC"
  };

  const refetchQueries = [{ query: FETCH_CONTRACTS, variables }];

  const addContractToList = contract => {
    setContracts(contracts => [contract, ...contracts]);
    setMeta(meta => ({
      ...meta,
      totalItems: meta.totalItems + 1
    }));
  };

  const onRowClick = (rowItem: object) => {
    window.open(
      `${match.url}/service-contract/${_get(rowItem, "id")}`,
      "_blank"
    );
  };

  const createNewServiceContract = async () => {
    try {
      const { data } = await createContract({
        variables: { data: { code: generateCode() } }
      });
      const { createServiceContract } = data;

      addContractToList(createServiceContract);
      onRowClick(createServiceContract);
    } catch (err) {
      console.log("Err: ", JSON.stringify(err, null, 2));
    }
  };

  return (
    <div>
      <TableHeaderWrapper>
        <TableHeader pageName={"Service Contracts"} />
        <TableControl>
          <Link to={`${match.path}/indexeren`} className="buttonLink">
            <GeneralButton
              className="control"
              title={"Indexeren"}
              url={"/so/sc/indexeren"}
            />
          </Link>
          <Button className="control" onClick={createNewServiceContract}>
            Nieuw Contract
          </Button>
        </TableControl>
        <TableHeader pageName={""} searchHandler={setSearchText} />
      </TableHeaderWrapper>
      <Query
        query={FETCH_CONTRACTS}
        variables={variables}
        onCompleted={data => {
          setContracts(_get(data, "serviceContracts", []));
          setMeta({
            ...meta,
            totalItems: _get(
              data,
              "serviceContractsConnection.aggregate.count",
              0
            )
          });
        }}
      >
        {({ loading, data, error = null }) => {
          if (error) {
            return <div>`Error! ${error.message}`</div>;
          }

          if (loading) {
            return <Loader />;
          }

          return (
            <SortableTable
              columns={[
                createActionMenuColumn(
                  tableHelper.createActionMenuItems({
                    onClickEdit: rowItem => onRowClick(rowItem),
                    onClickBlock: contract =>
                      serviceContractActions.block(contract, refetchQueries),
                    onClickDelete: contract =>
                      serviceContractActions.delete(contract, refetchQueries),
                    onClickDuplicate: async contract => {
                      try {
                        const { data } = await dublicateContract({
                          variables: {
                            data: {
                              ...contract,
                              id: undefined,
                              description: "",
                              customerCode: "",
                              code: generateCode()
                            }
                          }
                        });

                        const {
                          createServiceContract: dublicatedServiceContract
                        } = data;

                        addContractToList(dublicatedServiceContract);
                        onRowClick(dublicatedServiceContract);
                      } catch (err) {
                        console.log("Err: ", JSON.stringify(err, null, 2));
                      }
                    }
                  }),
                  contracts.length
                ),
                ...COLUMNS
              ]}
              onRowClick={rowItem => onRowClick(rowItem)}
              dataSource={contracts}
              onQueryChange={newMeta => setMeta(newMeta)}
              meta={meta}
              onExportClick={exportHelper.onExportClick(
                FETCH_ALL_CONTRACTS,
                "allServiceContracts",
                variables,
                COLUMNS,
                client,
                _get(data, "serviceContractsConnection.aggregate.count", 0)
              )}
              exportButtons={EXPORT_BUTTONS}
              exportTypes={["excel", "pdf"]}
              filterFields={{ ...LOCALE_FIELDS.field, ...LOCALE_FIELDS.filter }}
              filters={filterHelper.separateFilters(filters, searchText)}
              pageName={"Service Contracts"}
              fileName={`dakota-so-${i18n
                .t("ServiceContracts.contracts")
                .toLocaleLowerCase()}`}
              searchText={searchText}
              showTotalNumber
              disabledRows={getDisabledRows(contracts)}
            />
          );
        }}
      </Query>
      <ModalRoute
        path={`${match.url}/service-contract/:scId`}
        parentPath={match.url}
        component={ContractDetails}
        onBackdropClick={history.goBack}
      />

      <ModalBoxs
        path={`${match.path}/indexeren`}
        parentPath={match.url}
        component={Index}
        variant="wide"
      />
    </div>
  );
};

export default compose(
  withFilters({
    entityName: "ServiceContract",
    preDefinedFilters: [
      {
        title: "Customer",
        key: "customerCode",
        type: "String"
      }
    ],
    i18n
  }),
  withLockEntities({
    entity: "serviceContract"
  })
)(Contracts);
