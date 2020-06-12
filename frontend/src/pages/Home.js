import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <Navbar />
                <p style={{height:"90vh"}}>
                    This is the Home page.
                </p>
                <Footer />
            </HomeContainer>
        );
    }
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;