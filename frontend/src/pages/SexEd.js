import React, { Component } from 'react';

import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg';
import {AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter} from 'react-icons/ai';
import semainillus1 from '../illustrations/se-illus/se-illus-1.png';
import semainillus2 from '../illustrations/se-illus/se-illus-2.png';
import semainillus3 from '../illustrations/se-illus/se-illus-3.png';
import semainillus4 from '../illustrations/se-illus/se-illus-4.png';
import semainillus5 from '../illustrations/se-illus/se-illus-5.png';
import semainillus6 from '../illustrations/se-illus/se-illus-6.png';
import semainillus7 from '../illustrations/se-illus/se-illus-7.png';
import semainillus8 from '../illustrations/se-illus/se-illus-8.png';
import semainillus9 from '../illustrations/se-illus/se-illus-9.png';

export default function SexEd() {
  return (
    <SexEdContainer>
      <div className="landing-image">
        <div className="landing-text">
          <h1>SEX EDUCATION</h1>
          <h2>No more “Shhh” during sexual education!</h2>
          <p>
            We in Kadam strive towards the path of self love and remove the
            stigmas and taboos associated with sexuality and educate the public
            in all aspects of sexual education.
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
            <img className="illus-image" src={semainillus1} />
            <p className="illus-text">
              <h4>Lack of a voice</h4>
              <p>
                We have every subject that is taught other than sex-ed. Sex-Ed
                is always brushed away in every conversation and awareness is
                never created where we are told that it is “Okay” to not speak
                up.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={semainillus2} />
            <p className="illus-text">
              <h4>Stigma and Taboo</h4>
              <p>
                Just because we have been told to not talk about it for so many
                years doesn’t mean it is right. It is just as important as any
                other life skill such as communication, decision making.
              </p>
            </p>
          </div>
        </div>
        <div id="color1" className="illus-2">
          <img className="illus-image" src={semainillus3} />
          <p className="illus-text">
            <h4>How deep is the problem?</h4>
            <p>
              Complications arising from pregnancy and unsafe abortions are a
              leading cause of death among women aged 15–19 years, with 20% of
              the group experiencing childbearing before 17 years of age, with
              pregnancies often closely spaced. <br />
              <br />
              In India, only a meagre 19% of girls and 35% of boys have
              comprehensive knowledge of both HIV and AIDS.
              <br />
              <br /> A study on child abuse in India, conducted by the Ministry
              of Women and Child Development, reports that 53% of boys and 47%
              of girls surveyed faced some form of sexual abuse.
            </p>
          </p>
        </div>
        <div id="white2" className="illus-1">
          <div className="micro-illus">
            <img className="illus-image" src={semainillus4} />
            <p className="illus-text">
              <h4>
                <br />
                Discussion Sessions with Experts
                <br />
                <br />
              </h4>
              <p>
                We have consolidated a number of qualified medical students,
                doctors, and experts who are well-versed with these issues from
                both a medical and legal standpoint.
              </p>
            </p>
          </div>
          <div className="micro-illus">
            <img className="illus-image" src={semainillus5} />
            <p className="illus-text">
              <h4>Webinars are our new classrooms</h4>
              <p>
                Thanks to COVID-19, we have our panel members speaking about a
                variety of sexual education topics through webinars to our
                participants. You can ask us anything and we will give you the
                answer!Thanks to COVID-19, we have our panel members speaking
                about a variety of sexual education topics through webinars to
                our participants. You can ask us anything and we will give you
                the answer!
              </p>
            </p>
          </div>
        </div>
        <div id="white3" className="illus-1">
          <div className="card dev-color-1">
            <img src={semainillus6} />
            <p>One Liner</p>
          </div>
          <div className="card dev-color-2">
            <img src={semainillus7} />
            <p>One Liner</p>
          </div>
          <div className="card dev-color-3">
            <img src={semainillus8} />
            <p>One Liner</p>
          </div>
          <div className="card dev-color-4">
            <img src={semainillus9} />
            <p>One Liner</p>
          </div>
        </div>
      </BPMainContainer>
    </SexEdContainer>
  );
}


const SexEdContainer = styled.div`

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
  background: #EBDBBC;
  display: flex;
  flex-flow: column;
  justify-content: center space-evenly;
  letter-spacing:-1px;

  .illus-1 {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    min-width:80%;
    background: #F1E9DB;
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
    width:20%;
    height:20rem;
    text-align:center;
    margin: 1rem 1rem;
    padding:1rem;
  
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
