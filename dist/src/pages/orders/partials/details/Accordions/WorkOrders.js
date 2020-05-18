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
var react_1 = __importStar(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("./../../styles");
var WorkOrder_1 = __importDefault(require("../../../../workOrder/partials/WorkOrder"));
var WorkOrders = function (_a) {
    var refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick, routeProps = _a.routeProps, soCode = _a.soCode, soDescription = _a.soDescription, onOpenMomentHistory = _a.onOpenMomentHistory, currentUser = _a.currentUser, promotedFields = _a.promotedFields;
    var _b = react_1.useState(1), woTotal = _b[0], updateWoTotal = _b[1];
    return (react_1.default.createElement(components_1.AccordionLink, { label: "Werkorders", link: "workOrders", ref: refs.workOrders, isActive: activeLinks.includes("workOrders"), onClick: function () { return onClick("workOrders"); }, promotedFields: promotedFields.map(function (f) { return ({
            label: f,
            value: woTotal
        }); }) },
        react_1.default.createElement(styles_1.AccordionPanelDetails, null, !!soCode ? (react_1.default.createElement(WorkOrder_1.default, { routeProps: routeProps, onSubmit: function () { return null; }, soCode: soCode, soDescription: soDescription, onOpenMomentHistory: onOpenMomentHistory, currentUser: currentUser, updateWoTotal: updateWoTotal })) : (react_1.default.createElement(react_1.default.Fragment, null)))));
};
exports.default = WorkOrders;
//# sourceMappingURL=WorkOrders.js.map