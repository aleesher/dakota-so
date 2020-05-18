import * as yup from "yup";

export const terminsValidationSchema = yup.object({
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
