import React, { useState, useEffect, useContext } from "react";
import AuthService from "../../Services/AuthService";
import Message from "../Message";
import { AuthContext } from "../../Context/AuthContext";
import Axios from "axios";
import styled from 'styled-components';

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
        props.history.push("/admin");
      } else setMessage(message);
    });
  };

  return (
    <AdminLoginContainer>
      <div className="container-form">
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
  .container-form{
    margin: 2rem auto;
    margin-bottom: 0;
    width: 50%;
  }
`;