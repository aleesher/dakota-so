"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var constants_1 = require("../../constants");
var page_1 = require("../../provider/page");
var settings_1 = require("../../provider/settings");
var styles_1 = require("./styles");
var SearchInput = function () {
    var timeUnit = settings_1.useSettingsState().timeUnit;
    var activeSection = page_1.usePageState().activeSection;
    var setSearchText = page_1.usePageDispatch().setSearchText;
    var _a = react_1.useState(""), text = _a[0], setText = _a[1];
    var disabled = react_1.useMemo(function () {
        if (activeSection === constants_1.SECTION.NONE) {
            return true;
        }
        if (timeUnit !== "day" && activeSection === constants_1.SECTION.EMPLOYEE_CALENDAR) {
            return true;
        }
        return false;
    }, [activeSection, timeUnit]);
    var handleChange = function (e) {
        setText(e.currentTarget.value);
        setSearchText(e.currentTarget.value);
    };
    return (react_1.default.createElement(styles_1.SearchInputStyled, { placeholder: "Zoeken", value: text, onChange: handleChange, disabled: disabled }));
};
exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map