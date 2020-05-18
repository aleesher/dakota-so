import React from "react";

import { Checkbox } from "dakota-portal/dist/components";

import { Container, Button, Dots } from "./styles";

export type TransformedCheckedType =
  | "checked"
  | "unchecked"
  | "notfullychecked";

interface IProps {
  checked: TransformedCheckedType;
  onChange: (value: TransformedCheckedType) => void;
}

const TransformedCheckbox = ({ checked, onChange }: IProps) => {
  if (checked === "notfullychecked") {
    return (
      <Container onClick={() => onChange("unchecked")}>
        <Button>
          <Dots>..</Dots>
        </Button>
      </Container>
    );
  }

  return (
    <Checkbox
      checked={checked === "checked"}
      onClick={() =>
        onChange(checked === "unchecked" ? "checked" : "notfullychecked")
      }
    />
  );
};

export default TransformedCheckbox;
