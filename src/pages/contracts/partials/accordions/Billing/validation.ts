import * as yup from "yup";

export const billingValidationSchema = yup.object({
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
