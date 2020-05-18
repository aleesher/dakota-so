import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { SideFilterContext } from "dakota-portal/dist/components/SideFilter/SideFilterPage";
import FiltersActionsContext from "../helpers/filters/FiltersActionsContext";
import { TFilter } from "../helpers/filters/types";
import DnD from "../helpers/DnD";

import StatBox from "./StatBox";
import Delete from "@material-ui/icons/Delete";
import PlusOne from "@material-ui/icons/PlusOne";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

interface IProps extends RouteComponentProps {
  index: number;
  filter: TFilter;
  groupId: string;
}

const RoundIconWrapper = styled.div<{ color: string }>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => color || "black"};
  cursor: pointer;
  background-color: white;
  width: 32px;
  height: 32px;
  border-radius: 18px;
  border: 2px solid ${({ color }) => color || "black"};
`;

const DraggableFilter: React.FC<IProps> = ({
  filter,
  index,
  groupId,
  history,
  match
}) => {
  const [showButtons, setShowButtons] = useState(false);
  const { setFilterExpanded } = React.useContext(SideFilterContext);
  const { actions, selectedFilter } = useContext(FiltersActionsContext);
  const { url } = match;
  return (
    <Draggable draggableId={filter.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            position: "relative",
            ...DnD.getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )
          }}
          onDoubleClick={() => {
            actions.filter.select(filter.id, groupId);
            setFilterExpanded(true);
          }}
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
        >
          {showButtons && (
            <>
              <RoundIconWrapper
                style={{ top: 0, left: 0 }}
                color={filter.color}
                onClick={() => {
                  actions.filter.clone(filter.id, groupId);
                  setFilterExpanded(true);
                }}
              >
                <PlusOne />
              </RoundIconWrapper>

              <RoundIconWrapper
                style={{ top: 0, right: 0 }}
                color={filter.color}
                onClick={async () => {
                  if (filter.id === selectedFilter.id) {
                    setFilterExpanded(false);
                  }
                  await actions.filter.delete(filter.id, groupId);
                }}
              >
                <Delete />
              </RoundIconWrapper>

              <RoundIconWrapper
                style={{ top: 40, right: 0 }}
                color={filter.color}
                onClick={async () => {
                  if (filter.id === selectedFilter.id) {
                    setFilterExpanded(false);
                  }
                  await actions.filter.redirect(filter, history, url);
                }}
              >
                <ArrowRight />
              </RoundIconWrapper>
            </>
          )}

          <StatBox
            progress={filter.amount}
            title={filter.name}
            color={filter.color}
          />
        </div>
      )}
    </Draggable>
  );
};

export default withRouter(DraggableFilter);
