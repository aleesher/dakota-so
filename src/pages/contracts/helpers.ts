import _omit from "lodash/omit";
export const getCOServiceContractIndex = (mutation, serviceContractIndex) => ({
  mutation,
  variables: {
    data: {
      ..._omit(serviceContractIndex, [
        "id",
        "indexMethod",
        "indexTime",
        "indexedAmount",
        "indexFigure",
        "contactNumber",
        "contactAmount"
      ]),

      ...serviceContractIndex
    }
  }
});
