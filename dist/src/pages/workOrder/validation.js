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
exports.default = yup.object({
    workOrderNumber: yup.string().required("Veld is verplicht"),
    employee: yup.string().required("Veld is verplicht"),
    time: yup.string().required("Veld is verplicht"),
    leadTime: yup.string().required("Veld is verplicht"),
    expectedNumberOfHours: yup.string().required("Veld is verplicht")
});
//# sourceMappingURL=validation.js.map