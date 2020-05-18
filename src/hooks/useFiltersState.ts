import { useState } from "react";
import ApolloClient from "apollo-client";
import _get from "lodash/get";
import _set from "lodash/set";
import Colors from "dakota-portal/dist/components/Colors";
import { createFilter } from "dakota-portal/dist/components/CustomFilter/FieldsFilter";

import { TFilter, TFilterGroup } from "../helpers/filters/types";
import { DnD } from "../helpers/index";
import { urls } from "../helpers";
import gql from "graphql-tag";

function convertFiltersToWhere(filters) {
  const filtersWithValues = filters.filter(filter => !!filter.field);
  return filtersWithValues.map(({ field, comparisonOperator, value }) => {
    const result = {};
    const fieldName =
      comparisonOperator === "eq" ? field : `${field}_${comparisonOperator}`;

    _set(result, fieldName, value);
    return result;
  });
}

const FETCH_SERVICE_ORDER_FILTER_COUNT = gql`
  query filter($where: ServiceOrderWhereInput) {
    serviceOrders(where: $where) {
      id
    }
    serviceOrdersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

const FETCH_SERVICE_CONTRACT_FILTER_COUNT = gql`
  query filter($where: ServiceContractWhereInput) {
    serviceContracts(where: $where) {
      id
    }
    serviceContractsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const EMPTY_FILTER = {
  name: "",
  fields: [],
  color: ""
} as TFilter;

export const useFiltersState = (saveQuery, fetchQuery, entity) => (
  initialGroups: TFilterGroup[],
  client: ApolloClient<any>,
  alertContext
) => {
  const [groups, setGroups] = useState<TFilterGroup[]>(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<TFilter>(EMPTY_FILTER);
  const [isNew, setIsNew] = useState<boolean>(false);

  async function saveFilterGroups(filterGroups: TFilterGroup[]) {
    setGroups([...filterGroups]);
    await client.mutate({
      mutation: saveQuery,
      refetchQueries: [{ query: fetchQuery }],
      variables: {
        filterGroups
      }
    });
  }

  async function calcTotalAmount(filter: TFilter) {
    const filterParsing = convertFiltersToWhere(filter.fields);

    const response = await client.query({
      query:
        entity === "ServiceContract"
          ? FETCH_SERVICE_CONTRACT_FILTER_COUNT
          : FETCH_SERVICE_ORDER_FILTER_COUNT,
      variables: {
        where: {
          AND: filterParsing
        }
      }
    });

    return entity === "ServiceContract"
      ? response.data.serviceContractsConnection.aggregate.count
      : response.data.serviceOrdersConnection.aggregate.count;
  }

  function clearSlider() {
    setSelectedGroupId("");
    setSelectedFilter(EMPTY_FILTER);
  }

  const groupActions = {
    async move(source, destination) {
      const updatedGroups = DnD.reorder(
        groups,
        source.index,
        destination.index
      );
      await saveFilterGroups(updatedGroups);
    },
    async rename(id: string, newName: string) {
      const group = groups.find(g => g.id === id);
      group.name = newName;
      await saveFilterGroups(groups);
    },
    async create() {
      const newGroup = {
        id: Date.now().toString(),
        name: "Untitled",
        filters: []
      };
      await saveFilterGroups([...groups, newGroup]);
    },
    async delete(id: string) {
      await saveFilterGroups(groups.filter(g => g.id !== id));
      if (id === selectedGroupId) {
        clearSlider();
      }
    }
  };

  const filterActions = {
    async move(source, destination) {
      if (source.droppableId === destination.droppableId) {
        const group = groups.find(g => g.id === source.droppableId);
        group.filters = DnD.reorder(
          group.filters,
          source.index,
          destination.index
        );
      } else {
        const sourceGroup = groups.find(g => g.id === source.droppableId);
        const destinationGroup = groups.find(
          g => g.id === destination.droppableId
        );
        const result = DnD.move(
          sourceGroup.filters,
          destinationGroup.filters,
          source,
          destination
        );

        sourceGroup.filters = result[source.droppableId];
        destinationGroup.filters = result[destination.droppableId];
      }
      await saveFilterGroups(groups);
    },
    select(filterId: string, groupId: string) {
      setSelectedGroupId(groupId);
      const group = groups.find(g => g.id === groupId);
      const filter = group.filters.find(f => f.id === filterId);
      setSelectedFilter(filter);
    },
    async addNew() {
      setSelectedGroupId("");
      setSelectedFilter({
        id: Date.now().toString(),
        name: "New filter",
        comparisonType: "AND",
        amount: 0,
        color: Colors.mediumSeaGreen,
        fields: []
      });

      setIsNew(true);
    },

    async saveNew(groupId: string, filter: TFilter) {
      const group = groups.find(g => g.id === groupId);
      group.filters.push(filter);
      setSelectedGroupId(groupId);
      setSelectedFilter(filter);

      filter.amount = await calcTotalAmount(filter);

      setIsNew(false);
      await saveFilterGroups(groups);
    },
    clone(filterId: string, groupId: string) {
      const group = groups.find(g => g.id === groupId);
      const filter = group.filters.find(f => f.id === filterId);
      setSelectedGroupId(groupId);
      const newFilter = {
        ...filter,
        id: Date.now().toString(),
        name: "Clone " + filter.name
      };
      setSelectedFilter(newFilter);
      setIsNew(true);
    },
    async save(updatedFilter: TFilter) {
      const group = groups.find(g => g.id === selectedGroupId);
      const index = group.filters.indexOf(selectedFilter);
      updatedFilter.amount = await calcTotalAmount(updatedFilter);
      group.filters[index] = updatedFilter;
      setSelectedFilter(updatedFilter);
      await saveFilterGroups(groups);
    },
    async delete(filterId: string, groupId: string) {
      const group = groups.find(g => g.id === groupId);
      group.filters = group.filters.filter(f => f.id !== filterId);
      if (filterId === selectedFilter.id) {
        clearSlider();
      }
      await saveFilterGroups(groups);
    },
    redirect(selectedFilter: object, history: any, url: string) {
      const redirectUrl = url === urls.HOME ? urls.SO_LIST : urls.SC_LIST;
      const filters = _get(selectedFilter, "fields", []).map(field =>
        createFilter(field)
      );
      const filter = {
        comparisonType: _get(selectedFilter, "comparisonType"),
        filters
      };
      history.push(`${redirectUrl}?filter=${JSON.stringify(filter)}`);
    }
  };

  return {
    groups,
    setGroups,
    selectedFilter,
    selectedGroupId,
    isNew,
    actions: {
      group: groupActions,
      filter: filterActions
    }
  };
};
