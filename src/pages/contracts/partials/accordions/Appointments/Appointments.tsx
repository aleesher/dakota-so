import React from "react";
import moment from "moment";

import _get from "lodash/get";
import _debounce from "lodash/debounce";

import IMeta from "dakota-portal/dist/components/SortableTable/IMeta";
import { ModalRoute, AccordionLink } from "dakota-portal/dist/components";

import {
  SubcomplexAppointments,
  SubcomplexInfoTable,
  DatePeriodPicker,
  Pagination,
  SearchInput,
  NumberPerPage
} from "../../../../../components";
import Switcher, { IOption } from "./../../../../../components/Switcher";

import {
  AccordionContainer,
  AccordionHeader,
  AppointmensButton,
  AppointmensFilter,
  AppointmensFilterLabel,
  AppointmensSelect
} from "../../../styles";
import { SUBCOMPLEXES } from "../../../constants";
import SubComplexInfo from "./SubComplexInfo";

interface IProps {
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
  match: any;
  history: any;
  isLocked: boolean;
}

const PER_PAGE_OPTIONS = [
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 }
];

const Appointments = ({
  isLocked,
  refs,
  activeLinks,
  onClick,
  match,
  history
}: IProps) => {
  const [active, setActive] = React.useState<IOption>({
    value: "planning",
    label: "Planning"
  });
  const [meta, setMeta] = React.useState<IMeta>({
    perPage: PER_PAGE_OPTIONS[0].value
  });

  const handleSearchChange = _debounce(search => {
    setMeta({
      ...meta,
      filter: meta.filter
        ? { ...meta.filter, value: search }
        : {
            id: "search",
            field: "code",
            value: search,
            comparisonOperator: "contains",
            ComparisonTypes: "AND"
          }
    });
  }, 200);

  const Table =
    active.value === "planning" ? SubcomplexAppointments : SubcomplexInfoTable;

  return (
    <>
      <AccordionLink
        ref={refs.appointments}
        label="Afspraken"
        link="appointments"
        isActive={activeLinks.includes("appointments")}
        onClick={() => onClick("appointments")}
      >
        <AccordionContainer>
          <AccordionHeader>
            <AppointmensButton
              onClick={() => history.push(`${match.url}/modify-subcomplex`)}
            >
              <span>Wijzig sub-complexen</span>
            </AppointmensButton>
            <AppointmensButton>
              <span>Toevoegen sub-complexen</span>
            </AppointmensButton>

            <NumberPerPage
              label="Toon aantal rijen"
              options={PER_PAGE_OPTIONS}
              value={PER_PAGE_OPTIONS.find(
                ({ value }) => value === meta.perPage
              )}
              onChange={({ value }) => setMeta({ ...meta, perPage: value })}
            />
            <AppointmensFilter>
              <AppointmensFilterLabel>Toon aantal rijen</AppointmensFilterLabel>
              <AppointmensSelect
                options={PER_PAGE_OPTIONS}
                value={PER_PAGE_OPTIONS.find(
                  ({ value }) => value === meta.perPage
                )}
                onChange={({ value }) => setMeta({ ...meta, perPage: value })}
              />
            </AppointmensFilter>
            <AppointmensFilter>
              <AppointmensFilterLabel>Periode</AppointmensFilterLabel>
              <DatePeriodPicker
                startDate={moment()}
                endDate={moment()}
                onChangeStartDate={() => null}
                onChangeEndDate={() => null}
              />
            </AppointmensFilter>
          </AccordionHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 18
            }}
          >
            <SearchInput
              value={_get(meta, "filter.value", "")}
              onChange={(e: any) => handleSearchChange(e.target.value)}
              bgColor="transparent"
            />
            <Switcher
              options={[
                { value: "planning", label: "Planning" },
                { value: "information", label: "Sub-complex informatie" }
              ]}
              active={active}
              onChange={setActive}
            />
          </div>
          <Table
            meta={meta}
            onQueryChange={setMeta}
            subcomplexes={SUBCOMPLEXES}
          />
          {!!meta.totalItems && (
            <Pagination
              totalItems={meta.totalItems || 0}
              activePage={meta.activePage || 1}
              perPage={meta.perPage}
              onChange={activePage => setMeta({ ...meta, activePage })}
            />
          )}
        </AccordionContainer>
      </AccordionLink>
      <ModalRoute
        path={`${match.url}/modify-subcomplex`}
        parentPath={match.url}
        component={SubComplexInfo}
        onBackdropClick={history.goBack}
      />
    </>
  );
};

export default Appointments;
