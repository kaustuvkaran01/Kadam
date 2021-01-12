import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';

class Impact extends Component {
    render() {
        return (
            <ImpactContainer>
                <p>
                    This is the OUR Impact page.
                </p>
            </ImpactContainer>
        );
    }
}

export default Impact;

const ImpactContainer = styled.div`
display: flex;
flex-direction: column;
`;