import React, { useState } from "react";
import styled from "styled-components";
import { Card, Image } from "../../../components";
import { Button } from "../../../components/Buttons/Button";
import AfyaImage from "./Health.png";

export const Afya = () => {
  return (
    <Wrapper>
      <Layout>
        <ImagPosition>
          <ImagWrapper>
            <ImageHealth />
          </ImagWrapper>
        </ImagPosition>
        <CardWrapper>
          <Card
            width="100%"
            height="100%"
            chldren={
              <ContentWrapper>
                <div></div>
                <TextWrapper>
                  <TitleText>AFYA</TitleText>
                  <NormalText>
                    Je unahitaji kutunza mwili wako safi na mtakatifu kama
                    hekalu la mungu?
                  </NormalText>
                  <Button
                    background="#00A4E9"
                    name="JIFUNZE ZAIDI"
                    link="http://localhost:3000/vitabu"
                  />
                </TextWrapper>
              </ContentWrapper>
            }
          />
        </CardWrapper>
      </Layout>
    </Wrapper>
  );
};

const ImageHealth = () => {
  return (
    <>
      <Image src={AfyaImage} width="60vw" height="65vh" borderRadius="6px" />
    </>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(180deg, #00a4e9 57.81%, #0864b2 100%);
  height: 100vh;
  padding: 56px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: grid;
  align-self: center;
`;
const TitleText = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height */

  color: #0766b4;
`;
const NormalText = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 34px;
  padding: 4px;
  color: #000000;
`;
const Layout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const CardWrapperMobile = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;
const ImagPosition = styled.div`
  grid-row: 2/6;
  grid-column: 1/5;
`;
const ImagWrapper = styled.div`
  width: fit-content;
  filter: drop-shadow(-6px -1px 10px rgba(0, 0, 0, 0.25));
  @media (max-width: 990px) {
    display: none;
  }
`;
const CardWrapper = styled.div`
  grid-row: 1/5;
  grid-column: 3/6;
`;
