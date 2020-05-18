"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var components_1 = require("dakota-portal/dist/components");
var components_2 = require("../../../../components");
var helpers_1 = require("../../../../helpers");
var styles_1 = require("../../styles");
var constants_1 = require("../../constants");
var Document = function (_a) {
    var isLocked = _a.isLocked, match = _a.match, refs = _a.refs, activeLinks = _a.activeLinks, onClick = _a.onClick;
    var url = match.url;
    return (react_1.default.createElement(components_1.AccordionLink, { ref: refs.document, label: "Documenten", link: "document", isActive: activeLinks.includes("document"), onClick: function () { return onClick("document"); } },
        react_1.default.createElement(styles_1.AccordionContainer, null,
            react_1.default.createElement(styles_1.DocumentWrapper, null,
                react_1.default.createElement(styles_1.DocumentHead, null,
                    react_1.default.createElement(styles_1.DocumentSearch, null,
                        react_1.default.createElement(styles_1.SearchIcons, null),
                        react_1.default.createElement(styles_1.Search, { placeholder: "Vind een document" })),
                    react_1.default.createElement(styles_1.DocumentButton, null,
                        react_1.default.createElement(components_2.GeneralButton, { title: "Wijzigingen opslaan", url: "go" }))),
                react_1.default.createElement(styles_1.DocumentBody, null,
                    react_1.default.createElement(components_2.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.DOCUMENT_ACTIONS }),
                    react_1.default.createElement(components_2.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.DOCUMENT_ACTIONS }),
                    react_1.default.createElement(components_2.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.DOCUMENT_ACTIONS }),
                    react_1.default.createElement(components_2.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.DOCUMENT_ACTIONS }),
                    react_1.default.createElement(styles_1.DocumentFooter, null,
                        react_1.default.createElement("div", { className: "footerText" },
                            react_1.default.createElement(Add_1.default, null),
                            react_1.default.createElement("p", { className: "footText" }, "Document toevoegen"))))))));
};
exports.default = Document;
//# sourceMappingURL=Document.js.map