"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var react_1 = __importStar(require("react"));
var mock_1 = require("../../mock");
var Styled = __importStar(require("../../styles"));
var EditModal_1 = __importDefault(require("../EditModal"));
var CockpitControls_1 = __importDefault(require("./CockpitControls"));
var OrdersByCustomers_1 = __importDefault(require("./OrdersByCustomers"));
var constants_1 = require("../../../../constants");
var OrdersByEmployees_1 = __importDefault(require("./OrdersByEmployees"));
var BottomArea = function (_a) {
    var url = _a.url, userId = _a.userId;
    var _b = react_1.useState({
        customer: {
            Open: true,
            In_Process: true,
            Technical_Finished: true,
            Administrative_Finished: true,
            Finished: true,
            Cancelled: true,
            name: true
        },
        employee: {
            Open: true,
            In_Process: true,
            Technical_Finished: true,
            Administrative_Finished: true,
            Finished: true,
            Cancelled: true,
            name: true
        }
    }), checkedState = _b[0], setCheckedState = _b[1];
    var handleCheckbox = function (name, type) {
        setCheckedState(function (checkedState) {
            var _a, _b;
            return (__assign(__assign({}, checkedState), (_a = {}, _a[type] = __assign(__assign({}, checkedState[type]), (_b = {}, _b[name] = !checkedState[type][name], _b)), _a)));
        });
    };
    return (react_1.default.createElement(Styled.BottomWrapper, null,
        react_1.default.createElement(CockpitControls_1.default, { title: "Service orders per Klant", type: "customer" }, function (_a) {
            var limit = _a.limit, startDate = _a.startDate, endDate = _a.endDate;
            return (react_1.default.createElement(OrdersByCustomers_1.default, { limit: limit, startDate: startDate, endDate: endDate, statuses: constants_1.ORDER_STATUS_KEYS, customerCodes: mock_1.CUSTOMER_CODES, filterRow: checkedState }));
        }),
        react_1.default.createElement(CockpitControls_1.default, { title: "Service orders per medewerker", type: "employee" }, function (_a) {
            var limit = _a.limit, startDate = _a.startDate, endDate = _a.endDate;
            return (react_1.default.createElement(OrdersByEmployees_1.default, { limit: limit, startDate: startDate, endDate: endDate, statuses: constants_1.ORDER_STATUS_KEYS, employeeCodes: mock_1.EMPLOYEE_CODES, filterRow: checkedState, userId: userId }));
        }),
        react_1.default.createElement(Styled.ModalBoxs, { path: "/so/table/settings", parentPath: url, component: EditModal_1.default, variant: "wide", props: {
                onChange: handleCheckbox,
                checkedPropsState: checkedState
            } })));
};
exports.default = BottomArea;
//# sourceMappingURL=index.js.map