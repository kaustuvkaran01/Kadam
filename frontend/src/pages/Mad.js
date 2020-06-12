import React, { Component } from 'react';

import styled from 'styled-components';

class Mad extends Component {
    render() {
        return (
            <MadContainer>
                This is the Make a Difference a page.
            </MadContainer>
        );
    }
}

export default Mad;

const MadContainer = styled.div`
  display: flex;
`;