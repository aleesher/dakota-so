"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var styled_components_1 = __importStar(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  position: relative;\n  z-index: 1;\n  border-top-width: 0;\n"], ["\n  ",
    "\n\n  position: relative;\n  z-index: 1;\n  border-top-width: 0;\n"])), function (_a) {
    var showShadow = _a.showShadow;
    return showShadow ? "box-shadow: 0 2px 8px 0px " + Colors_1.default.lightGray + ";" : "";
});
var Header = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 46px;\n  line-height: 46px;\n  border: none;\n  outline: none;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 12px;\n\n  ", "\n"], ["\n  width: 100%;\n  height: 46px;\n  line-height: 46px;\n  border: none;\n  outline: none;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 12px;\n\n  ",
    "\n"])), Colors_1.default.aliceBlueGrayish, Colors_1.default.solitude, function (_a) {
    var isOpened = _a.isOpened;
    return isOpened && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), Colors_1.default.white);
});
var Body = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  max-height: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  opacity: 0;\n\n  ", "\n"], ["\n  max-height: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  opacity: 0;\n\n  ",
    "\n"])), function (_a) {
    var isOpened = _a.isOpened;
    return isOpened && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      padding: 20px 40px 40px;\n      max-height: initial;\n      opacity: 1;\n      transition: opacity 0.6s;\n      background-color: ", ";\n    "], ["\n      padding: 20px 40px 40px;\n      max-height: initial;\n      opacity: 1;\n      transition: opacity 0.6s;\n      background-color: ", ";\n    "])), Colors_1.default.white);
});
var ExpandedDetails = /** @class */ (function (_super) {
    __extends(ExpandedDetails, _super);
    function ExpandedDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpened: false
        };
        _this.handleToggle = function () {
            _this.setState(function (_a) {
                var isOpened = _a.isOpened;
                return ({ isOpened: !isOpened });
            });
        };
        return _this;
    }
    ExpandedDetails.prototype.render = function () {
        var isOpened = this.state.isOpened;
        var _a = this.props, children = _a.children, showShadow = _a.showShadow, _b = _a.moreText, moreText = _b === void 0 ? "Toon details" : _b, _c = _a.lessText, lessText = _c === void 0 ? "Sluit details" : _c;
        return (React.createElement(Container, { showShadow: showShadow },
            React.createElement(Body, { isOpened: isOpened }, children),
            React.createElement(Header, { onClick: this.handleToggle, isOpened: isOpened }, isOpened ? lessText : moreText)));
    };
    ExpandedDetails.defaultProps = {
        showShadow: false
    };
    return ExpandedDetails;
}(React.Component));
exports.default = ExpandedDetails;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=ExpandedDetails.js.map