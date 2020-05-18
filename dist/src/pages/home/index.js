"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var react_components_1 = require("@apollo/react-components");
var react_helmet_1 = require("react-helmet");
var TopArea_1 = __importDefault(require("../../components/TopArea"));
var BottomArea_1 = __importDefault(require("./partials/BottomArea"));
var styles_1 = require("./styles");
var components_1 = require("dakota-portal/dist/components");
var serviceOrder_1 = __importDefault(require("../serviceOrder"));
var helpers_1 = require("../../helpers");
var queries_1 = require("./queries");
var useFiltersState_1 = require("../../hooks/useFiltersState");
var DashboardContent_1 = __importDefault(require("../../components/DashboardContent"));
var Home = function (_a) {
    var match = _a.match, history = _a.history;
    var url = match.url;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("title", null, "Dashboard"),
            react_1.default.createElement("meta", { name: "Dakota S&O dashboard", content: "Service order management" })),
        react_1.default.createElement(react_components_1.Query, { query: queries_1.FETCH_SAVED_FILTER_GROUPS, fetchPolicy: "cache-and-network" }, function (_a) {
            var loading = _a.loading, _b = _a.error, error = _b === void 0 ? null : _b, data = _a.data;
            if (loading) {
                return react_1.default.createElement("div", null, "Loading...");
            }
            if (error) {
                return react_1.default.createElement("div", null, JSON.stringify(error));
            }
            var initialGroups = get_1.default(data, "currentUser.savedFilterGroups") || [];
            var userId = get_1.default(data, "currentUser.id") || "";
            var entityName = "ServiceOrder";
            return (react_1.default.createElement(DashboardContent_1.default, { url: url, history: history, initialGroups: initialGroups, useFiltersState: useFiltersState_1.useFiltersState(queries_1.SAVE_FILTER_GROUPS, queries_1.FETCH_SAVED_FILTER_GROUPS, entityName) },
                react_1.default.createElement(styles_1.HomePage, null,
                    react_1.default.createElement(styles_1.Title, null, "Dashboard"),
                    react_1.default.createElement(TopArea_1.default, null),
                    react_1.default.createElement(BottomArea_1.default, { url: url, userId: userId }))));
        }),
        react_1.default.createElement(components_1.ModalRoute, { component: serviceOrder_1.default, path: "" + url + helpers_1.urls.CREATE_SERVICE_ORDER, parentPath: url, variant: "wide" })));
};
exports.default = Home;
//# sourceMappingURL=index.js.map