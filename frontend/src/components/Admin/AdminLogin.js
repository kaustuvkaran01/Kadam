import React, { useState, useEffect, useContext } from "react";
import AuthService from "../../Services/AuthService";
import Message from "../Message";
import { AuthContext } from "../../Context/AuthContext";
import Axios from "axios";
import styled from "styled-components";

const AdminLogin = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.loginAdmin(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        console.log();
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/");
      } else setMessage(message);
    });
  };

  return (
    <AdminLoginContainer>
      <div className="container-form">
        <form onSubmit={onSubmit}>
          <h3>Please sign in</h3>
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
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Log in{" "}
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
    </AdminLoginContainer>
  );
};

export default AdminLogin;

const AdminLoginContainer = styled.div`
  background: #f5f2d0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  .container-form {
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 40vw;
    margin: 1rem auto;
    // margin-left: 0.5rem;
    margin-top: 5rem;
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
  button {
    margin-top: 2rem;
  }
`;
