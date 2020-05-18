"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hooks_1 = require("@apollo/react-hooks");
var components_1 = require("dakota-portal/dist/components");
var SideFilterDetails_1 = require("../pages/home/partials/SideFilterDetails");
var FiltersActionsContext_1 = __importDefault(require("../helpers/filters/FiltersActionsContext"));
var DashboardContent = function (_a) {
    var url = _a.url, history = _a.history, initialGroups = _a.initialGroups, useFiltersState = _a.useFiltersState, _b = _a.entityName, entityName = _b === void 0 ? "ServiceOrder" : _b, children = _a.children;
    var client = react_hooks_1.useApolloClient();
    var alertContext = react_1.default.useContext(components_1.AlertContext);
    var _c = useFiltersState(initialGroups, client, alertContext), groups = _c.groups, setGroups = _c.setGroups, selectedFilter = _c.selectedFilter, selectedGroupId = _c.selectedGroupId, actions = _c.actions, isNew = _c.isNew;
    // useEffect(() => setGroups(initialGroups), [initialGroups]);
    return (react_1.default.createElement(FiltersActionsContext_1.default.Provider, { value: {
            groups: groups,
            setGroups: setGroups,
            selectedFilter: selectedFilter,
            selectedGroupId: selectedGroupId,
            actions: actions,
            isNew: isNew
        } },
        react_1.default.createElement(components_1.SideFilterPage, null,
            children,
            react_1.default.createElement(SideFilterDetails_1.SideFilterDetails, { history: history, entityName: entityName }))));
};
exports.default = DashboardContent;
//# sourceMappingURL=DashboardContent.js.map