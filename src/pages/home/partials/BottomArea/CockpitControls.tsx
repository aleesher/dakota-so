import React, { useState } from "react";
import moment, { Moment } from "moment";
import Link from "react-router-dom/Link";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialSelect from "@material-ui/core/Select";
import { SideFilterForm } from "dakota-portal/dist/components";
import { FilterIcon } from "dakota-portal/dist/components/SideFilter/partials";

import { COCKPIT_LIMITS } from "../../constants";

import { Aligned, PageHeader } from "../../../../styles/global";
import * as Styled from "../../styles";

interface IProps {
  children: (data: { limit: number; startDate: Date; endDate: Date }) => void;
  title: string;
  type: "customer" | "employee";
}

const CockpitControls: React.FC<IProps> = ({ children, title, type }) => {
  const [limit, setLimit] = useState<number>(COCKPIT_LIMITS[0]);
  const [startDate, setStartDate] = useState<Date>(
    moment()
      .subtract(6, "months")
      .startOf("month")
      .toDate()
  );
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleChangeLimit = e => setLimit(e.target.value);

  const handleChangeDate = (data: { start?: Moment; end?: Moment }) => {
    if (data.start) {
      setStartDate(data.start.toDate());
    }
    if (data.end) {
      setEndDate(data.end.toDate());
    }
  };

  return (
    <Styled.SoItem>
      <PageHeader>
        <Styled.Title>{title}</Styled.Title>
        <Aligned>
          <FormControl style={{ marginRight: 10 }}>
            <MaterialSelect onChange={handleChangeLimit} value={limit}>
              {COCKPIT_LIMITS.map(l => (
                <MenuItem key={l} value={l}>
                  {l}
                </MenuItem>
              ))}
            </MaterialSelect>
          </FormControl>

          <FilterIcon />
          <Styled.InputWrapper>
            <SideFilterForm.Row>
              <SideFilterForm.DatePeriod
                start={startDate}
                end={endDate}
                onChange={handleChangeDate}
              />
            </SideFilterForm.Row>
          </Styled.InputWrapper>
          <Link to={`/so/table/settings?type=${type}`}>
            <Styled.SettingsIcon />
          </Link>
        </Aligned>
      </PageHeader>
      <Styled.ClientServiceorder display="block">
        {children({ limit, startDate, endDate })}
      </Styled.ClientServiceorder>
    </Styled.SoItem>
  );
};

export default CockpitControls;
