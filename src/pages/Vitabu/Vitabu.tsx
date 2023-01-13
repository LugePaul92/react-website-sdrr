import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Image } from "../../components";
import { Button } from "../../components/Buttons/Button";
import { Icon } from "../../components/Icons";
import Vijitabu from "./vitabu.jpg";
interface Kitabu {
  title: string;
  link: string;
}

interface BookData {
  author?: string;
  createdAt: string;
  file?: string;
  title?: string;
  updatedAt: string;
  _id: string;
}

export const Vitabu = () => {
  // const [book, setBooks] = useState<any>([]);
  // const [error, setError] = useState([]);

  // useEffect(() => {
  //   fetch("http://143.110.186.33:1337/books/get")
  //     .then((response) => response.json())
  //     .then((res) => setBooks(res))
  //     .catch((err) => setError(err));
  // }, []);

  // console.log("Books", book);

  // const {
  //   books: [{ title }],
  // } = book;
  // console.log(title);
  const [b, setb] = useState<any>([]);

  useEffect(() => {
    const VitabuPromise = fetch("http://143.110.186.33:1337/books/get") //1
      .then((response) => response.json()) //2
      .then((kitabu) => {
        setb(kitabu.books); //3
      });
  }, []);
  let vitabuMkusanyiko: BookData[] = b;
  console.log("Vitabu", vitabuMkusanyiko);

  return (
    <Wrapper>
      <BackgroundImage imgUrl={Vijitabu}>
        <RudiNyuma href="http://localhost:3000/">
          <Icon name="IoArrowBack" size={20} color="white" /> Rudi
        </RudiNyuma>
      </BackgroundImage>
      <VitabuLayout>
        <>
          <TitleText>Vijitabu</TitleText>
          <TitleLine />
        </>
        <Orodha>
          {vitabuMkusanyiko.map((kitabu: BookData, i) => {
            return (
              <Kitabu key={i}>
                <NormalText>{kitabu.title}</NormalText>
                <Button name="BONYEZA HAPA KUSOMA" link={kitabu.title} />
              </Kitabu>
            );
          })}
        </Orodha>
      </VitabuLayout>
    </Wrapper>
  );
};

const BackgroundImage = styled.div<{ imgUrl?: string }>`
  background: ${(props) => `url(${props.imgUrl})`};
  height: 100vh;
  background-size: cover;
  background-position: center;
  padding: 32px;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const Orodha = styled.div`
  padding: 32px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
`;
const RudiNyuma = styled.a`
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
  background: #c87366;
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
const ImagWrapper = styled.div`
  width: fit-content;
  filter: drop-shadow(-6px -1px 10px rgba(0, 0, 0, 0.25));
  @media (max-width: 990px) {
    display: none;
  }
`;

const TitleText = styled.div`
  font-weight: 400;
  font-size: 38px;
  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;
