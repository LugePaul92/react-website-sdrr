import React from "react";
import styled from "styled-components";
import { NavBar } from "../../components";
import { Afya } from "./Afya";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { Unabii } from "./Unabii";

export const Home = () => {
  return (
    <HomeWrapper>
      <NavBar />
      <LandingPage />
      <Unabii />
      <Afya />
      <Footer />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  font-family: "Rowdies";
`;
