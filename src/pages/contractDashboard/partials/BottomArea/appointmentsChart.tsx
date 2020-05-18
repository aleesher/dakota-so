import React from "react";
import { Query } from "@apollo/react-components";
import moment from "moment";
import { Bar } from "react-chartjs-2";

import _get from "lodash/get";

import { Loader } from "dakota-portal/dist/components";

import Legends, { IStatus } from "./legends";
import * as Styled from "../../styles";
import { FETCH_APPOINTMENTS_STATUSES } from "./../../queries";
import {
  APPOINTMENTS_TYPES,
  APPOINTMENTS_STATUSES,
  APPOINTMENTS_COLORS,
  APPOINTMENTS_TITLES,
  APPOINTMENTS_STATUSES_BY_TITLES
} from "./../../constants";
import {
  fillStatuses,
  getDatesByMonths,
  collectDatasets
} from "./../../helpers";
import client from "../../../../../dev/apollo";

const AppointmentsChart = () => {
  const [appointmentsFilters, setAppointmentsFilters] = React.useState<
    string[]
  >([]);
  const [appointmentsStatuses, setAppointmentsStatuses] = React.useState<
    IStatus[]
  >([]);
  const [statusesAreSet, setStatuses] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [dataForCharts, setDataForCharts] = React.useState<any>({});

  const handleFillStatuses = (datasets = []) => {
    if (datasets.length && !appointmentsStatuses.length && !statusesAreSet) {
      fillStatuses(datasets, setAppointmentsStatuses);
      setStatuses(true);
    }
  };

  const getVariables = () => ({
    where: {
      AND: [
        { orderDate_lt: moment().format("YYYY-MM-DD") },
        {
          orderDate_gt: moment()
            .subtract(19, "months")
            .format("YYYY-MM-DD")
        },
        appointmentsFilters.length
          ? {
              OR: appointmentsFilters.map(label => ({
                status: APPOINTMENTS_STATUSES_BY_TITLES[label]
              }))
            }
          : {}
      ]
    }
  });

  const collectDataForCharts = data => {
    const serviceAppointments = _get(data, "serviceAppointments", []);
    const { datasets } = collectDatasets(
      serviceAppointments,
      APPOINTMENTS_TYPES,
      APPOINTMENTS_STATUSES,
      APPOINTMENTS_COLORS,
      APPOINTMENTS_TITLES
    );

    setDataForCharts({
      labels: getDatesByMonths(19).map(d => d.format("MMM").slice(0, -1)),
      datasets
    });

    handleFillStatuses(datasets);
  };

  React.useEffect(() => {
    client
      .query({
        query: FETCH_APPOINTMENTS_STATUSES,
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
      <Styled.Title>Voortgang per afspraak</Styled.Title>
      <Styled.Appointments>
        <Styled.ChartWrapper>
          <Bar
            data={dataForCharts}
            height={600}
            width={1100}
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
          setFilters={setAppointmentsFilters}
          filters={appointmentsFilters}
          statuses={appointmentsStatuses}
        />
      </Styled.Appointments>
    </>
  );
};

export default AppointmentsChart;
