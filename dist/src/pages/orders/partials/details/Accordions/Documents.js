"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("./../../styles");
var Documents_1 = require("./../../../partials/details/Documents");
var Documents = function (_a) {
    var refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick, match = _a.match, promotedFields = _a.promotedFields;
    return (react_1.default.createElement(components_1.AccordionLink, { label: "Documenten", link: "documents", ref: refs.documents, isActive: activeLinks.includes("documents"), onClick: function () { return onClick("documents"); }, promotedFields: promotedFields.map(function (f) { return ({ label: f, value: 4 }); }) },
        react_1.default.createElement(styles_1.AccordionPanelDetails, null,
            react_1.default.createElement(Documents_1.Documents, { match: match }))));
};
exports.default = Documents;
//# sourceMappingURL=Documents.js.map