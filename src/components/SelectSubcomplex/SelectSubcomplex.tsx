import React from "react";

import { SortableTable, ActionMenu } from "dakota-portal/dist/components";

import { SearchInput, SubcomplexMenu, NumberPerPage } from "./../../components";
import ExpandableTable from "./../../components/ExpandableTable";
import {
  ExpandedDataWrapper,
  ExpandedContentWrapper,
  FormsWrapper,
  SearchWrapper,
  PerPageSelectWrapper,
  Container
} from "./styles";
import { SUBCOMPLEX_COLUMNS, ROOF_COLUMNS } from "./constants";
import { DATA_SOURCE } from "./mock";

interface IState {
  dataSource: any[];
  expanded: { [key: string]: boolean };
}

class SelectSubcomplex extends React.PureComponent<{}, IState> {
  state = {
    dataSource: DATA_SOURCE,
    expanded: {}
  };

  handleChange = (rowIndex, key, value) => {
    const { dataSource } = this.state;

    if (key === "selecthead") {
      const updatedData = dataSource.map(d => ({
        ...d,
        select: value ? "checked" : "unchecked",
        roofs: d.roofs.map(r => ({ ...r, select: value }))
      }));
      this.setState({
        dataSource: updatedData,
        expanded: {}
      });

      return;
    }

    if (key === "select") {
      this.setState(({ expanded }) => ({
        expanded: {
          ...expanded,
          [rowIndex]: value === "notfullychecked" ? true : false
        }
      }));
    }

    const updatedData = dataSource.map((d, i) =>
      i === rowIndex ? { ...d, [key]: value } : d
    );

    this.setState({ dataSource: updatedData });
  };

  handleRoofsChange = subComplexCode => (rowIndex, key, value) => {
    const updatedData = this.state.dataSource.map(d =>
      d.code === subComplexCode
        ? {
            ...d,
            roofs: d.roofs.map((roof, i) =>
              i === rowIndex ? { ...roof, [key]: value } : roof
            )
          }
        : d
    );

    this.setState({ dataSource: updatedData });
  };

  render() {
    const { expanded, dataSource } = this.state;

    return (
      <Container>
        <FormsWrapper>
          <SearchInput value="" onChange={() => null} bgColor="transparent" />
          <PerPageSelectWrapper>
            <NumberPerPage
              label="Toon aantal rijen"
              value={{ label: "20", value: 10 }}
              options={[
                { label: "10", value: 10 },
                { label: "15", value: 15 },
                { label: "20", value: 20 }
              ]}
              onChange={() => null}
            />
          </PerPageSelectWrapper>
          <ActionMenu
            verticalAlignMenu="bottom"
            items={[
              {
                title: "Some action",
                onClick: () => null
              }
            ]}
          />
        </FormsWrapper>
        <ExpandableTable
          expanded={expanded}
          columns={SUBCOMPLEX_COLUMNS(this.handleChange)}
          data={dataSource}
          renderExpandedData={({ original }) => {
            return (
              <ExpandedDataWrapper>
                <ExpandedContentWrapper>
                  <SearchWrapper>
                    <SearchInput
                      value=""
                      onChange={() => null}
                      bgColor="transparent"
                    />
                    <SubcomplexMenu
                      title="Open menu"
                      actions={[{ label: "action", onClick: () => null }]}
                      position={{
                        top: "20px",
                        right: "26px"
                      }}
                    />
                  </SearchWrapper>
                  <SortableTable
                    isNotConfigurable
                    columns={ROOF_COLUMNS(
                      this.handleRoofsChange(original.code)
                    )}
                    dataSource={original.roofs}
                  />
                </ExpandedContentWrapper>
              </ExpandedDataWrapper>
            );
          }}
        />
      </Container>
    );
  }
}

export default SelectSubcomplex;
