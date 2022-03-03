import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const IntroSwiper = () => {
  const introText = [
    "미리내의 새소식을 만나보세요.",
    "미리내로 더 쉽게 한국어를 배워보세요.",
    "미리내는 언어를 공부하는 사람들이 만나는 은하수입니다.",
    "미리내는 은하수의 제주 방언입니다.",
    "편리한 사용을 위한 다양한 팁을 확인하세요.",
  ];
  return (
    <IntroSwiperWrap>
      <Swiper
        className="swiper-wrap"
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {introText.map((text, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Grid>
                <h3>{text}</h3>
              </Grid>
              <Grid>
                <p className="fixed-text">미리내 일동</p>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </IntroSwiperWrap>
  );
};

export default IntroSwiper;

const IntroSwiperWrap = styled.div`
  height: 14em;
  background-color: #fff;
  display: flex;
  align-items: center;
  .swiper-wrap {
    width: 30em;
    text-align: center;
    .fixed-text {
      font-size: 12px;
      font-weight: bold;
      font-style: italic;
      margin-top: 0;
      padding: 0 0 4.5em 0;
    }
    .swiper-pagination-bullet {
      background-color: #c9e1fd !important;
    }
    .swiper-pagination-bullet-active {
      background-color: #999999 !important;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
`;
