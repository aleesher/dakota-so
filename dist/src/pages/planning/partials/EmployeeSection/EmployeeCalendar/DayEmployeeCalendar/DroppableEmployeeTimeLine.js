"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var constants_1 = require("../../../../constants");
var helpers_1 = require("../../../../helpers");
var provider_1 = require("../../../../provider");
var dnd_1 = require("../../../../provider/dnd");
var styles_1 = require("../../../../styles");
var DroppableEmployeeTimeLine = function (_a) {
    var employee = _a.employee, children = _a.children;
    var _b = provider_1.useSettingsState(), employeeTimeScale = _b.employeeTimeScale, employeeViewDate = _b.employeeViewDate;
    var _c = provider_1.useDataDispatch(), onDropToTheSameEmployee = _c.onDropToTheSameEmployee, onDropToEmployee = _c.onDropToEmployee, onDropMultipleToEmployee = _c.onDropMultipleToEmployee, onDropStackToEmployee = _c.onDropStackToEmployee, onDropStackToTheSameEmployee = _c.onDropStackToTheSameEmployee;
    var setIsOrderDragging = provider_1.usePageDispatch().setIsOrderDragging;
    // const [canDrop, setCanDrop] = useState(false);
    var _d = react_dnd_1.useDrop({
        accept: [constants_1.DRAG_ITEM_TYPE.ORDER, constants_1.DRAG_ITEM_TYPE.STACK],
        drop: function (item, mon) {
            // if order already was dropped to stack or to order
            if (mon.didDrop()) {
                return;
            }
            if (item.type === constants_1.DRAG_ITEM_TYPE.STACK) {
                var stack = item.stack;
                var newStart = helpers_1.calculateNewStart(stack.start, mon);
                // if it is the same employee
                if (stack.employeeResourceCode === employee.resource) {
                    onDropStackToTheSameEmployee(stack.id, employee.resource, newStart);
                }
                else {
                    onDropStackToEmployee(stack.id, stack.employeeResourceCode, employee.resource, newStart);
                }
            }
            else {
                var order = item.order;
                var newStart = helpers_1.calculateNewStart(order.start, mon);
                if (item.totalSelected > 1) {
                    onDropMultipleToEmployee(employee.resource, newStart);
                }
                else {
                    // if it is the same employee
                    if (order.soEmployeeCode === employee.resource) {
                        onDropToTheSameEmployee(order.code, employee.resource, newStart);
                    }
                    else {
                        onDropToEmployee(order.code, employee.resource, newStart);
                    }
                }
            }
            setIsOrderDragging(false);
        },
        // collect: mon => ({
        //   isOver: !!mon.isOver()
        // }),
        canDrop: function (item, mon) {
            var res = helpers_1.canDropToEmployee(employeeTimeScale, employeeViewDate, mon.getDifferenceFromInitialOffset(), item.type === constants_1.DRAG_ITEM_TYPE.ORDER ? item.order : item.stack);
            // setCanDrop(res); // trick (for some reason collect.canDrop doesn't work)
            return res;
        },
        hover: function () {
            if (dnd_1.HoverObject.type !== dnd_1.HOVER_TYPE.EMPLOYEE ||
                dnd_1.HoverObject.code !== employee.code) {
                dnd_1.HoverObject.type = dnd_1.HOVER_TYPE.EMPLOYEE;
                dnd_1.HoverObject.code = employee.code;
            }
        }
    }), _e = _d[0], dropRef = _d[1];
    return (react_1.default.createElement(styles_1.TimeLineWrapper, { ref: dropRef, height: employee.lineHeight }, children));
};
exports.default = DroppableEmployeeTimeLine;
//# sourceMappingURL=DroppableEmployeeTimeLine.js.map