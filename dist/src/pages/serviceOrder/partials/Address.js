"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var _1 = require("./");
var models_1 = require("../models");
var CardItem_1 = __importDefault(require("./CardItem"));
var styles_1 = require("../styles");
var styles_2 = require("../../home/styles");
exports.default = (function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, onChange = _a.onChange, values = _a.values, errors = _a.errors, onBlur = _a.onBlur, searchResults = _a.searchResults, onSelectAddress = _a.onSelectAddress;
    return (react_1.default.createElement(styles_1.FormCard, null,
        title && react_1.default.createElement(styles_1.CardTitle, null, title),
        react_1.default.createElement(styles_1.CardContent, null,
            react_1.default.createElement(Grid_1.default, { xs: 6 },
                react_1.default.createElement(CardItem_1.default, { title: "Zoeken", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "searchAddress"), name: "searchAddress", errors: errors, onBlur: onBlur }),
                react_1.default.createElement(CardItem_1.default, { title: "Postcode", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "address.postalCode"), name: "address.postalCode", errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: ["Huisnummer", "Letter", "Toevoeing"], type: models_1.CardItemTypes.combinedInput, onChange: onChange, value: values, name: [
                        "address.houseNumber",
                        "address.houseLetter",
                        "address.houseNumberAddition"
                    ], errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: "Straatnaam", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "address.street"), name: "address.street", errors: errors, onBlur: onBlur, disabled: true }),
                react_1.default.createElement(CardItem_1.default, { title: "Plaats", type: models_1.CardItemTypes.input, onChange: onChange, value: get_1.default(values, "address.city"), name: "address.city", errors: errors, onBlur: onBlur, disabled: true })),
            react_1.default.createElement(styles_2.BaseRow, { xs: 6, justify: "flex-end", container: true },
                react_1.default.createElement(_1.SearchResults, { onSelectResult: onSelectAddress, results: searchResults, values: values })))));
});
//# sourceMappingURL=Address.js.map