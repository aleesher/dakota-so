"use strict";
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
var Block_1 = __importDefault(require("@material-ui/icons/Block"));
var core_1 = require("@material-ui/core");
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var constants_1 = require("../../constants");
var i18_1 = __importDefault(require("../../helpers/i18"));
var createColumn = {
    IsBlocked: function () {
        return {
            key: "isBlocked",
            title: i18_1.default.t("Common.isBlocked"),
            render: function (rowIndex, __, rowData) {
                if (!rowData || !rowData.isBlocked) {
                    return React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isBlocked" });
                }
                return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-isBlocked" },
                    React.createElement(Block_1.default, { nativeColor: Colors_1.default.cinnabar })));
            },
            visible: true,
            renderExport: function (rowData) {
                if (!rowData || !rowData.isBlocked) {
                    return "";
                }
                return i18_1.default.t("Common.isBlocked");
            }
        };
    },
    Boolean: function (title, key) {
        return {
            key: key,
            title: title,
            render: function (rowIndex, __, rowData) {
                return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-boolean" },
                    React.createElement(core_1.Checkbox, { disabled: true, checked: !!rowData[key] })));
            },
            visible: true,
            type: "boolean"
        };
    },
    YesNoUnknown: function (title, key) {
        return {
            title: title,
            key: key,
            visible: true,
            render: function (rowIndex, __, rowData) {
                return (React.createElement(SortableTableStyles_1.Td, { key: rowIndex + "-yesNoUnknown" }, constants_1.YES_NO_UNKNOWN[rowData[key]]));
            },
            renderExport: function (rowData) {
                return constants_1.YES_NO_UNKNOWN[rowData[key]];
            }
        };
    }
};
exports.default = createColumn;
//# sourceMappingURL=column.js.map