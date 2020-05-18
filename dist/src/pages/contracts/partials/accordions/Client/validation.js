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
exports.clientValidationSchema = yup.object({
    customerCode: yup.string(),
    name: yup.string(),
    name2: yup.string(),
    address: yup.string(),
    postcode: yup.string(),
    city: yup.string()
});
//# sourceMappingURL=validation.js.map