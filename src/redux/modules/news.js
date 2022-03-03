import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_NEWS = "GET_NEWS";

const getNews = createAction(GET_NEWS, (news_data) => ({ news_data }));

const initialState = [
  {
    url: "https://ak.picdn.net/shutterstock/videos/1069125151/thumb/1.jpg",
    text: "중국에는 미나리전이 없지요. 그래서 마라탕을 먹어야해요.",
  },
  {
    url: "https://previews.123rf.com/images/lyricsai/lyricsai1403/lyricsai140300002/27073016-%EC%84%B8%EA%B3%84%EC%9D%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98%EC%9D%98-%EC%96%B8%EC%96%B4%EB%A1%9C%EC%97%AC-%EB%8B%A8%EC%96%B4.jpg",
    text: "한국어가 어려워요? 영어가 어려워요. 존님은 한국어가 너무 어렵대요.",
  },
  {
    url: "https://cdn.imweb.me/thumbnail/20201030/e0d6e7ada9758.jpg",
    text: "외국어를 배우면 치매예방에 좋대요. 50이 넘으니 자꾸 깜빡깜빡해요.",
  },
  {
    url: "https://t1.daumcdn.net/cfile/blog/21389E4358DCACF732",
    text: "HOW TO LEARN KOREAN: A COMPLETE GUIDE FROM A TO Z",
  },
  {
    url: "https://m.dansoon.co.kr/web/product/big/201811/393a1ea63e2dfd9be7d1f63960f50590.jpg",
    text: "TOP TEN BEST PROVERBS ABOUT LANGUAGE LEARNING",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudP1Hg80dEa8dU9yGbrqFcu5cLAOWgO-tAQ&usqp=CAU",
    text: "10 THING THAT ALL TRANSLATORS SECRETLY HATE",
  },
];

export default handleActions(
  {
    [GET_NEWS]: (state, action) =>
      produce(state, (draft) => {
        draft.news_data = action.payload.news_data;
      }),
  },
  initialState
);

const actionsCreators = {
  getNews,
};

export { actionsCreators };
