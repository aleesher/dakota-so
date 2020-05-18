"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var CardItem_1 = __importDefault(require("./CardItem"));
var constants_1 = require("../constants");
var helpers_1 = require("../helpers");
var models_1 = require("../models");
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, onChange = _a.onChange, values = _a.values, errors = _a.errors, onBlur = _a.onBlur;
    var soType = get_1.default(values, "orderType");
    var primaryFields = helpers_1.getFormFields(constants_1.REPORTER_FIELDS[0], soType);
    var secondaryFields = helpers_1.getFormFields(constants_1.REPORTER_FIELDS[1], soType);
    return (react_1.default.createElement(styles_1.FormCard, null,
        title && react_1.default.createElement(styles_1.CardTitle, null, title),
        react_1.default.createElement(styles_1.CardContent, null,
            react_1.default.createElement(Grid_1.default, { xs: 6 }, primaryFields.map(function (_a) {
                var title = _a.title, type = _a.type, name = _a.name, disabled = _a.disabled, maxLength = _a.maxLength, options = _a.options, titleChange = _a.titleChange;
                var titleText = !!titleChange && titleChange.selectedSOType.includes(soType)
                    ? titleChange.text
                    : title;
                return (react_1.default.createElement(CardItem_1.default, { title: titleText, type: type, onChange: onChange, name: name, value: get_1.default(values, name), errors: errors, onBlur: onBlur, disabled: disabled, maxLength: maxLength, options: options, key: name }));
            })),
            react_1.default.createElement(Grid_1.default, { xs: 6, container: true, justify: "flex-end" }, secondaryFields.map(function (_a) {
                var title = _a.title, type = _a.type, name = _a.name, disabled = _a.disabled, maxLength = _a.maxLength, options = _a.options, titleChange = _a.titleChange;
                var titleText = !!titleChange && titleChange.selectedSOType.includes(soType)
                    ? titleChange.text
                    : title;
                return (react_1.default.createElement(CardItem_1.default, { title: titleText, type: type, onChange: onChange, name: name, value: get_1.default(values, name), errors: errors, onBlur: onBlur, disabled: disabled, maxLength: maxLength, options: options, key: name }));
            })),
            react_1.default.createElement(Grid_1.default, { xs: 12 },
                react_1.default.createElement(CardItem_1.default, { title: "SO Omschrijving", type: models_1.CardItemTypes.textarea, onChange: onChange, name: "description", value: get_1.default(values, "description"), errors: errors, onBlur: onBlur, maxLength: 500 })))));
});
//# sourceMappingURL=ReportingInformation.js.map