"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var helpers_1 = require("../../../helpers");
var TermsOfUse = function (_a) {
    var history = _a.history;
    var onClose = function () {
        if (isNeedAgreement) {
            helpers_1.authHelpers.signout();
            history.push(helpers_1.urls.LOGOUT);
        }
        else {
            history.goBack();
        }
    };
    var isNeedAgreement = helpers_1.authHelpers.isNeedAgreement === "true";
    return (react_1.default.createElement(components_1.SlideModal, { headerProps: {
            onClose: onClose,
            title: "Gebruiksvoorwaarden"
        } }));
};
exports.default = TermsOfUse;
//# sourceMappingURL=TermsOfUse.js.map