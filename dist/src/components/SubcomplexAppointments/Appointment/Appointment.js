"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var SubcomplexMenu_1 = __importDefault(require("../../../components/SubcomplexMenu"));
var styles_1 = require("./styles");
var constants_1 = require("./constants");
var Appointment = function (_a) {
    var orderDate = _a.orderDate, orderType = _a.orderType, status = _a.status, interval = _a.interval, onChangeOrderDate = _a.onChangeOrderDate;
    var containerRef = react_1.default.useRef(null);
    var handleMouseDown = function (e) {
        var element = e.target;
        while (!element.getAttribute("data-container")) {
            element = element.parentNode;
        }
        var startX = e.pageX;
        var positionY = e.pageY;
        element.style.zIndex = 100;
        var handleMouseMove = function (e) {
            var newX = e.pageX - startX;
            element.style.transform = "translate(" + newX + "px)";
        };
        var handleMouseUp = function (e) {
            var newX = startX + (e.pageX - startX);
            var elementsUnderPosition = document.elementsFromPoint(newX, positionY);
            var newTd = [].find.call(elementsUnderPosition, function (el) { return el.tagName === "TD"; });
            element.style.zIndex = 10;
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousemove", handleMouseMove);
            var tdDataDate = newTd.getAttribute("data-date");
            if (!!newTd.children[0].getAttribute("data-container") || !tdDataDate) {
                element.style.transform = "initial";
                return;
            }
            var tdDate = moment_1.default(tdDataDate, "DD-MM-YYYY").toDate();
            onChangeOrderDate(tdDate);
        };
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousemove", handleMouseMove);
    };
    return (react_1.default.createElement(styles_1.Container, { status: status, ref: containerRef, onMouseDown: handleMouseDown, "data-container": "container" },
        react_1.default.createElement(styles_1.Type, null, constants_1.SHORT_ORDER_TYPES[orderType]),
        react_1.default.createElement(styles_1.Interval, null, interval > 0 ? "interval " + interval : "eenmalig"),
        react_1.default.createElement(SubcomplexMenu_1.default, { position: {
                top: "10px",
                right: "10px"
            }, actions: [{ label: "action", onClick: function () { return null; } }] })));
};
exports.default = Appointment;
//# sourceMappingURL=Appointment.js.map