import React from "react";
import styled from "styled-components";
import AutoClosableInput from "./AutoClosableInput";

interface IProps {
  title: string;
  onChange: (value: string) => void;
  padding?: number;
}

const LaneTitle = styled.h4`
  padding: ${({ padding = 0 }) => `${padding}px`};
  cursor: pointer;
`;

const EditableTitle: React.FC<IProps> = ({ title, onChange, padding = 0 }) => {
  const [isEdited, setIsEdited] = React.useState(false);

  return !isEdited ? (
    <LaneTitle padding={padding} onDoubleClick={() => setIsEdited(true)}>
      {title}
    </LaneTitle>
  ) : (
    <AutoClosableInput
      padding={padding}
      initialValue={title}
      onChange={value => {
        onChange(value);
        setIsEdited(false);
      }}
    />
  );
};

export default EditableTitle;
