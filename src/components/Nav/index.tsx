import React from "react";

import * as Styles from "./styles";

export interface INavItem {
  title?: string;
  label: string;
  link: string;
}

interface IProps {
  activeLinks: string[];
  navItems: INavItem[];
  onClick: (link: string) => void;
}

const Nav = ({ activeLinks, navItems, onClick }: IProps) => {
  return (
    <Styles.Navbar>
      <Styles.ListWrapper>
        {navItems.map(item => (
          <Styles.List
            key={item.link}
            onClick={() => onClick(item.link)}
            className={activeLinks.includes(item.link) ? "bold" : "light"}
          >
            {item.title || item.label}
          </Styles.List>
        ))}
      </Styles.ListWrapper>
    </Styles.Navbar>
  );
};

export default Nav;
