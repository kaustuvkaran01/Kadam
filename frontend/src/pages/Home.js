import React, { Component } from 'react';
import styled from 'styled-components';


class Home extends Component {
    render() {
        return (
            <HomeContainer>
                This is the Home page.
            </HomeContainer>
        );
    }
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
`;