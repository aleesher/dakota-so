import { useApolloClient } from "@apollo/react-hooks";
import { useMemo } from "react";
import _get from "lodash/get";
import { GET_WORK_ORDER_FIELDS } from "../../queries";
import { TWorkOrderFieldType } from "../../types";

interface IWorkOrderField {
  key: string;
  type: TWorkOrderFieldType;
}

function extractFields(response: any): IWorkOrderField[] {
  const data = _get(response, "data.__type.fields", []);

  const filtered = data.filter(d => {
    // remove relation fields
    if (d.type.kind === "OBJECT") {
      return false;
    }

    // remove boolean fields
    if (d.type.name === "Boolean") {
      return false;
    }

    // remove system fields
    if (["id", "isBlocked", "createdAt", "updatedAt"].includes(d.name)) {
      return false;
    }

    return true;
  });

  const fields = filtered.map(d => {
    let type = d.type.name || d.type.ofType.name;

    // todo: temp trick
    if (["startDate", "endDate"].includes(d.name)) {
      type = "Date";
    } else if (["startTime", "endTime"].includes(d.name)) {
      type = "Time";
    }

    return {
      key: d.name,
      type
    };
  });

  return fields;
}

interface IInfoService {
  fetchFields: () => Promise<IWorkOrderField[]>;
}

const useInfoService = (): IInfoService => {
  const client = useApolloClient();

  return useMemo<IInfoService>(() => {
    const fetchFields = () => {
      return client
        .query({
          query: GET_WORK_ORDER_FIELDS
        })
        .then(extractFields);
    };

    return {
      fetchFields
    };
  }, []);
};

export default useInfoService;
