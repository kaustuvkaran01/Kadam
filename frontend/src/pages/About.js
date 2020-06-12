import React, { Component } from 'react';

import styled from 'styled-components';


class About extends Component {
    render() {
        return (
            <AboutContainer>
                This is the About page.
            </AboutContainer>
        );
    }
}

export default About;

const AboutContainer = styled.div`
  display: flex;
`;