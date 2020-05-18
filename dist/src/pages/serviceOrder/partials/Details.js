"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var CardItem_1 = __importDefault(require("./CardItem"));
var InformationBox_1 = __importDefault(require("./InformationBox"));
var constants_1 = require("../constants");
var models_1 = require("../models");
var styles_1 = require("../styles");
var styles_2 = require("../../home/styles");
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, onChange = _a.onChange, values = _a.values, errors = _a.errors, onBlur = _a.onBlur, informationBoxValues = _a.informationBoxValues;
    return (react_1.default.createElement(styles_1.FormCard, null,
        title && react_1.default.createElement(styles_1.CardTitle, null, title),
        react_1.default.createElement(styles_1.CardContent, null,
            react_1.default.createElement(Grid_1.default, { xs: 6 },
                react_1.default.createElement(CardItem_1.default, { title: "Servicetype", type: models_1.CardItemTypes.select, options: constants_1.SERVICE_TYPES, onChange: onChange, value: get_1.default(values, "serviceType"), name: "serviceType", errors: errors, onBlur: onBlur }),
                react_1.default.createElement(CardItem_1.default, { title: "Selecteer Land", type: models_1.CardItemTypes.select, options: constants_1.COUNTRIES, onBlur: onBlur, onChange: onChange, value: get_1.default(values, "country"), name: "country", errors: errors }),
                react_1.default.createElement(CardItem_1.default, { title: "Selecteer SO type", type: models_1.CardItemTypes.select, options: constants_1.SO_TYPES, onChange: onChange, value: get_1.default(values, "orderType"), name: "orderType", errors: errors, onBlur: onBlur }),
                react_1.default.createElement(CardItem_1.default, { title: "Global ID", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "globalId"), name: "globalId", errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: "Concept ID", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "conceptId"), name: "conceptId", errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: "Serviceordernummer", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "code"), name: "code", errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: "Prioriteit", type: models_1.CardItemTypes.select, options: constants_1.PRIORITY_OPTIONS, onChange: onChange, value: get_1.default(values, "priority"), name: "priority", errors: errors, onBlur: onBlur })),
            react_1.default.createElement(styles_2.BaseRow, { xs: 6, justify: "flex-end", container: true },
                react_1.default.createElement(InformationBox_1.default, { data: values, informationBoxValues: informationBoxValues })))));
});
//# sourceMappingURL=Details.js.map