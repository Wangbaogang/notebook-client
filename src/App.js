import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Main from "./pages/main";
import Login from "./pages/login";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
