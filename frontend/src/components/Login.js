import React, { useState, useEffect, useContext } from "react";
import AuthService from "../Services/AuthService";
import Message from "./Message";
import { AuthContext } from "../Context/AuthContext";
import Axios from "axios";
import styled from "styled-components";

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
    <LoginContainer>
      <div className="form-container">
        <h3>Please sign in</h3>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Username"
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            className="form-control"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Log in{" "}
          </button>
          <br />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={_handleGoogleSignInClick}
          >
            Log in with Google
          </button>
          <br />
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={_handleFacebookSignInClick}
          >
            Log in with FaceBook
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background: #f5f2d0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  .form-container {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 40%;
    margin: 2rem auto;

    margin-bottom: 0;
    background: white;
    padding: 2rem;
    background: white;
    // margin: 3rem auto;
    // margin-top: 1.5rem;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
  label {
    font-size: 1rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
    margin: 1rem auto;
  }
  input {
    font-size: 1rem;
    font-weight: 800;
    // color: rgba(0, 0, 0, 0.7);
    background: #f5f5f5;
    margin: 1rem auto;
  }
`;
