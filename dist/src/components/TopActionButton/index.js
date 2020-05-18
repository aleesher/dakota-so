"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var helpers_1 = require("../../helpers");
var style_1 = require("../../components/TopActionButton/style");
var global_1 = require("../../styles/global");
var Action = function (url) { return function () {
    return (React.createElement(global_1.MenuLink, { target: "_blank", href: "" + url + helpers_1.urls.CREATE_SERVICE_ORDER, onClick: function (e) { return e.stopPropagation(); } },
        React.createElement(style_1.NewSOButton, null, "Nieuwe Serviceorder")));
}; };
exports.default = Action;
//# sourceMappingURL=index.js.map