import * as React from "react";
import moment from "moment";

import AddIcon from "@material-ui/icons/Add";

import { GeneralButton, DocumentCard } from "../../../../../components";
import { urls } from "../../../../../helpers";

import * as Styles from "../styles";
import { ACTIONS } from "./constants";

interface IProps {
  match: any;
}
export const Documents = ({ match }: IProps) => {
  const { url } = match;

  return (
    <Styles.DocumentWrapper>
      <Styles.DocumentHead>
        <Styles.DocumentSearch>
          <div className="alignIcon">
            <Styles.SearchIcons />
          </div>
          <Styles.Search placeholder="Vind een document" />
        </Styles.DocumentSearch>
        <Styles.DocumentButton>
          <GeneralButton title={"Wijzigingen opslaan"} url={"go"} />
        </Styles.DocumentButton>
      </Styles.DocumentHead>

      <Styles.DocumentBody>
        <DocumentCard
          match={match}
          format="Docs"
          fileName="Factuur regels"
          creationDate={moment("10-01-2020").toDate()}
          updationDate={moment("11-01-2020").toDate()}
          titleName="Document actie"
          titleLabel="Verwacht aantal uur"
          link={urls.check(url + urls.SO_DOCUMENT)}
          actions={ACTIONS}
        />
        <DocumentCard
          match={match}
          format="Docs"
          fileName="Factuur regels"
          creationDate={moment("10-01-2020").toDate()}
          updationDate={moment("11-01-2020").toDate()}
          titleName="Document actie"
          titleLabel="Verwacht aantal uur"
          link={urls.check(url + urls.SO_DOCUMENT)}
          actions={ACTIONS}
        />
        <DocumentCard
          match={match}
          format="Docs"
          fileName="Factuur regels"
          creationDate={moment("10-01-2020").toDate()}
          updationDate={moment("11-01-2020").toDate()}
          titleName="Document actie"
          titleLabel="Verwacht aantal uur"
          link={urls.check(url + urls.SO_DOCUMENT)}
          actions={ACTIONS}
        />
        <DocumentCard
          match={match}
          format="Docs"
          fileName="Factuur regels"
          creationDate={moment("10-01-2020").toDate()}
          updationDate={moment("11-01-2020").toDate()}
          titleName="Document actie"
          titleLabel="Verwacht aantal uur"
          link={urls.check(url + urls.SO_DOCUMENT)}
          actions={ACTIONS}
        />

        <Styles.DocumentFooter>
          <div className="footerText">
            <AddIcon />
            <p className="footText">Document toevoegen</p>
          </div>
        </Styles.DocumentFooter>
      </Styles.DocumentBody>
    </Styles.DocumentWrapper>
  );
};
