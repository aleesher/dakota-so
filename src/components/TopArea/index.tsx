import React, { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { SideFilterContext } from "dakota-portal/dist/components/SideFilter/SideFilterPage";
import FiltersActionsContext from "../../helpers/filters/FiltersActionsContext";
import DraggableGroup from "../DraggableGroup";
import * as Styled from "./styles";
import DnD from "../../helpers/DnD";

const TopArea: React.FC = () => {
  const { setFilterExpanded } = React.useContext(SideFilterContext);
  const { groups, actions } = useContext(FiltersActionsContext);

  const handleDragEnd = async result => {
    const { type, source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (type === "GROUP") {
      await actions.group.move(source, destination);
    } else {
      await actions.filter.move(source, destination);
    }
  };

  return (
    <Styled.TopWrapper>
      <Styled.CreateButtonsWrapper>
        <Styled.CreateButton onClick={actions.group.create}>
          Create Group
        </Styled.CreateButton>

        <Styled.CreateButton
          onClick={() => {
            actions.filter.addNew();
            setFilterExpanded(true);
          }}
        >
          Create Filter
        </Styled.CreateButton>
      </Styled.CreateButtonsWrapper>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-group" type="GROUP">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={DnD.getListStyle(snapshot.isDraggingOver)}
            >
              {(groups || []).map((group, index) => (
                <DraggableGroup key={group.id} index={index} group={group} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Styled.TopWrapper>
  );
};

export default TopArea;
