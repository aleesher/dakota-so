import React from "react";

import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";

import { Select } from "dakota-portal/dist/components";

import { IAppointment } from "../SubcomplexAppointments";
import { OrderType } from "../Appointment";
import {
  Container,
  SelectWrapper,
  Input,
  IntervalLabel,
  CancelButton,
  SubmitButton
} from "./styles";

interface IProps {
  orderDate: Date;
  onSubmit: (appointment: IAppointment) => void;
}

const DEFAULT_APPOINTMENT_INTERVAL = 2;

const AppointmentAdder = ({ orderDate, onSubmit }: IProps) => {
  const [startedCreating, setStartedCreating] = React.useState(false);
  const [orderType, setOrderType] = React.useState<{
    label: string;
    value: OrderType;
  }>();
  const [interval, setInterval] = React.useState<number>(
    DEFAULT_APPOINTMENT_INTERVAL
  );

  const handleCancel = () => {
    setInterval(0);
    setOrderType(undefined);
    setStartedCreating(false);
  };

  const handleSubmit = () => {
    onSubmit({
      interval,
      orderDate,
      orderType: orderType.value,
      status: "No_Appointment"
    });
  };

  const handleIntervalChange = str => {
    const value = str.replace(/\./, "");

    const data = !isNaN(parseInt(value, 10)) || value === "" ? value : interval;

    setInterval(data);
  };

  return (
    <Container
      startedCreating={startedCreating}
      onDoubleClick={() => setStartedCreating(true)}
    >
      <SelectWrapper>
        <Select
          options={[
            { label: "IO", value: "InspectionAndMaintenance" },
            { label: "O", value: "Maintenance" },
            { label: "N", value: "ZeroMeasurement" },
            { label: "I", value: "Inspection" },
            { label: "IV", value: "FallProtectionInspection" }
          ]}
          value={orderType}
          onChange={setOrderType}
        />
      </SelectWrapper>
      <IntervalLabel>
        interval:
        <Input
          value={interval}
          onChange={(e: any) => handleIntervalChange(e.target.value)}
        />
      </IntervalLabel>
      {!!orderType && (
        <SubmitButton onClick={handleSubmit}>
          <Done fontSize="inherit" />
        </SubmitButton>
      )}
      <CancelButton onClick={handleCancel}>
        <Close fontSize="inherit" />
      </CancelButton>
    </Container>
  );
};

export default AppointmentAdder;
