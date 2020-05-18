import React from "react";

import * as Styled from "../../styles";

export interface IStatus {
  label: string;
  color: string;
}

interface IProps {
  filters: string[];
  statuses: IStatus[];
  setFilters: (filters: string[]) => void;
}

const Legends = ({ filters = [], statuses, setFilters }: IProps) => {
  const handleChange = filter => {
    const updatedFilters = filters.includes(filter)
      ? filters.filter(f => f !== filter)
      : [...filters, filter];

    setFilters(updatedFilters.length === statuses.length ? [] : updatedFilters);
  };

  return (
    <Styled.LegendsWrapper>
      {statuses.map(({ label, color }) => (
        <Styled.LegendWrapper
          key={label}
          isActive={filters.includes(label)}
          onClick={() => handleChange(label)}
        >
          <Styled.Legend color={color} /> {label}
        </Styled.LegendWrapper>
      ))}
    </Styled.LegendsWrapper>
  );
};

export default Legends;
