import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const NewsCard = (props) => {
  const data = props.data;
  return (
    <NewsCardWrap
      onClick={() => {
        history.push("/detail");
      }}
    >
      <div className="img-box">
        <img src={data.url} alt="" />
      </div>
      <div className="text-box">
        <p>{data.text}</p>
      </div>
    </NewsCardWrap>
  );
};

export default NewsCard;

const NewsCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 295px;
  margin: 5px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  .img-box {
    width: 295px;
    height: 11em;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .text-box {
    font-size: 14.5px;
    font-weight: bold;
    background-color: #f4f4f4;
    p {
      margin: 8px auto 24px auto;
      text-align: center;
    }
  }
`;
