import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserStore from "./store/user";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <UserStore>
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/mypage" exact>
          <Mypage />
        </Route>
      </Router>
    </UserStore>
  );
}

export default App;
