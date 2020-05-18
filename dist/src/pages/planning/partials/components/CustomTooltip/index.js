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
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Fade_1 = __importDefault(require("@material-ui/core/Fade"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var commonArrowStyles = {
    content: "''",
    position: "absolute",
    left: "50%",
    marginLeft: -12,
    borderWidth: 12,
    borderStyle: "solid"
};
var HtmlTooltip = styles_1.withStyles(function (theme) { return ({
    tooltip: {
        padding: 20,
        maxWidth: 440,
        backgroundColor: Colors_1.default.fiord,
        color: "white",
        fontSize: 20
    },
    popper: {
        opacity: 1
    },
    tooltipPlacementTop: {
        "&:after": __assign(__assign({}, commonArrowStyles), { top: "calc(100% - 15px)", borderColor: Colors_1.default.fiord + " transparent transparent transparent" })
    },
    tooltipPlacementBottom: {
        "&:before": __assign(__assign({}, commonArrowStyles), { top: -10, borderColor: "transparent transparent " + Colors_1.default.fiord + " transparent" })
    }
}); })(Tooltip_1.default);
var CustomTooltip = function (_a) {
    var title = _a.title, children = _a.children;
    return (react_1.default.createElement(HtmlTooltip, { interactive: true, title: title, TransitionComponent: Fade_1.default, enterDelay: 1000, leaveDelay: 100 }, children));
};
exports.default = CustomTooltip;
//# sourceMappingURL=index.js.map