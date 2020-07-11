import React, { useEffect, useState } from "react";

import styled from "styled-components";

import BillCard from "./BillCard";
import axios from "axios";
import BlogCard2 from '../Blog/BlogCard2';
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
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ProfileContainer>
      <div className="container-bio">
        <img className="profile-img" src={User.image} />
        <h2>
          Hello, <div className="info">{User.firstName}</div>
          Glad to have you here!
        </h2>
        <h2 className="email">You are signed in with {User.email} </h2>
        {/* <div className="main-bio">
          <label>First Name</label>
          <p>{User.firstName}</p>
          <label>Last Name</label>
          <p>{User.lastName}</p>
          <label>Email</label>
          <p>{User.email}</p>
        </div> */}
        <div className="bill-cards">
          <h2>Here are some donations you made that we ❤️ you for </h2>
          <br />
          <BillCard amount="15000" cause="Bloody Pure Campaign" />
          <BillCard amount="15000" cause="Test" />
          <BillCard amount="15000" cause="Bloody Pure Campaign" />
          <BillCard amount="15000" cause="Bloody Pure Campaign" />
        </div>
        <div className="my-blogs">
          <h2>Here are all of the blogs you've written 🧠</h2>
          {blogs.map((blog) => (
          <BlogCard2
            title={blog.title}
            subtitle={blog.author}
            description={blog.description}
            // blog_id={blog._id}
          />
        ))}
        </div>
      </div>
    </ProfileContainer>
  );
}
export default Profile;

const ProfileContainer = styled.div`
  background: #fffced;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 100%;
  align-content: center;
  justify-content: center;
  font-family: Avenir Roman;
  //margin: 0.5rem auto;
  margin-bottom: 0;
  h2 {
    color: #808080;
    font-weight: 400;
    text-align: center;
    font-size: 1.25rem;
    margin: 0rem 1rem;
    min-width: 100%;
  }
  .container-bio {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    margin-top: 0;
  }

  .bill-cards {
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //align-content: center;
    justify-content: center;
    background: rgba(255, 0, 0, 0.1);
  }
  .profile-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
  .info {
    color: black;
    font-size: 2rem;
  }
  .email {
    margin: 0.5rem;
    color: green;
    font-size: 1rem;
  }
  .my-blogs{
    padding-top:1rem;
    background:rgba(0,0,255,0.1);
    display: flex;
    flex-wrap:wrap;
  }
`;
