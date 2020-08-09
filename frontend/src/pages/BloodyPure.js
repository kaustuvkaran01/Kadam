import React, { Component } from 'react';

import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg';
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai';

export default function BloodyPure() {
  return (
    <BloodyPureContainer>
      <NavbarNew />
      <div className="landing-image">
        <div className="landing-text">
          <h1>BLOODYPURE</h1>
          <h2>Let's End Menstrual Prejudice.</h2>
          <p>
            We aim to achieve this by changing the societal perception of
            menstruation from a purely “woman’s issue” to a more inclusive
            understanding of the societal taboo associated with it.
          </p>
          <div class="contri">
          <Button  color="danger">Contribute</Button>{' '}
          </div>
          <div class="social-media">
          <AiOutlineInstagram size="30"/>
          <AiOutlineFacebook size="30"/>
          <AiOutlineTwitter size="30"/>
          </div>

        </div>
      </div>

      <Footer />
    </BloodyPureContainer>
  );
}


const BloodyPureContainer = styled.div`

.landing-image{
  display:flex;
  align-items:center;
  background-image:url(${bloodypuremain});
  height:100vh;
  background-size:cover;
  margin:0;
}
  .landing-text{
    display:flex;
    flex-flow:column nowrap;
    text-align:left;
    background-color:rgba(0,0,0,0.6);
    height:60%;
    width:40%;
    margin-left:15%;
    color:white;
   
  }
  h1{
    font-size:xx-large;
  }
  h2{
    font-size:x-large;
  }
  h1,h2,p{
    margin:0 1rem;
    margin-top:1.2rem;
    line-height:02rem;

  }
  .social-media{
    display:flex;

  }
  .social-media{
    display:flex;
    margin-left:1rem;
    margin-top:1rem;
  }
  .social-media>*{
    margin:0.5rem 0.5rem 0.5rem 0;
  }
  .contri{
    margin-left:1rem;
    margin-top:1rem;
  }
  
  

`
