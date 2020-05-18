"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var components_1 = require("dakota-portal/dist/components");
var WorkOrder_1 = __importDefault(require("./partials/WorkOrder"));
var partials_1 = require("../serviceOrder/partials");
var helpers_1 = require("../../helpers");
var AccessControl_1 = require("../../components/AccessControl");
var styles_1 = require("../serviceOrder/styles");
var styles_2 = require("../serviceOrder/styles");
exports.default = (function (_a) {
    var history = _a.history, location = _a.location, match = _a.match;
    var _b = react_1.default.useState({}), user = _b[0], setUser = _b[1];
    var _c = react_1.default.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    var handleSubmit = function () { return null; };
    var description = get_1.default(location, "state.description");
    var soCode = get_1.default(location, "state.soCode", "");
    react_1.default.useEffect(function () {
        AccessControl_1.getCurrentUser()
            .then(function (user) {
            setUser(user);
            setIsLoading(false);
        })
            .catch(function (err) {
            setIsLoading(false);
            console.error(err.message);
        });
    }, []);
    return (react_1.default.createElement(components_1.SlideModal, { headerProps: {
            onClose: history.goBack,
            title: "Serviceorder: " + soCode,
            closeIcon: styles_1.HeaderArrow,
            component: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(partials_1.HeaderStep, { step: 2, history: history }),
                react_1.default.createElement(styles_1.CloseIcon, { fontSize: "large", onClick: function () { return history.push(helpers_1.urls.HOME); } })))
        } }, isLoading ? (react_1.default.createElement(styles_2.LoaderWrapper, null,
        react_1.default.createElement(components_1.Loader, null))) : (react_1.default.createElement(WorkOrder_1.default, { onSubmit: handleSubmit, soDescription: description, soCode: soCode, routeProps: { history: history, location: location, match: match }, currentUser: user }))));
});
//# sourceMappingURL=index.js.map