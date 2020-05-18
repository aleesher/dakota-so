import React, { useContext, useState } from "react";
import { Query } from "@apollo/react-components";
import { History } from "history";

import _get from "lodash/get";
import _map from "lodash/fp/map";
import _filter from "lodash/fp/filter";
import _sortBy from "lodash/fp/sortBy";
import _compose from "lodash/fp/compose";

import FormControl from "@material-ui/core/FormControl";

import { Loader, SideFilter } from "dakota-portal/dist/components";
import ColorFilter, {
  FILTER_COLORS
} from "dakota-portal/dist/components/CustomFilter/Filters/ColorFilter";
import StringFilter from "dakota-portal/dist/components/CustomFilter/Filters/StringFilter";
import SelectFilter from "dakota-portal/dist/components/CustomFilter/Filters/SelectFilter";
import FieldsFilter, {
  FilterField,
  ICustomFilter
} from "dakota-portal/dist/components/CustomFilter/FieldsFilter";
import { SideFilterContext } from "dakota-portal/dist/components/SideFilter/SideFilterPage";
import { FETCH_INFO } from "dakota-portal/dist/components/withFilters/queries";

import FiltersActionsContext from "../../../helpers/filters/FiltersActionsContext";
import i18n from "../../../helpers/i18";
import { InputLabel } from "./../styles";

export interface IProps {
  history?: History;
  entityName?: string;
}

export const SideFilterDetails: React.FC<IProps> = ({
  history,
  entityName = "ServiceOrder"
}) => {
  const { setFilterExpanded } = useContext(SideFilterContext);
  const {
    actions,
    selectedFilter,
    selectedGroupId,
    isNew,
    groups
  } = useContext(FiltersActionsContext);
  const [groupId, setGroupId] = useState(selectedGroupId || "");
  const [name, setName] = React.useState<string>(selectedFilter.name);
  const [color, setColor] = React.useState<string>(selectedFilter.color);
  const [fields, setFields] = React.useState<ICustomFilter[]>(
    selectedFilter.fields
  );

  React.useEffect(() => {
    setName(selectedFilter.name);
    setColor(selectedFilter.color);
    setFields(selectedFilter.fields);
  }, [selectedFilter]);
  React.useEffect(() => setGroupId(selectedGroupId), [selectedGroupId]);
  // hide filter on first render
  React.useEffect(() => {
    setFilterExpanded(false);
    if (!selectedFilter.color) {
      setColor(FILTER_COLORS[1].value);
    }
  }, []);

  const getFilterableFields = entityFields => {
    return _compose(
      _sortBy("title"),
      _map(
        (field: any) =>
          ({
            title: i18n.t(`${entityName}.field.${field.name}`),
            key: field.name,
            type: _get(field, "type.ofType.name") || _get(field, "type.name")
          } as FilterField)
      ),
      _filter(
        (field: any) =>
          !!field.name &&
          _get(field, "type.ofType.name") !== "ID" &&
          (_get(field, "type.ofType.kind") === "SCALAR" ||
            _get(field, "type.kind") === "SCALAR") &&
          !field.name.startsWith("_")
      )
    )(entityFields);
  };

  const handleSubmit = async () => {
    if (isNew) {
      if (groupId) {
        await actions.filter.saveNew(groupId, {
          ...selectedFilter,
          name: name.trim(),
          color,
          fields
        });
        setFilterExpanded(false);
      }
    } else {
      await actions.filter.save({
        ...selectedFilter,
        name: name.trim(),
        color,
        fields
      });
    }
  };

  const formatGroups = () =>
    (groups || []).map(group => ({
      value: _get(group, "id"),
      label: _get(group, "name")
    }));

  return (
    <SideFilter title="">
      <Query
        query={FETCH_INFO}
        variables={{
          entityName
        }}
        fetchPolicy="cache-and-network"
      >
        {({ data, loading, error = null }) => {
          if (error) {
            return <div>Error! ${error.message}</div>;
          }

          if (loading) {
            return <Loader />;
          }

          return (
            <>
              <div style={{ width: "100%" }}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel>Name</InputLabel>
                  <StringFilter
                    value={name}
                    onChange={setName}
                    onApply={() => null}
                  />
                </FormControl>
              </div>

              {isNew && !selectedGroupId && (
                <div style={{ marginBottom: 20, width: "100%" }}>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel>Group</InputLabel>
                    <SelectFilter
                      onChange={setGroupId}
                      values={formatGroups()}
                      value={groupId}
                      onApply={() => null}
                    />
                  </FormControl>
                </div>
              )}

              <div style={{ width: "100%" }}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel>Color</InputLabel>
                  <ColorFilter
                    value={color}
                    onChange={setColor}
                    onApply={() => null}
                  />
                </FormControl>
              </div>

              <FieldsFilter
                history={history}
                initialFilters={fields}
                preDefinedFilters={[]}
                onApplyFilters={filters => setFields(filters)}
                comparisonType={selectedFilter.comparisonType}
                fields={getFilterableFields(_get(data, "__type.fields", []))}
                handleSubmit={handleSubmit}
              />
            </>
          );
        }}
      </Query>
    </SideFilter>
  );
};
