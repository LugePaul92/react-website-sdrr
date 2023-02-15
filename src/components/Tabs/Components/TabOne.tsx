import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { arrayVitabu } from "../../../pages/Vitabu/arrayVitabu";
import { ButtonRedirect } from "../../Buttons/ButtonRedirect";

interface Kitabu {
  title: string;
  link: string;
}

export interface BookData {
  author?: string;
  createdAt?: string;
  file?: string;
  title?: string;
  updatedAt?: string;
  _id?: string;
}

const TabOne: FC<{}> = () => {
  let vitabuMkusanyiko: BookData[] = arrayVitabu;

  return (
    <Fragment>
      <Layout>
        {/* <Wrapper>
          <TitleText>Vijitabu</TitleText>
          <TitleLine />
        </Wrapper> */}
        <Orodha>
          {vitabuMkusanyiko.map((kitabu: BookData, i) => {
            return (
              <Kitabu key={i}>
                <NormalText>{kitabu.title}</NormalText>
                <ButtonRedirect
                  name="BONYEZA HAPA KUSOMA"
                  link={kitabu.file ? kitabu.file : ""}
                />
              </Kitabu>
            );
          })}
        </Orodha>
      </Layout>
    </Fragment>
  );
};
export default TabOne;
const Layout = styled.div`
  font-family: "Rowdies";
`;
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  background: #8cb1de;
`;
const Orodha = styled.div`
  padding: 32px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
`;
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
const Kitabu = styled.div`
  background: #fff;
  border-radius: 8px;
  display: flex;
  padding: 30px 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NormalText = styled.p`
  line-height: 30px;
  font-weight: 300;
  font-size: 16px;
  color: #23395d;
  align-text: center;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 130px;
  align-items: center;
`;

const VitabuLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: #8cb1de;
`;
const TitleLine = styled.div`
  width: 140px;
  border-bottom: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 22px;
  align-self: center;
`;
const BackgroundWrapper = styled.div`
  background: #8cb1de;
  height: 176vh;
`;

const TitleText = styled.div`
  font-weight: 400;
  font-size: 38px;
  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;
