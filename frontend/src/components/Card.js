import React from 'react';

import styled from 'styled-components';
import logo from './images/landing-image.jpg';

import { Progress } from 'reactstrap';


function Card( props ) {

  return (
    <CardContainer>
      <img src={logo} />
      <p>
        {props.key}
        {props.text}
      </p>
      <div className="progress">
        <Progress color="danger"/>
      </div>
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
    // &:hover {

    //     transform: scale(1.05);
    //     transition: transform 0.25s ease-out;
    // }
    .progress {
        width: 100%;
    }
`;