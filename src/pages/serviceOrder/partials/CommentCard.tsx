import React from "react";
import _get from "lodash/get";
import _uniqueId from "lodash/uniqueId";

import TextEditor from "../../../components/TextEditor";
import { generateCurrentDate } from "../helpers";
import {
  CommentCardType,
  IComment
} from "../../../components/withSOComments/models";

import {
  FormCard,
  CardContent,
  CardTitle,
  CommentWrapper,
  CommentInfo,
  CommentText,
  CommentRemoveIcon,
  CardForm,
  AddIcon,
  FilledButton,
  ButtonWrapper,
  TransparentButton
} from "../styles";

interface IProps {
  title: string;
  type: CommentCardType;
  user: object;
  onDeleteComment: (id: string) => void;
  onAddComment: (comment: IComment, user: object, values: object) => void;
  values: object;
  comments: IComment[];
}

export default ({
  title = "",
  type,
  user,
  values,
  onDeleteComment,
  onAddComment,
  comments
}: IProps) => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [truncatedIdx, setTruncatedIdx] = React.useState<number>(-1);
  const editor = React.useRef(null);

  const handleDeleteComment = async (id: string) => {
    onDeleteComment(id);
  };

  const handleAddComment = () => {
    const { current: rteEditor } = editor;
    if (comments.length < 10 && rteEditor.hasValue()) {
      const firstName = _get(user, "companyEmployee.firstName");
      const lastName = _get(user, "companyEmployee.lastName");
      const newComment = {
        text: rteEditor.getValue(),
        author: `${firstName} ${lastName}`,
        date: generateCurrentDate(),
        orderCommentType: type,
        id: _uniqueId(type),
        isTemporary: !_get(values, "code")
      };

      onAddComment(newComment, user, values);

      setShowForm(false);
    }
  };

  const handleToggleTruncated = (idx: number) => {
    const i = idx === truncatedIdx ? -1 : idx;
    setTruncatedIdx(i);
  };

  return (
    <FormCard>
      <CardTitle>
        {title}
        <AddIcon
          type={showForm ? "opened" : "closed"}
          onClick={() => setShowForm(!showForm)}
        />
      </CardTitle>
      <CardContent>
        {showForm && (
          <CardForm xs={12}>
            <TextEditor ref={editor} />
            <ButtonWrapper marginTop={20}>
              <TransparentButton onClick={() => setShowForm(false)}>
                Annuleren
              </TransparentButton>
              <FilledButton onClick={handleAddComment}>Toevoegen</FilledButton>
            </ButtonWrapper>
          </CardForm>
        )}
        {comments.map(({ text, author, date, id }: IComment, i: number) => (
          <CommentWrapper key={`comment_${title}_${i}`}>
            <CommentInfo>
              {_get(author, "firstName")
                ? `${_get(author, "firstName")} ${_get(author, "lastName")}`
                : author}
              , {date} uur
            </CommentInfo>
            <CommentText
              onClick={() => handleToggleTruncated(i)}
              dangerouslySetInnerHTML={{ __html: text }}
              isTruncated={!(i === truncatedIdx)}
            />
            <CommentRemoveIcon onClick={() => handleDeleteComment(id)} />
          </CommentWrapper>
        ))}
      </CardContent>
    </FormCard>
  );
};
