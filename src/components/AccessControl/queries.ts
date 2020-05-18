import { gql } from "apollo-boost";

export const CURRENT_USER_QUERY = gql`
  {
    currentUser {
      id
      roles {
        role {
          name
        }
      }
      soDetailsPromotedFields
      companyEmployee {
        id
        code
        countryRegionCode
        firstName
        lastName
        company {
          id
          code
          phone
          email
          name
          customer
          address
        }
      }
    }
  }
`;
