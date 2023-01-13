import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

interface BookCardProps {
  author: any;
  title: string;
}
export const BookCard = (props: BookCardProps) => {
  return (
    <ItemLayout>
      <Card width="" height="" chldren={<BookCover>{props.title}</BookCover>} />
      <>
        <TitleText>{props.title}</TitleText>
        <>
          <AuthorPlaceholder>Author : </AuthorPlaceholder>
          <>{props.author}</>
        </>
      </>
    </ItemLayout>
  );
};

const BookCover = styled.div`
  text-align: center;
  color: white;
  background-color: blue;
`;

const ItemLayout = styled.div`
  display: grid;
  gap: 8px;
`;

const TitleText = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const AuthorPlaceholder = styled.span`
  font-weight: 500;
  font-size: 14px;
`;
