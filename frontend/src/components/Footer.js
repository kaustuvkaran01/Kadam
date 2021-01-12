import React from 'react';

import styled from 'styled-components';
import { AiOutlineHome,AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from 'react-icons/ai';
import { MdLocalPhone } from 'react-icons/md';


export default function Footer() {
  return (
    <FooterContainer>
      <div className="left">
       <button style={{background:"red",borderRadius:"12px",border:"none"}} className="btn btn-primary">START A FUNDRAISER</button>
       <br />
       <br />
       <p>
         Find us on : 
         &nbsp;&nbsp;
        <AiFillFacebook /> &nbsp;
        <AiFillInstagram /> &nbsp;
        <AiFillTwitterSquare />
       </p>
      </div>
      <div className="right">
        <p>Kadam</p>
        <p>Our Impact</p>
        <p>Make a Difference</p>
        <p>Contribute</p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction:row;
    // background: #404040;
    // background:#343a40;
    background: #191818;
    font-family: Avenir Roman;
    color: white;
    height: 35vh;
    width: 100%;
    padding:4rem;
    border-top: 1px solid white;
    justify-content:space-between;
    .left{
      align-items:left;
      text-align:left;

    }
    .right{
      align-items:right;
      text-align:left;
    }

`;