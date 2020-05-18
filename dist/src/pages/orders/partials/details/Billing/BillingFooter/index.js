"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var components_1 = require("../../../../../../components");
var Styles = __importStar(require("../../styles"));
exports.BillingFooter = function () {
    return (React.createElement(Styles.Billing, null,
        React.createElement(components_1.GeneralButton, { url: "#", title: "Beoordeeld" })));
};
//# sourceMappingURL=index.js.map