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
exports.billingValidationSchema = yup.object({
    invoiceType: yup.string(),
    installmentType: yup.string(),
    serviceIndexMethod: yup.string(),
    installmentsBasedOnProgress: yup.boolean(),
    maintenanceInvoiceMgtGetContractAmntByDateRecWorkDate: yup.number(),
    initialSalesAmount: yup.number(),
    totalCost: yup.number(),
    currencyCode: yup.string(),
    billToCustomerNoContr: yup.string(),
    billToNameContract: yup.string(),
    billToAddressContract: yup.string(),
    billToPostCodeContract: yup.string(),
    billToCityContract: yup.string()
});
//# sourceMappingURL=validation.js.map