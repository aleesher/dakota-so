import * as yup from "yup";

export const clientValidationSchema = yup.object({
  customerCode: yup.string(),
  name: yup.string(),
  name2: yup.string(),
  address: yup.string(),
  postcode: yup.string(),
  city: yup.string()
});
