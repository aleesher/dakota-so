import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Delete from "@material-ui/icons/Delete";
import FiltersActionsContext from "../helpers/filters/FiltersActionsContext";
import { TFilterGroup } from "../helpers/filters/types";
import DraggableFilter from "./DraggableFilter";
import EditableTitle from "./EditableTitle";
import DnD from "../helpers/DnD";

interface IProps {
  index: number;
  group: TFilterGroup;
}

const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  user-select: none;
  height: 168px;
`;
export const GroupTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const DraggableGroup: React.FC<IProps> = ({ group, index }) => {
  const { actions } = useContext(FiltersActionsContext);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <Draggable draggableId={group.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={DnD.getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
        >
          <GroupTitleWrapper {...provided.dragHandleProps}>
            <EditableTitle
              title={group.name}
              onChange={async newName => {
                await actions.group.rename(group.id, newName);
              }}
              padding={15}
            >
              {group.name}
            </EditableTitle>
            {showButtons && (
              <Delete
                onClick={async () => {
                  await actions.group.delete(group.id);
                }}
              />
            )}
          </GroupTitleWrapper>

          <Droppable
            droppableId={group.id}
            direction="horizontal"
            type="FILTER"
          >
            {(provided, snapshot) => (
              <StatWrapper
                ref={provided.innerRef}
                style={DnD.getListStyle(snapshot.isDraggingOver)}
              >
                {group.filters.map((filter, index) => (
                  <DraggableFilter
                    key={filter.id}
                    filter={filter}
                    index={index}
                    groupId={group.id}
                  />
                ))}
                {provided.placeholder}
              </StatWrapper>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableGroup;
