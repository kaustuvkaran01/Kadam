import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../images/landing-image.jpg";
import styled from "styled-components";

function BlogCard(props) {
  return (
    <BlogCardContainer>
      <div className="text">
        <p className="title">{props.title}Title</p>
        <p className="subtitle">{props.subtitle}Subtitle</p>
        <p className="description">{props.description}Description</p>
      </div>
        <img src={logo} />
    </BlogCardContainer>
  );
}

export default BlogCard;

const BlogCardContainer = styled.div`
display: flex;
  height: 8.5rem;
  width: 32rem;
//   background:  #f5f2d0;
// background: rgba(255, 0, 0, 0.1);
background:#ffe6ee;
  margin: 1rem auto;
  margin-bottom:2rem;
  border-radius:12px;
  font-family: Avenir Roman;
  box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.4 );
  .text{
      height:100%;
      width:60%;
      margin: 1rem 0 1rem 1rem;
  }
  .text .title {
      font-weight: 800;
      font-size:large;
  }
  .text .subtitle {
    font-weight: 500;
}
.text .description {
    font-weight: 500;
    opacity:0.5;
}
  img{
      height: 100%;
      width: 40%;
      float:right;
      border-radius:12px;
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    //   position: top;
  }
`;
