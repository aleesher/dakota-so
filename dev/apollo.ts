import getApolloClient from "dakota-portal/dist/apollo";
// todo
const API_GATEWAY_URL =
  process.env.API_GATEWAY_URL ||
  "https://dakota2-api-dev.secondcompany.nl/graphql";

// const API_GATEWAY_URL = "http://localhost:8080/graphql";

const apolloClient = getApolloClient(API_GATEWAY_URL, true, true);

export default apolloClient;
