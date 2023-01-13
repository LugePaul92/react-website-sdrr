import React, { useState } from "react";
import styled from "styled-components";
import { Card, Image } from "../../../components";

export const Footer = () => {
  return (
    <Wrapper>
      <Layout>
        <>
          <ContactsWrapper>
            <TitleText>Mawasiliano</TitleText>
            <NormalText>
              ANUANI YA POSTA S. L. P. 3141, Igoma – MWANZA, TANZANIA. SIMU:
              +255 758 254 278, +255 785 494 890, +255 714 560 853
            </NormalText>
          </ContactsWrapper>
        </>
        <></>
      </Layout>
      <CopyrightWrapper>
        <CopyrightBorder></CopyrightBorder>
        <CopyWrightText>
          Tulla, Paul K; ThD. ReformedRemnants © 2021. Haki zote zimehifadhiwa
        </CopyWrightText>
      </CopyrightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  background: #152238;
  height: 35vh;
  padding: 56px;
`;
const Layout = styled.div`
  display: flex;
  width: 100%;
`;

const CopyrightBorder = styled.div`
  border-bottom: 1px solid #ffffff;
  width: 130px;
  display: flex;
  justify-content: center;
`;
const CopyWrightText = styled.div`
  font-weight: 100;
  font-size: 12px;
  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;
const ContactsWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 8px;
`;
const CopyrightWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 6px;
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
const TitleText = styled.div`
  font-weight: 400;
  font-size: 38px;

  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;

const NormalText = styled.div`
  width: 200px;
  line-height: 30px;
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;
