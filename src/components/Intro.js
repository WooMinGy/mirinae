import React from "react";
import styled from "styled-components";

import IntroSwiper from "./IntroSwiper";

const Intro = () => {
  return (
    <IntroWrap>
      <Grid className="title-wrap">
        <h2 className="title">미리내 블로그에 오신것을 환영합니다.</h2>
      </Grid>
      <IntroSwiper />
      <Grid>
        <Grid className="intro-text-wrap">
          <h3 className="intro-text-title">A BIT OF HISTORY</h3>
          <p className="intro-text">
            Mirinae is an educational technology startup making innovative
            learning tools based on advanced machine-learning. Our first product
            is an exploration-based assistant for learners of the Korean
            language that enables learning opportunities whenever Korean is
            encountered.
          </p>
        </Grid>
      </Grid>
    </IntroWrap>
  );
};

export default Intro;

const IntroWrap = styled.div`
  background-image: url("https://cdn.wallpapersafari.com/51/14/zTP0A8.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .title-wrap {
    padding: 50px;
    .title {
      color: white;
      display: flex;
    }
  }
  .intro-text-wrap {
    width: 58em;
    margin: 3em;
    color: white;
    flex-direction: column;
    border-left: 3px solid #92c2fb;
    .intro-text-title {
      padding-left: 12px;
    }
    .intro-text {
      margin-top: 0px;
      padding: 0 0 12px 12px;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
`;
