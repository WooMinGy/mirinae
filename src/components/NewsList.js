import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const newsData = useSelector((state) => state.news);

  return (
    <NewsListWrap>
      <CardWrap>
        {newsData.map((p, idx) => {
          return <NewsCard data={p} key={idx} />;
        })}
      </CardWrap>
    </NewsListWrap>
  );
};

export default NewsList;

const NewsListWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 3em 0 1em 0;
`;

const CardWrap = styled.div`
  width: 915px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
