import React, { FC } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import * as Home from "../components/home";

const Root: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/memo" component={Memo} />
          <Route path="/trash" component={Trash} /> */}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
