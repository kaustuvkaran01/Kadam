import React, { Component } from 'react';

import styled from 'styled-components';


class Impact extends Component {
    render() {
        return (
            <ImpactContainer>
                This is the 'OUR Impact' page
            </ImpactContainer>
        );
    }
}

export default Impact;

const ImpactContainer = styled.div`
  display: flex;
`;