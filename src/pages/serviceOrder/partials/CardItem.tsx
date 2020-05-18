import React from "react";
import InputMask from "react-input-mask";
import _get from "lodash/get";
import _map from "lodash/map";
import _isString from "lodash/isString";
import Grid from "@material-ui/core/Grid";

import { SelectOptionType } from "dakota-portal/dist/components/SideFilterForm/Select";
import { SwitchComponent } from "dakota-portal/dist/components";

import ValidationError from "../../../components/ValidationError";
import { formatLimitedText, getDefaultServiceType } from "../helpers";
import CombinedInput from "./CombinedInput";
import { CardItemType, CardItemTypes } from "../models";

import * as Styled from "../../home/styles";
import { TimeIcon, DateInput, CalendarIcon } from "../styles";

interface IProps {
  title: string | string[];
  type: CardItemType;
  onChange: (value: any) => void;
  onBlur: any;
  value?: SelectOptionType | string | number | object;
  name: string | string[];
  options?: object[];
  disabled?: boolean;
  errors?: object;
  maxLength?: number;
  fullWidth?: boolean;
}

export default ({
  title,
  onChange,
  type,
  value: val,
  options = [],
  disabled,
  name,
  errors: validation,
  onBlur,
  maxLength,
  fullWidth = false
}: IProps) => {
  const value = formatLimitedText(val, maxLength);

  const handleOnSelectChange = selectedValue => {
    if (name === "orderType") {
      onChange({
        target: {
          name: "serviceType",
          value: getDefaultServiceType(selectedValue)
        }
      });
    }

    onChange({ target: { name, value: selectedValue } });
  };

  const renderItem = () => {
    switch (type) {
      case CardItemTypes.switch: {
        return (
          <SwitchComponent checked={!!value} onChange={onChange(name) as any} />
        );
      }
      case CardItemTypes.input: {
        return (
          <Styled.StyledInput
            value={value}
            onChange={onChange}
            className="styled-input"
            customType="root"
            disabled={disabled}
            name={name}
            onBlur={onBlur}
          />
        );
      }
      case CardItemTypes.textarea: {
        return (
          <Styled.StyledTextarea
            value={val}
            onChange={onChange}
            className="styled-input"
            customType="root"
            disabled={disabled}
            multiline
            name={name}
            onBlur={onBlur}
            fullWidth={fullWidth}
          />
        );
      }
      case CardItemTypes.date: {
        return (
          <DateInput
            onChange={onChange(name)}
            InputProps={{
              className: "so-datepicker",
              disableUnderline: true
            }}
            keyboardIcon={<CalendarIcon fontSize="small" />}
            format={"DD-MM-YYYY"}
          />
        );
      }
      case CardItemTypes.time: {
        return (
          <Styled.StyledInputWrapper>
            <InputMask
              mask="99:99"
              maskChar=""
              onChange={onChange}
              value={value}
              name={name}
              onBlur={onBlur}
            >
              {() => (
                <Styled.StyledInput
                  value={value}
                  onChange={onChange}
                  className="styled-input"
                  customType="root"
                  disabled={disabled}
                  name={name}
                  onBlur={onBlur}
                />
              )}
            </InputMask>
            <TimeIcon />
          </Styled.StyledInputWrapper>
        );
      }
      case CardItemTypes.phone: {
        return (
          <InputMask
            mask="+9999999999"
            maskChar=" "
            onChange={onChange}
            value={value}
            disabled={disabled}
            name={name}
            onBlur={onBlur}
          >
            {() => (
              <Styled.StyledInput
                value={value}
                onChange={onChange}
                className="styled-input"
                customType="root"
                disabled={disabled}
                name={name}
                onBlur={onBlur}
              />
            )}
          </InputMask>
        );
      }
      case CardItemTypes.hour: {
        return (
          <InputMask
            mask="99 \ur"
            maskChar=" "
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          >
            {() => (
              <Styled.StyledInput
                value={value}
                onChange={onChange}
                className="styled-input"
                customType="root"
                disabled={disabled}
                name={name}
                onBlur={onBlur}
              />
            )}
          </InputMask>
        );
      }
      case CardItemTypes.price: {
        return (
          <InputMask
            formatChars={{ "9": "[0-9]" }}
            onChange={onChange}
            value={value}
            disabled={disabled}
            name={name}
            onBlur={onBlur}
          >
            {() => (
              <Styled.StyledInput
                value={value}
                onChange={onChange}
                className="styled-input"
                customType="root"
                disabled={disabled}
                name={name}
                onBlur={onBlur}
              />
            )}
          </InputMask>
        );
      }
      default: {
        return (
          <Styled.StyledSelect
            options={options}
            value={options.find(option => _get(option, "value") === value)}
            classNamePrefix="type-select"
            onChange={({ value }) => handleOnSelectChange(value)}
            isDisabled={disabled}
            name={name}
            onBlur={onBlur}
            height={60}
          />
        );
      }
    }
  };

  const ratio = type === CardItemTypes.textarea ? 2 : 4;
  const ratio2 = type === CardItemTypes.textarea ? 10 : 8;
  const errors = _get(validation, "errors");
  const touched = _get(validation, "touched");

  return (
    <Styled.BaseRow
      container
      item
      direction="row"
      xs={12}
      alignItems="flex-start"
      justify="flex-start"
    >
      {type === CardItemTypes.combinedInput ? (
        <CombinedInput
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          title={title}
          name={name}
          value={value}
        />
      ) : (
        <>
          <Grid item xs={ratio}>
            <Styled.ItemTitle paddingTop={22}>{title}</Styled.ItemTitle>
          </Grid>
          <Grid item xs={ratio2}>
            {renderItem()}
            <ValidationError
              hasError={_get(errors, name) && _get(touched, name)}
              text={_get(errors, name)}
              field={title}
            />
          </Grid>
        </>
      )}
    </Styled.BaseRow>
  );
};
