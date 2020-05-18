import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useClickOutside from "../../hooks/useClickOutside";

interface IProps {
  initialValue: string;
  onChange: (value: string) => void;
  padding?: number;
}

const EditableLaneTitle = styled.input`
  padding: ${({ padding = 0 }) => `${padding}px`};
  box-sizing: border-box;
  outline: none;
  border: none;
  border-bottom: 2px solid blue;
  font-size: 100%;
`;

let VALUE;

const AutoClosableInput: React.FC<IProps> = props => {
  const { initialValue, onChange, padding = 0 } = props;

  const [value, setValue] = useState(initialValue);
  const ref = useClickOutside(() => onChange(VALUE));
  useEffect(() => ref.current.focus(), []);

  // fixme: temp trick (otherwise useClickOutside's handler uses old value)
  VALUE = value;

  return (
    <EditableLaneTitle
      ref={ref}
      padding={padding}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
      onKeyDown={event => {
        if (event.keyCode === 13) {
          // if enter pressed
          onChange(value);
        }
      }}
    />
  );
};

export default AutoClosableInput;
