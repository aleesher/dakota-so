"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var RemoveCircle_1 = __importDefault(require("@material-ui/icons/RemoveCircle"));
var CheckCircle_1 = __importDefault(require("@material-ui/icons/CheckCircle"));
var Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
var Info_1 = __importDefault(require("@material-ui/icons/Info"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.TableIcon = function (Icon, color, size) { return styled_components_1.default(Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  && {\n    font-size: ", "px;\n    color: ", ";\n  }\n"], ["\n  && {\n    font-size: ", "px;\n    color: ", ";\n  }\n"])), size || 22, color); };
exports.IconRemoveCircle = exports.TableIcon(RemoveCircle_1.default, Colors_1.default.cinnabar);
exports.IconCheckCircle = exports.TableIcon(CheckCircle_1.default, Colors_1.default.limerick);
exports.IconWarning = exports.TableIcon(Warning_1.default, Colors_1.default.cinnabar);
exports.IconInfo = exports.TableIcon(Info_1.default, Colors_1.default.fiord);
var Done_1 = require("./Done");
exports.DoneIcon = Done_1.default;
var Drop_1 = require("./Drop");
exports.DropIcon = Drop_1.default;
var Helmet_1 = require("./Helmet");
exports.HelmetIcon = Helmet_1.default;
var Shield_1 = require("./Shield");
exports.ShieldIcon = Shield_1.default;
var templateObject_1;
//# sourceMappingURL=index.js.map