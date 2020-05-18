"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_components_1 = require("@apollo/react-components");
var get_1 = __importDefault(require("lodash/get"));
var TopArea_1 = __importDefault(require("../../components/TopArea"));
var react_helmet_1 = require("react-helmet");
var DashboardContent_1 = __importDefault(require("../../components/DashboardContent"));
var queries_1 = require("./queries");
var useFiltersState_1 = require("../../hooks/useFiltersState");
var styles_1 = require("./styles");
var BottomArea_1 = __importDefault(require("./partials/BottomArea"));
var Dashboard = function (_a) {
    var match = _a.match, history = _a.history;
    var url = match.url;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("title", null, "Dashboard"),
            react_1.default.createElement("meta", { name: "Service Contracten Dashboard", content: "Service contracts management" })),
        react_1.default.createElement(react_components_1.Query, { query: queries_1.FETCH_SAVED_FILTER_GROUPS, fetchPolicy: "cache-and-network" }, function (_a) {
            var loading = _a.loading, _b = _a.error, error = _b === void 0 ? null : _b, data = _a.data;
            if (loading) {
                return react_1.default.createElement("div", null, "Loading...");
            }
            if (error) {
                return react_1.default.createElement("div", null, error);
            }
            var initialGroups = get_1.default(data, "currentUser.savedSCFilterGroups") || [];
            var entityName = "ServiceContract";
            return (react_1.default.createElement(DashboardContent_1.default, { url: url, history: history, initialGroups: initialGroups, useFiltersState: useFiltersState_1.useFiltersState(queries_1.SAVE_FILTER_GROUPS, queries_1.FETCH_SAVED_FILTER_GROUPS, entityName), entityName: entityName },
                react_1.default.createElement(styles_1.MainContent, null,
                    react_1.default.createElement(styles_1.Wrapper, null,
                        react_1.default.createElement(styles_1.Title, null, "Dashboard")),
                    react_1.default.createElement(TopArea_1.default, null),
                    react_1.default.createElement(styles_1.Wrapper, null,
                        react_1.default.createElement(BottomArea_1.default, { url: url, history: history })))));
        })));
};
exports.default = Dashboard;
//# sourceMappingURL=index.js.map