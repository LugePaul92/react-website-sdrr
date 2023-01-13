import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../components/Icons";

export const JuuYetu = () => {
  return (
    <Wrapper>
      <TitleBlock>
        <Link to="/">
          <Icon name="IoArrowBack" size={20} color="white" /> Rudi
        </Link>
        <TitleText>JUU YETU</TitleText>
      </TitleBlock>
      <DetailBlock>
        <SemiTitleText>
          Karibu katika tovuti ya Seventh Day Reformed Remnants
        </SemiTitleText>
        <NormalText>
          Asante kwa kuchukua wasaa ili kutembelea tovuti hii. Ni ombi letu kuwa
          utagundua kuwa kurasa za tovuti yetu zinakuza kiroho na kutia moyo.
          Tunakukaribisha kuchunguza ujumbe huu wa KILIO KIKUU unaotolewa hapa
          na tunakutia moyo kuwa huru kutoa maoni yako.
        </NormalText>
        <NormalText>
          Tafadhali endelea kuwa na mazoea ya kututembelea kwani tunaboresha na
          kupanua hizi kurasa zilizojazwa kweli. Hapa katika Seventh Day
          Reformed Remnants tunaamini kuwa kadiri tunavyokaribia mwisho wa
          historia ya dunia “somo moja litameza mengine yote – Kristo haki
          yetu.”
        </NormalText>
        <NormalText>
          Tunafurahi kuweza kukuletea mahubiri juu ya mada hizi kuu – “Haki ya
          Kristo kwa Imani” na “Uungu na Kafara ya Kristo.” Kadiri Mungu
          anavyoendelea kutuongoza katika nuru zaidi tutaendelea kuzileta kweli
          hizi kwa wote.
        </NormalText>
      </DetailBlock>
      <LastBlock>
        <SemiTitleText>Utume Wetu </SemiTitleText>
        <NormalText>
          Seventh Day Reformed Remnants ipo kwa ajili ya kuwaamsha watu wote ili
          kueneza huduma kamili za uamsho wa Kilio Kikuu cha malaika wa Ufunuo
          18 na 14.
        </NormalText>
      </LastBlock>
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  height: 100vh;
`;

const TitleBlock = styled.div`
  background: #0081c9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailBlock = styled.div`
  padding: 40px;
  background: #86e5ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LastBlock = styled.div`
  padding: 40px;
  background: #ffc93c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  color: #23395d;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const NormalText = styled.p`
  line-height: 30px;
  font-weight: 300;
  font-size: 16px;
  color: #23395d;
  align-text: center;
  display: flex;
  justify-content: center;
`;
