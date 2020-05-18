import moment from "moment";

export const getDatesByMonths = count =>
  Array(count)
    .fill("")
    .map((_, i) => moment().subtract(count - i, "months"));

export const fillStatuses = (datasets, callback) => {
  const st = datasets.reduce(
    (acc, { data = [], label, backgroundColor: color }) =>
      data.some(d => !!d) ? [...acc, { label, color }] : acc,
    []
  );

  callback(st);
};

export const collectDatasets = (values, types, statuses, colors, titles) => {
  const defaultValues = Object.keys(types).reduce(
    (acc, type) => ({ ...acc, [type]: 0 }),
    {}
  );

  const data = values.reduce((acc, contract) => {
    const d = moment(contract.orderDate).format("MM-YYYY");
    const type = statuses[contract.status];

    if (!(d in acc)) {
      return {
        [d]: {
          ...defaultValues,
          [type]: 1
        },
        ...acc
      };
    }

    if (!(type in acc[d])) {
      return {
        ...acc,
        [d]: {
          ...defaultValues,
          ...acc[d],
          [type]: 1
        }
      };
    }

    return {
      ...acc,
      [d]: {
        ...defaultValues,
        ...acc[d],
        [type]: acc[d][type] + 1
      }
    };
  }, {});

  const dates = getDatesByMonths(19);

  const result = dates.reduce((acc, d) => {
    const formattedMonth = moment(d).format("MM-YYYY");
    const types = data[formattedMonth] || defaultValues;

    for (const type of Object.keys(types)) {
      const status = acc.find(t => t.label === titles[type]);

      if (!status) {
        acc.push({
          label: titles[type],
          backgroundColor: colors[type],
          data: [types[type]]
        });

        continue;
      }

      status.data.push(types[type]);
    }

    return [...acc];
  }, []);

  return { datasets: result, dates };
};
