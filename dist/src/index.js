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
require("@babel/polyfill");
require("url-search-params-polyfill");
require("isomorphic-unfetch");
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var CardTravel_1 = __importDefault(require("@material-ui/icons/CardTravel"));
var react_notifications_component_1 = __importDefault(require("react-notifications-component"));
var appRoute_1 = require("dakota-portal/dist/components/appRoute");
var components_1 = require("./components");
var urls_1 = __importDefault(require("./helpers/urls"));
var global_1 = __importDefault(require("./styles/global"));
var Loadable_1 = __importDefault(require("./pages/home/Loadable"));
var orders_1 = __importDefault(require("./pages/orders"));
var planning_1 = __importDefault(require("./pages/planning"));
var contractDashboard_1 = __importDefault(require("./pages/contractDashboard"));
var contracts_1 = __importDefault(require("./pages/contracts"));
require("react-notifications-component/dist/theme.css");
exports.AppIcon = {
    name: "S&O",
    icon: React.createElement(CardTravel_1.default, null),
    path: "/so"
};
var pages = [
    {
        view: orders_1.default,
        url: urls_1.default.SO_LIST
    },
    {
        view: contractDashboard_1.default,
        url: urls_1.default.SC_HOME
    },
    {
        view: contracts_1.default,
        url: urls_1.default.SC_LIST
    }
];
var App = function (_a) {
    var appPath = _a.appPath;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_notifications_component_1.default, null),
        React.createElement(global_1.default, null),
        React.createElement(react_router_dom_1.Switch, null,
            pages.map(function (page) { return (React.createElement(appRoute_1.AppRoute, { key: page.url, actionButton: components_1.ActionButton(appPath), component: page.view, path: page.url, withoutAuth: true })); }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: urls_1.default.PLANNING, component: planning_1.default }),
            React.createElement(appRoute_1.AppRoute, { path: appPath, component: Loadable_1.default, actionButton: components_1.ActionButton(appPath), noContainer: true, withoutAuth: true }))));
};
exports.default = App;
//# sourceMappingURL=index.js.map