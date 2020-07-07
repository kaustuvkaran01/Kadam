import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useFormik } from "formik";
import BillCard from "../Profile/BillCard";
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer';
import axios from "axios";

function AddFundraiser() {
  const fund = useFormik({
    initialValues: {
      title: "",
      description: "",
      target: "",
      campaign: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      axios
        .post("/admin/funds", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  return (
    <AddFundraiserContainer>
      <NavbarAdmin />
      <div className="container-form">
        <h2>Add a Fundraiser</h2>
        <form className="form-about-fundraiser" onSubmit={fund.handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            onChange={fund.handleChange}
            value={fund.values.title}
          />
          <label htmlFor="campaign">Campaign</label>
          <br />
          <input
            type="text"
            id="campaign"
            name="campaign"
            placeholder="Campaign"
            onChange={fund.handleChange}
            value={fund.values.campaign}
          />
          <label htmlFor="target">Target</label>
          <br />
          <input
            type="number"
            id="target"
            name="target"
            placeholder="Target"
            onChange={fund.handleChange}
            value={fund.values.target}
          />

          <br />
          <br />
          <label for="desc">Description</label>
          <br />

          <textarea
            cols="60"
            rows="5"
            class="textarea"
            name="description"
            onChange={fund.handleChange}
            value={fund.values.description}
          >
            Enter the details of the fundraiser....
          </textarea>
          <br />
          <br />
          <label for="img">Images to upload</label>
          <br />
          <input type="file" id="img" name="img" multiple />
          <br />
          <input className="submit-btn" type="submit" name="submit" />
        </form>
      </div>
      <Footer />
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
  .textarea {
    border-radius: 6px;
    background: #f5f5f5;
  }
  .container-form {
    margin: 2rem auto;
    margin-bottom: 0;
    margin-top:15vh;
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
    margin-bottom:2rem;
  }
  .desc {
    height: 5rem;
    cols: 30;
    rows: 5;
  }
  .about-input {
    height: 10.5rem;
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
