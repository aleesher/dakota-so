export enum HOVER_TYPE {
  EMPLOYEE = "employee",
  EMPLOYEE_ORDER = "employee-order",
  UNASSIGNED_ORDER = "unassigned-order",
  STACK = "stack"
}

interface IHoverObject {
  type: "" | HOVER_TYPE;
  code: string;
  end?: number;
}

// moved this state to separate file to avoid unnecessary rerenders

export const HoverObject: IHoverObject = {
  type: "",
  code: "",
  end: 0
};
