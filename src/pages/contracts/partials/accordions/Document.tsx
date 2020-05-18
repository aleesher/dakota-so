import React from "react";
import moment from "moment";

import AddIcon from "@material-ui/icons/Add";

import { AccordionLink } from "dakota-portal/dist/components";

import { DocumentCard, GeneralButton } from "../../../../components";
import { urls } from "../../../../helpers";

import {
  AccordionContainer,
  DocumentWrapper,
  DocumentHead,
  DocumentSearch,
  DocumentButton,
  DocumentBody,
  DocumentFooter,
  Search,
  SearchIcons
} from "../../styles";
import { DOCUMENT_ACTIONS } from "../../constants";

interface IProps {
  isLocked: boolean;
  match: any;
  refs: any;
  activeLinks: string[];
  onClick: (active: string) => void;
}

const Document = ({ isLocked, match, refs, activeLinks, onClick }: IProps) => {
  const { url } = match;

  return (
    <AccordionLink
      ref={refs.document}
      label="Documenten"
      link="document"
      isActive={activeLinks.includes("document")}
      onClick={() => onClick("document")}
    >
      <AccordionContainer>
        <DocumentWrapper>
          <DocumentHead>
            <DocumentSearch>
              <SearchIcons />
              <Search placeholder="Vind een document" />
            </DocumentSearch>
            <DocumentButton>
              <GeneralButton title={"Wijzigingen opslaan"} url={"go"} />
            </DocumentButton>
          </DocumentHead>

          <DocumentBody>
            <DocumentCard
              match={match}
              format="Docs"
              fileName="Factuur regels"
              creationDate={moment("10-01-2020").toDate()}
              updationDate={moment("11-01-2020").toDate()}
              titleName="Document actie"
              titleLabel="Verwacht aantal uur"
              link={urls.check(url + urls.SO_DOCUMENT)}
              actions={DOCUMENT_ACTIONS}
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
              actions={DOCUMENT_ACTIONS}
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
              actions={DOCUMENT_ACTIONS}
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
              actions={DOCUMENT_ACTIONS}
            />

            <DocumentFooter>
              <div className="footerText">
                <AddIcon />
                <p className="footText">Document toevoegen</p>
              </div>
            </DocumentFooter>
          </DocumentBody>
        </DocumentWrapper>
      </AccordionContainer>
    </AccordionLink>
  );
};

export default Document;
