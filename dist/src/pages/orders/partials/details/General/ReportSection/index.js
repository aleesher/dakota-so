"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("../../styles");
exports.ReportSection = function (_a) {
    var renderField = _a.renderField, fields = _a.fields;
    var majorFields = fields.majorFields, minorFields = fields.minorFields;
    return (react_1.default.createElement(styles_1.AddressCard, null,
        react_1.default.createElement(styles_1.AddressHeader, null,
            react_1.default.createElement(styles_1.AddressTitle, null, "Melder informatie"),
            react_1.default.createElement(styles_1.AddresAction, null, "Verberg")),
        react_1.default.createElement(Grid_1.default, { container: true },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                react_1.default.createElement(styles_1.AddressContent, null, majorFields.map(function (fieldData) { return renderField(fieldData); }))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 6 },
                react_1.default.createElement(styles_1.AddressContent, null, minorFields.map(function (fieldData) { return renderField(fieldData); }))))));
};
//# sourceMappingURL=index.js.map