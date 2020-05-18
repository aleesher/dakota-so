import React from "react";
import moment from "moment";

import SubcomplexMenu from "../../../components/SubcomplexMenu";

import { Container, Interval, Type } from "./styles";
import { SHORT_ORDER_TYPES } from "./constants";

export type StatusType =
  | "No_Appointment"
  | "Not_Planned"
  | "Scheduled"
  | "Done";

export type OrderType =
  | "InspectionAndMaintenance"
  | "Maintenance"
  | "ZeroMeasurement"
  | "Inspection"
  | "FallProtectionInspection";

export interface IAppointment {
  orderDate: Date;
  orderType: OrderType;
  status: StatusType;
  interval: number;
  onChangeOrderDate: (orderDate: Date) => void;
}

const Appointment = ({
  orderDate,
  orderType,
  status,
  interval,
  onChangeOrderDate
}: IAppointment) => {
  const containerRef = React.useRef(null);

  const handleMouseDown = e => {
    let element = e.target;

    while (!element.getAttribute("data-container")) {
      element = element.parentNode;
    }

    const startX = e.pageX;
    const positionY = e.pageY;

    element.style.zIndex = 100;

    const handleMouseMove = e => {
      const newX = e.pageX - startX;
      element.style.transform = `translate(${newX}px)`;
    };

    const handleMouseUp = e => {
      const newX = startX + (e.pageX - startX);
      const elementsUnderPosition = document.elementsFromPoint(newX, positionY);
      const newTd = [].find.call(
        elementsUnderPosition,
        el => el.tagName === "TD"
      );

      element.style.zIndex = 10;

      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);

      const tdDataDate = newTd.getAttribute("data-date");

      if (!!newTd.children[0].getAttribute("data-container") || !tdDataDate) {
        element.style.transform = "initial";
        return;
      }

      const tdDate = moment(tdDataDate, "DD-MM-YYYY").toDate();
      onChangeOrderDate(tdDate);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
  };

  return (
    <Container
      status={status}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      data-container="container"
    >
      <Type>{SHORT_ORDER_TYPES[orderType]}</Type>
      <Interval>{interval > 0 ? `interval ${interval}` : "eenmalig"}</Interval>
      <SubcomplexMenu
        position={{
          top: "10px",
          right: "10px"
        }}
        actions={[{ label: "action", onClick: () => null }]}
      />
    </Container>
  );
};

export default Appointment;
