import React, { useEffect, useState } from "react";

import styled from "styled-components";

import BillCard from "./BillCard";
import axios from "axios";

function Profile() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("user/get_profile")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <ProfileContainer>
      <div className="container-form">
        <h2>Basic Information</h2>
        <form className="form-about-bio">
          <label for="fname">FIRST NAME</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder={User.firstName}
          />
          <br />
          <br />
          <label for="fname">LAST NAME</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder={User.lastName}
          />
          <br />
          <br />
          <label for="fname">I IDENTIFY AS</label>
          <br />
          <select className="gender-list">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">It's complicated</option>
          </select>
          <br />
          <br />
          <label for="fname">MY T-SHIRT SIZE IS</label>
          <br />
          <input type="text" id="fname" name="fname" placeholder="XL" />
          <br />
          <input className="submit-btn" type="submit" name="submit" />
        </form>
      </div>
      <div className="container-form">
        <h2>About Me</h2>
        <div>
          <form className="form-about-bio">
            <label for="fname">BIO</label>
            <br />
            <input type="text" name="fname" className="about-input" />
            <br />
            <br />
            <label for="fname">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
            />
            <br />
            <br />
            <label for="fname">Phone Number</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please attach your area code as well"
            />
            <br />
            <input className="submit-btn" type="submit" name="submit" />
          </form>
        </div>
      </div>
      {/* <h2 style={{ margin: "auto" }}>Thank you for Donating!</h2> */}
      <div className="bill-cards">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div>
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 200vh;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  h2 {
    font-weight: 400;
  }
  .container-form {
    margin: 2rem auto;
  }
  .form-about-bio {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: white;
    margin: 3rem auto;
    margin-top: 1.5rem;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
  label {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
  input {
    height: 2.75rem;
    width: 30rem;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
  }
  .about-input {
    height: 10.5rem;
  }

  .gender-list {
    font-family: Avenir Roman;
    height: 2.75rem;
    background: #f5f5f5;
    font-size: large;
    border-radius: 6px;
  }
  .submit-btn {
    &:hover {
      background: #863547;
      color: white;
    }
    margin: auto;
    width: 15rem;
  }
  .bill-cards {
    margin: 1rem auto;
    display: flex;
  }
`;
