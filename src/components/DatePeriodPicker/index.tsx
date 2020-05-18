import React, { useRef } from "react";
import moment, { Moment } from "moment";
import MomentUtils from "@date-io/moment";

import { createMuiTheme } from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";

import { defaultColor } from "dakota-portal/dist/components/muiColors";

import CalendarIcon from "./CalendarIcon";
import { DatePeriodPickerWrapper, Dash } from "./styles";

const DATE_FORMAT = "D MMMM YYYY";

const theme = createMuiTheme({
  palette: {
    primary: defaultColor
  },
  typography: {
    useNextVariants: true,
  },
});

interface IProps {
  startDate: Moment;
  endDate: Moment;
  onChangeStartDate: (date: Moment) => void;
  onChangeEndDate: (date: Moment) => void;
}

const DatePeriodPicker = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate
}: IProps) => {
  const startRef = useRef(null);
  const endRef = useRef(null);

  const handleChangeStart = (date: Moment) => {
    onChangeStartDate(moment(date).startOf("day"));
  };

  const handleChangeEnd = (date: Moment) => {
    onChangeEndDate(moment(date).startOf("day"));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <DatePeriodPickerWrapper>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div onClick={() => startRef.current.open()}>
            {startDate.format(DATE_FORMAT)}
          </div>
          <DatePicker
            ref={startRef}
            style={{ display: "none" }}
            value={startDate}
            onChange={handleChangeStart}
            maxDate={endDate}
          />
          <Dash>-</Dash>
          <div onClick={() => endRef.current.open()}>
            {endDate.format(DATE_FORMAT)}
          </div>
          <DatePicker
            ref={endRef}
            style={{ display: "none" }}
            value={endDate}
            onChange={handleChangeEnd}
            minDate={startDate}
          />
        </MuiPickersUtilsProvider>

        <CalendarIcon color="#6F7680" />
      </DatePeriodPickerWrapper>
    </MuiThemeProvider>
  );
};

export default DatePeriodPicker;
