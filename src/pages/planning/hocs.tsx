import React from "react";
import { SECTION } from "./constants";
import { usePageDispatch, usePageState } from "./provider";
import { SelectableSectionWrapper } from "./styles";

interface IWithAbilityToSelectProps {
  section: SECTION;
  isLeft?: boolean;
}

function withAbilityToSelect<T>(
  Child: React.FC<T>
): React.FC<IWithAbilityToSelectProps & T> {
  const SelectableSection: React.FC<IWithAbilityToSelectProps & T> = props => {
    const { activeSection } = usePageState();
    const { setActiveSection } = usePageDispatch();

    const { section, isLeft = false, ...childProps } = props;

    return (
      <SelectableSectionWrapper
        isLeft={isLeft}
        isSelected={activeSection === section}
        onClick={() => setActiveSection(section)}
      >
        <Child {...(childProps as T)} />
      </SelectableSectionWrapper>
    );
  };
  SelectableSection.displayName = `WithAbilityToSelect(${Child.displayName ||
    Child.name})`;

  return SelectableSection;
}

export default withAbilityToSelect;
