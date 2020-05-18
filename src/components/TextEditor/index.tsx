import React from "react";
import RichTextEditor from "react-rte";

import { TOOLBAR_CONFIG } from "./constants";

import { TextEditorWrapper } from "./styles";

interface IProps {
  onChange?: (val: string) => void;
}

interface IState {
  value: string;
}

class TextEditor extends React.Component<IProps, IState> {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  onChange = value => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) {
      onChange(value.toString("html"));
    }
  };

  hasValue = () => {
    const { value } = this.state;
    return value
      .getEditorState()
      .getCurrentContent()
      .hasText();
  };

  getValue = () => {
    const { value } = this.state;
    return value.toString("html");
  };

  setValue = value => {
    this.setState({
      value: RichTextEditor.createValueFromString(value, "html")
    });
  };

  render() {
    return (
      <TextEditorWrapper>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          toolbarConfig={TOOLBAR_CONFIG}
          editorClassName="rte-editor"
          className="rte-container-announcement"
        />
      </TextEditorWrapper>
    );
  }
}

export default TextEditor;
