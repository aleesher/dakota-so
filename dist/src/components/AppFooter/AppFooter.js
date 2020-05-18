"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var components_1 = require("dakota-portal/dist/components");
var TermsOfUse_1 = __importDefault(require("./partials/TermsOfUse"));
var PrivacyStatement_1 = __importDefault(require("./partials/PrivacyStatement"));
var Disclaimer_1 = __importDefault(require("./partials/Disclaimer"));
var package_json_1 = require("../../../package.json");
var styled_1 = require("./styled");
var helpers_1 = require("../../helpers");
var AppFooter = /** @class */ (function (_super) {
    __extends(AppFooter, _super);
    function AppFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppFooter.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.location.pathname !== this.props.location.pathname;
    };
    AppFooter.prototype.render = function () {
        var url = this.props.match.url;
        return (react_1.default.createElement(styled_1.Footer, null,
            react_1.default.createElement(styled_1.FooterLink, { as: "span" },
                "Dakota versie ",
                package_json_1.version),
            "|",
            react_1.default.createElement(styled_1.FooterLink, { as: "span" }, "Kvk: 23040986"),
            "|",
            react_1.default.createElement(styled_1.FooterLink, { to: helpers_1.urls.check(url + helpers_1.urls.TERMS_OF_USE) }, "Gebruiksvoorwaarden"),
            "|",
            react_1.default.createElement(styled_1.FooterLink, { to: helpers_1.urls.check(url + helpers_1.urls.PRIVACY_STATEMENT) }, "Privacy statement"),
            "|",
            react_1.default.createElement(styled_1.FooterLink, { to: helpers_1.urls.check(url + helpers_1.urls.DISCLAIMER) }, "Disclaimer"),
            react_1.default.createElement(components_1.ModalRoute, { component: TermsOfUse_1.default, path: helpers_1.urls.check(url + helpers_1.urls.TERMS_OF_USE), parentPath: url, variant: "wide" }),
            react_1.default.createElement(components_1.ModalRoute, { component: PrivacyStatement_1.default, path: helpers_1.urls.check(url + helpers_1.urls.PRIVACY_STATEMENT), parentPath: url, variant: "wide" }),
            react_1.default.createElement(components_1.ModalRoute, { component: Disclaimer_1.default, path: helpers_1.urls.check(url + helpers_1.urls.DISCLAIMER), parentPath: url, variant: "wide" })));
    };
    return AppFooter;
}(react_1.default.Component));
exports.default = react_router_dom_1.withRouter(AppFooter);
//# sourceMappingURL=AppFooter.js.map