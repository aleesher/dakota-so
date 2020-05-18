"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("dakota-portal/dist/components/ActionMenu/styles");
var Visibility_1 = __importDefault(require("@material-ui/icons/Visibility"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var DeleteForever_1 = __importDefault(require("@material-ui/icons/DeleteForever"));
var RestorePage_1 = __importDefault(require("@material-ui/icons/RestorePage"));
var LibraryAdd_1 = __importDefault(require("@material-ui/icons/LibraryAdd"));
var IconVisibility = components_1.ActionMenuIcon(Visibility_1.default);
var IconEdit = components_1.ActionMenuIcon(Edit_1.default);
var IconDelete = components_1.ActionMenuIcon(Delete_1.default);
var IconDeleteForever = components_1.ActionMenuIcon(DeleteForever_1.default);
var IconRestorePage = components_1.ActionMenuIcon(RestorePage_1.default);
var IconDuplicate = components_1.ActionMenuIcon(LibraryAdd_1.default);
function createActionMenuItems(options) {
    var onClickEdit = options.onClickEdit, onClickBlock = options.onClickBlock, onClickDelete = options.onClickDelete, onClickOpenInGeodak = options.onClickOpenInGeodak, onClickDuplicate = options.onClickDuplicate, customItems = options.customItems;
    var menuItems = [
        {
            title: "Edit",
            icon: React.createElement(IconEdit, null),
            onClick: onClickEdit
        }
    ];
    if (onClickOpenInGeodak) {
        menuItems.push({
            title: "Open",
            icon: React.createElement(IconVisibility, null),
            onClick: onClickOpenInGeodak
        });
    }
    if (customItems && customItems.length > 0) {
        menuItems = __spreadArrays(menuItems, customItems);
    }
    menuItems.push({
        title: "Block",
        icon: React.createElement(IconDelete, null),
        onClick: function () { },
        render: function (rowItem) { return (React.createElement(styles_1.DropdownListItem, { key: rowItem.id, onClick: function (_) { return onClickBlock(rowItem); } },
            rowItem.isBlocked ? React.createElement(IconRestorePage, null) : React.createElement(IconDelete, null),
            rowItem.isBlocked ? "Unblock" : "Block")); }
    });
    if (onClickDelete) {
        menuItems.push({
            title: "Delete",
            icon: React.createElement(IconDeleteForever, null),
            onClick: onClickDelete
        });
    }
    if (onClickDuplicate) {
        menuItems.push({
            title: "Duplicate",
            icon: React.createElement(IconDuplicate, null),
            onClick: onClickDuplicate
        });
    }
    return menuItems;
}
exports.createActionMenuItems = createActionMenuItems;
//# sourceMappingURL=menu.js.map