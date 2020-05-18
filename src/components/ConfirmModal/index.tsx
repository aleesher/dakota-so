import React from "react";

import { Colors } from "dakota-portal/dist/components";

import {
  ButtonWrapper,
  FilledButton,
  TransparentButton
} from "../../pages/serviceOrder/styles";

import { ModalText, ModalClose, ModalWrapper } from "./styles";

interface IProps {
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

export default ({ text, onCancel, onConfirm, onClose }: IProps) => {
  return (
    <ModalWrapper>
      <ModalText>{text}</ModalText>
      <ModalClose onClick={onClose} />
      <ButtonWrapper justify="center">
        <TransparentButton onClick={onCancel}>annuleren</TransparentButton>
        <FilledButton onClick={onConfirm}>bevestigen</FilledButton>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
