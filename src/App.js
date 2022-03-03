import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";

import Home from "./pages/Home";
import Fluency from "./pages/Fluency";
import Tips from "./pages/Tips";
import Benefits from "./pages/Benefits";
import Memory from "./pages/Memory";
import Reviews from "./pages/Reviews";
import Detail from "./pages/Detail";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/fluency" exact component={Fluency} />
      <Route path="/tips" exact component={Tips} />
      <Route path="/benefits" exact component={Benefits} />
      <Route path="/memory" exact component={Memory} />
      <Route path="/reviews" exact component={Reviews} />
      <Route path="/detail" exact component={Detail} />
    </ConnectedRouter>
  );
}

export default App;
