import gql from "graphql-tag";

export const CREATE_SO_COMMENT = gql`
  mutation createSOComment($data: ServiceOrderCommentCreateInput!) {
    createServiceOrderComment(data: $data) {
      id
      author {
        id
        firstName
        lastName
      }
      serviceOrder {
        id
        code
      }
      orderCommentType
      text
      date
    }
  }
`;

export const DELETE_SO_COMMENT = gql`
  mutation deleteSOComment($where: ServiceOrderCommentWhereUniqueInput!) {
    deleteServiceOrderComment(where: $where) {
      id
    }
  }
`;

export const FETCH_SO_COMMENTS = gql`
  query soComments($where: ServiceOrderCommentWhereInput) {
    serviceOrderComments(where: $where) {
      id
      authorCode
      author {
        id
        firstName
        lastName
      }
      serviceOrder {
        id
        code
      }
      orderCommentType
      text
      date
    }
  }
`;

export const UPDATE_SO_COMMENT = gql`
  mutation updateSOComment(
    $data: ServiceOrderCommentUpdateInput!
    $where: ServiceOrderCommentWhereUniqueInput!
  ) {
    updateServiceOrderComment(data: $data, where: $where) {
      id
      author {
        id
        firstName
        lastName
      }
      serviceOrder {
        id
        code
      }
      orderCommentType
      text
      date
    }
  }
`;
