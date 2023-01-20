import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../components/Icons";

export const Matoleo = () => {
  return (
    <Wrapper>
      <Block>
        <TitleWrapper>
          <LinkWrapper>
            <Link to="/">
              <RudiNyuma>
                <Icon name="IoArrowBack" size={20} color="white" /> Rudi
              </RudiNyuma>
            </Link>
          </LinkWrapper>

          <TitleText>JUU YETU</TitleText>
        </TitleWrapper>
        <>
          <SemiTitleText>
            BANK: Jina la Bank: CRDB, Jina la Account: Ibihya Paul Tulla Namba
            ya Account: 0152476597000
          </SemiTitleText>
          <SemiTitleText>
            M-PESA: 0758 254 278 AIRTEL MONEY: 0785 494 890 TIGO-PESA: 0714 560
            853
          </SemiTitleText>
        </>
        <NormalText>
          “… mtenda kazi amestahili kupewa ujira wake...” Luka 10:7. Ikiwa
          umeguswa na Roho wa Mungu toa cho chote katika…
        </NormalText>
      </Block>
    </Wrapper>
  );
};

// const RudiNyuma = styled.a`
//   text-decoration: none;
//   display: flex;
//   gap: 4px;
//   color: white;
//   background: #23395d;
//   padding: 12px;
//   border-radius: 6px;
//   max-width: 60px;
//   position: absolute;
//   top: 10px;
// `;
const RudiNyuma = styled.div`
  text-decoration: none;
  display: flex;
  gap: 4px;
  color: white;
  background: #23395d;
  padding: 12px;
  border-radius: 6px;
  max-width: 60px;
`;
const Wrapper = styled.div`
  display: grid;
  height: 100vh;
`;

const Block = styled.div`
  background: #0081c9;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 28px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LinkWrapper = styled.div`
  position: fixed;
  left: 12px;
`;
const TitleText = styled.div`
  font-weight: 400;
  font-size: 38px;

  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SemiTitleText = styled.div`
  font-weight: 400;
  font-size: 28px;

  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const NormalText = styled.p`
  line-height: 30px;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;
