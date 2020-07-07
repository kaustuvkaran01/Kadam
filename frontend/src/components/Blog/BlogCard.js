import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from '../images/landing-image.jpg';
import styled from 'styled-components';

function BlogCard(props){
  return (
    <BlogCardContainer>
      <Card>
        <CardImg
          top
          width="100%"
          src={logo}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.content}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </BlogCardContainer>
  );
};

export default BlogCard;

const BlogCardContainer = styled.div`
    height: 20rem;
    width: 20rem;
    margin:2rem;
`;