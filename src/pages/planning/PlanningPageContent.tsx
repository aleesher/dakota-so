import React, { useEffect, useRef, useState } from "react";
import EmployeeSection from "./partials/EmployeeSection";
import MessageCenter from "./partials/MessageCenter";
import OrderSection from "./partials/OrderSection";
import SettingsPopup from "./partials/SettingsPopup";
import PlanningTopMenu from "./partials/TopMenu";
import {
  useDataState,
  usePageDispatch,
  usePageState,
  useSettingsDispatch,
  useSettingsState,
  useDataDispatch
} from "./provider";
import { withLockEntities } from "../../components";
import { Divider, PlanningPageContentStyled } from "./styles";

const PlanningPageContent = ({ lockedOrdersIds, unlockedOrdersIds }) => {
  const { messageCenter, fixedAmountOfEmployees } = useSettingsState();
  const { fetchSettings } = useSettingsDispatch();
  const { fetchFields, setPageWidth } = usePageDispatch();
  const { orders } = useDataState();
  const { lockOrders } = useDataDispatch();
  const { fieldOptions } = usePageState();
  const [showSettings, setShowSettings] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    fetchSettings();
    fetchFields();
  }, []);

  useEffect(() => {
    if (ref && ref.current) {
      setPageWidth(ref.current.clientWidth);
    }
  }, [ref]);

  useEffect(() => {
    if (fieldOptions.length !== 0) {
      setPageWidth(ref.current.clientWidth);
    }
  }, [fixedAmountOfEmployees, orders, fieldOptions]);

  useEffect(() => {
    lockOrders(lockedOrdersIds, true);
  }, [lockedOrdersIds]);

  useEffect(() => {
    lockOrders(unlockedOrdersIds, false);
  }, [unlockedOrdersIds]);

  return (
    <PlanningPageContentStyled ref={ref}>
      <PlanningTopMenu onClickSettingsButton={() => setShowSettings(true)} />

      <Divider />

      {messageCenter.isOpen && <MessageCenter />}

      <EmployeeSection />

      <Divider />

      <OrderSection />

      <SettingsPopup
        isOpen={showSettings}
        onSave={() => setShowSettings(false)}
        onClose={() => setShowSettings(false)}
      />
    </PlanningPageContentStyled>
  );
};

export default withLockEntities({ entity: "planning" })(PlanningPageContent);
