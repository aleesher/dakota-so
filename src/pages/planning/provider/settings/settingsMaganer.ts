import { useMemo } from "react";
import moment from "moment";
import { useApolloClient } from "@apollo/react-hooks";
import _get from "lodash/get";
import _omit from "lodash/omit";
import { DEFAULT_SETTINGS } from "../constants";
import {
  FETCH_PLANNING_PAGE_SETTINGS,
  SAVE_PLANNING_PAGE_SETTINGS
} from "../../queries";
import { ISettingsState } from "../types";
import { buildTimeScale } from "./TimeScale";

function clearSettings(settings: ISettingsState) {
  // remove timescales
  return _omit(settings, ["employeeTimeScale", "orderTimeScale"]);
}

function parseSettings(response: any): ISettingsState {
  const pageSettings = _get(
    response,
    "data.currentUser.planningPageSettings",
    {}
  );

  const settings: ISettingsState = {
    ...DEFAULT_SETTINGS,
    ...pageSettings
  };

  const { timeUnit } = settings;

  // dates
  settings.startDate = moment(_get(settings, "startDate")).startOf(timeUnit);
  settings.endDate = moment(_get(settings, "endDate")).endOf(timeUnit);
  settings.employeeViewDate = moment(_get(settings, "employeeViewDate"));
  settings.orderViewDate = moment(_get(settings, "orderViewDate"));

  // timescales
  settings.employeeTimeScale = buildTimeScale(
    settings.employeeViewDate,
    timeUnit
  );
  settings.orderTimeScale = buildTimeScale(settings.orderViewDate, timeUnit);

  return settings;
}

interface ISettingsManager {
  load: () => Promise<ISettingsState>;
  save: (settings: ISettingsState) => Promise<any>;
}

const useSettingsManager = (): ISettingsManager => {
  const client = useApolloClient();

  return useMemo<ISettingsManager>(() => {
    const load = () => {
      return client
        .query({ query: FETCH_PLANNING_PAGE_SETTINGS })
        .then(parseSettings);
    };

    const save = (settings: ISettingsState) => {
      return client.mutate({
        mutation: SAVE_PLANNING_PAGE_SETTINGS,
        variables: {
          settings: clearSettings(settings)
        }
      });
    };

    return {
      load,
      save
    };
  }, []);
};

export default useSettingsManager;
