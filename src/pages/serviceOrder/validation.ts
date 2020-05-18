import * as yup from "yup";

const FIELD_IS_REQUIRED = "Veld is verplicht";

export default yup.object({
  country: yup.string().required(FIELD_IS_REQUIRED),
  serviceType: yup.string().required(FIELD_IS_REQUIRED),
  orderType: yup.string().required(FIELD_IS_REQUIRED)
});
