import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Buttons/Button";
export const LandingPageText = () => {
  return (
    <Wrapper>
      <Layout>
        <LargeText>NENO LA MUNGU NI TAA YANGU</LargeText>
        <ItalicText>
          “Bali ninyi mmeufikilia mlima Sayuni, na mji wa Mungu aliye hai,
          Yerusalemu wa mbinguni, na majeshi ya malaika elfu nyingi, mkutano
          mkuu na kanisa la wazaliwa wa kwanza walioandikwa mbinguni….” (Ebr
          12:22-24)
        </ItalicText>
        <Button background="#00A4E9" name="JIFUNZE ZAIDI" link="/vitabu" />
      </Layout>
    </Wrapper>
  );
};

const Layout = styled.div`
  display: grid;
  gap: 16px;
  width: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;
  padding-right: 90px;
`;
const LargeText = styled.div`
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: white;
`;

const ItalicText = styled.div`
  font-family: "Rubik";
  font-style: italic;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #ffffff;
`;
