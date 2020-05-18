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
exports.dataValidationSchema = yup.object({
    startingDate: yup.string(),
    endingDate: yup.string(),
    terminationDate: yup.string(),
    lastIndexDate: yup.string()
});
//# sourceMappingURL=validation.js.map