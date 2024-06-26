import React from "react";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;

  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const MenuBars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 786px) {
    display: block;
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;

    transform: translate(-50%, 25%);
  }
`;
const Logo = styled(Link)`
  ${NavLink}
  font-size: italic
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 786px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
   @media screen and (max-width: 786px) {
    display: none;
   
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
