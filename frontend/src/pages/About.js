import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class About extends Component {
    render() {
        return (
            <AboutContainer>
                <Navbar />
                <p>
                    This is the About Us page.
                </p>
                <Footer />
            </AboutContainer>
        );
    }
}

export default About;

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
`;