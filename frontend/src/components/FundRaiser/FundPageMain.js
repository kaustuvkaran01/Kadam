import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../images/landing-image.jpg';

export default function FundPageMain() {
  return (
    <FundPageMainContainer>
      <NavItemContainer className="navbar">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{color:"tomato"}}
        >
          Story
        </Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{color:"rgba(0,0,255,0.6)"}}
        >
          Risks
        </Link>
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{color:"rgba(255,0,255,0.8)"}}
        >
          Challenges
        </Link>
      </NavItemContainer>
      <ContentContainer>
        <div className="section1" id="section1">
          <p className="title">Story</p>
          <img src={logo} />
          <p className="description">
            {/* {fund.description_story} */}
            This is the description
            </p>
        </div>
        <div className="section2" id="section2">
          <p className="title">Risks</p>
          <img src={logo} />
          <p className="description">
            {/* {fund.description_risk} */}
            This is the description
            </p>
        </div>
        <div className="section3" id="section3">
          <p className="title">Challenges</p>
          <img src={logo} />
          <p className="description">
            {/* {fund.description_challenge} */}
            This is the description
            </p>
        </div>
      </ContentContainer>
    </FundPageMainContainer>
  );
}

const FundPageMainContainer = styled.div`

    display:flex;
    flex-direction:row;
    // margin:1vh 0 0 0;
    font-weight: 800;
    font-family: Avenir Roman;
    font-size:large;
    justify-content:space-around;
    border-top:1px solid rgba(0,0,0,0.2);
    align-content:center;
    background:#fffced;
    
    `;
    
const NavItemContainer = styled.ul`
  justify-content: space-around;
  margin: 5rem 0 1rem 0;
  padding-bottom:15rem;
  position: sticky;
  display: flex;
  flex-direction: column;
  width:25%;
  height:50%;
  font-size:xx-large;
  border-right: 1px solid rgba(0,0,0,0.2);
  `;
  
  const ContentContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:5rem;
    width:65%;
    .section1 {
      height: 100vh;
      background: #fffced;
      color:tomato;
      width: 100%;
    }
    .section2 {
      height: 100vh;
      background: #fffced;
      color:rgba(0,0,255,0.6);
      width: 100%;
    }
    .section3 {
      height: 100vh;
      background: #fffced;
      width: 100%;
      color:rgba(255,0,255,0.8);
    }
    img {
      height: 50%;
      align-self:center;
    }
    .title{
      font-size:xx-large;
      font-weight:800;
    }
    .description{
      font-size:large;
    }
  `;