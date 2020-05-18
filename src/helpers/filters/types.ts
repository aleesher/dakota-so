/* tslint:disable:interface-over-type-literal */
import { ICustomFilter } from "dakota-portal/src/components/CustomFilter/FieldsFilter";

export type TFilter = {
  id: string;
  name: string;
  color: string;
  amount: number;
  comparisonType: "AND" | "OR";
  fields: ICustomFilter[];
};

export type TFilterGroup = {
  id: string;
  name: string;
  filters: TFilter[];
};

export type TFilterActions = {
  group: {};
};
