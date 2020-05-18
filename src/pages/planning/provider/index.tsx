import React from "react";
import { useImmer } from "use-immer";
import { IPlanningPageContext } from "./types";
import {
  DEFAULT_PLANNING_STATE,
  PlanningDispatchContext,
  PlanningStateContext
} from "./context";

const PlanningContextProvider = ({ children }) => {
  const [state, dispatch] = useImmer<IPlanningPageContext>({
    ...DEFAULT_PLANNING_STATE
  });

  return (
    <PlanningStateContext.Provider value={state}>
      <PlanningDispatchContext.Provider value={dispatch}>
        {children}
      </PlanningDispatchContext.Provider>
    </PlanningStateContext.Provider>
  );
};

export { PlanningContextProvider };
export { useSettingsState, useSettingsDispatch } from "./settings";
export { usePageState, usePageDispatch } from "./page";
export { useDataState, useDataDispatch } from "./data";
