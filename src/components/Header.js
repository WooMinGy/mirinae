import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Header = (props) => {
  return (
    <HeaderWrap>
      <div className="cate-btn-box">
        <div
          className={props.home === "home" ? "active" : "inactive"}
          onClick={() => {
            history.push("/");
          }}
        >
          HOME
        </div>
        <div
          className={props.fluency === "fluency" ? "active" : "inactive"}
          onClick={() => {
            history.push("/fluency");
          }}
        >
          FLUENCY
        </div>
        <div
          className={props.tips === "tips" ? "active" : "inactive"}
          onClick={() => {
            history.push("/tips");
          }}
        >
          TIPS
        </div>
        <div
          className={props.benefits === "benefits" ? "active" : "inactive"}
          onClick={() => {
            history.push("/benefits");
          }}
        >
          BENEFITS
        </div>
        <div
          className={props.memory === "memory" ? "active" : "inactive"}
          onClick={() => {
            history.push("/memory");
          }}
        >
          MEMORY
        </div>
        <div
          className={props.reviews === "reviews" ? "active" : "inactive"}
          onClick={() => {
            history.push("/reviews");
          }}
        >
          REVIEWS
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: auto;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .cate-btn-box {
    display: flex;
    margin-left: 12vw;
    @media screen and (max-width: 420px) {
      display: flex;
      margin: 0;
    }
    .active {
      padding: 12px;
      margin: 2px;
      font-weight: bold;
      color: #999999;
      border-bottom: 3px solid #4f9af9;
      cursor: pointer;

      @media screen and (max-width: 420px) {
        padding: 2px;
        margin: 2px;
        font-weight: bold;
        color: #999999;
        border-bottom: 3px solid #4f9af9;
        cursor: pointer;
      }
    }
    .inactive {
      padding: 12px;
      margin: 2px;
      font-weight: bold;
      color: #509bf9;
      border-bottom: 3px solid #ffffff;
      cursor: pointer;

      @media screen and (max-width: 420px) {
        padding: 2px;
        margin: 2px;
        font-weight: bold;
        color: #509bf9;
        border-bottom: 3px solid #ffffff;
        cursor: pointer;
      }
    }
  }
`;
