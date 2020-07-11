import React, { useEffect, useState } from "react";

import styled from "styled-components";

import BillCard from "./BillCard";
import axios from "axios";
import logo1 from "../images/hamza.jpg";

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
      <div className="container-bio">
        
        <img src={User.image} />
        <h2>
          Hello, <div className='info'>{User.firstName}</div>
           Glad to have you here!
        </h2>
        <div className="main-bio">
          <label>First Name</label>
          <p>{User.firstName}</p>
          <label>Last Name</label>
          <p>{User.lastName}</p>
          <label>Email</label>
          <p>{User.email}</p>
        </div>
      </div>

      {/* <div className="bill-cards">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div> */}
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`
  background: #fffced;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  // align-content: center;
  // justify-content: center;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-bottom: 0;
  h2 {
    color: #808080;
    font-weight: 400;
    text-align:center;
    font-size:1.25rem;
  }
  .container-bio {
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    height: 80vh;
    background: #red;
  }
  .main-bio {
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
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
  }
  p {
    height: 2.75rem;
    width: 30rem;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
    padding-bottom: 0;
  }
  .bill-cards {
    margin: 1rem auto;
    display: flex;
    width: 100vw;
  }
  img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom:1rem;
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;
  }
  .info{
    color:black;
    font-size:2rem;
  }
`;
