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
var moment_1 = __importDefault(require("moment"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var components_1 = require("../../../../../components");
var helpers_1 = require("../../../../../helpers");
var Styles = __importStar(require("../styles"));
var constants_1 = require("./constants");
exports.Documents = function (_a) {
    var match = _a.match;
    var url = match.url;
    return (React.createElement(Styles.DocumentWrapper, null,
        React.createElement(Styles.DocumentHead, null,
            React.createElement(Styles.DocumentSearch, null,
                React.createElement("div", { className: "alignIcon" },
                    React.createElement(Styles.SearchIcons, null)),
                React.createElement(Styles.Search, { placeholder: "Vind een document" })),
            React.createElement(Styles.DocumentButton, null,
                React.createElement(components_1.GeneralButton, { title: "Wijzigingen opslaan", url: "go" }))),
        React.createElement(Styles.DocumentBody, null,
            React.createElement(components_1.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.ACTIONS }),
            React.createElement(components_1.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.ACTIONS }),
            React.createElement(components_1.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.ACTIONS }),
            React.createElement(components_1.DocumentCard, { match: match, format: "Docs", fileName: "Factuur regels", creationDate: moment_1.default("10-01-2020").toDate(), updationDate: moment_1.default("11-01-2020").toDate(), titleName: "Document actie", titleLabel: "Verwacht aantal uur", link: helpers_1.urls.check(url + helpers_1.urls.SO_DOCUMENT), actions: constants_1.ACTIONS }),
            React.createElement(Styles.DocumentFooter, null,
                React.createElement("div", { className: "footerText" },
                    React.createElement(Add_1.default, null),
                    React.createElement("p", { className: "footText" }, "Document toevoegen"))))));
};
//# sourceMappingURL=index.js.map