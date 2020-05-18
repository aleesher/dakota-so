import React, { useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";
import { TMessageCenterSettings } from "../../provider/types";
import CustomColorPicker from "./components/CustomColorPicker";
import CustomCheckbox from "./components/CustomCheckbox";
import NumberInput from "./components/NumberInput";
import {
  FormRow,
  Label,
  SaveSettingsButton,
  SettingsContentWrapper
} from "./styles";

const LABEL_WIDTH = 269;

interface IProps {
  onSave: () => void;
}

const DeadlineSettings: React.FC<IProps> = ({ onSave }) => {
  const { uiPreferences } = useSettingsState();
  const { savePreferences } = useSettingsDispatch();
  const [settings, setSettings] = useState<TMessageCenterSettings>(
    _cloneDeep(uiPreferences.messageCenter)
  );

  function handleChange(prop: string, value: any) {
    settings[prop] = value;
    setSettings({ ...settings });
  }

  function handleSave() {
    savePreferences("messageCenter", settings);
    onSave();
  }

  return (
    <>
      <SettingsContentWrapper>
        <FormRow>
          <CustomCheckbox
            label="Deadline Signalering actief"
            onClick={() =>
              handleChange("deadlineWarning", !settings.deadlineWarning)
            }
            checked={settings.deadlineWarning}
          />
        </FormRow>
        <FormRow>
          <Label width={LABEL_WIDTH}>Melding weergeven</Label>
          <div>
            <NumberInput
              value={settings.notificationLimit}
              onChange={newValue => handleChange("notificationLimit", newValue)}
              min={1}
              max={24}
              unit="uur"
              disabled={!settings.deadlineWarning}
            />
          </div>
        </FormRow>
        <FormRow>
          <CustomCheckbox
            label="Toon melding"
            onClick={() =>
              handleChange("showNotifications", !settings.showNotifications)
            }
            checked={settings.showNotifications}
            disabled={!settings.deadlineWarning}
          />
        </FormRow>
        <FormRow>
          <Label width={LABEL_WIDTH}>Melding Opnieuw weergeven na</Label>
          <div>
            <NumberInput
              value={settings.notificationUpdateInterval}
              onChange={newValue =>
                handleChange("notificationUpdateInterval", newValue)
              }
              min={1}
              max={60}
              unit="min"
              disabled={!settings.deadlineWarning}
            />
          </div>
        </FormRow>
        <FormRow>
          <Label width={LABEL_WIDTH}>Waarschuwings kleur</Label>
          <CustomColorPicker
            color={settings.warningColor}
            onSelect={color => handleChange("warningColor", color)}
            disabled={!settings.deadlineWarning}
          />
        </FormRow>
        <FormRow>
          <Label width={LABEL_WIDTH}>Verstreken deadline kleur</Label>
          <CustomColorPicker
            color={settings.deadlineExpiredColor}
            onSelect={color => handleChange("deadlineExpiredColor", color)}
            disabled={!settings.deadlineWarning}
          />
        </FormRow>
      </SettingsContentWrapper>

      <SaveSettingsButton onClick={handleSave}>Opslaan</SaveSettingsButton>
    </>
  );
};

export default DeadlineSettings;
