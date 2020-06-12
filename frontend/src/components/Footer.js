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
          <AiOutlineHome /> Lol this NGO doesn't have a permanent office. Ghumne
          chaloge?
          <br />
          <br />
          <br />
          <MdLocalPhone /> 8059645585... Coffee?
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
                color: "#ECC731",
                height: "2rem",
                border: "2px solid grey",
                borderRight: "none",
                fontSize: "small",
                width: "15rem",
              }}
            />
            <input
              type="submit"
              value="SUBMIT"
              style={{
                background: "#32302F",
                color: "#ECC731",
                height: "2.375rem",
                border: "2px solid #ECC731",
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
    background: #32302F;
    color: #ECC731;
    height: 60vh;
    width: 100%;
    margin: 0 auto;

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