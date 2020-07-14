import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//Importing the Components
import NavbarNew from "../test2nav";
import BlogPageTop from './BlogPageTop';
import BlogPageMain from './BlogPageMain';
import BlogPageBottom from './BlogPageBottom';
import Footer from "../Footer";
import { useParams } from "react-router";

function BlogPage() {
  const [Blog, setBlogs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        console.log(res.data.title);
        setBlogs(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`http://localhost:5000/blogs/${id}`);
  }, []);

  return (
    <>
      <NavbarNew />
      <BlogPageContainer>
        <BlogPageTop />
        <BlogPageMain />
        <BlogPageBottom />
      </BlogPageContainer>
      <Footer />
    </>
  );
}

export default BlogPage;

const BlogPageContainer = styled.div`

  display:flex;
  flex-direction:column;
  margin-top:2vh;
  p{height:50vh;}

`;