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
var react_1 = __importStar(require("react"));
var EmployeeSection_1 = __importDefault(require("./partials/EmployeeSection"));
var MessageCenter_1 = __importDefault(require("./partials/MessageCenter"));
var OrderSection_1 = __importDefault(require("./partials/OrderSection"));
var SettingsPopup_1 = __importDefault(require("./partials/SettingsPopup"));
var TopMenu_1 = __importDefault(require("./partials/TopMenu"));
var provider_1 = require("./provider");
var styles_1 = require("./styles");
var PlanningPageContent = function () {
    var _a = provider_1.useSettingsState(), messageCenter = _a.messageCenter, fixedAmountOfEmployees = _a.fixedAmountOfEmployees;
    var fetchSettings = provider_1.useSettingsDispatch().fetchSettings;
    var _b = provider_1.usePageDispatch(), fetchFields = _b.fetchFields, setPageWidth = _b.setPageWidth;
    var orders = provider_1.useDataState().orders;
    var fieldOptions = provider_1.usePageState().fieldOptions;
    var _c = react_1.useState(false), showSettings = _c[0], setShowSettings = _c[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        fetchSettings();
        fetchFields();
    }, []);
    react_1.useEffect(function () {
        if (ref && ref.current) {
            setPageWidth(ref.current.clientWidth);
        }
    }, [ref]);
    react_1.useEffect(function () {
        if (fieldOptions.length !== 0) {
            setPageWidth(ref.current.clientWidth);
        }
    }, [fixedAmountOfEmployees, orders, fieldOptions]);
    return (react_1.default.createElement(styles_1.PlanningPageContentStyled, { ref: ref },
        react_1.default.createElement(TopMenu_1.default, { onClickSettingsButton: function () { return setShowSettings(true); } }),
        react_1.default.createElement(styles_1.Divider, null),
        messageCenter.isOpen && react_1.default.createElement(MessageCenter_1.default, null),
        react_1.default.createElement(EmployeeSection_1.default, null),
        react_1.default.createElement(styles_1.Divider, null),
        react_1.default.createElement(OrderSection_1.default, null),
        react_1.default.createElement(SettingsPopup_1.default, { isOpen: showSettings, onSave: function () { return setShowSettings(false); }, onClose: function () { return setShowSettings(false); } })));
};
exports.default = PlanningPageContent;
//# sourceMappingURL=PlanningPageContent.js.map