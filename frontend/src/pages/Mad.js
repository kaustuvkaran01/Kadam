import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Mad extends Component {
    render() {
        return (
            <MadContainer>
                <Navbar />
                <p>
                    This is the Make a Difference page.
                </p>
                <Footer />
            </MadContainer>
        );
    }
}

export default Mad;

const MadContainer = styled.div`
display: flex;
flex-direction: column;
`;