"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var loadable_1 = __importDefault(require("../../helpers/loadable"));
var Loader_1 = __importDefault(require("dakota-portal/dist/components/Loader"));
exports.default = loadable_1.default(function () { return Promise.resolve().then(function () { return __importStar(require("./index")); }); }, {
    // @ts-ignore
    fallback: react_1.default.createElement(Loader_1.default, null)
});
//# sourceMappingURL=Loadable.js.map