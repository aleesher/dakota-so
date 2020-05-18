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
exports.terminsValidationSchema = yup.object({
    code: yup.string().required(),
    status: yup.string(),
    description: yup.string().required(),
    roofCity: yup.string().required(),
    roofAddress: yup.string(),
    workingHours: yup.number(),
    yourReference: yup.string().required(),
    contactName: yup.string(),
    phoneNo: yup.string(),
    email: yup.string().email(),
    outsourced: yup.boolean(),
    lastExecutedBy: yup.string(),
    contactPersonCode: yup.string()
});
//# sourceMappingURL=validation.js.map