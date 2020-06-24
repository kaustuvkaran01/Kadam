import React from 'react';

import styled from 'styled-components';
import logo from './images/hamza.jpg';



function Card_person( props ) {

  return (
    <Card_personContainer>
      <img src={logo} />
      <p>
        {props.key}
        {props.text}
        <p className="description">{props.description}</p>
      </p>
    </Card_personContainer>
  );
}
export default Card_person;

const Card_personContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
    height: 25rem;
    width: 20rem;
    margin: 1rem auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    img{
        height: 50%;
        width: 60%;
        border-radius: 24px;
    }
    // &:hover {

    //     transform: scale(1.05);
    //     transition: transform 0.25s ease-out;
    // }

    .description {
        color: rgba(0,0,0,0.4);
    }
    
`;