import React from "react";

import _uniqueId from "lodash/uniqueId";
import _get from "lodash/get";

import IMeta from "dakota-portal/dist/components/SortableTable/IMeta";
import { SortableTable } from "dakota-portal/dist/components";
import { getFixedRowStyle } from "dakota-portal/dist/components/SortableTable/helpers";

import { SubcomplexMenu } from "./../../components";

import {
  SortableTableWrapper,
  Container,
  Table,
  Th,
  Td,
  StatusesDescription,
  Content
} from "./styles";

interface ISubcomplex {
  id: string;
  code: string;
  number: number;
  address: string;
  postcode: string;
  place: string;
  name: string;
  phone: string;
  access: any;
}

interface IProps {
  meta: IMeta;
  subcomplexes: ISubcomplex[];
  onQueryChange: (meta: IMeta) => void;
}

const renderContent = key => (rowIndex, widths, rowData) => (
  <td key={_uniqueId(rowIndex)} style={getFixedRowStyle(rowIndex, widths)}>
    <Content>{_get(rowData, key, "")}</Content>
  </td>
);

const SubcomplexInfoTable = ({ meta, subcomplexes, onQueryChange }: IProps) => {
  return (
    <>
      <Container>
        <Table>
          <thead>
            <Th>
              Sub-complexen
              <SubcomplexMenu
                title="Open menu"
                actions={[{ label: "action", onClick: () => null }]}
              />
            </Th>
          </thead>
          <tbody>
            {subcomplexes.map(({ id, code }) => (
              <tr key={id}>
                <Td>
                  {code}
                  <SubcomplexMenu
                    title="Open menu"
                    actions={[{ label: "action", onClick: () => null }]}
                  />
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <SortableTableWrapper>
          <SortableTable
            hidePagination
            meta={meta}
            onQueryChange={onQueryChange}
            isNotConfigurable
            columns={[
              {
                title: "Code",
                key: "code",
                fixedWidth: 84,
                visible: true,
                render: renderContent("code")
              },
              {
                title: "Nummer",
                key: "number",
                visible: true,
                render: renderContent("number")
              },
              {
                title: "Adres",
                key: "address",
                visible: true,
                render: renderContent("address")
              },
              {
                title: "Postcode",
                key: "postcode",
                visible: true,
                render: renderContent("postcode")
              },
              {
                title: "Plaats",
                key: "place",
                visible: true,
                render: renderContent("place")
              },
              {
                title: "Naam",
                key: "name",
                visible: true,
                render: renderContent("name")
              },
              {
                title: "Tel. nr.",
                key: "phone",
                visible: true,
                render: renderContent("phone")
              },
              {
                title: "Toegang",
                key: "access",
                visible: true,
                render: renderContent("access")
              }
            ]}
            dataSource={subcomplexes}
          />
        </SortableTableWrapper>
      </Container>
      <StatusesDescription>
        IO = Inspectie &amp; Onderhoud, O = Onderhoud, N = Nulmeting, I =
        Inspectie, IV = Inspectie Valbeveiligin
      </StatusesDescription>
    </>
  );
};

export default SubcomplexInfoTable;
