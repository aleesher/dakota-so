export const formatValidationErrorText = (text: string, field: string) =>
  text
    ? `${field} ${text
        .split(" ")
        .slice(1)
        .join(" ")}`
    : "";
