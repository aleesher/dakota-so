import * as React from "react";

import MuiRemoveIcon from "@material-ui/icons/Remove";
import MuiAddIcon from "@material-ui/icons/Add";

import Collapse from "@material-ui/core/Collapse";

import * as Styled from "../styles";
import { Title } from "../../../../components/ExtendedCard";
import ExpandedDetails from "../../../../components/ExpandedDetails";

interface IProps {
  title: string;
  full?: boolean;
  children: any;
  linkId?: string;
  linkURL?: string;
  expanded: boolean;
  hasSwitch?: boolean;
  editView?: any;
  onEdit?: boolean;
  tb?: boolean;
  count?: number;
  triggerEdit?: any;
  onExpandTriggered: any;
}

const LevelItem = ({
  children,
  title,
  full = false,
  expanded,
  onExpandTriggered,
  hasSwitch,
  linkId,
  linkURL,
  editView,
  onEdit,
  triggerEdit,
  tb,
  count
}: IProps) => {
  const [activeTab, switchTab] = React.useState(true);

  return (
    <Styled.LevelCard full={full}>
      <Styled.LevelHeader>
        <Styled.RightItem>
          <Title count={count}>{title}</Title>
          {linkId && <Styled.ItemLink to={linkURL}>{linkId}</Styled.ItemLink>}
          {count && <Styled.TitleCount>{count}</Styled.TitleCount>}
        </Styled.RightItem>
        <Styled.RightItem>
          {hasSwitch && expanded && (
            <Styled.ViewSwitchContainer>
              <Styled.ViewSwitchButton
                active={activeTab}
                onClick={() => switchTab(false)}
              >
                Current
              </Styled.ViewSwitchButton>
              <Styled.ViewSwitchButton
                active={!activeTab}
                onClick={() => switchTab(true)}
              >
                History
              </Styled.ViewSwitchButton>
            </Styled.ViewSwitchContainer>
          )}
          {expanded && !onEdit && (
            <React.Fragment>
              <Styled.CollapseLink onClick={() => onExpandTriggered(false)}>
                <MuiRemoveIcon />
              </Styled.CollapseLink>
              {!onEdit && <Styled.EditIcon onClick={() => triggerEdit(true)} />}
            </React.Fragment>
          )}
          {!expanded && !onEdit && (
            <Styled.CollapseLink onClick={() => onExpandTriggered(true)}>
              <MuiAddIcon />
            </Styled.CollapseLink>
          )}
        </Styled.RightItem>
      </Styled.LevelHeader>

      <Collapse in={!onEdit && expanded}>
        <Styled.LevelData tb={tb}>{children}</Styled.LevelData>
        <ExpandedDetails moreText={"Alles zien"} lessText={"Lat minder zien"} />
      </Collapse>
      <Collapse in={onEdit}>
        <Styled.LevelData edit>{editView}</Styled.LevelData>
      </Collapse>
    </Styled.LevelCard>
  );
};

export default LevelItem;
