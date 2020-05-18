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
import { tableColumns, DEFAULT_CLIENT } from "./constants";
import { META } from "./constants";
import { urls } from "../../helpers";
import { LoaderWrapper } from "../../pages/serviceOrder/styles";

import { ModalBody, ModalHeader, ModalCloseIcon } from "./styles";
import { FilledButton } from "../../pages/serviceOrder/styles";

interface IProps extends ModalRouteProps {
  onClose: () => void;
  onSelect: (client: object) => void;
  closeModal: () => void;
  parentPath: string;
  query: any;
  where: object;
}

const SearchModal = ({
  onClose,
  onSelect,
  closeModal,
  query,
  where,
  ...rest
}: IProps) => {
  const [meta, setMeta] = React.useState<IMeta>(META);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [dataSource, setDataSource] = React.useState<object>({
    companies: [],
    totalItems: 0
  });

  React.useEffect(() => {
    handleFetch(meta);
  }, []);

  React.useEffect(() => {
    handleFetch(meta);
  }, [meta]);

  const onSearch = (searchKeys: object) => {
    const where = _reduce(
      searchKeys,
      (acc, val, key) => {
        return { ...acc, [`${key}_contains`]: val };
      },
      {}
    );

    handleFetch(meta, where, 0);
  };

  const handleFetch = async (
    meta: IMeta,
    search: object = {},
    page?: number
  ) => {
    setIsLoading(true);
    const activePage = !_isEmpty(page) ? page : meta.activePage;
    const variables = {
      where: {
        ...where,
        ...search
      },
      ...meta,
      totalItems: _get(dataSource, "totalItems", 0),
      skip: activePage * meta.perPage,
      activePage
    };

    client
      .query({ query, variables })
      .then(res => {
        const totalItems = _get(
          res,
          "data.companiesConnection.aggregate.count",
          0
        );
        setDataSource({
          companies: _get(res, "data.companies") || [],
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
        Klantenlijst
        <ModalCloseIcon onClick={closeModal} />
      </ModalHeader>
      <ModalBody>
        <FilledButton
          marginBottom={20}
          onClick={() => onSelect(DEFAULT_CLIENT)}
        >
          Kies standaard client
        </FilledButton>

        <SortableTable
          onSearch={onSearch}
          columns={tableColumns(onSelect)}
          dataSource={_get(dataSource, "companies", [])}
          onRowClick={() => null}
          meta={{ ...meta, totalItems: _get(dataSource, "totalItems", 0) }}
          onQueryChange={setMeta}
          configurationName={urls.SEARCH_CLIENT}
          routeProps={rest}
        />
      </ModalBody>
    </>
  );
};

export default SearchModal;
