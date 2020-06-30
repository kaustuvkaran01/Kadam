import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../components/Message";
import styled from 'styled-components';

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ username: "", password: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <RegisterContainer>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h3>Please Register</h3>
          <label htmlFor="username">
            Username:{" "}
          </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Username"
          />
          <label htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Register
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`

background: #f5f2d0;
  display: flex;
  flex-direction: ;
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