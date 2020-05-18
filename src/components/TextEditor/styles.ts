import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const TextEditorWrapper = styled.div`
  .DraftEditor-root {
    font-family: inherit;
  }

  && {
    .rte-editor {
      font-family: "Ubuntu", sans-serif;

      .public-DraftStyleDefault-ltr {
        min-height: 200px;
      }
    }
  }
`;
