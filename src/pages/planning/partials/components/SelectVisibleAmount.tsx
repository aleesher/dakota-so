import React from "react";
import Colors from "dakota-portal/dist/components/Colors";
import { createStyles, withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const BootstrapInput = withStyles(() =>
  createStyles({
    root: {
      margin: "0",
      marginLeft: 30,
      backgroundColor: "white"
    },
    input: {
      width: 40,
      borderRadius: 4,
      position: "relative",
      border: "2px solid " + Colors.pattensBlue,
      fontSize: 16,
      padding: "14px 15px",
      color: Colors.fiord,
      "&:focus": {
        borderRadius: 4,
        borderColor: Colors.mayaBlue
      }
    }
  })
)(InputBase);

interface IProps {
  values: number[];
  value: number;
  onChange: (value: number) => void;
}

const SelectVisibleAmount: React.FC<IProps> = ({ values, value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={e => onChange(+e.target.value)}
      input={<BootstrapInput />}
    >
      {values.map(value => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectVisibleAmount;
