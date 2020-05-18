"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var SortableTable_1 = __importStar(require("dakota-portal/dist/components/SortableTable"));
var constants_1 = require("../constants");
var helpers_1 = require("../helpers");
var constants_2 = require("../../home/constants");
var tableHelper_1 = __importDefault(require("../../../helpers/tableHelper"));
var styles_1 = require("../../serviceOrder/styles");
exports.default = (function (_a) {
    var workOrders = _a.workOrders, onSelectRow = _a.onSelectRow, onSubmit = _a.onSubmit, disabledRows = _a.disabledRows, selectedWO = _a.selectedWO, onSelectWO = _a.onSelectWO, onDeleteWO = _a.onDeleteWO, isRowChecked = _a.isRowChecked, routeProps = _a.routeProps, onOpenMomentHistory = _a.onOpenMomentHistory, isWOLocked = _a.isWOLocked;
    var _b = react_1.default.useState(constants_2.META), meta = _b[0], setMeta = _b[1];
    var _c = react_1.default.useState(false), showForm = _c[0], toggleForm = _c[1];
    var handleSelectRow = function (item) {
        var wos = item ? item : workOrders;
        onSelectRow(wos);
    };
    var handleSubmit = function (values) {
        toggleForm(false);
        onSubmit(values);
    };
    return (react_1.default.createElement(styles_1.FormCard, null,
        react_1.default.createElement(Grid_1.default, { container: true, xs: 12 },
            react_1.default.createElement(Grid_1.default, { xs: 6, item: true },
                react_1.default.createElement(styles_1.CardTitle, { hasborder: "false" }, "Werkorder informatie")),
            react_1.default.createElement(Grid_1.default, { xs: 6, item: true, container: true, justify: "flex-end", alignItems: "center" },
                react_1.default.createElement(styles_1.TransparentButton, { height: "56px", onClick: function () {
                        onSelectWO({});
                        toggleForm(!showForm);
                    } }, "Toevoegen werkorder"))),
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SortableTable_1.default, { columns: __spreadArrays([
                    SortableTable_1.createActionMenuColumn(tableHelper_1.default.createActionMenuItems({
                        onClickEdit: function (wo) {
                            if (!isWOLocked(wo, "edit")) {
                                toggleForm(true);
                                onSelectWO(wo);
                            }
                        },
                        onClickBlock: function () { return null; },
                        onClickDelete: function (wo) {
                            if (!isWOLocked(wo, "delete")) {
                                onDeleteWO(wo);
                            }
                        }
                    }), workOrders.length)
                ], constants_1.woTableColumns(handleSelectRow, isRowChecked, onOpenMomentHistory)), dataSource: workOrders, onRowClick: function () { return null; }, pageName: "WorkOrderCreation", meta: meta, onQueryChange: setMeta, hidePagination: true, onSubmitForm: showForm ? handleSubmit : null, onValueChange: function () { return null; }, disabledRows: disabledRows, formValues: !isEmpty_1.default(selectedWO)
                    ? selectedWO
                    : helpers_1.getDefaultFormValues(workOrders) || {}, routeProps: routeProps, rowFullyDisabled: true }))));
});
//# sourceMappingURL=WorkOrderTable.js.map