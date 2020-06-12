import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Impact extends Component {
    render() {
        return (
            <ImpactContainer>
                <Navbar />
                <p>
                    This is the OUR Impact page.
                </p>
                <Footer />
            </ImpactContainer>
        );
    }
}

export default Impact;

const ImpactContainer = styled.div`
display: flex;
flex-direction: column;
`;