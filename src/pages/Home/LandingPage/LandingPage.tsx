import LandinPage from "./Landing-Page.png";
import styled from "styled-components";
import React from "react";
import { LandingPageText } from "../../../components/Welcome";
export const LandingPage = () => {
  return (
    <BackgroundImage imgUrl={LandinPage}>
      <LandingPageText />
    </BackgroundImage>
  );
};

const BackgroundImage = styled.div<{ imgUrl?: string }>`
  background: ${(props) => `url(${props.imgUrl})`};
  height: 100vh;
  background-size: cover;
  background-position: center;
`;
