import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Question from "./Question";
import Directions from "./Directions";

function Routes() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/questions/:question_main">
          <Question />
        </Route>
        <Route exact path="/directions">
          <Directions />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );

}

export default Routes;