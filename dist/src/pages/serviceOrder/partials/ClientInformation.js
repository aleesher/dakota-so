"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var CardItem_1 = __importDefault(require("./CardItem"));
var helpers_1 = require("../../../helpers");
var constants_1 = require("../constants");
var helpers_2 = require("../helpers");
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, onChange = _a.onChange, values = _a.values, errors = _a.errors, onBlur = _a.onBlur, url = _a.url;
    var fields = helpers_2.getFormFields(constants_1.CLIENT_INFORMATION_FIELDS, get_1.default(values, "orderType"));
    return (react_1.default.createElement(styles_1.FormCard, null,
        react_1.default.createElement(styles_1.CardTitle, { xs: 12, direction: "row", container: true, item: true },
            title,
            react_1.default.createElement(styles_1.SearchButton, { to: helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT) },
                react_1.default.createElement(styles_1.SearchIcon, null),
                "Zoek Klant")),
        react_1.default.createElement(styles_1.CardContent, null,
            react_1.default.createElement(Grid_1.default, { xs: 6 }, fields.map(function (_a) {
                var title = _a.title, type = _a.type, name = _a.name, disabled = _a.disabled, maxLength = _a.maxLength, options = _a.options;
                return (react_1.default.createElement(CardItem_1.default, { title: title, type: type, onChange: onChange, name: name, value: get_1.default(values, name), errors: errors, onBlur: onBlur, disabled: disabled, maxLength: maxLength, key: name, options: options }));
            })))));
});
//# sourceMappingURL=ClientInformation.js.map