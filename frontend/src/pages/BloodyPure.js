import React, { Component } from 'react';

import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg';
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai';
import bpmainillus1 from '../illustrations/bp-illus-1.png';
import bpmainillus2 from '../illustrations/bp-illus-2.png';
import bpmainillus3 from '../illustrations/bp-illus-3.png';
import bpmainillus4 from '../illustrations/bp-illus-4.png';
import bpmainillus5 from '../illustrations/bp-illus-5.png';
import bpmainillus6 from '../illustrations/bp-illus-6.png';
import bpmainillus7 from '../illustrations/bp-illus-7.png';
import bpmainillus8 from '../illustrations/bp-illus-8.png';
import bpmainillus9 from '../illustrations/bp-illus-9.png';

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
        <div className="illus-1">
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
        <div className="illus-2">
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
        <div className="illus-1">
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
        <div className="illus-2">
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
        <div className="illus-1">
        <div className="card">
          <img src={bpmainillus9}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card">
          <img src={bpmainillus9}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card">
          <img src={bpmainillus9}/>
          <p>
            One Liner
          </p>
        </div>
        <div className="card">
          <img src={bpmainillus9}/>
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

  .illus-1 {
    display: flex;
    flex-direction: row;
    // height: 70%;
    height: 110vh;
    width: 83%;
    background: #f3efef;
    align-self: center;
    margin: 5rem 0 5rem 0;
    justify-content: space-evenly;
    align-content: center;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
  .illus-1 .micro-illus {
    margin-top: 4rem;
    width: 25%;
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
    font-size: small;
  }
  .illus-1 .illus-text h4 {
    text-align: center;
    font-size: x-large;
    letter-spacing: 0.3px;
    color: #9a3333;
    opacity: 1;
  }
  .illus-1 .card {
    width:20%;
    height:40%;
    text-align:center;
    background:#FECEAB;
    margin-top: 2rem;
  }
  .illus-1 .card img{
    width:80%;
    align-self:center;
  }
  .illus-1 .card p{
    font-weight:900;
    font-size:x-large;
  }

  .illus-2{
    display: flex;
    flex-direction: row;
    // height: 70%;
    height: 50vh;
    width: 83%;
    background: transparent;
    align-self: center;
    margin: 5rem 0 5rem 0;
    justify-content: space-evenly;
    align-content: center;
  }
  .illus-2 .illus-image{
    height:20rem;
  }
  .illus-2 .illus-text{
    text-align:left;
    line-height:1.6;
    width:40%;
  }
  .illus-2 .illus-text h4 {
    margin-left:0.75rem;
    color:#9A3333;
  }

`;
