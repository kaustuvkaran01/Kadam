import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Media extends Component {
    render() {
        return (
            <MediaContainer>
                <Navbar />
                <p>
                    This is the Media Page
                </p>
                <Footer />
            </MediaContainer>
        );
    }
}

export default Media;

const MediaContainer = styled.div`
display: flex;
flex-direction: column;
`;