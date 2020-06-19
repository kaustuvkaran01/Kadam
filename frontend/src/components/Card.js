import React from 'react';

import styled from 'styled-components';
import logo from './images/landing-image.jpg';
import ProgressBar from "../components/progress-bar";

const testData = [
  { bgcolor: "#ef6c00", completed: 60 },
];

function Card( props ) {

  return (
    <CardContainer>
      <img src={logo} />
      <div className="flex">
      <p>
        {/* {props.key} */}
        {props.text}
      </p>
      <div >
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
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
    &:hover {

        transform: scale(1.05);
        transition: transform 0.25s ease-out;
    }
    .progress {
        width: 100%;
    }
    .flex{
      width:100%;
      display:flex;
      flex-direction: column;
      //justify-content:center;
      // align-items:center;
    }
`;