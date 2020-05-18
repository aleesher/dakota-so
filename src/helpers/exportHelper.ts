import _get = require("lodash/get");
import _isEmpty = require("lodash/isEmpty");
import _fill = require("lodash/fill");
import _reduce = require("lodash/reduce");

const exportHelper = {
  onExportClick: (
    query,
    page,
    variables,
    columns,
    client,
    totalItems = 0
  ) => async (callback, params) => {
    const { fileName, type, pageName, filters, searchText } = params;

    let exportData = [];

    if (totalItems > 10000) {
      const toSkip = 5000;
      const chunkNumber = Math.ceil(totalItems / toSkip);
      const chunks = _fill(new Array(chunkNumber), 0, 0, chunkNumber);

      const queryData = await Promise.all(
        chunks.map((_, i) =>
          client.query({
            query,
            variables: { ...variables, perPage: toSkip, skip: toSkip * i }
          })
        )
      );

      exportData = _reduce(
        queryData,
        (acc, result) => [...acc, ..._get(result, `data.${page}`, [])],
        [] as any[]
      ) as any[];
    } else {
      const { data: allData } = await client.query({
        query,
        variables: { ...variables, perPage: totalItems, skip: 0 }
      });
      exportData = _get(allData, page, []);
    }

    type === "excel"
      ? callback(columns, exportData, fileName, filters, searchText)
      : callback(columns, exportData, fileName, filters, searchText, pageName);

    return;
  },
  separateFilters(filters, searchText) {
    return _isEmpty(searchText) ? filters : filters.AND[0];
  }
};

export default exportHelper;
