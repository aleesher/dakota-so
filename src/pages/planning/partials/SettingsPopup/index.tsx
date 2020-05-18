import React, { useState } from "react";
import CustomPopup from "../components/CustomPopup";
import ColorSettings from "./ColorSettings";
import DeadlineSettings from "./DeadlineSettings";
import InfoboxSettings from "./InfoboxSettings";
import WorkOrderSettings from "./WorkOrderSettings";
import { SettingsTab, SettingsTabsWrapper } from "./styles";

interface ITab {
  title: string;
  component: React.FC<{ onSave: () => void }>;
}

const TABS: ITab[] = [
  {
    title: "Werkorder tekst",
    component: WorkOrderSettings
  },
  {
    title: "Deadline",
    component: DeadlineSettings
  },
  {
    title: "Infobox tekst",
    component: InfoboxSettings
  },
  {
    title: "Kleur Instellingen",
    component: ColorSettings
  }
];

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const SettingsPopup: React.FC<IProps> = ({
  isOpen = false,
  onClose,
  onSave
}) => {
  const [activeTab, setActiveTab] = useState<ITab>(TABS[0]);

  const Content = activeTab.component;

  return (
    <CustomPopup title="Algemene Instellingen" open={isOpen} onClose={onClose}>
      <div>
        <SettingsTabsWrapper>
          {TABS.map(tab => (
            <SettingsTab
              key={tab.title}
              isActive={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </SettingsTab>
          ))}
        </SettingsTabsWrapper>

        <Content onSave={onSave} />
      </div>
    </CustomPopup>
  );
};

export default SettingsPopup;
