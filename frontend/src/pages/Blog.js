import React, { Component } from "react";

import styled from "styled-components";

//Importing the Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import logo from "../components/images/landing-image.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

function Blog() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .post("localhost:5000/blogs")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setItems(items);
  }, []);
  return (
    <BlogContainer>
      <Navbar />
      <div className="cards">
        {items.map((item) => (
          <Card key={item._id} text={item.title} />
        ))}
        {/* <Card text="This is the first card" image={logo} />
        <Card text="This is the second card" image={logo} />
        <Card text="This is the third card" image={logo} />
        <Card text="This is the fourth card" image={logo} />
        <Card text="This is the fifth card" image={logo} />
        <Card text="This is the sixth card" image={logo} />
        <Card text="This is the seventh card" image={logo} /> */}
      </div>
      <Footer />
    </BlogContainer>
  );
}

export default Blog;

const BlogContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
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
