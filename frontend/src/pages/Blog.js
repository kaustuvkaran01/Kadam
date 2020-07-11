import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

//Importing the Components
import NavbarNew from "../components/test2nav";
import BlogCard from "../components/Blog/BlogCard";
import BlogCard2 from '../components/Blog/BlogCard2';
import Footer from "../components/Footer";

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
      <NavbarNew />
      <div className="blog-main">
        {/* <p> Trending Blogs</p> */}
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            subtitle={blog.author}
            content={blog.description}
            blog_id={blog._id}
          />
        ))}
      </div>
      <div className="blog-main">
        {/* <p> Trending Blogs</p> */}
        {blogs.map((blog) => (
          <BlogCard2
            title={blog.title}
            subtitle={blog.author}
            description={blog.description}
            // blog_id={blog._id}
          />
        ))}
      </div>
      <Footer />
    </BlogContainer>
  );
}

export default Blog;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  background: #fffced;
  .blog-main {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto;
    margin-bottom: 5rem;
    align-self: center;
    justify-content: center;
    background: #fffced;
    height: auto;
  }
`;
