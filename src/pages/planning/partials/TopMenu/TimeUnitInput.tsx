import React from "react";
import Colors from "dakota-portal/dist/components/Colors";
import { createStyles, withStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TIME_UNITS } from "../../constants";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";
import { TimeUnitWrapper } from "./styles";

const BootstrapInput = withStyles(() =>
  createStyles({
    input: {
      width: 136,
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

const TimeUnitInput: React.FC = () => {
  const { timeUnit } = useSettingsState();
  const { setTimeUnit } = useSettingsDispatch();

  return (
    <TimeUnitWrapper>
      <span>Weergave</span>

      <FormControl>
        <Select
          id="demo-simple-select-outlined"
          value={timeUnit}
          onChange={e => setTimeUnit(e.target.value)}
          input={<BootstrapInput />}
        >
          {TIME_UNITS.map(u => (
            <MenuItem key={u.value} value={u.value}>
              {u.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </TimeUnitWrapper>
  );
};

export default TimeUnitInput;
