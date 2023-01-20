import React from "react";
import { arrayMakala } from "./arrayMakala";
import styled from "styled-components";
import { MakalaItem } from "./MakalaItem";
export const Makala = () => {
  return (
    <Wrapper>
      {arrayMakala.map((makala, i) => {
        return (
          <MakalaItem
            key={i}
            src={makala.src}
            title={makala.title}
            message={makala.message}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 12px;
`;
