import * as yup from "yup";

export default yup.object({
  workOrderNumber: yup.string().required("Veld is verplicht"),
  employee: yup.string().required("Veld is verplicht"),
  time: yup.string().required("Veld is verplicht"),
  leadTime: yup.string().required("Veld is verplicht"),
  expectedNumberOfHours: yup.string().required("Veld is verplicht")
});
