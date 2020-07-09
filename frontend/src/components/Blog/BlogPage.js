import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

//Importing the Components
import NavbarNew from "../test2nav";

import Footer from "../Footer";
import { useParams } from "react-router";

function BlogPage() {
  const [Blog, setBlogs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`http://localhost:5000/blogs/${id}`);
  }, []);

  return (
    <>
      <NavbarNew />
      <div>
        {Blog.title}
        {Blog.author}
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
