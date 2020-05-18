import * as yup from "yup";

export const dataValidationSchema = yup.object({
  startingDate: yup.string(),
  endingDate: yup.string(),
  terminationDate: yup.string(),
  lastIndexDate: yup.string()
});
