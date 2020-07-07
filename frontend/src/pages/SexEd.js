import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg'

function SexEd(){

        return (
          <SexEdContainer>
            <NavbarNew />
            <div className="landing-image">
              <div className="landing-text">This is #SexEd.</div>
            </div>

            <div className="what-we-do">
              <div className="text">
                <h1>What we do</h1>
                At Kadam, we realize the lack of proper sexual education and
                awareness in the Indian educational system. We feel that since
                there have been no proper steps taken by the system to spread
                awareness and positive education in regards to topics such as
                consent, will, rape, pregnancy, sexually transmitted diseases
                (STDs), contraception, and many other vital topics, it stems
                numerous sexual and social issues in Indian society. This in
                turn leads to a great divide in our population’s understanding
                and perceptions of sexuality.
                <br /> Our Sex’Ed initiative combats this issue head on. We have
                consolidated a number of qualified medical students, doctors,
                and experts who are not only well-versed with these issues from
                both a medical and legal standpoint, but are also, they
                themselves, strong advocates of spreading positive sexual
                education and awareness.
              </div>
              <div>
                <img
                  className="image"
                  src={bloodypuremain}
                  alt="something meaningful"
                />
              </div>
            </div>
            <div className="what-we-do sec-color">
              <div>
                <img
                  className="image"
                  src={bloodypuremain}
                  alt="something meaningful"
                />
              </div>
              <div className="text">
                <h1>India</h1>
                Our main goal is to remove the stigmas and taboos associated
                with sexuality and educate the public in all aspects of sexual
                education. We aim to achieve an atmosphere of inclusivity and
                learning about one’s own body, sexuality, intercourse,
                contraception, pregnancy, STDs, miscarriage, abortion, consent,
                will, rape, and other core topics that are essential for a
                growing society.
                <br />
                Although initially aimed at college students, due to the
                extenuating circumstances of the pandemic, we pivoted to an
                online webinar based system during the crisis. This allowed us
                to spread awareness and sexual education, even though we could
                not do so in person.
              </div>
            </div>
            <div className="what-we-do ">
              <div className="text">
                <h1>Impact.</h1>
                The Sex’Ed initiative was conceptualized in early 2020, and was
                launched during the unprecedented 2020 coronavirus crisis.
                <br />
                On May 17th, 2020, the first webinar in a series of talks,
                meetings, and webinars, was held. Wherein, we had a panel of 4
                medical students speak on a variety of sexual education topics.
                This was followed by a rather informative Q&A section wherein
                the audience clarified any further doubts or misconceptions that
                they previously had. It was a smashing success, and through
                feedback we were able to curate the talk for further sessions.
                <br />
                On June 7th, 2020, we held our second webinar of the series
                wherein we almost doubled the size of our audience, and had a
                panel of 6 medical students speak on the same topics. With an
                updated presentation that included new graphics, illustrations,
                and videos, the information was easily assimilated by the
                audience. During the Q&A section of the talk we received
                multiple in-depth questions from the audience. This too was a
                resounding success.
              </div>

              <div>
                <img
                  className="image"
                  src={bloodypuremain}
                  alt="something meaningful"
                />
              </div>
            </div>
            <div className="what-we-do sec-color">
              <div>
                <img
                  className="image"
                  src={bloodypuremain}
                  alt="something meaningful"
                />
              </div>
              <div className="text">
                <h1>Where we work</h1>
                Our primary demographic for this new and exciting endeavor is
                children aged (ENTER AGE RANGE) who come from difficult or
                underprivileged socioeconomic backgrounds. We identify and
                coordinate with schools in these areas to conduct our self
                defense classes. Wherein, our usual class consists of (ENTER
                STUDENT/CLASS INFO). Our art programs and talent platform is
                also similarly targeted towards underprivileged youth, wherein
                we reach out to various benefactors and sponsors to engage and
                encourage youth in these target areas to participate. In doing
                so we are able to offer both cash and pride rewards to these
                youngsters, while grooming their talents so that they can be
                implemented in their careers further down.
              </div>
            </div>
            <Footer />
          </SexEdContainer>
        );
    }

export default SexEd;

const SexEdContainer = styled.div`
background: #fffced;
font-family: Avenir Roman;
width: 100vw;
@keyframes pulse {
    0% {
      background-color: #000000;
    }
    100%{
        background-color: #FF0080;
    }

  }
.landing-image{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100%;
    //navbar is 12vh
    //background-image: url(${bloodypuremain});
    //background: linear-gradient(rgba(255,0,0,.8), rgba(0,0,0,.5)),url('${bloodypuremain}');
    //background: linear-gradient(rgba(0,0,0,0.5), rgba(255,0,0,0.5));
    animation: pulse 5s ;
    background:#FF0080;
    background-size: cover;
    background-position:center;
    
}
@keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
              transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
    }
  }
.landing-text{
    padding:0 8rem;
    color:white;
    font-size:5vh;
    text-align:center;
    background: rgba(0,0,0,0.4);
    animation: slide-top 1s ease-in-out both;
    
}

.what-we-do{
    margin-top:5rem;
    margin-bottom:0rem;
    height:auto;
    width: 100%;
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
}
.image{
    height: 50vh;
    width:auto;
    margin:3rem;
    border-radius:15px;
    transition: transform .2s;
}
.image:hover{
    transform:scale(1.05);
}
.text{
   height:100%;
   width:50%; 
   margin: 2rem;
   font-size:2.75vh;
    text-align:center;
    transition: transform .2s;
    background: rgba(255,0,0,0.1);
    padding:1rem;
    border-radius: 15px;
}
.text:hover{
    transform:scale(1.05);
}
h1{
    margin-bottom:2rem;
}
.sec-color{
    margin-top:5rem;
    margin-bottom: 0rem;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    // padding-bottom:5rem;
    background:#FF0080;
    color:white;
}
.sec-color .text {
    background: rgba(255,0,0,0.4);
}
`;
