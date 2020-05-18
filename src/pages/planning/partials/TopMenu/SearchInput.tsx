import React, { useMemo, useState } from "react";
import { SECTION } from "../../constants";
import { usePageDispatch, usePageState } from "../../provider/page";
import { useSettingsState } from "../../provider/settings";
import { SearchInputStyled } from "./styles";

const SearchInput: React.FC = () => {
  const { timeUnit } = useSettingsState();
  const { activeSection } = usePageState();
  const { setSearchText } = usePageDispatch();
  const [text, setText] = useState<string>("");

  const disabled = useMemo(() => {
    if (activeSection === SECTION.NONE) {
      return true;
    }

    if (timeUnit !== "day" && activeSection === SECTION.EMPLOYEE_CALENDAR) {
      return true;
    }

    return false;
  }, [activeSection, timeUnit]);

  const handleChange = e => {
    setText(e.currentTarget.value);
    setSearchText(e.currentTarget.value);
  };

  return (
    <SearchInputStyled
      placeholder="Zoeken"
      value={text}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SearchInput;
