import React, { useEffect, useState } from "react";

import styled from "styled-components";

import BillCard from "../Profile/BillCard";
import axios from "axios";

function AddFundraiser() {
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
    <AddFundraiserContainer>
      <div className="container-form">
        <h2>Add a Fundraiser</h2>
        <form className="form-about-fundraiser">
          <label for="title">Name of the Campaign</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Name"
          />
          {/* <br />
          <br />
          <label for="author">Author</label>
          <br />
          <input
            type="text"
            id="author"
            name="author"
            placeholder={User.lastName}
          /> */}
          <br />
          <br />
          <label for="desc">Description</label>
          <br />
          {/* <input
            type="textarea"
            id="description"
            name="textarea"
            placeholder={User.lastName}
            className="desc"
            cols="30"
            rows="10"
          /> */}
          <textarea cols="60" rows="5" class="textarea">
              Enter the details of the fundraiser....
          </textarea>
          <br />
          <br />
          <label for="img">Images to upload</label>
          <br />
          <input
            type="file"
            id="img"
            name="img"
            multiple
            // placeholder={User.lastName}
          />
          {/* <br />
          <br />
          <label for="fname">I IDENTIFY AS</label>
          <br />
          <select className="gender-list">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">It's complicated</option>
          </select> */}
          {/* <br />
          <br />
          <label for="fname">Description</label>
          <br />
          <input type="text" id="desc" name="desc" placeholder="XD" /> */}
          <br />
          <input className="submit-btn" type="submit" name="submit" />
        </form>
      </div>
      {/* <div className="container-form">
        <h2>About Me</h2>
        <div>
          <form className="form-about-fundraiser">
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
      {/* <div className="bill-cards">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div> */}
    </AddFundraiserContainer>
  );
}
export default AddFundraiser;

const AddFundraiserContainer = styled.div`
  background: #f5f2d0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  h2 {
    font-weight: 400;
  }
  .textarea{
      border-radius:6px;
      background: #f5f5f5;
  }
  .container-form {
    margin: 2rem auto;
    margin-bottom: 0;
  }
  .form-about-fundraiser {
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
  input {
    height: 2.75rem;
    width: 30rem;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
  }
  .desc {
    height: 5rem;
    cols: 30;
    rows: 5;
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
