"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("../../styles");
var BillingHead_1 = require("../Billing/BillingHead");
var BillingForm_1 = require("../Billing/BillingForm");
var BillingContent_1 = require("../Billing/BillingContent");
var BillingInvoice_1 = require("../Billing/BillingInvoice");
var BillingFooter_1 = require("../Billing/BillingFooter");
var Review = function (_a) {
    var refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick, promotedFields = _a.promotedFields;
    return (react_1.default.createElement(components_1.AccordionLink, { label: "Beoordelen", link: "review", ref: refs.review, isActive: activeLinks.includes("review"), onClick: function () { return onClick("review"); }, promotedFields: promotedFields.map(function (f) { return ({
            label: f,
            value: "<placeholder>"
        }); }) },
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(BillingHead_1.BillingHead, null),
            react_1.default.createElement(BillingForm_1.BillingForm, null),
            react_1.default.createElement(BillingContent_1.BillingContent, null),
            react_1.default.createElement(BillingInvoice_1.BillingInvoice, null),
            react_1.default.createElement(BillingFooter_1.BillingFooter, null))));
};
exports.default = Review;
//# sourceMappingURL=Review.js.map