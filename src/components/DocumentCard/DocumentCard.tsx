import * as React from "react";
import moment from "moment";

import ActionMenu, { IAction } from "dakota-portal/dist/components/ActionMenu";

import DocumentModal from "./modal";
import * as icons from "./icons";
import * as Styles from "./styles";
import { DOC_CATEGORY_OPTIONS } from "./modal/mock";

interface IProps {
  fileName: string;
  creationDate: Date;
  updationDate: Date;
  titleName: string;
  titleLabel: string;
  format: "Docs" | "Excel" | "Pdf";
  link: string;
  actions: IAction[];
  match: any;
}

const DocumentCard = ({
  fileName,
  creationDate,
  updationDate,
  titleName,
  titleLabel,
  format,
  actions,
  link,
  match
}: IProps) => {
  const Icon = icons[format];

  return (
    <>
      <Styles.DocumentContent>
        <Styles.modalWrapper to={link}>
          <Styles.DocumentLeft>
            <Styles.DocumentImg>
              <Icon />
            </Styles.DocumentImg>
            <Styles.DocumentDetails>
              <p className="filename">{fileName}</p>
              <p className="filecreated">
                Creation date: {moment(creationDate).format("DD-MM-YYYY")}
              </p>
              <p className="fileupdated">
                Updated: {moment(updationDate).format("DD-MM-YYYY")}
              </p>
              <p className="filetime">Updated Time: 12:00</p>
            </Styles.DocumentDetails>
          </Styles.DocumentLeft>
        </Styles.modalWrapper>
        <Styles.DocumentRight>
          <Styles.modalWrapper to={link}>
            <p className="titleName">{titleName}</p>
            <p className="titleLabel">{titleLabel}</p>
          </Styles.modalWrapper>
          <Styles.DocumentFormWrapper>
            <Styles.FormSelect
              classNamePrefix="type-select"
              options={DOC_CATEGORY_OPTIONS}
              value={{ value: "Met factuur mee", label: "Met factuur mee" }}
            />
          </Styles.DocumentFormWrapper>

          <Styles.MenuCard>
            <ActionMenu alwaysVisible={true} alignMenu="left" items={actions} />
          </Styles.MenuCard>
        </Styles.DocumentRight>
      </Styles.DocumentContent>

      <Styles.ModalBox
        component={() => (
          <DocumentModal
            fileName={fileName}
            creationDate={creationDate}
            updationDate={updationDate}
            format={format}
          />
        )}
        path={link}
        parentPath={match.url}
        variant="wide"
        outDelay={300}
      />
    </>
  );
};

export default DocumentCard;
