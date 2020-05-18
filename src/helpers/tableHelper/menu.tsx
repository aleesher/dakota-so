import * as React from "react";
import { ActionMenuIcon } from "dakota-portal/dist/components";
import { DropdownListItem } from "dakota-portal/dist/components/ActionMenu/styles";
import { IAction } from "dakota-portal/dist/components/ActionMenu";
import Visibility from "@material-ui/icons/Visibility";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import DeleteForever from "@material-ui/icons/DeleteForever";
import RestorePage from "@material-ui/icons/RestorePage";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import i18n from "../../helpers/i18";

const IconVisibility = ActionMenuIcon(Visibility);
const IconEdit = ActionMenuIcon(Edit);
const IconDelete = ActionMenuIcon(Delete);
const IconDeleteForever = ActionMenuIcon(DeleteForever);
const IconRestorePage = ActionMenuIcon(RestorePage);
const IconDuplicate = ActionMenuIcon(LibraryAdd);

interface Options {
  onClickEdit: (rowItem: any) => void;
  onClickBlock: (rowItem: any) => void;
  onClickDelete?: (rowItem: any) => void;
  onClickOpenInGeodak?: (rowItem: any) => void;
  onClickDuplicate?: (rowItem: any) => void;
  customItems?: IAction[];
}

export function createActionMenuItems(options: Options) {
  const {
    onClickEdit,
    onClickBlock,
    onClickDelete,
    onClickOpenInGeodak,
    onClickDuplicate,
    customItems
  } = options;

  let menuItems: any[] = [
    {
      title: "Edit",
      icon: <IconEdit />,
      onClick: onClickEdit
    }
  ];

  if (onClickOpenInGeodak) {
    menuItems.push({
      title: "Open",
      icon: <IconVisibility />,
      onClick: onClickOpenInGeodak
    });
  }

  if (customItems && customItems.length > 0) {
    menuItems = [...menuItems, ...customItems];
  }

  menuItems.push({
    title: "Block",
    icon: <IconDelete />,
    onClick: () => {},
    render: rowItem => (
      <DropdownListItem key={rowItem.id} onClick={_ => onClickBlock(rowItem)}>
        {rowItem.isBlocked ? <IconRestorePage /> : <IconDelete />}
        {rowItem.isBlocked ? "Unblock" : "Block"}
      </DropdownListItem>
    )
  });

  if (onClickDelete) {
    menuItems.push({
      title: "Delete",
      icon: <IconDeleteForever />,
      onClick: onClickDelete
    });
  }

  if (onClickDuplicate) {
    menuItems.push({
      title: "Duplicate",
      icon: <IconDuplicate />,
      onClick: onClickDuplicate
    });
  }

  return menuItems;
}
