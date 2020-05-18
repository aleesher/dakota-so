import React from "react";

import _get from "lodash/get";

import { urls } from "../../../../helpers";
import { CONTRACTS_STATUSES_BY_TITLES } from "../../constants";

import * as Styled from "../../styles";
import ContractsChart from "./contractsChart";
import AppointmentsChart from "./appointmentsChart";

const BottomArea = ({ history, url }) => {
  const formatDate = (date, day) => {
    return `${date.substring(0, 8)}${day}`;
  };

  const handleClickBarItem = (elems: any[], dates) => {
    const [barItem] = elems;
    const idx = _get(barItem, "_index");
    const status =
      CONTRACTS_STATUSES_BY_TITLES[_get(barItem, "_model.datasetLabel")];
    const date = dates[idx].format("YYYY-MM-DD");
    history.push({
      pathname: urls.SC_LIST,
      state: {
        filters: {
          status,
          AND: [
            { orderDate_gte: formatDate(date, "01") },
            { orderDate_lte: formatDate(date, "31") }
          ]
        }
      }
    });
  };

  return (
    <Styled.ContractenStats>
      <ContractsChart onClickBarItem={handleClickBarItem} />
      <AppointmentsChart />
    </Styled.ContractenStats>
  );
};

export default BottomArea;
