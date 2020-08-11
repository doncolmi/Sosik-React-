import React, { FC } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "../css/Main.css";

import Header from "./Main/Header/Header";
import Float from "./Main/Float/Float";
import NewsList, { Types } from "./Main/NewsList/NewsList";

const Hi1: FC = () => {
  return <div>뭐1</div>;
}

const Hi2: FC = () => {
  return <div>뭐2</div>;
}

const Main: FC = () => {

  return (
    <Router>
      <div className="MainWrapper">
          <Header />
          <div className="Contents">
          <Float /> 
            <Switch>
              <Route exact path="/" render={() => <NewsList type={Types.PRESS} />} />
              <Route exact path="/hi" component={Hi1} />
              <Route exact path="/byes" component={Hi2} />
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default Main;
