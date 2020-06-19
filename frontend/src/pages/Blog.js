import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BlogMain from '../components/Blog/BlogMain';

class Blog extends Component {
    render() {
        return (
            <BlogContainer>
                <Navbar />
                    <BlogMain />
                <Footer />
            </BlogContainer>
        );
    }
}

export default Blog;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;

`;