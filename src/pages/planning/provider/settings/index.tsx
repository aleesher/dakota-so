import React, { useContext } from "react";
import moment, { Moment } from "moment";
import { original } from "immer";
import _compact from "lodash/compact";
import { PlanningDispatchContext, PlanningStateContext } from "../context";
import {
  calculateCalendarWidth,
  calculateStatusColors,
  onChangeDate,
  recalculateMessageCenterState,
  recalculateStartPositionAndWidthOfOrders,
  setTimeScale
} from "./helpers";
import useSettingsManager from "./settingsMaganer";

function useSettingsState() {
  const state = useContext(PlanningStateContext);

  return state.settings;
}

function useSettingsDispatch() {
  const dispatch = useContext(PlanningDispatchContext);
  const settingsManager = useSettingsManager();

  function saveSettings() {
    dispatch(draft => {
      settingsManager.save(original(draft.settings)).then();
    });
  }

  function setShowNonWorkingHours(showNonWorkingHours: boolean) {
    dispatch(draft => {
      draft.settings.showNonWorkingHours = showNonWorkingHours;
      if (draft.settings.timeUnit === "day") {
        draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
        draft.settings.orderTimeScale = setTimeScale(draft, "order");
      }
      recalculateStartPositionAndWidthOfOrders(draft);
    });
    saveSettings();
  }

  function setCollapseOrders(collapseOrders: boolean) {
    dispatch(draft => {
      draft.settings.collapseOrders = collapseOrders;
      draft.data.employees.forEach(e => {
        e.recalculateLineHeight(collapseOrders);
      });
    });
    saveSettings();
  }

  function setFixedAmountOfEmployees(amount: number) {
    dispatch(draft => {
      draft.settings.fixedAmountOfEmployees = amount;
    });
    saveSettings();
  }

  function setEmployeeCodes(codes: string[], resourceCodes: string[]) {
    dispatch(draft => {
      draft.settings.employeeCodes = codes;
      draft.settings.employeeResourceCodes = _compact(resourceCodes); // remove null, 0, ""
    });
    saveSettings();
  }

  function setEmployeeViewDate(date: Moment) {
    dispatch(draft => {
      draft.settings.employeeViewDate = moment(date).startOf(
        draft.settings.timeUnit
      );
      draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
    });
    saveSettings();
  }

  function setFixedAmountOfOrders(amount: number) {
    dispatch(draft => {
      draft.settings.fixedAmountOfOrders = amount;
    });
    saveSettings();
  }

  function setOrderViewDate(date: Moment) {
    dispatch(draft => {
      draft.settings.orderViewDate = moment(date).startOf(
        draft.settings.timeUnit
      );
      draft.settings.orderTimeScale = setTimeScale(draft, "order");
    });
    saveSettings();
  }

  function fetchSettings() {
    settingsManager.load().then(settings => {
      dispatch(draft => {
        draft.settings = settings;
        calculateCalendarWidth(draft); // width should be calculated before timescales
        draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
        draft.settings.orderTimeScale = setTimeScale(draft, "order");
        draft.pageState.statusColors = calculateStatusColors(draft);
      });
    });
  }

  function savePreferences(key: string, data: any) {
    dispatch(draft => {
      const prevMessageCenterStatus =
        draft.settings.uiPreferences.messageCenter.deadlineWarning;

      draft.settings.uiPreferences[key] = data;

      if (key === "colors") {
        draft.pageState.statusColors = calculateStatusColors(draft);
      }

      // if user disabled message center
      if (key === "messageCenter") {
        if (
          data.deadlineWarning === false &&
          prevMessageCenterStatus === true
        ) {
          recalculateMessageCenterState(draft, false);
        } else {
          recalculateMessageCenterState(draft, true);
        }
      }
    });
    saveSettings();
  }

  function showMessages() {
    dispatch(draft => {
      const isOpen = !draft.settings.messageCenter.isOpen;
      recalculateMessageCenterState(draft, isOpen);
    });
    saveSettings();
  }

  function pinMessages() {
    dispatch(draft => {
      draft.settings.messageCenter.isPinned = !draft.settings.messageCenter
        .isPinned;

      calculateCalendarWidth(draft);
      draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
      draft.settings.orderTimeScale = setTimeScale(draft, "order");
      recalculateStartPositionAndWidthOfOrders(draft);
    });
    saveSettings();
  }

  function setTimeUnit(unit) {
    // If the user chose the view (weergave) via the dropdown in the top right of the screen.
    // Then the view of the calender will show the current week, current month or current day.
    dispatch(draft => {
      draft.settings.timeUnit = unit;
      draft.settings.startDate = moment().startOf(unit);
      draft.settings.endDate = moment().endOf(unit);
      draft.settings.employeeViewDate = moment().startOf(unit);
      draft.settings.orderViewDate = moment().startOf(unit);
      draft.settings.employeeTimeScale = setTimeScale(draft, "employee");
      draft.settings.orderTimeScale = setTimeScale(draft, "order");
    });
    saveSettings();
  }

  function setStartDate(date: Moment) {
    dispatch(draft => {
      draft.settings.startDate = moment(date).startOf("day");

      if (date.isAfter(draft.settings.employeeViewDate)) {
        draft.settings.employeeViewDate = moment(date);
      }

      if (date.isAfter(draft.settings.orderViewDate)) {
        draft.settings.orderViewDate = moment(date);
      }

      onChangeDate(draft, date, draft.settings.endDate);
    });
    saveSettings();
  }

  function setEndDate(date: Moment) {
    dispatch(draft => {
      draft.settings.endDate = moment(date).endOf("day");

      if (date.isBefore(draft.settings.employeeViewDate)) {
        draft.settings.employeeViewDate = moment(date);
      }

      if (date.isBefore(draft.settings.orderViewDate)) {
        draft.settings.orderViewDate = moment(date);
      }

      onChangeDate(draft, draft.settings.startDate, date);
    });
    saveSettings();
  }

  return {
    fetchSettings,
    setFixedAmountOfEmployees,
    setFixedAmountOfOrders,
    setCollapseOrders,
    setEmployeeCodes,
    setEmployeeViewDate,
    setOrderViewDate,
    savePreferences,
    showMessages,
    pinMessages,
    setShowNonWorkingHours,
    setTimeUnit,
    setStartDate,
    setEndDate
  };
}

export { useSettingsState, useSettingsDispatch };
