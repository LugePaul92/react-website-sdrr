import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  name: string;
  link: string;
  color?: string;
  background?: string;
}
export const ButtonRedirect = (props: ButtonProps) => {
  return (
    <a href={props.link} style={{ textDecoration: "none" }}>
      <ButtonLink>
        <ButtonWrapper onClick={props.onClick} background={props.background}>
          {props.name}
        </ButtonWrapper>
      </ButtonLink>
    </a>
  );
};
const ButtonLink = styled.a`
  margin: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
`;
const ButtonWrapper = styled.button<{ background?: string }>`
  border: none;
  cursor: pointer;
  color: white;
  padding: 7px 14px;
  font-weight: 200;
  background: ${({ background }) => (background ? background : "#23395d")};
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  max-width: 140px;

  align-items: center;
  justify-content: center;
  display: flex;
`;
