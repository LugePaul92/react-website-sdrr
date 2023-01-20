import React, { useState } from "react";
import styled from "styled-components";
import { Card, Image } from "../../../components";
import ThreeAngelsImage from "./three-angels.png";
import BeastImage from "./Beast.png";
import { Button } from "../../../components/Buttons/Button";
export const Unabii = () => {
  return (
    <Wrapper>
      <Layout>
        <TitleText>UNABII</TitleText>
        <CardsLayout>
          <CardWrapperDesktop>
            <Card
              width="40vw"
              height="700px"
              chldren={
                <div>
                  <ContentCardOne />
                </div>
              }
            />
          </CardWrapperDesktop>
          <CardWrapperMobile>
            <Card
              width="100%"
              height="380px"
              chldren={
                <div>
                  <ContentCardOne />
                </div>
              }
            />
          </CardWrapperMobile>
          <Layout>
            <CardWrapperMobile>
              <Card
                width="100%"
                height="320px"
                chldren={
                  <div>
                    <ContentCardTwo />
                  </div>
                }
              />
            </CardWrapperMobile>
            <CardWrapperDesktop>
              <Card
                width="40vw"
                height="320px"
                chldren={
                  <div>
                    <ContentCardTwo />
                  </div>
                }
              />
            </CardWrapperDesktop>
            <CardWrapperMobile>
              <Card
                width="100%"
                height="320px"
                chldren={
                  <div>
                    <ContentCardTwo />
                  </div>
                }
              />
            </CardWrapperMobile>
            <CardWrapperDesktop>
              <Card
                width="40vw"
                height="320px"
                chldren={
                  <div>
                    <ContentCardTwo />
                  </div>
                }
              />
            </CardWrapperDesktop>
          </Layout>
        </CardsLayout>
      </Layout>
    </Wrapper>
  );
};

const ContentCardOne = () => {
  return (
    <>
      <Image
        src={ThreeAngelsImage}
        width="40vw"
        height="380px"
        borderRadius="6px 6px 0px 0px"
      />
      <TextWrapper>
        <CardTitleText>
          Je, unapenda kujua tulipo na jinsi nyakati zetu zitakavyokuwa? Njia
          rahisi tunayokupatia itakusaidia
        </CardTitleText>
        <div>
          -Jifunze juu ya unabii wakati uliopita ukihusianisha na wakati wa sasa
        </div>
        <div>
          -Jifunze juu ya Maandiko ya Ellen G. White ukihusianisha na sasa
        </div>
        <div>
          -Zama ndani katika mada nyeti juu ya namna unavyoweza kuwa tayari kwa
          mambo yanayokuja
        </div>
        <Button background="#00A4E9" name="JIFUNZE ZAIDI" link="/vitabu" />
      </TextWrapper>
    </>
  );
};

const ContentCardTwo = () => {
  return (
    <>
      <Image
        src={BeastImage}
        width="40vw"
        height="320px"
        borderRadius="6px 6px 6px 6px"
      />
    </>
  );
};
const Wrapper = styled.div`
  background: rgba(246, 249, 252, 0.72);
  height: 100vh;
  padding: 56px;
`;
const Layout = styled.div`
  display: grid;
  gap: 56px;
`;
const TextWrapper = styled.div`
  display: grid;
  padding: 12px;
`;
const CardWrapperMobile = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;
const CardWrapperDesktop = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

const CardTitleText = styled.div`
  font-weight: 700;
  font-size: 27px;

  color: #0766b4;
`;
const CardsLayout = styled.div`
  display: flex;
  @media (max-width: 990px) {
    display: grid;
  }
  gap: 40px;
`;
const TitleText = styled.div`
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;

  color: #0766b4;
  align-text: center;
  display: flex;
  justify-content: center;
`;
