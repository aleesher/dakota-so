import * as React from "react";
import _get from "lodash/get";
import _uniqueId from "lodash/uniqueId";
import Grid from "@material-ui/core/Grid";

import { withSOComments } from "../../../../../../components";
import { CommentCardTypes } from "../../../../../../components/withSOComments/models";
import {
  AddressCard,
  AddressHeader,
  AddressTitle,
  AddresAction
} from "../../styles";
import ProblemCard from "./ProblemCard";

const ProblemSection = ({
  onFetchComments,
  onAddComment,
  onEditComment,
  onDeleteComment,
  problemComments = [],
  internalComments = [],
  user,
  formikBag
}) => {
  React.useEffect(() => {
    onFetchComments(_get(formikBag, "values.id"));
  }, []);

  return (
    <AddressCard>
      <AddressHeader>
        <AddressTitle>Probleem omschrijving</AddressTitle>
        <AddresAction>Verberg</AddresAction>
      </AddressHeader>
      <Grid container>
        <Grid item xs={12}>
          <ProblemCard
            title="Omschrijving melder"
            comments={problemComments}
            onAddComment={onAddComment}
            user={user}
            type={CommentCardTypes.Problem_Text}
            values={_get(formikBag, "values", {})}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />
          <ProblemCard
            title="Interne tekst"
            comments={internalComments}
            onAddComment={onAddComment}
            user={user}
            type={CommentCardTypes.Internal_Text}
            values={_get(formikBag, "values", {})}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />
        </Grid>
      </Grid>
    </AddressCard>
  );
};

export default withSOComments()(ProblemSection);
