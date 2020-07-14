import React from 'react';

import styled from 'styled-components';
import { AiOutlineHome,AiFillFacebook,AiFillInstagram,AiFillTwitterSquare } from 'react-icons/ai';

import logo from '../images/landing-image.jpg';

export default function FundPageTop(props) {
  return (
    <FundPageTopContainer>
      <p className="title">{props.title}</p>
  <p className="subtitle">{props.subtitle}</p>
      <div className="donate">
        <img className="fund-main" src={logo} />
        <div className="fund-details">
          <p
            style={{
              fontSize: "xx-large",
              color: "#32CD32",
              fontWeight: "600",
            }}
          >
            US${props.fund}
            <br />
            <p
              style={{
                fontSize: "large",
                color: "rgba(0,0,0,0.65)",
                fontWeight: "400",
              }}
            >
              pledged of US$ {props.goal} goal
            </p>
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              color: "rgba(0,0,0,0.6)",
            }}
          >
            {props.backers}
            <br />
            <p
              style={{
                fontSize: "large",
                color: "rgba(0,0,0,0.65)",
                fontWeight: "400",
              }}
            >
              backers
            </p>
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              color: "rgba(0,0,0,0.6)",
            }}
          >
            {props.days}
            <br />
            <p
              style={{
                fontSize: "large",
                color: "rgba(0,0,0,0.65)",
                fontWeight: "400",
              }}
            >
              days to go
            </p>
          </p>
          <button
            className="btn btn-primary"
            style={{
              background: "#32CD32",
              border: "none",
              height: "3rem",
              width: "25rem",
              fontSize:"large"
            }}
          >
            Back This Project
          </button>
          <br />
          <button
            className="btn btn-primary"
            style={{
              background: "#32CD32",
              border: "none",
              marginTop: "1rem",
              width: "100%",
              height: "3rem",
              fontSize:"large"
            }}
          >
            Look at Similar Fundraisers
          </button>
          <div style={{ diplay: "flex", flexDirection: "row", justifyContent:"space-evenly",width:"100%",color:"#32CD32" }}>
            <AiFillFacebook size="40" />
            <AiFillInstagram size="40" />
            <AiFillTwitterSquare size="40" />
          </div>
        </div>
        
      </div>
    </FundPageTopContainer>
  );
}

const FundPageTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family:Avenir Roman;
    align-content: center;
    justify-content: center;
    background:#fffced;
    .title{
        font-weight:bold;
        font-size:x-large;
        align-self:center;
    }
    .subtitle{
        font-size:large;
        align-self:center;
    }
    .donate{
        display:flex;
        // flex-direction:column;
        align-self: center;
        justify-content:center;
        align-content:center;
        margin-bottom: 3rem;
        width: 50%;
    }
    .fund-main{
        height:30rem;
        width: 50rem;
        // margin: 1rem auto;
        align-self: center;
        padding-right: 2rem;
        // border-right: 1px solid rgba(0,0,0,0.4);
        border-radius:24px;
        
    }
    .fund-details{
        // padding-left:2rem;
        border-top: 6px solid #32CD32;
    }
`;