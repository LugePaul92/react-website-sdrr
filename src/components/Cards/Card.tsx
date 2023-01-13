import React from "react";
import styled from "styled-components";

interface CardProps {
  width?: string;
  height?: string;
  chldren: React.ReactNode;
}
export const Card = (props: CardProps) => {
  return (
    <CardWrapper width={props.width} height={props.height}>
      {props.chldren}
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ width?: string; height?: string }>`
  background: #ffffff;
  box-shadow: -2px 6px 12px 2px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "100px")};
`;
