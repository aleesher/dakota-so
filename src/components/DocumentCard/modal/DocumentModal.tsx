import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { withRouter } from "react-router";
import moment from "moment";

import ReplyIcon from "@material-ui/icons/Reply";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import CloseIcon from "@material-ui/icons/Close";
import { DOC_CATEGORY_OPTIONS } from "./mock";

import {
  ActionMenu,
  ActionWrapper,
  ActionWrappers,
  ActionLabel,
  Documentmodals
} from "./styles";
import * as Styles from "../styles";
import * as icons from "../icons";

interface IProps {
  fileName: string;
  creationDate: Date;
  updationDate: Date;
  format: "Docs" | "Excel" | "Pdf";
  // navigation
  history: any;
  match: any;
  location: any;
}

const DocumentModal = ({
  fileName,
  creationDate,
  updationDate,
  format,
  history
}: IProps) => {
  const [pageNumber, setpageNumber] = useState(1);
  const [numPages, setnumPages] = useState(1);

  const Icon = icons[format];

  return (
    <Documentmodals>
      <Styles.DocumentContent>
        <Styles.DocumentLeft>
          <Styles.DocumentImg>
            <Icon />
          </Styles.DocumentImg>
          <Styles.DocumentDetails>
            <p className="filename">Factuur regels</p>
            <p className="filecreated">Creation date: 10-1-2020</p>
            <p className="fileupdated">Updated: 11-1-2020</p>
            <p className="filecreated">Updated Time: 12:00</p>
          </Styles.DocumentDetails>
        </Styles.DocumentLeft>

        <Styles.DocumentRight>
          <ActionWrapper>
            <ActionWrappers>
              <ReplyIcon className="replyIcon" />
              <ActionMenu>Delen</ActionMenu>
            </ActionWrappers>

            <ActionWrappers>
              <DeleteRoundedIcon className="replyIcon" />
              <ActionMenu>Verwijderen</ActionMenu>
            </ActionWrappers>

            <ActionWrappers>
              <GetAppRoundedIcon className="replyIcon" />
              <ActionMenu>Downloaden</ActionMenu>
            </ActionWrappers>
          </ActionWrapper>

          <Styles.DocumentFormWrapper>
            <ActionLabel>
              <p className="ActionTitle">Actie</p>
              <Styles.FormSelect
                classNamePrefix="type-select"
                options={DOC_CATEGORY_OPTIONS}
                value={{ value: "Met factuur mee", label: "Met factuur mee" }}
              />
            </ActionLabel>
          </Styles.DocumentFormWrapper>

          <Styles.DocumentClose>
            <CloseIcon onClick={history.goBack}></CloseIcon>
          </Styles.DocumentClose>
        </Styles.DocumentRight>
      </Styles.DocumentContent>

      <Styles.DocumentContainer>
        <Styles.DocumentPreview>
          <Document
            file="https://res.cloudinary.com/sleemkeen/image/upload/v1582007970/pdf-test.pdf"
            onLoadSuccess={() => null}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Styles.DocumentPreview>
      </Styles.DocumentContainer>
    </Documentmodals>
  );
};

export default withRouter(DocumentModal);
