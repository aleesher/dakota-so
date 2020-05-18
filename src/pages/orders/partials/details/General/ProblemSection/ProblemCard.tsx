import * as React from "react";
import _get from "lodash/get";
import _uniqueId from "lodash/uniqueId";

import { TextEditor } from "../../../../../../components";

import { IComment } from "../../../../../../components/withSOComments/models";
import { generateCurrentDate } from "../../../../../serviceOrder/helpers";

import {
  ProblemCard,
  ProblemWrapper,
  ProblemHead,
  ProblemTitle,
  ProblemText,
  ProblemParent,
  ProblemContent,
  ProblemDelete,
  ProblemIcon,
  ProblemEdit,
  ProblemEditIcon
} from "../../styles";
import {
  AddIcon,
  CardForm,
  FilledButton,
  ButtonWrapper,
  TransparentButton
} from "../../../../../serviceOrder/styles";

const ProblemCommentCard = ({
  comments,
  title,
  onAddComment,
  user,
  type,
  values,
  onDeleteComment,
  onEditComment
}) => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [selectedComment, setSelectedComment] = React.useState<IComment>();
  const editor = React.useRef(null);

  React.useEffect(() => {
    if (selectedComment) {
      const { text } = selectedComment;
      const { current: rteEditor } = editor;
      rteEditor.setValue(text);
    }
  }, [selectedComment]);

  const handleAddComment = async () => {
    try {
      const { current: rteEditor } = editor;
      if (selectedComment && !!selectedComment.id) {
        await onEditComment(
          { ...selectedComment, text: rteEditor.getValue() },
          user
        );
        setSelectedComment(null);
        setShowForm(false);

        return;
      }

      if (comments.length < 10 && rteEditor.hasValue()) {
        const firstName = _get(user, "companyEmployee.firstName");
        const lastName = _get(user, "companyEmployee.lastName");
        const newComment = {
          text: rteEditor.getValue(),
          author: `${firstName} ${lastName}`,
          date: generateCurrentDate(),
          orderCommentType: type,
          id: _uniqueId(type),
          isTemporary: !_get(values, "soId")
        };

        await onAddComment(newComment, user, values);
        setShowForm(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelectComment = (comment: IComment) => {
    setShowForm(true);
    setSelectedComment(comment);
  };

  return (
    <ProblemParent>
      <ProblemWrapper>
        <ProblemTitle>
          {title}
          <AddIcon
            type={showForm ? "opened" : "closed"}
            onClick={() => setShowForm(!showForm)}
          />
        </ProblemTitle>
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
        {comments.map(({ id, author, date, text, ...rest }: IComment) => (
          <ProblemCard>
            <ProblemHead>
              <ProblemText>
                {_get(author, "firstName")
                  ? `${_get(author, "firstName")} ${_get(author, "lastName")}`
                  : author}
                , {date} uur
              </ProblemText>
            </ProblemHead>

            <ProblemContent>
              <ProblemText dangerouslySetInnerHTML={{ __html: text }} />
            </ProblemContent>
            <ProblemDelete onClick={() => onDeleteComment(id)}>
              <ProblemIcon />
            </ProblemDelete>
            <ProblemEdit
              onClick={() =>
                handleSelectComment({ id, author, date, text, ...rest })
              }
            >
              <ProblemEditIcon />
            </ProblemEdit>
          </ProblemCard>
        ))}
      </ProblemWrapper>
    </ProblemParent>
  );
};

export default ProblemCommentCard;
