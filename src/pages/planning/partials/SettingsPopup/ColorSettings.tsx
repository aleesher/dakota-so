import React, { useState } from "react";
import _difference from "lodash/difference";
import _cloneDeep from "lodash/cloneDeep";
import { ORDER_STATUSES } from "../../../../constants";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";
import { TOrderColorSetting } from "../../provider/types";
import { TOrderStatus } from "../../types";
import CustomColorPicker from "./components/CustomColorPicker";
import {
  AddColorButton,
  CurrentColorWrapper,
  FormRow,
  SaveSettingsButton,
  SettingsContentWrapper,
  StyledSelect
} from "./styles";

const TEMP_STATUS = "temp";

interface IProps {
  onSave: () => void;
}

const ColorSettings: React.FC<IProps> = ({ onSave }) => {
  const { uiPreferences } = useSettingsState();
  const { savePreferences } = useSettingsDispatch();
  const [colors, setColors] = useState<TOrderColorSetting[]>(
    _cloneDeep(uiPreferences.colors)
  );

  function handleChangeStatus(status: TOrderStatus, newStatus: TOrderStatus) {
    const item = colors.find(c => c.status === status);
    item.status = newStatus;
    setColors([...colors]);
  }

  function handleChangeColor(status: TOrderStatus, color: string) {
    const item = colors.find(c => c.status === status);
    item.color = color;
    setColors([...colors]);
  }

  function handleSave() {
    savePreferences(
      "colors",
      colors.filter(c => !c.status.startsWith(TEMP_STATUS))
    );
    onSave();
  }

  function handleClickAddColor() {
    setColors([
      ...colors,
      {
        status: TEMP_STATUS + colors.length,
        color: "black"
      } as TOrderColorSetting
    ]);
  }

  function filterOptions(status: TOrderStatus) {
    // show only not used statuses
    const options = _difference(
      ORDER_STATUSES.map(status => status.key),
      colors.map(s => s.status)
    );
    options.sort();
    if (!status.startsWith(TEMP_STATUS)) {
      options.unshift(status);
    }
    return options.map(o => ({ label: o, value: o }));
  }

  return (
    <>
      <SettingsContentWrapper>
        <AddColorButton onClick={handleClickAddColor}>Toevoegen</AddColorButton>

        {colors.map(setting => (
          <FormRow key={setting.status}>
            <div>
              <StyledSelect
                value={
                  setting.status.startsWith(TEMP_STATUS)
                    ? null
                    : {
                        label: setting.status,
                        value: setting.status
                      }
                }
                options={filterOptions(setting.status)}
                onChange={option =>
                  handleChangeStatus(setting.status, option.value)
                }
              />
            </div>

            <CurrentColorWrapper>
              <CustomColorPicker
                color={setting.color}
                onSelect={color => handleChangeColor(setting.status, color)}
              />
            </CurrentColorWrapper>
          </FormRow>
        ))}
      </SettingsContentWrapper>

      <SaveSettingsButton onClick={handleSave}>Opslaan</SaveSettingsButton>
    </>
  );
};

export default ColorSettings;
