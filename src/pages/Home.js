import React from "react";

import Header from "../components/Header";
import Intro from "../components/Intro";
import NewsList from "../components/NewsList";

const Home = () => {
  return (
    <React.Fragment>
      <Header home={"home"} />
      <Intro />
      <NewsList />
    </React.Fragment>
  );
};

export default Home;
