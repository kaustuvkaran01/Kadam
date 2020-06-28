import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./fonts/Avenir Roman.otf";
import "./fonts/AvenirLTStd-Black.otf";
import "./fonts/AvenirLTStd-Book.otf";
import "./fonts/AvenirLTStd-Roman.otf";
import AuthProvider from "./Context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
