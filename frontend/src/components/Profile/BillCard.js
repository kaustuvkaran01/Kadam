import React from 'react';

import styled from 'styled-components';

function BillCard( props ) {
  return (
    <BillCardContainer>
        <p className="cause">
            {props.cause}
        </p>
        <p className="amount">
            ${props.amount}
        </p>
    </BillCardContainer>
  );
}

export default BillCard;

const BillCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 10rem;
    width: 18rem;
    border-radius:12px;
    background: white;
    margin: 1.5rem auto;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    // padding: 1rem;
    &:hover{

        transform: scale(1.1);
        transition: transform 0.25s ease-out;
    }
    box-shadow: 2px 2px 4px 2px rgba( 0, 0, 0, 0.2 );

    font-family: Avenir Roman;
    font-weight: bolder;
    .cause{
        font-size: large;
        color: black;
        opacity:0.5;
        margin: 1rem auto;
        margin-bottom: 0;
        text-align: center;
        justify-content: center;
    }
    .amount{
        font-size: xx-large;
        color: green;
        margin: 1rem auto;
        margin-top: 0;
        text-align: center;
    }

`;