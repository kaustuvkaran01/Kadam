import React, { useEffect, useState } from "react";

import styled from "styled-components";

//Importing the Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import logo from "../components/images/landing-image.jpg";
import axios from "axios";

function Blog() {
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
    <BlogContainer>
      <Navbar />
      <div className="cards">
        {blogs.map((blog) => (
          <Card key={blog._id} text={blog.title} />
        ))}
        <Card text="This is the second card" image={logo} />
        <Card text="This is the third card" image={logo} />
        <Card text="This is the fourth card" image={logo} />
        <Card text="This is the fifth card" image={logo} />
        <Card text="This is the sixth card" image={logo} />
        <Card text="This is the seventh card" image={logo} />
      </div>
      <Footer />
    </BlogContainer>
  );
}

export default Blog;

const BlogContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  font-family: Avenir Roman;
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem auto;
    justify-content: center;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;
