import _omit from "lodash/omit";

export const getSOCommentCreationMutation = (mutation, comment) => ({
  mutation,
  variables: {
    data: {
      ..._omit(comment, ["author", "id", "soCode", "isTemporary", "soId"]),
      serviceOrder: {
        connect: comment.soCode
          ? { code: comment.soCode }
          : { id: comment.soId }
      }
    }
  }
});

export const getSOCommentEditMutation = (
  mutation,
  { id, authorCode, text, date }
) => ({
  mutation,
  variables: {
    data: {
      authorCode,
      text,
      date
    },
    where: {
      id
    }
  }
});
