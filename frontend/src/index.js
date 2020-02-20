import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.scss";
import * as serviceWorker from "./serviceWorker";
import { Home } from "./pages/Home";
import { Groups } from "./pages/Groups";
import { Clubs } from "./pages/Clubs";
import { Availability } from "./pages/Availability";
import { SignUp } from "./pages/SignUp";

ReactDOM.render(
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/clubs" component={Clubs} />
      <Route exact path="/availability" component={Availability} />
      <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
