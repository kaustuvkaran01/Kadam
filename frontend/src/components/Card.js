import React from 'react';

import styled from 'styled-components';
import logo from './images/landing-image.jpg';



function Card( props ) {

  return (
    <CardContainer>
      <img src={logo} />
      <p>
        {props.key}
        {props.text}
      </p>
      
    </CardContainer>
  );
}
export default Card;

const CardContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    background: transparent;
    height: 25rem;
    width: 20rem;
    margin: 1rem auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    img{
        height: 50%;
        width: 100%;
    }
    // &:hover {

    //     transform: scale(1.05);
    //     transition: transform 0.25s ease-out;
    // }
    
`;