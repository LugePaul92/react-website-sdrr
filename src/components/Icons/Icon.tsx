import * as React from "react";
import styled, { css } from "styled-components";
import * as Ionicons from "react-icons/io5";
import * as Heroicons from "react-icons/hi";

export type IoniconsType = keyof typeof Ionicons;
export type HeroiconsType = keyof typeof Heroicons;
export type IconType = IoniconsType | HeroiconsType;

interface IconContainerProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  applyStroke?: boolean;
}

interface IconProps extends IconContainerProps {
  name: IconType;
}

export function Icon(props: IconProps): React.ReactElement {
  const { name } = props;
  const ionicon = Ionicons[name as IoniconsType];
  const heroicon = Heroicons[name as HeroiconsType];
  return (
    <IconContainer {...props}>
      {ionicon ? React.createElement(ionicon) : React.createElement(heroicon)}
    </IconContainer>
  );
}

const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  ${({ onClick, color = `blue`, size }) => css`
    cursor: ${onClick ? "pointer" : "inherit"};
    color: ${color};
    svg {
      font-size: ${typeof size === "number" ? `${size}px` : "10px"}};
    }
    `};
`;
