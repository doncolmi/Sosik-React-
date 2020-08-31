import React, { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../css/Main.css";

import Header from "./Main/Header/Header";
import Float from "./Main/Float/Float";
import NewsList, { Types } from "./Main/NewsList/NewsList";
import PressList from "./Main/PressList/PressList";
import Press from "./Main/PressList/Press/Press";
import TopicList from "./Main/TopicList/TopicList";
import Topic from "./Main/TopicList/Topic/Topic";

const Main: FC = () => {
  return (
    <Router>
      <div className="MainWrapper">
        <Header />
        <div className="Contents">
          <Float />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <NewsList type={Types.PRESS} />}
            />
            <Route
              path="/news/topic"
              render={() => <NewsList type={Types.TOPIC} />}
            />
            <Route path="/all" render={() => <NewsList type={Types.ALL} />} />
            <Route exact path="/press" component={PressList} />
            <Route exact path="/press/:name" component={Press} />
            <Route exact path="/topic" component={TopicList} />
            <Route exact path="/topic/:name" component={Topic} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Main;
