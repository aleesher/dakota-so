import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "../../icons/CloseIcon";
import { ClosePopupButton, PopupTitle } from "./styles";

const StyledDialog = withStyles(() => ({
  root: {
    "& > div:first-child": {
      backgroundColor: "rgba(50, 65, 78, 0.76)"
    }
  },
  paper: {
    width: 1154,
    maxWidth: 1154
  }
}))(Dialog);

interface IProps {
  title: string;
  withHeaderBorder?: boolean;
  open: boolean;
  onClose: () => void;
}

const CustomPopup: React.FC<IProps> = ({
  title,
  open,
  onClose,
  withHeaderBorder = false,
  children
}) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      scroll="body"
      disableBackdropClick
      disableEscapeKeyDown
    >
      <ClosePopupButton onClick={onClose}>
        <CloseIcon />
      </ClosePopupButton>
      <PopupTitle withBorder={withHeaderBorder}>{title}</PopupTitle>
      {children}
    </StyledDialog>
  );
};

export default CustomPopup;
