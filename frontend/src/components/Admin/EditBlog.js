import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import NavbarAdmin from '../Admin/NavbarAdmin';
import Footer from '../Footer';
import axios from "axios";

function EditBlog() {
  const blog = useFormik({
    initialValues: {
      title: "",
      author: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log("Form data", values);
      axios
        .post("/admin/blogs", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  return (
    <EditBlogContainer>
      <NavbarAdmin />
      <div className="container-form">
        <h2>Edit Blogs</h2>
        <form className="form-about-bio" onSubmit={blog.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={blog.handleChange}
            value={blog.values.title}
          />
          <br />
          <br />
          <label htmlFor="author">Author:</label>
          <br />
          <input
            type="text"
            id="author"
            name="author"
            onChange={blog.handleChange}
            value={blog.values.author}
          />
          <br />
          <br />
          <label htmlFor="author">Id:</label>
          <br />
          <input
            type="text"
            id="id"
            name="id"
            onChange={blog.handleChange}
            value={blog.values.author}
          />
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <br />
          <textarea
            cols="60"
            rows="5"
            class="textarea"
            name="description"
            onChange={blog.handleChange}
            value={blog.values.description}
          >
            Enter details here
          </textarea>
          {/* <input
            type="textarea"
            id="description"
            name="text"
            placeholder={User.lastName}
            className="desc"
            cols="30"
            rows="10"
          /> */}
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
      {/* <div className="bill-cards">
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
        <BillCard amount="15000" cause="Bloody Pure Campaign" />
      </div> */}
      <Footer />
    </EditBlogContainer>
  );
}
export default EditBlog;

const EditBlogContainer = styled.div`

  background: #f5f2d0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  h2 {
    font-weight: 400;
  }
  .container-form {
    margin: 1rem auto;
    margin-bottom: 5vh;
    margin-top: 15vh;
  }
  .form-about-bio {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: white;
    margin: 3rem auto;
    margin-top: 1.5rem;
    margin-bottom: 0;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }
  label {
    font-size: 1rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
    margin-top:0.5rem;
    margin-bottom: 0.5rem;
  }
  input {
    height: 2.75rem;
    width: 100%;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
  }
  .textarea {
    border-radius: 6px;
    background: #f5f5f5;
  }
  // .desc{
  //   height: 5rem;
  //   cols:30;
  //   rows:5;
  // }
  .about-input {
    height: 10.5rem;
  }

  .submit-btn {
    border:none;
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
