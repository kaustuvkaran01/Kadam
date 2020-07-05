import React from 'react';

import styled from 'styled-components';
import { AiOutlineHome,AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from 'react-icons/ai';
import { MdLocalPhone } from 'react-icons/md';


export default function Footer() {
  return (
    <FooterContainer>
      <Location>
        <p className="heading">
          <strong>Charity</strong>
        </p>
        <p>
          This is the address of the charity office
          <br />
          <br />
          <br />
          <AiOutlineHome /> This is a Virtual NGO.
          <br />
          <br />
          <br />
          <MdLocalPhone /> Phone number
        </p>
      </Location>
      <NewsLetter>
        <p className="heading">
          <strong>News Letter Signup</strong>
        </p>
        <p>
          This is the part where you signup for the news letter.
          <br />
          <br />
          <form>
            <input
              placeholder="Email"
              style={{
                background: "#32302F",
                color: "#d99945",
                height: "2.35rem",
                border: "2px solid grey",
                borderRight: "none",
                fontSize: "small",
                width: "15rem",
                paddingLeft:"1.25rem"
              }}
              />
            <input
              type="submit"
              value="SUBMIT"
              style={{
                background: "#32302F",
                color: "#d99945",
                height: "2.375rem",
                border: "2px solid #d99945",
                fontSize: "small",
                width: "5rem",
              }}
              />
          </form>
            
        </p>
        <p className="heading">
          <strong>Follow Us</strong>
          <br />
          <br />
          <div style={{ diplay: "flex", flexDirection: "row" }}>
            <AiFillFacebook size="30" />
            <AiFillInstagram size="30" />
            <AiFillTwitterSquare size="30" />
          </div>
        </p>
      </NewsLetter>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction:row;
    // background: #404040;
    background:#343a40;
    font-family: Avenir Roman;
    color: #d99945;
    height: 60vh;
    width: 100%;
    margin: 0 auto;
    padding-top: 5rem;

    strong {
        font-size: 1.825rem;
    }


`;

const Location = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const NewsLetter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;