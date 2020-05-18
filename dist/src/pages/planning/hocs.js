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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var provider_1 = require("./provider");
var styles_1 = require("./styles");
function withAbilityToSelect(Child) {
    var SelectableSection = function (props) {
        var activeSection = provider_1.usePageState().activeSection;
        var setActiveSection = provider_1.usePageDispatch().setActiveSection;
        var section = props.section, _a = props.isLeft, isLeft = _a === void 0 ? false : _a, childProps = __rest(props, ["section", "isLeft"]);
        return (react_1.default.createElement(styles_1.SelectableSectionWrapper, { isLeft: isLeft, isSelected: activeSection === section, onClick: function () { return setActiveSection(section); } },
            react_1.default.createElement(Child, __assign({}, childProps))));
    };
    SelectableSection.displayName = "WithAbilityToSelect(" + (Child.displayName ||
        Child.name) + ")";
    return SelectableSection;
}
exports.default = withAbilityToSelect;
//# sourceMappingURL=hocs.js.map