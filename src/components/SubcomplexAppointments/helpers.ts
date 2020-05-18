import moment from "moment";

export const getMonths = () =>
  Array(12)
    .fill("")
    .map((_, i) =>
      moment(new Date())
        .startOf("year")
        .add(i, "month")
    );
