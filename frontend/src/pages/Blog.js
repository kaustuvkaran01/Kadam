import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

import logo from '../components/images/landing-image.jpg'

class Blog extends Component {
    render() {
        return (
          <BlogContainer>
            <Navbar />
            <div className="cards">
              <Card text="This is the first card" image={logo}/>
              <Card text="This is the second card" image={logo}/>
              <Card text="This is the third card" image={logo}/>
              <Card text="This is the fourth card" image={logo}/>
              <Card text="This is the fifth card" image={logo}/>
              <Card text="This is the sixth card" image={logo}/>
              <Card text="This is the seventh card" image={logo}/>
            </div>
            <Footer />
          </BlogContainer>
        );
    }
}

export default Blog;

const BlogContainer = styled.div`
//   display: flex;
//   flex-direction: column;
    background: black;
    .cards{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 1rem auto;
        justify-content: center;
        margin-left: 5rem;
        margin-right: 5rem; 
    }

`;