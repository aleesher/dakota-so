import React from "react";
import _get from "lodash/get";
import _difference from "lodash/difference";
import _union from "lodash/union";
import _isEmpty from "lodash/isEmpty";

import client from "../../../dev/apollo";
import { IComment, CommentCardTypes } from "./models";
import {
  getSOCommentCreationMutation,
  getSOCommentEditMutation
} from "./helpers";
import {
  CREATE_SO_COMMENT,
  DELETE_SO_COMMENT,
  FETCH_SO_COMMENTS,
  UPDATE_SO_COMMENT
} from "./queries";
import { generateCurrentDate } from "../../pages/serviceOrder/helpers";

export default function withSOComments() {
  return WrappedComponent => {
    class WrappedClass extends React.PureComponent<any, any> {
      state = {
        isLoading: false,
        comments: []
      };

      setIsLoading = (isLoading: boolean) => {
        this.setState({ isLoading });
      };

      handleGetComments = (comments: IComment[]) => {
        this.setState({ comments });
      };

      handleFetchComments = async (soId: string) => {
        try {
          const result = await client.query({
            query: FETCH_SO_COMMENTS,
            variables: { where: { serviceOrder: { id: soId } } }
          });

          this.setState({
            comments: _get(result, "data.serviceOrderComments")
          });
        } catch (err) {
          console.error(err.message);
        }
      };

      handleAddComments = async (soCode: string, authorCode: string) => {
        try {
          this.setIsLoading(true);
          const { comments } = this.state;
          const newComments = comments.filter(c => c.isTemporary);

          if (!_isEmpty(newComments)) {
            const result = await Promise.all([
              ...newComments.map(comment =>
                client.mutate(
                  getSOCommentCreationMutation(CREATE_SO_COMMENT, {
                    ...comment,
                    soCode,
                    authorCode
                  })
                )
              )
            ]);

            const createdComments = result.map(r =>
              _get(r, "data.createServiceOrderComment")
            );
            this.setState(() => ({
              comments: [
                ..._difference(comments, newComments),
                ...createdComments
              ],
              isLoading: false
            }));
          } else {
            this.setIsLoading(false);
          }
        } catch (err) {
          this.setIsLoading(false);
          console.warn("err", err);
        }
      };

      handleAddComment = async (
        comment: IComment,
        currentUser: object,
        formikValues: object
      ) => {
        try {
          this.setIsLoading(true);
          let newComment = comment;
          const soCode = _get(formikValues, "code");
          const soId = _get(formikValues, "soId");
          const authorCode = _get(currentUser, "companyEmployee.code", "");
          if (!!soCode || !!soId) {
            const result = await client.mutate(
              getSOCommentCreationMutation(CREATE_SO_COMMENT, {
                ...comment,
                soCode,
                soId,
                authorCode
              })
            );

            newComment = {
              ..._get(result, "data.createServiceOrderComment"),
              isTemporary: false
            };
          }

          this.setState(({ comments }) => ({
            comments: [...comments, newComment],
            isLoading: false
          }));
        } catch (err) {
          this.setIsLoading(false);
          console.warn("err", err);
        }
      };

      handleDeleteComment = async (id: string) => {
        try {
          this.setIsLoading(true);
          const { comments } = this.state;
          const comment = comments.find(c => c.id === id);
          if (!comment.isTemporary) {
            await client.mutate({
              mutation: DELETE_SO_COMMENT,
              variables: { where: { id } }
            });
          }

          this.setState({
            isLoading: false,
            comments: comments.filter(c => c.id !== id)
          });
        } catch (err) {
          this.setIsLoading(false);
          console.warn("err", err);
        }
      };

      handleEditComment = async (comment: IComment, currentUser: object) => {
        try {
          this.setIsLoading(true);
          const { id, text, isTemporary } = comment;
          const newDate = generateCurrentDate();
          if (isTemporary) {
            this.setState(({ comments }) => ({
              comments: comments.map(c =>
                c.id === id ? { ...c, text, date: newDate } : c
              ),
              isLoading: false
            }));

            return;
          }
          const authorCode = _get(currentUser, "companyEmployee.code", "");

          const result = await client.mutate(
            getSOCommentEditMutation(UPDATE_SO_COMMENT, {
              authorCode,
              id,
              text,
              date: newDate
            })
          );

          const updatedComment = {
            ..._get(result, "data.updateServiceOrderComment"),
            isTemporary: false
          };

          this.setState(({ comments }) => ({
            comments: comments.map(c => (c.id === id ? updatedComment : c)),
            isLoading: false
          }));
        } catch (err) {
          this.setIsLoading(false);
          console.warn("err", err);
        }
      };

      render() {
        const { comments = [], isLoading } = this.state;
        const problemComments = comments.filter(
          c => c.orderCommentType === CommentCardTypes.Problem_Text
        );
        const internalComments = _difference(comments, problemComments);
        const props = {
          ...this.props,
          isLoading,
          problemComments,
          internalComments,
          onDeleteComment: this.handleDeleteComment,
          onAddComment: this.handleAddComment,
          onAddComments: this.handleAddComments,
          onFetchComments: this.handleFetchComments,
          onEditComment: this.handleEditComment
        };

        return <WrappedComponent {...props} />;
      }
    }

    return WrappedClass;
  };
}
