import React from "react";
import moment from "moment";
import { Bar } from "react-chartjs-2";
import _get from "lodash/get";
import _omit from "lodash/omit";

import { Loader } from "dakota-portal/dist/components";

import Legends, { IStatus } from "./legends";
import * as Styled from "../../styles";
import { FETCH_CONTRACTS_STATUSES } from "./../../queries";
import {
  CONTRACTS_TYPES,
  CONTRACTS_STATUSES,
  CONTRACTS_COLORS,
  CONTRACTS_TITLES,
  CONTRACTS_STATUSES_BY_TITLES
} from "./../../constants";
import {
  fillStatuses,
  getDatesByMonths,
  collectDatasets
} from "./../../helpers";
import client from "../../../../../dev/apollo";

const ContractsChart = ({ onClickBarItem }) => {
  const [contractsFilters, setContractsFilters] = React.useState<string[]>([]);
  const [contractsStatuses, setContractsStatuses] = React.useState<IStatus[]>(
    []
  );
  const [statusesAreSet, setStatuses] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataForCharts, setDataForCharts] = React.useState<any>({});

  const handleFillStatuses = (datasets = []) => {
    if (datasets.length && !contractsStatuses.length && !statusesAreSet) {
      fillStatuses(datasets, setContractsStatuses);
      setStatuses(true);
    }
  };

  const getVariables = () => ({
    where: {
      NOT: { status: "Applied" },
      AND: [
        { orderDate_lt: moment().format("YYYY-MM-DD") },
        {
          orderDate_gt: moment()
            .subtract(19, "months")
            .format("YYYY-MM-DD")
        },
        contractsFilters.length
          ? {
              OR: contractsFilters.map(label => ({
                status: CONTRACTS_STATUSES_BY_TITLES[label]
              }))
            }
          : {}
      ]
    }
  });

  const collectDataForCharts = data => {
    const serviceContracts = _get(data, "serviceContracts", []);
    const { datasets, dates } = collectDatasets(
      serviceContracts,
      CONTRACTS_TYPES,
      CONTRACTS_STATUSES,
      CONTRACTS_COLORS,
      CONTRACTS_TITLES
    );

    setDataForCharts({
      labels: getDatesByMonths(19).map(d => d.format("MMM").slice(0, -1)),
      datasets,
      dates
    });

    handleFillStatuses(datasets);
  };

  React.useEffect(() => {
    client
      .query({
        query: FETCH_CONTRACTS_STATUSES,
        variables: getVariables()
      })
      .then(({ data }) => {
        setIsLoading(false);
        collectDataForCharts(data);
      })
      .catch(error => {
        setIsLoading(false);
        return <span>{JSON.stringify(error, null, 2)}</span>;
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Styled.Title>Voortgang per ServiceContracten</Styled.Title>
      <Styled.Appointments>
        <Styled.ChartWrapper>
          <Bar
            data={_omit(dataForCharts, ["dates"])}
            height={600}
            width={1100}
            getElementAtEvent={elems =>
              onClickBarItem(elems, _get(dataForCharts, "dates"))
            }
            options={{
              legend: {
                display: false
              },
              maintainAspectRatio: false,
              mode: "index",
              intersect: false,
              scales: {
                xAxes: [
                  {
                    stacked: true
                  }
                ],
                yAxes: [
                  {
                    stacked: true
                  }
                ]
              }
            }}
          />
        </Styled.ChartWrapper>
        <Legends
          setFilters={setContractsFilters}
          filters={contractsFilters}
          statuses={contractsStatuses}
        />
      </Styled.Appointments>
    </>
  );
};

export default ContractsChart;
