import React from "react";
import styled from "styled-components";
import { Card, Image } from "../../components";
import { Button } from "../../components/Buttons/Button";
import ThreeAngelsImage from "./three-angels.png";
import BeastImage from "./Beast.png";

export interface MakalaItemProps {
  src?: string;
  title: string;
  message: string;
}
export const MakalaItem = (props: MakalaItemProps) => {
  return (
    <MakalaWrapper>
      {props.src && (
        <Image
          src={props.src}
          width="17vw"
          height="195px"
          borderRadius="6px 0px 6px 0px"
        />
      )}
      <TextWrapper>
        <CardTitleText>{props.title}</CardTitleText>
        <div>{props.message}</div>
      </TextWrapper>
    </MakalaWrapper>
  );
};

const MakalaWrapper = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: -2px 6px 12px 2px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 12px;
  gap: 8px;
`;
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
