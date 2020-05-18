"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup = __importStar(require("yup"));
var FIELD_IS_REQUIRED = "Veld is verplicht";
exports.default = yup.object({
    country: yup.string().required(FIELD_IS_REQUIRED),
    serviceType: yup.string().required(FIELD_IS_REQUIRED),
    orderType: yup.string().required(FIELD_IS_REQUIRED)
});
//# sourceMappingURL=validation.js.map