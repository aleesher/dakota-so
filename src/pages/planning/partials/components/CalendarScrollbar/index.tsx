import React, { useMemo } from "react";
import moment, { Moment } from "moment";
import {
  CALENDAR_DATE_WIDTH,
  LIST_WIDTH,
  MESSAGES_MENU_WIDTH,
  SCROLL_BUTTONS_WIDTH,
  SCROLL_WIDTH
} from "../../../constants";
import { usePageState, useSettingsState } from "../../../provider";
import NextIcon from "../../icons/NextIcon";
import PrevIcon from "../../icons/PrevIcon";
import CalendarViewDate from "./CalendarViewDate";
import {
  CalendarScroll,
  CalendarScrollbarWrapper,
  CurrentDay,
  CalendarScrollButtons
} from "./styles";

interface IProps {
  viewDate: Moment;
  onChange: (viewDate: Moment) => void;
}

const CalendarScrollbar: React.FC<IProps> = ({ viewDate, onChange }) => {
  const { startDate, endDate, timeUnit, messageCenter } = useSettingsState();
  const { pageWidth } = usePageState();

  const scrollWidth = useMemo(() => {
    let width =
      pageWidth - LIST_WIDTH - CALENDAR_DATE_WIDTH - SCROLL_BUTTONS_WIDTH;
    if (messageCenter.isPinned) {
      width -= MESSAGES_MENU_WIDTH;
    }
    return width < SCROLL_WIDTH ? width : SCROLL_WIDTH;
  }, [pageWidth, messageCenter.isPinned]);

  const total = endDate.diff(startDate, timeUnit) + 1;
  const position = viewDate.diff(startDate, timeUnit);

  const curWidth = scrollWidth / total;
  const curMargin = curWidth * position;

  const handleClickNext = () => {
    if (
      moment(viewDate).startOf(timeUnit) < moment(endDate).startOf(timeUnit)
    ) {
      const nextDate = moment(viewDate);
      nextDate.add(1, timeUnit);
      onChange(nextDate);
    }
  };

  const handleClickPrev = () => {
    if (
      moment(viewDate).startOf(timeUnit) > moment(startDate).startOf(timeUnit)
    ) {
      const prevDate = moment(viewDate);
      prevDate.subtract(1, timeUnit);
      onChange(prevDate);
    }
  };

  return (
    <CalendarScrollbarWrapper>
      <CalendarViewDate viewDate={viewDate} />
      <CalendarScroll width={scrollWidth}>
        <CurrentDay width={curWidth} marginLeft={curMargin} />
      </CalendarScroll>
      <CalendarScrollButtons>
        <div onClick={handleClickPrev}>
          <PrevIcon />
        </div>
        <div onClick={handleClickNext}>
          <NextIcon />
        </div>
      </CalendarScrollButtons>
    </CalendarScrollbarWrapper>
  );
};

export default CalendarScrollbar;
