import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import CustomDragLayer from "./CustomDragLayer";
import PlanningPageContent from "./PlanningPageContent";
import { PlanningContextProvider } from "./provider";

const Planning = () => (
  <DndProvider backend={Backend}>
    <PlanningContextProvider>
      <CustomDragLayer />
      <PlanningPageContent />
    </PlanningContextProvider>
  </DndProvider>
);

export default Planning;
