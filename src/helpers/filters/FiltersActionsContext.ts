import { TFilter, TFilterGroup } from "./types";
import { createContext } from "react";

interface IFiltersActionsContext {
  groups: TFilterGroup[];
  setGroups: (groups: TFilterGroup[]) => void;
  selectedFilter: TFilter;
  selectedGroupId: string;
  actions: any; // todo: add type
  isNew: boolean;
}

const FiltersActionsContext = createContext<IFiltersActionsContext>(
  {} as IFiltersActionsContext
);

export default FiltersActionsContext;
