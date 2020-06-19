import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

function BlogMain() {
  return (
    <BlogMainContainer>
        <Card text="This is the first card"/>
        <Card text="This is the second card"/>
        <Card text="This is the third card"/>
        <Card text="This is the fourth card"/>
        <Card text="This is the fifth card"/>
        <Card text="This is the sixth card"/>
        <Card text="This is the seventh card"/>

    </BlogMainContainer>
  );
}
export default BlogMain;

const BlogMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    
    margin: 1rem auto;
    margin-left: 3rem ;
`;