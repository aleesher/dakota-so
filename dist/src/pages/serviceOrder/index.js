"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var partials_1 = require("./partials");
var workOrder_1 = __importDefault(require("../workOrder"));
var helpers_1 = require("../../helpers");
var components_2 = require("../../components");
var styles_1 = require("./styles");
var styles_2 = require("../../components/SearchModal/styles");
var queries_1 = require("../../components/withSOActions/queries");
exports.default = (function (_a) {
    var history = _a.history, match = _a.match;
    var _b = react_1.default.useState(""), city = _b[0], setCity = _b[1];
    var url = match.url;
    return (react_1.default.createElement(components_1.SlideModal, { headerProps: {
            onClose: history.goBack,
            title: "Nieuwe serviceorder aanmaken",
            closeIcon: styles_1.HeaderArrow,
            component: react_1.default.createElement(partials_1.HeaderStep, { step: 1, history: history })
        } },
        react_1.default.createElement(partials_1.ServiceOrder, { url: url, history: history, onSetCity: setCity }),
        react_1.default.createElement(styles_2.ModalBox, { component: components_2.SearchModal, path: helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT), parentPath: url, outDelay: 300, onBackdropClick: function () { return history.goBack(); }, props: {
                onSelect: _this.handleSelectCustomer,
                onClose: history.goBack,
                query: queries_1.FETCH_CUSTOMERS,
                where: !!city ? { city: city } : {}
            } }),
        react_1.default.createElement(components_1.ModalRoute, { component: workOrder_1.default, path: helpers_1.urls.check(url + helpers_1.urls.CREATE_WORK_ORDER), parentPath: url, variant: "wide" })));
});
//# sourceMappingURL=index.js.map