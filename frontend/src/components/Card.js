import React from 'react';

import styled from 'styled-components';

function Card( props ) {
  return (
    <CardContainer>
        <img />
        <p>
            {props.text}
        </p>
    </CardContainer>
  );
}
export default Card;

const CardContainer = styled.div`
    display: flex;
    height: 25rem;
    width: 20rem;
    background: yellow;
    margin: 1rem;

    img {
        // src=${props => props.imageurl}
        src = url();
        height:50%;
    }
`;