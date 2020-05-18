import React, { useState } from "react";
import Select from "react-select";
import Colors from "dakota-portal/dist/components/Colors";
import { SelectOptionType } from "dakota-portal/dist/components/Select";
import { COST_CENTERS } from "../../../../mock";

const WIDTH = 360;

const COST_CENTER_OPTIONS = COST_CENTERS.map(c => ({ label: c, value: c }));

const customStyles = {
  control: styles => ({
    ...styles,
    marginRight: 40,
    height: 56,
    width: WIDTH,
    border: "2px solid " + Colors.lightGray,
    borderRadius: 3,
    backgroundColor: "white",
    outline: "none",
    boxShadow: "none",
    ":focus": {
      border: "2px solid " + Colors.fiord2
    },
    ":hover": {
      border: "2px solid " + Colors.fiord2
    }
  }),
  menu: styles => ({
    ...styles,
    width: WIDTH
  }),
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: Colors.royalBlue + "21"
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: Colors.royalBlue
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: Colors.royalBlue,
    ":hover": {
      backgroundColor: Colors.royalBlue,
      color: "white"
    }
  }),
  indicatorSeparator: () => ({})
};

interface IProps {
  onChange: (value: string[]) => void;
}

const SelectCostCenter: React.FC<IProps> = ({ onChange }) => {
  const [value, setValue] = useState<SelectOptionType[]>([]);

  const handleChange = (options: SelectOptionType[]) => {
    if (options.length < 5) {
      setValue(options);
      onChange(options.map(o => o.value));
    }
  };

  return (
    <Select
      placeholder="Amsterdam"
      value={value}
      closeMenuOnSelect={false}
      isMulti
      options={COST_CENTER_OPTIONS}
      onChange={handleChange}
      styles={customStyles}
    />
  );
};

export default SelectCostCenter;
