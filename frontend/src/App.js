import React, { useContext } from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//Importing the pages

import Home from "./pages/Home";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Blog from "./pages/Blog";
import Media from "./pages/Media";
import Mad from "./pages/Mad";
import Test from "./pages/test";
import AdminPanel from "./pages/AdminPanel";
import UserPanel from "./pages/UserPanel";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/impact" component={Impact} />
      <Route path="/mad" component={Mad} />
      <Route path="/media" component={Media} />
      <Route path="/blog" component={Blog} />
      <Route path="/test" component={Test} />
      <Route path="/admin" component={AdminPanel} />
      //User routes
      <PrivateRoute path="/profile" component={UserPanel} />
      //Before Login
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/register" component={Register} />
    </Switch>
  );
}

export default App;
