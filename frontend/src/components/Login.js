import React, { useState, useEffect, useContext } from "react";
import AuthService from "../Services/AuthService";
import Message from "./Message";
import { AuthContext } from "../Context/AuthContext";
import Axios from "axios";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  console.log(user);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/blog");
        console.log(user.isAdmin);
      } else setMessage(message);
    });
  };
  const _handleGoogleSignInClick = () => {
    // Open Google login page
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const _handleFacebookSignInClick = () => {
    // Open Facebook login page
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Please sign in</h3>
        <label htmlFor="username" className="sr-only">
          Username:{" "}
        </label>
        <input
          type="text"
          name="username"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Username"
        />
        <label htmlFor="password" className="sr-only">
          Password:{" "}
        </label>
        <input
          type="password"
          name="password"
          onChange={onChange}
          className="form-control"
          placeholder="Enter Password"
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Log in{" "}
        </button>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={_handleGoogleSignInClick}
        >
          Log in with Google
        </button>
        <button
          className="btn btn-lg btn-primary btn-block"
          onClick={_handleFacebookSignInClick}
        >
          Log in with FaceBook
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Login;
