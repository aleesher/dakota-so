import React from "react";
import moment from "moment";

import _get from "lodash/get";

import IMeta from "dakota-portal/dist/components/SortableTable/IMeta";

import { SubcomplexMenu } from "./../../components";

import Appointment, { IAppointment as IFullAppointment } from "./Appointment";
import AppointmentAdder from "./AppointmentAdder";
import { Container, Table, Th, Td, StatusesDescription } from "./styles";
import { getMonths } from "./helpers";

export type IAppointment = Omit<IFullAppointment, "onChangeOrderDate">;

interface ISubcomplex {
  id: string;
  code: string;
  data: IAppointment[];
}

interface IProps {
  meta: IMeta;
  subcomplexes: ISubcomplex[];
  onQueryChange: (meta: IMeta) => void;
}

const SubcomplexAppointments = ({
  meta,
  subcomplexes: sComplexes,
  onQueryChange
}: IProps) => {
  const [subComplexes, setSubComplexes] = React.useState<ISubcomplex[]>(
    sComplexes
  );

  const handleAddAppointment = (subComplexId, appointment) => {
    const updatedSubComplexes = subComplexes.map(sComplex =>
      sComplex.id !== subComplexId
        ? sComplex
        : {
            ...sComplex,
            data: [...sComplex.data, appointment]
          }
    );

    setSubComplexes(updatedSubComplexes);
  };

  const handleOrderDateChange = (
    subcomplexId,
    orderDate: Date,
    newOrderDate: Date
  ) => {
    const updatedSubComplexes = subComplexes.map(sComplex =>
      sComplex.id !== subcomplexId
        ? sComplex
        : {
            ...sComplex,
            data: sComplex.data.map(appointment =>
              appointment.orderDate !== orderDate
                ? appointment
                : { ...appointment, orderDate: newOrderDate }
            )
          }
    );

    setSubComplexes(updatedSubComplexes);
  };

  const months = getMonths();

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
            {months.map(month => (
              <Th>
                {month.format("MMM").slice(0, -1)}
                <SubcomplexMenu
                  title="Open menu"
                  actions={[{ label: "action", onClick: () => null }]}
                />
              </Th>
            ))}
          </thead>
          <tbody>
            {subComplexes.map(({ id, code, data }) => (
              <tr key={id}>
                <Td style={{ width: "16%" }}>
                  {code}
                  <SubcomplexMenu
                    title="Open menu"
                    actions={[{ label: "action", onClick: () => null }]}
                  />
                </Td>
                {months.map(month => {
                  const appointment = data.find(
                    ({ orderDate }) =>
                      moment(orderDate).format("MMM") === month.format("MMM")
                  );

                  return (
                    <Td
                      key={month.format("MMMM")}
                      data-date={month.format("DD-MM-YYYY")}
                    >
                      {!!appointment ? (
                        <Appointment
                          {...appointment}
                          onChangeOrderDate={newOrderDate =>
                            handleOrderDateChange(
                              id,
                              appointment.orderDate,
                              newOrderDate
                            )
                          }
                        />
                      ) : (
                        <AppointmentAdder
                          orderDate={month.toDate()}
                          onSubmit={appointment =>
                            handleAddAppointment(id, appointment)
                          }
                        />
                      )}
                    </Td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <StatusesDescription>
        IO = Inspectie &amp; Onderhoud, O = Onderhoud, N = Nulmeting, I =
        Inspectie, IV = Inspectie Valbeveiligin
      </StatusesDescription>
    </>
  );
};

export default SubcomplexAppointments;
