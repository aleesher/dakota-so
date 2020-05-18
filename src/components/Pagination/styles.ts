import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const PaginationWrapper = styled.div`
  margin-top: 32px;

  .dakota-pagination {
    justify-content: center;

    .pagination-cell {
      svg {
        width: 20px;
        height: 20px;
      }

      span:not(.pagination-dots) {
        display: inline-block;
        width: 28px;
        height: 28px;
        line-height: 28px;
        border: 1px solid lightgray;
        box-sizing: border-box;
        font-size: 13px;
        font-weight: bold;
        text-align: center;
        color: black;
      }

      &--active {
        span {
          border: none !important;
          background-color: ${Colors.primary};
          color: white !important;
        }
      }

      &--disabled {
        pointer-events: none;
        opacity: 0.4;
      }
    }
  }
`;
