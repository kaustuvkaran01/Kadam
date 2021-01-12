import React, { Component } from 'react';

//Importing libraries
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Importing images
import landingimage from '../components/images/BPMain.jpg';
import success1 from '../components/images/success1.jpg';
import success2 from '../components/images/success2.jpg';
import success3 from '../components/images/success3.jpg';
import success4 from '../components/images/success4.jpg';
import logo from '../components/images/logo.png';
import whykadam1 from '../illustrations/why-kadam1.svg';
import whykadam2 from '../illustrations/why-kadam2.svg';

//Importing the Components
// import Navbar from '../components/Navbar';
import NavbarNew from '../components/test2nav'
import Footer from '../components/Footer';

const cards = [
  {
    heading:"RAKSHA KAKSHA",
    sub:"Say no to Educated Devils",
    content:"Something random",
    link:"www.google.co.in"
  },
  {
    heading:"RAKSHA KAKSHA",
    sub:"Say no to Educated Devils",
    content:"Something random",
    link:"www.google.co.in"
  },
  {
    heading:"RAKSHA KAKSHA",
    sub:"Say no to Educated Devils",
    content:"Something random",
    link:"www.google.co.in"
  },
  {
    heading:"RAKSHA KAKSHA",
    sub:"Say no to Educated Devils",
    content:"Something random",
    link:"www.google.co.in"
  }
];
class Home extends Component {
    render() {
        return (
          <HomeContainer>
            <div className="landing-image">
              <div className="landing-text">
                “Let us remember: One book, one pen, one child, and one teacher
                can change the world.” – Malala Yousafzai.
              </div>
            </div>
            <div className="why-kadam">
              <div className="why-kadam-inner">
                <div className="why-kadam-inner-block">
                  <img className="illus" src={whykadam1} />
                  <strong>Why Kadam?</strong>
                  <p>
                    The answer is simple, if you would ask us. For the hosts, we
                    provide the platform for free. For the contributors, only
                    genuine and verified fundraisers are taken up.
                  </p>
                </div>
                <div className="why-kadam-inner-block">
                  <img className="illus" src={whykadam2} />
                  <strong>Authenticity of the Platform</strong>
                  <p>
                    Our portals offers a transparent user experience design,
                    keeping in mind this major concern of the contributors. On a
                    first level, all necessary information deemed significant
                    would be duly acknowledged of their funding towards the
                    purpose on the portal on a dynamic basis.
                  </p>
                </div>
              </div>
            </div>
            <HomeMid>
              <div className="home-mid-inner">
                <div>
                  <img className="illus" src={whykadam1} />
                </div>
                <p>
                  <h2> How do you contribute to a campaign?</h2>
                  First of all, the contributors have to log in and choose the
                  campaign they are interested to contribute. Subsequently, they
                  are necessitated to go through all the pertaining information
                  vis-a-vis the campaign followed by choosing an appropriate
                  payment gateway to make the online contribution.
                </p>
              </div>
              <div className="home-mid-inner">
                <p>
                  <h2> How do you host a fundraising campaign?</h2>
                  The process is simple. The concerned hosts need ot fill out a
                  form on out webpage. Subsequently, volunteers from Kadam would
                  contact you and based on the authenticity of the campaign, it
                  would be posted on our platform, open to contributors.
                </p>
              </div>
            </HomeMid>
            <HomeLower>
              <p className="heading"> OUR CAMPAIGNS</p>
              <div className="card-container">
                {cards.map((card) => {
                  return (
                    <div className="cards">
                      <p className="head">{card.heading}</p>
                      <p className="sub">{card.sub}</p>
                      <p className="content">{card.content}</p>
                      <button
                        style={{
                          background: "red",
                          border: "none",
                          borderRadius: "12px",
                        }}
                        className="btn btn-primary"
                      >
                        {" "}
                        KNOW MORE
                      </button>
                    </div>
                  );
                })}
              </div>
            </HomeLower>
            <HomeForm>
              <p className="heading">You can also directly donate to Kadam</p>
              <div className="home-form-main">
                <div className="logo">
                  <img src={logo} />
                </div>
                <div className="form">
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelectMulti">Select Multiple</Label>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        multiple
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">File</Label>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                      </FormText>
                    </FormGroup>
                    <Button size="lg" style={{background:"red",borderRadius:"12px",border:"none"}} className="btn btn-primary">Donate</Button>
                  </Form>
                </div>
              </div>
            </HomeForm>
          </HomeContainer>
        );
    }
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Avenir Roman;
  background: #191818;

  .landing-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    //navbar is 12vh
    background-image: url(${landingimage});
    // background:linear-gradient(rgba(247,202,68,0.7),rgba(255,255,255,0.7));
    background-size: cover;
    background-position: center;
    border-top: 20px double black;
    border-bottom: 20px double black;
  }
  .landing-text {
    padding: 0 8rem;
    color: black;
    font-size: 5vh;
    text-align: center;
    font-weight: 800;
  }
  .why-kadam {
    height: 80vh;
    background: #191818;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
  }
  .why-kadam-inner {
    min-height: 40vh;
    min-width: 50vw;
    background: #ebebeb;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  .illus {
    height: 10rem;
    padding: 2rem 0;
  }
  .why-kadam-inner-block {
    display: flex;
    flex-direction: column;
    strong {
      font-size: x-large;
      font-weight: 800;
      padding: 0 0 2rem 0;
    }
    p {
      width:20rem;
      font-weight:500;
    }
  }

`;

const HomeMid = styled.div`
  background: #191818;
  color: white;
  height: 120vh;
  border-bottom: 1px solid white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: large;
  .home-mid-inner {
    display: flex-row;
    p {
      text-align: left;
      width: 40rem;
    }
    h2 {
      font-weight: 800;
      padding-bottom: 2rem;
    }
  }
`;

const HomeLower = styled.div`
color:white;
display:flex;
justify-content:space-evenly;
flex-direction:column;
.heading{
  font-weight:800;
  font-size:xx-large;
  margin-top:4rem;
  margin-bottom:4rem;
}
  .card-container{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap: 2rem;
    margin: 0 10rem;
  }
  .cards{
    display:block;
    height:20rem;
    width:25rem;
    background:black;
    color:white;
    justify-content:center;
    align-items:center;
    text-align:center;
  }
  .cards .head{
    font-size:xx-large;
    font-weight:800;
    padding:2rem;
  }
  .cards .sub{
    font-size:large;
    font-weight:300;
    // padding:2rem;
  }
  .cards .content{
    font-size:small;
    // padding:2rem;
  }
`;
const HomeForm = styled.div`
  display:flex;
  flex-direction:column;
  padding-top: 10rem;
  justify-content:center;
  color:white;
  padding-bottom:4rem;
  .home-form-main{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
  }
  .heading{
    font-size:xx-large;
    font-weight:700;
    color:white;
  }
  .logo{
    display:block;
  }
  .logo img{
    height:50vh;
    width:auto;
  }
  .form{
    width:30vw;
    align-items:left;
    text-align:left;
  }
  
`;