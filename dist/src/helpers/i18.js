"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = __importDefault(require("i18next"));
var react_i18next_1 = require("react-i18next");
var nl_1 = __importDefault(require("../constants/locales/nl"));
var resources = {
    nl: {
        translation: nl_1.default
    }
};
i18next_1.default.use(react_i18next_1.initReactI18next).init({
    resources: resources,
    lng: "nl",
    fallbackLng: "nl",
    interpolation: {
        escapeValue: false
    }
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18.js.map