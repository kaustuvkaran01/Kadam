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
        <p>This is someone</p>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  h2 {
    font-weight: 400;
  }
  .container-form {
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    height: 80vh;
    width: 50vw;
    background: white;

  }
    margin: auto;
    width: 15rem;
  }
  .bill-cards {
    margin: 1rem auto;
    display: flex;
    width: 100vw;
  }
`;
