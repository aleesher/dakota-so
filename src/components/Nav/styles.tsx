import styled from "styled-components";

export const Navbar = styled.nav`
  && {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 9999999999;
  }
`;

export const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #f8fbfc;
  text-align: center;

  && .bold {
    font-weight: 700;
  }
`;

export const List = styled.li`
  display: inline-block;
  text-align: center;
  padding: 0px 10px 0px 10px;
  text-decoration: none;
  font-size: 14px;
  line-height: 50px;
  cursor: pointer;
`;

export const Tabs = styled.div`
  display: inline-block;
  text-align: center;
  padding: 0px 10px 0px 10px;
  text-decoration: none;
  font-size: 14px;
  line-height: 50px;
`;
