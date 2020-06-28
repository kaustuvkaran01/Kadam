import React from "react";

import styled from "styled-components";

import BillCard from "./BillCard.js";

function ProfileBill() {
  return (
    <ProfileContainer>
      <div className="container">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div>
    </ProfileContainer>
  );
}
export default ProfileBill;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-family: Avenir Roman;
  background: #f5f5f5;
  margin: 2rem auto;

  .container {
    display: flex;
    height: 25rem;
    width: 50rem;
    margin: 1rem auto;
  }
`;
