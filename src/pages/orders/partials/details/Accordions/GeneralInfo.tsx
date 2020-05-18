import React from "react";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import { AccordionLink, SwitchComponent } from "dakota-portal/dist/components";

import { GeneralButton } from "../../../../../components";
import { AccordionPanelDetails, Right } from "../../styles";
import { ServiceSection } from "../General/ServiceSection";
import { AddressSection } from "../General/AddressSection";
import { CustomerInfoSection } from "../General/CustomerInfoSection";
import { ReportSection } from "../General/ReportSection";
import ProblemSection from "./../../../partials/details/General/ProblemSection";

import {
  CLIENT_INFORMATION_FIELDS,
  REPORTER_FIELDS
} from "../../../../serviceOrder/constants";
import { getFormFields } from "../../../../serviceOrder/helpers";
import { SOFormField, CardItemTypes } from "../../../../serviceOrder/models";

import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormSelect,
  FormText
} from "../styles";

interface IProps {
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
  formikBag: object;
  apolloClient: any;
  setIsLoading: (val: boolean) => void;
  currentUser: object;
  url: string;
  onUpdateSO: (data: object) => void;
  promotedFields?: string[];
  onOpenMomentHistory: () => void;
}

const GeneralInfo = ({
  refs,
  activeLinks,
  onClick,
  apolloClient,
  setIsLoading,
  currentUser,
  url,
  onUpdateSO,
  promotedFields,
  formikBag,
  onOpenMomentHistory
}: IProps) => {
  const values = _get(formikBag, "values");
  const handleChange = _get(formikBag, "handleChange");

  const onChange = (name: string) => async val => {
    if (!!val || val === false) {
      const keys = name.split(".");
      let mutationData = {};

      const value = _get(val, "target.value", val);

      if (keys.length > 1) {
        mutationData = {
          ...values,
          [keys[0]]: { ...values[keys[0]], [keys[1]]: value }
        };
      } else {
        mutationData = {
          ...values,
          [name]: value
        };
      }

      handleChange({ target: { name, value } });

      await onUpdateSO(mutationData);
    }
  };

  const getFields = (fields, isReporterFields = false) => {
    if (isReporterFields) {
      fields = [...fields[0], ...fields[1]];
    }

    const formFields = getFormFields(fields, _get(values, "orderType"));
    if (!_isEmpty(formFields)) {
      const length = Math.ceil(fields.length / 2);
      const majorFields = fields.slice(0, length);
      const minorFields = fields.slice(length, fields.length);
      return {
        majorFields,
        minorFields
      };
    }

    return {
      majorFields: [],
      minorFields: []
    };
  };

  const renderInput = ({ title, name, disabled }) => (
    <FormWrapper>
      <FormLabel>{title}</FormLabel>
      <FormInput
        value={_get(values, name)}
        disabled={disabled}
        onBlur={e => onChange(name)(e.target.value)}
      />
    </FormWrapper>
  );

  const renderSelect = ({ title, name, disabled, options }) => (
    <FormWrapper>
      <FormLabel>{title}</FormLabel>
      <FormSelect
        classNamePrefix="type-select"
        options={options}
        value={options.find(
          option => _get(option, "value") === _get(values, name)
        )}
        onChange={onChange(name)}
        isDisabled={disabled}
      />
    </FormWrapper>
  );

  const renderSwitch = ({ title, name }) => {
    return (
      <FormWrapper>
        <FormLabel>{title}</FormLabel>
        <FormText>UIT</FormText>
        <SwitchComponent
          checked={!!_get(values, name)}
          onChange={() => onChange(name)(!_get(values, name)) as any}
        />
        <FormText color="primary">AAN</FormText>
      </FormWrapper>
    );
  };

  const renderField = ({ title, type, name, disabled, options }: SOFormField) =>
    type === CardItemTypes.select
      ? renderSelect({ title, name, disabled, options })
      : type === CardItemTypes.switch
      ? renderSwitch({ title, name })
      : renderInput({ title, name, disabled });
  return (
    <AccordionLink
      count={3}
      label="Algemene informatie"
      link="generalInfo"
      ref={refs.generalInfo}
      isActive={activeLinks.includes("generalInfo")}
      onClick={() => onClick("generalInfo")}
      promotedFields={promotedFields.map(f => ({
        label: f,
        value: _get(values, f, "")
      }))}
    >
      <AccordionPanelDetails>
        <ServiceSection
          formikBag={formikBag}
          user={currentUser}
          onUpdateSO={onUpdateSO}
          onOpenMomentHistory={onOpenMomentHistory}
        />
      </AccordionPanelDetails>
      <AccordionPanelDetails>
        <AddressSection
          formikBag={formikBag}
          apolloClient={apolloClient}
          setIsLoading={setIsLoading}
          onUpdateSO={onUpdateSO}
        />
      </AccordionPanelDetails>
      <AccordionPanelDetails>
        <CustomerInfoSection
          url={url}
          formikBag={formikBag}
          renderField={renderField}
          fields={getFields(CLIENT_INFORMATION_FIELDS)}
        />
      </AccordionPanelDetails>
      <AccordionPanelDetails>
        <ReportSection
          renderField={renderField}
          fields={getFields(REPORTER_FIELDS, true)}
        />
      </AccordionPanelDetails>
      <AccordionPanelDetails>
        <ProblemSection formikBag={formikBag} user={currentUser} />
      </AccordionPanelDetails>
      <AccordionPanelDetails>
        <Right>
          <GeneralButton title={"Wijzigingen opslaan"} url={"go"} />
        </Right>
      </AccordionPanelDetails>
    </AccordionLink>
  );
};

export default GeneralInfo;
