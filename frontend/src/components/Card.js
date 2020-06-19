import React from 'react';
import logo from './images/landing-image.jpg';
import styled from 'styled-components';

function Card( props ) {

  return (
    <CardContainer>
      <img src={props.logo}/>
        <p>
          {props.text}
        </p>
    </CardContainer>
  );
}
export default Card;

const CardContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    background: yellow;
    height: 25rem;
    width: 20rem;
    margin: 1rem auto;
    img{
        height: 50%;
        width: 100%;
    }

`;