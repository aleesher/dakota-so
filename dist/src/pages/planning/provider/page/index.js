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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = require("react");
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var i18_1 = __importDefault(require("../../../../helpers/i18"));
var constants_1 = require("../../constants");
var constants_2 = require("../constants");
var context_1 = require("../context");
var helpers_1 = require("../settings/helpers");
var infoService_1 = __importDefault(require("./infoService"));
function usePageState() {
    var state = react_1.useContext(context_1.PlanningStateContext);
    var _a = react_1.useState({
        hours: moment_1.default().hours(),
        minutes: moment_1.default().minutes()
    }), currentTime = _a[0], setCurrentTime = _a[1];
    react_1.useEffect(function () {
        var id = setInterval(function () {
            setCurrentTime({
                hours: moment_1.default().hours(),
                minutes: moment_1.default().minutes()
            });
        }, 1000 * 60); // update values every 1 min
        return function () { return clearInterval(id); };
    }, []);
    return __assign({ currentTime: currentTime }, state.pageState);
}
exports.usePageState = usePageState;
function usePageDispatch() {
    var dispatch = react_1.useContext(context_1.PlanningDispatchContext);
    var infoService = infoService_1.default();
    function fetchFields() {
        infoService.fetchFields().then(function (fields) {
            var fieldOptions = fields.map(function (f) { return ({
                label: i18_1.default.t("WorkOrder.field." + f.key),
                value: f.key,
                type: f.type
            }); });
            fieldOptions = fieldOptions.concat(constants_2.FRONTEND_FIELDS);
            fieldOptions = sortBy_1.default(fieldOptions, "label");
            var fieldLabels = fieldOptions.reduce(function (acc, f) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[f.value] = f.label, _a)));
            }, {});
            var fieldTypes = fieldOptions.reduce(function (acc, f) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[f.value] = f.type, _a)));
            }, {});
            dispatch(function (draft) {
                draft.pageState.fieldOptions = fieldOptions;
                draft.pageState.fieldLabels = fieldLabels;
                draft.pageState.fieldTypes = fieldTypes;
            });
        });
    }
    function setPageWidth(width) {
        dispatch(function (draft) {
            draft.pageState.pageWidth = width;
            draft.pageState.calendarWidth = width - constants_1.LIST_WIDTH;
            helpers_1.calculateCalendarWidth(draft);
        });
    }
    function setActiveSection(section) {
        dispatch(function (draft) {
            if (draft.pageState.searchText === "") {
                draft.pageState.activeSection = section;
            }
        });
    }
    function setSearchText(text) {
        dispatch(function (draft) {
            draft.pageState.searchText = text.trim().toLowerCase();
        });
    }
    function setEmployeeSort() {
        dispatch(function (draft) {
            draft.pageState.employeeSort =
                draft.pageState.employeeSort === constants_1.SORT.ASC ? constants_1.SORT.DESC : constants_1.SORT.ASC;
            // draft.data.employees.reverse();
            draft.data.employees.reverse();
        });
    }
    function setOrderSort() {
        dispatch(function (draft) {
            draft.pageState.orderSort =
                draft.pageState.orderSort === constants_1.SORT.ASC ? constants_1.SORT.DESC : constants_1.SORT.ASC;
            draft.data.orders.reverse();
        });
    }
    function setSelectedOrder(code, data, withCtrlKey) {
        dispatch(function (draft) {
            var _a;
            if (withCtrlKey) {
                // if this order has already selected
                if (!!draft.pageState.selectedOrders[code]) {
                    delete draft.pageState.selectedOrders[code];
                }
                else {
                    draft.pageState.selectedOrders[code] = data;
                }
            }
            else {
                draft.pageState.selectedOrders = (_a = {},
                    _a[code] = data,
                    _a);
            }
            draft.pageState.totalSelected = Object.keys(draft.pageState.selectedOrders).length;
            // reset selected stack
            draft.pageState.selectedStackId = "";
            // Object.keys(draft.pageState.selectedOrders).forEach(code => {
            //   console.log(code, {...draft.pageState.selectedOrders[code]});
            // })
        });
    }
    function cancelDragging() {
        dispatch(function (draft) {
            draft.pageState.isOrderDragging = false;
        });
    }
    function setSelectedStack(id) {
        dispatch(function (draft) {
            draft.pageState.selectedStackId = id;
            // reset selected orders
            draft.pageState.selectedOrders = {};
            draft.pageState.totalSelected = 0;
        });
    }
    function setIsOrderDragging(status) {
        dispatch(function (draft) {
            draft.pageState.isOrderDragging = status;
        });
    }
    return {
        fetchFields: fetchFields,
        setPageWidth: setPageWidth,
        setActiveSection: setActiveSection,
        setSearchText: setSearchText,
        setEmployeeSort: setEmployeeSort,
        setOrderSort: setOrderSort,
        setSelectedOrder: setSelectedOrder,
        cancelDragging: cancelDragging,
        setSelectedStack: setSelectedStack,
        setIsOrderDragging: setIsOrderDragging
    };
}
exports.usePageDispatch = usePageDispatch;
//# sourceMappingURL=index.js.map