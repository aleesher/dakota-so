import React, { useState } from "react";
import { usePageState } from "../../provider/page";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";
import {
  FormRow,
  Label,
  SaveSettingsButton,
  SettingsContentWrapper,
  StyledSelect
} from "./styles";

interface IProps {
  onSave: () => void;
}

const WorkOrderSettings: React.FC<IProps> = ({ onSave }) => {
  const { fieldOptions } = usePageState();
  const { uiPreferences } = useSettingsState();
  const { savePreferences } = useSettingsDispatch();
  const [orderFields, setOrderFields] = useState([
    ...uiPreferences.orderFields
  ]);

  function handleChange(index: number, value: string) {
    orderFields[index] = value;
    setOrderFields([...orderFields]);
  }

  function handleSave() {
    savePreferences("orderFields", orderFields);
    onSave();
  }

  return (
    <>
      <SettingsContentWrapper>
        {orderFields.map((field, i) => (
          <FormRow key={field + i}>
            <Label>Tekst Regel {i + 1}</Label>
            <div>
              <StyledSelect
                value={fieldOptions.find(f => f.value === field)}
                options={fieldOptions}
                onChange={option => handleChange(i, option.value)}
              />
            </div>
          </FormRow>
        ))}
      </SettingsContentWrapper>

      <SaveSettingsButton onClick={handleSave}>Opslaan</SaveSettingsButton>
    </>
  );
};

export default WorkOrderSettings;
