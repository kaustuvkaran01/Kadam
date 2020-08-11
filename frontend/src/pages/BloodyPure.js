import React, { Component } from 'react';

import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import ImpactGallery from '../components/Impact_gallery';
import bloodypuremain from '../components/images/bloodypure-main.jpg';
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai';
import bpmainillus1 from '../illustrations/bp-illus/bp-illus-1.png';
import bpmainillus2 from '../illustrations/bp-illus/bp-illus-2.png';
import bpmainillus3 from '../illustrations/bp-illus/bp-illus-3.png';
import bpmainillus4 from '../illustrations/bp-illus/bp-illus-4.png';
import bpmainillus5 from '../illustrations/bp-illus/bp-illus-5.png';
import bpmainillus6 from '../illustrations/bp-illus/bp-illus-6.png';
import bpmainillus7 from '../illustrations/bp-illus/bp-illus-7.png';
import bpmainillus8 from '../illustrations/bp-illus/bp-illus-8.png';
import card1 from '../illustrations/card1.jpg';
import card2 from '../illustrations/card2.jpg';
import card3 from '../illustrations/card3.jpg';
import card4 from '../illustrations/card4.jpg';

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
            <Button color="danger">Contribute</Button>{" "}
          </div>
          <div class="social-media">
            <AiOutlineInstagram size="30" />
            <AiOutlineFacebook size="30" />
            <AiOutlineTwitter size="30" />
          </div>
        </div>
      </div>
      <BPMainContainer>
        <div id="white1" className="illus-1">
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus1} />
            <p className="illus-text">
              <h4>
                Taboos
                <br /> and <br />
                Misconceptions
              </h4>
              <p>
                Could we call ourselves a progressive society in its strong
                sense? We sadly opine, we can’t. Thanks to all myths and taboos
                surrounding a normal biological process in women.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus2} />
            <p className="illus-text">
              <h4>Hygiene and Environment Management</h4>
              <p>
                How long will you cover your pads in newspapers? Do you know
                that plastic pads that you use take over 600 years to decompose?
                These two questions majorly disturbed us, setting the tone for
                BloodyPure.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus3} />
            <p className="illus-text">
              <h4>
                <br />
                Role of Men
                <br />
                <br />
              </h4>
              <p>
                Who said men aren’t accommodative of menstruation? They see
                their fellow mothers, sisters and wives go through this every
                month. It’s just that they learn about it entirely very late in
                their timeline. BloodyPure will normalize this.
              </p>
            </p>
          </div>
        </div>
        <div id="color1" className="illus-2">
          <img className="illus-image" src={bpmainillus4} />
          <p className="illus-text">
            <h4>How big is the problem ?</h4>
            <p>
              A single woman can generate up to 125 kg of non-biodegradable
              waste through her menstruating years alone.
              <br /><br /> 355 million women who are generating so much of plastic
              waste that takes about 500-800 years to decompose. India has 12.3
              billion disposable sanitary napkins to take care of every year,
              majority of which are not biodegradable / compostable.
            </p>
          </p>
        </div>
        <div id="white2" className="illus-1">
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus5} />
            <p className="illus-text">
              <h4>
                <br />
                Normalise Periods
                <br />
                <br />
              </h4>
              <p>
                BloodyPure’s prime objective is to address both male and female
                school children in three different sessions, with the first two
                sessions addressing them separately followed by a joint session.
                This design helps in focusing on concerning problems with
                menstruation, from the perspectives of boys and girls initially,
                followed by the last session to corroborate the normalization we
                endeavoured to achieve.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus6} />
            <p className="illus-text">
              <h4>Hygiene and Environment Management</h4>
              <p>
                In the session designated for girls separately, we create
                awareness about hygiene and reusable cloth pads to them.
                Subsequently, we distribute and promote cloth pads to young
                women.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={bpmainillus7} />
            <p className="illus-text">
              <h4>
                <br />
                Role of Men
                <br />
                <br />
              </h4>
              <p>
                In the session addressing the boys, our male volunteers speak
                about their relevant experiences of debasing the taboo and myths
                associated with menstruation followed by interactions with them.
              </p>
            </p>
          </div>
        </div>
        <div id="color2" className="illus-2">
          <img className="illus-image" src={bpmainillus8} />
          <p className="illus-text">
            <h4>Impact</h4>
            <p>
              We have provided over 150 hygiene kits across the country.<br /><br /> 80 kits
              were distributed to female students in a government school located
              in Tholasampatti Village, in Salem district of Tamil Nadu.<br /><br /> 70 kits
              to female students in SGRD School, Amritsar.
            </p>
          </p>
        </div>
        <ImpactGallery/>
        <div id="white3" className="illus-1">
        <div className="card dev-color-1">
          <img src={card1}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card dev-color-2">
          <img src={card2}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card dev-color-3">
          <img src={card3}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card dev-color-4">
          <img src={card4}/>
          <p>
            One Liner
          </p>
        </div>
        </div>
      </BPMainContainer>

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
    min-width:18rem;
    min-height:30rem;
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
`;

const BPMainContainer = styled.div`
  height:auto;
  background: #efdede;
  display: flex;
  flex-flow: column;
  justify-content: center space-evenly;
  letter-spacing:-1px;

  .illus-1 {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    min-width:80%;
    background: #f3efef;
    align-self: center;
    margin: 5rem ;
    padding-bottom:2rem;
    justify-content: space-evenly;
    align-content: center;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
  .illus-1 .micro-illus {
    margin-top: 4rem;
    width: 20rem;
    display: flex-column;
    justify-content:center;
    text-align:center;
  }
  .illus-1 .illus-image {
    height: 12rem;
  }
  .illus-1 .illus-text {
    height: 80%;
    text-align:center;
    justify-content:center;
    align-content:center;
    font-size: normal;
    font-weight:600;
  }
  .illus-1 .illus-text h4 {
    text-align: center;
    font-size: x-large;
    letter-spacing: 0.3px;
    color: #9a3333;
    opacity: 1;
  }
  .illus-1 .card {
    // width:20%;
    height:20rem;
    text-align:center;
    margin: 1rem 0.25rem;
    padding:1rem;
  
  }
  .illus-1 .card img{
    // width:80%;
    align-self:center;
  }
  .illus-1 .card p{
    font-weight:900;
    font-size:x-large;
  }

  .illus-2{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    background: transparent;
    align-self: center;
    margin: 5rem;
    justify-content: space-evenly;
    align-content: center;
  }
  .illus-2 .illus-image{
    height:auto;
    max-height:15rem;
    max-width:95%;
  }
  .illus-2 .illus-text{
    text-align:left;
    line-height:1.6;
    max-width:30rem;
    min-width:20rem;
    margin-left:2rem;
    font-weight:600;
  }
  .illus-2 .illus-text h4 {
    margin-left:0.75rem;
    color:#9A3333;
  }
  .dev-color-1{
    background: #E84A5F;
    color:white;
  }
  .dev-color-1 img{
    background: #FFB4BD;
    height: 10rem;
  }
  .dev-color-2{
    background: #FF847C;
    color:white;
  }
  .dev-color-2 img{
    background: #F8A9A3;
    height: 10rem;
  }
  .dev-color-3{
    background: #FECEAB;
  }
  .dev-color-3 img{
    background: #FFDABF;
    height: 10rem;
  }
  .dev-color-4{
    background: #99B898;
  }
  .dev-color-4 img{
    background: #C4D9C3;
    height: 10rem;
    overflowX:hidden;
  }

`;
