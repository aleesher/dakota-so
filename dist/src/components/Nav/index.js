"use strict";
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
var Styles = __importStar(require("./styles"));
var Nav = function (_a) {
    var activeLinks = _a.activeLinks, navItems = _a.navItems, onClick = _a.onClick;
    return (react_1.default.createElement(Styles.Navbar, null,
        react_1.default.createElement(Styles.ListWrapper, null, navItems.map(function (item) { return (react_1.default.createElement(Styles.List, { key: item.link, onClick: function () { return onClick(item.link); }, className: activeLinks.includes(item.link) ? "bold" : "light" }, item.title || item.label)); }))));
};
exports.default = Nav;
//# sourceMappingURL=index.js.map