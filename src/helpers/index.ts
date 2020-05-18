import moment from "moment";

import { SelectOptionType } from "dakota-portal/src/components/SideFilterForm/Select";

export { default as urls } from "./urls";
export { default as authHelpers, CUSTOMER_EVENT } from "./authHelpers";
export { default as DnD } from "./DnD";
export { default as notification } from "./notification";

export const formatDate = (date: string, defaultValue = "-") => {
  return date ? moment(date).format("DD-MM-YYYY") : defaultValue;
};

export const generateCode = () => {
  return (
    Math.random()
      .toString(36)
      .slice(2, 6)
      .toUpperCase() + (Math.random() * 10000000).toFixed()
  );
};

export const generateHouseLetters = (): SelectOptionType[] => {
  return [...Array(26)].map((_, i) => {
    const letter = String.fromCharCode(i + 97).toUpperCase();
    return {
      value: letter,
      label: letter
    };
  });
};
