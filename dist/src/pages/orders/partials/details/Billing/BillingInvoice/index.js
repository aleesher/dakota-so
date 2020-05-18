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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Styles = __importStar(require("../../styles"));
exports.BillingInvoice = function () {
    return (React.createElement(Styles.AddressCard, null,
        React.createElement(Styles.AddressHeader, null,
            React.createElement(Styles.AddressTitle, null, "Factuur teksten"),
            React.createElement(Styles.AddresAction, null, "Verberg")),
        React.createElement(Grid_1.default, { container: true },
            React.createElement(Grid_1.default, { item: true, xs: 12 },
                React.createElement(Styles.ProblemParent, null,
                    React.createElement(Styles.ProblemWrapper, null,
                        React.createElement(Styles.ProblemTitle, null, "Factuur tekst"),
                        React.createElement(Styles.ProblemTextarea, { multiline: true, fullWidth: true, defaultValue: "Lekkage aan de linkerzijde van het dak, oorzaak is onbekend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit vel tortor viverra gravida sit amet at nisi.Cras quis dolor efficitur erat hendrerit ornare." })),
                    React.createElement(Styles.ProblemDelete, null,
                        React.createElement(Styles.ProblemIcon, null))),
                React.createElement(Styles.ProblemParent, null,
                    React.createElement(Styles.ProblemWrapper, null,
                        React.createElement(Styles.ProblemTitle, null, "Vanuit Serviceorder"),
                        React.createElement(Styles.ProblemTextarea, { multiline: true, fullWidth: true, defaultValue: "Lekkage aan de linkerzijde van het dak, oorzaak is onbekend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut velit vel tortor viverra gravida sit amet at nisi.Cras quis dolor efficitur erat hendrerit ornare." })),
                    React.createElement(Styles.ProblemDelete, null,
                        React.createElement(Styles.ProblemIcon, null)))))));
};
//# sourceMappingURL=index.js.map