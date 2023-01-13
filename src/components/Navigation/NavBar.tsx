import React, { useState } from "react";
import styled from "styled-components";
import { Image } from "../Image";
import LogoImage from "./Logo.png";
import MenuMobile from "./hamburger-menu.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [navLinkIsOPen, navLinkToggle] = useState(false);
  const handleNavLinksToggle = () => {
    return navLinkToggle(!navLinkIsOPen);
  };

  return (
    <NavWrapper>
      <LogoWrapper>
        <Image src={LogoImage} width="236px" height="98px" />
      </LogoWrapper>
      <DesktopNavLink>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LinkComponent>Nyumbani</LinkComponent>
        </Link>
        <Link to="/vitabu" style={{ textDecoration: "none" }}>
          <LinkComponent>Kupakua</LinkComponent>
        </Link>
        <Link to="/kanuni-za-misingi" style={{ textDecoration: "none" }}>
          <LinkComponent>Kanuni za Msingi</LinkComponent>
        </Link>
        <LinkComponent>Shuhuda</LinkComponent>
        <Link to="/juu-yetu" style={{ textDecoration: "none" }}>
          <LinkComponent>Juu yetu</LinkComponent>
        </Link>
      </DesktopNavLink>
      {navLinkIsOPen && (
        <NavLinks>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkComponent>Nyumbani</LinkComponent>
          </Link>
          <Link to="/vitabu" style={{ textDecoration: "none" }}>
            <LinkComponent>Kupakua</LinkComponent>
          </Link>
          <Link to="/kanuni-za-misingi" style={{ textDecoration: "none" }}>
            <LinkComponent>Kanuni za Msingi</LinkComponent>
          </Link>
          <LinkComponent>Shuhuda</LinkComponent>
          <Link to="/juu-yetu" style={{ textDecoration: "none" }}>
            <LinkComponent>Juu yetu</LinkComponent>
          </Link>
        </NavLinks>
      )}
      <MenuWrapper onClick={handleNavLinksToggle}>
        <Image src={MenuMobile} />
      </MenuWrapper>
    </NavWrapper>
  );
};

const DesktopNavLink = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  @media (max-width: 990px) {
    display: none;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  @media (max-width: 990px) {
    position: absolute;
    right: 0px;
    display: flex;
    flex-direction: column;
    height: 89vh;
    align-items: center;
    width: 70%;
    background-color: #038bd4;
    top: 9vh;
  }
`;
// const Link = styled.a`
//   text-decoration: none;
// `;
const LinkComponent = styled.li`
  font-weight: 500;
  font-size: 21px;
  text-transform: uppercase;
  color: #ffffff;
  &:hover {
    color: lightblue;
  }
`;
const MenuWrapper = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-right: 30px;
  }
`;
const LogoWrapper = styled.div`
  @media (max-width: 990px) {
    padding-left: 30px;
  }
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 8vh;
  position: absolute;
  width: 100%;
  @media (max-width: 990px) {
    display: flex;
    justify-content: space-between;
  }
`;
