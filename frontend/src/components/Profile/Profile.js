import React from 'react';

import styled from 'styled-components';

function Profile() {
  return (
    <ProfileContainer>
        <div className="container">
          <h2>Basic Information</h2>
          <form className="form">
            <label for="fname">FIRST NAME</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder="Ayushi"/>
            <br />
            <br />
            <label for="fname">LAST NAME</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder="Srivastava"/>
            <br />
            <br />
            <label for="fname">I IDENTIFY AS</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder="Female"/>
            <br />
            <br />
            <label for="fname">MY T-SHIRT SIZE IS</label>
            <br />
            <input type="text" id="fname" name="fname" placeholder="XL"/>
          </form>
        </div>
        <div className="container">
          <h2>About Me</h2>
          <div>
            <form className="form">
              <label for="fname">BIO</label>
              <br />
              <input type="text" name="fname"  className="about-input"/>
            </form>
          </div>
        </div>
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`

  display: flex;
  height: 95vh;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  h2{
    font-weight: 400;
  }
  .form{
    display: flex;
    flex-direction:column;
    padding: 2rem;
    background: white;
    margin: 3rem auto;
    margin-top: 1.5rem;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, 0.1 );
  }
  .container {
    margin: 2rem;
  }
  label{
    font-size:1rem;
    font-weight: 400;
    color: rgba(0,0,0,0.7);
  }
  input{
    height: 2.75rem;
    width: 30rem;
    font-size:large;
    border-radius: 6px;
    border: 1px;
    background: #F5F5F5;
    padding-left:0.85rem;
  }
  .about-input {
    height: 25.825rem;
  }


`;