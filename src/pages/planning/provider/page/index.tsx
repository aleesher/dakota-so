import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import _sortBy from "lodash/sortBy";
import i18n from "../../../../helpers/i18";
import { LIST_WIDTH, SECTION, SORT } from "../../constants";
import { TWorkOrderFieldOption } from "../../types";
import { FRONTEND_FIELDS } from "../constants";
import { PlanningDispatchContext, PlanningStateContext } from "../context";
import { calculateCalendarWidth } from "../settings/helpers";
import { TSelectedOrder } from "../types";
import useInfoService from "./infoService";

interface ICurrentTime {
  hours: number;
  minutes: number;
}

function usePageState() {
  const state = useContext(PlanningStateContext);
  const [currentTime, setCurrentTime] = useState<ICurrentTime>({
    hours: moment().hours(),
    minutes: moment().minutes()
  });

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime({
        hours: moment().hours(),
        minutes: moment().minutes()
      });
    }, 1000 * 60); // update values every 1 min
    return () => clearInterval(id);
  }, []);

  return {
    currentTime,
    ...state.pageState
  };
}

function usePageDispatch() {
  const dispatch = useContext(PlanningDispatchContext);
  const infoService = useInfoService();

  function fetchFields() {
    infoService.fetchFields().then(fields => {
      let fieldOptions: TWorkOrderFieldOption[] = fields.map(f => ({
        label: i18n.t("WorkOrder.field." + f.key),
        value: f.key,
        type: f.type
      }));

      fieldOptions = fieldOptions.concat(FRONTEND_FIELDS);
      fieldOptions = _sortBy(fieldOptions, "label");

      const fieldLabels = fieldOptions.reduce(
        (acc, f) => ({ ...acc, [f.value]: f.label }),
        {}
      );
      const fieldTypes = fieldOptions.reduce(
        (acc, f) => ({ ...acc, [f.value]: f.type }),
        {}
      );

      dispatch(draft => {
        draft.pageState.fieldOptions = fieldOptions;
        draft.pageState.fieldLabels = fieldLabels;
        draft.pageState.fieldTypes = fieldTypes;
      });
    });
  }

  function setPageWidth(width: number) {
    dispatch(draft => {
      draft.pageState.pageWidth = width;
      draft.pageState.calendarWidth = width - LIST_WIDTH;
      calculateCalendarWidth(draft);
    });
  }

  function setActiveSection(section: SECTION) {
    dispatch(draft => {
      if (draft.pageState.searchText === "") {
        draft.pageState.activeSection = section;
      }
    });
  }

  function setSearchText(text: string) {
    dispatch(draft => {
      draft.pageState.searchText = text.trim().toLowerCase();
    });
  }

  function setEmployeeSort() {
    dispatch(draft => {
      draft.pageState.employeeSort =
        draft.pageState.employeeSort === SORT.ASC ? SORT.DESC : SORT.ASC;
      // draft.data.employees.reverse();
      draft.data.employees.reverse();
    });
  }

  function setOrderSort() {
    dispatch(draft => {
      draft.pageState.orderSort =
        draft.pageState.orderSort === SORT.ASC ? SORT.DESC : SORT.ASC;
      draft.data.orders.reverse();
    });
  }

  function setSelectedOrder(
    code: string,
    data: TSelectedOrder,
    withCtrlKey?: boolean
  ) {
    dispatch(draft => {
      if (withCtrlKey) {
        // if this order has already selected
        if (!!draft.pageState.selectedOrders[code]) {
          delete draft.pageState.selectedOrders[code];
        } else {
          draft.pageState.selectedOrders[code] = data;
        }
      } else {
        draft.pageState.selectedOrders = {
          [code]: data
        };
      }

      draft.pageState.totalSelected = Object.keys(
        draft.pageState.selectedOrders
      ).length;

      // reset selected stack
      draft.pageState.selectedStackId = "";

      // Object.keys(draft.pageState.selectedOrders).forEach(code => {
      //   console.log(code, {...draft.pageState.selectedOrders[code]});
      // })
    });
  }

  function cancelDragging() {
    dispatch(draft => {
      draft.pageState.isOrderDragging = false;
    });
  }

  function setSelectedStack(id: string) {
    dispatch(draft => {
      draft.pageState.selectedStackId = id;

      // reset selected orders
      draft.pageState.selectedOrders = {};
      draft.pageState.totalSelected = 0;
    });
  }

  function setIsOrderDragging(status: boolean) {
    dispatch(draft => {
      draft.pageState.isOrderDragging = status;
    });
  }

  return {
    fetchFields,
    setPageWidth,
    setActiveSection,
    setSearchText,
    setEmployeeSort,
    setOrderSort,
    setSelectedOrder,
    cancelDragging,
    setSelectedStack,
    setIsOrderDragging
  };
}

export { usePageState, usePageDispatch };
