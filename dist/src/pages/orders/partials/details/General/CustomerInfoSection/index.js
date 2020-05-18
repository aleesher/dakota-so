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
var React = __importStar(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var helpers_1 = require("../../../../../../helpers");
var styles_1 = require("../../styles");
var styles_2 = require("../../../../../serviceOrder/styles");
exports.CustomerInfoSection = function (_a) {
    var url = _a.url, formikBag = _a.formikBag, renderField = _a.renderField, fields = _a.fields;
    var values = formikBag.values;
    var majorFields = fields.majorFields, minorFields = fields.minorFields;
    return (React.createElement(styles_1.AddressCard, null,
        React.createElement(styles_1.AddressHeader, null,
            React.createElement(styles_1.AddressTitle, null, "Klantinformatie"),
            React.createElement(styles_2.SearchButton, { right: "100px", to: helpers_1.urls.check(url + helpers_1.urls.SEARCH_CLIENT) },
                React.createElement(styles_2.SearchIcon, null),
                "Zoek Klant"),
            React.createElement(styles_1.AddresAction, null, "Verberg")),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.AddressContent, null, majorFields.map(function (fieldData) { return renderField(fieldData); }))),
            React.createElement(Grid_1.default, { item: true, xs: 6 },
                React.createElement(styles_1.AddressContent, null, minorFields.map(function (field) { return renderField(field); }))))));
};
//# sourceMappingURL=index.js.map