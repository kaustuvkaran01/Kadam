import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import Sunflowermain from '../components/images/bloodypure-main.jpg'

export default function Sunflower() {
  return (
    <SunflowerContainer>

      <div className="landing-image">
        <div className="landing-text">This is #Sunflower.</div>
      </div>

      <div className="what-we-do">
        <div className="text">
          <h1>What we do</h1>
          The Sunflower Restoration Project is a trailblazing, new, and dynamic
          initiative we have developed to tackle the issues of mental health
          amongst our aging population, specifically in the rural regions of
          India, where access to healthcare is limited. We have
          co-conceptualized and developed this project with the illustrious
          (Enter Dr. Name + info).
          <br />
          During our conceptualization phase, we identified that although
          creating awareness is of the utmost importance, providing access to
          mental health resources is equally important. We realized that the
          majority of mental health professionals in India, lack an essential
          exposure to counseling in rural areas. While researching Psychology in
          India, we came to recognize that most courses offer little to no rural
          exposure to our mental health professionals. In order to achieve these
          various goals, we incorporated all of our findings, research, and
          resources to create the Sunflower Restoration Project.
        </div>
        <div>
          <img className="image" src={Sunflowermain} />
        </div>
      </div>
      <div className="what-we-do sec-color">
        <div>
          <img className="image" src={Sunflowermain} />
        </div>
        <div className="text">
          <h1>India</h1>
          This approach, we feel, helps us solve a number of issues in the
          mental health industry and the perception of mental health in India.
          We are not only training our recruits to be more effective in a
          digital age, but we also give them first-hand experience in a rural
          atmosphere, all while providing mental health services to those most
          in need. Through the synergy of these two facets of the program, we
          achieve our overall goal of creating awareness regarding mental health
          issues in India.
        </div>
      </div>
      <div className="what-we-do ">
        <div className="text">
          <h1>Impact.</h1>
          In this project we recruit psychology and other mental health
          professionals and give them relevant training for being a mental
          health professional in the modern day and age. We provide them with
          skill enhancement in the areas of marketing, branding, designing,
          networking, reporting, and many others. However, the core dynamic of
          the project is where we offer our recruits a one-on-one mentorship,
          wherein we match our recruits with industry veterans. Through this
          mentorship we are also able to conduct on-site, field training wherein
          our recruits go into rural areas and hold group and private counseling
          sessions with the elders of said community.
        </div>

        <div>
          <img className="image" src={Sunflowermain} />
        </div>
      </div>
      <div className="what-we-do sec-color">
        <div>
          <img className="image" src={Sunflowermain} />
        </div>
        <div className="text">
          <h1>Where we work</h1>
          Our main targeted demographic for our educational events are for
          school children from 6th standard to 12th standard. Amritsar, Chennai,
          Coimbatore, and Bangalore are the major cities in which we have a core
          team presence, while having smaller and travelling teams in smaller
          cities. We aim to strike a chord with these school children, both boys
          and girls, in order to create awareness and normalize periods for both
          genders, and thus as a society as a whole. Since learning starts early
          on in a person’s life, we feel that if we can inform, educate, and
          normalize menstruation at this age, we combat the issue from forming
          late on in a person’s life. This is the primary reasoning behind
          targeting students at such a young age.
        </div>
      </div>
    </SunflowerContainer>
  );
}


const SunflowerContainer = styled.div`
background: #fffced;
font-family: Avenir Roman;

@keyframes pulse {
    0% {
    //   background-color: #90305A;
    background-color:#FF0000;
    }
    100%{
        background-color: #FFC000;
    }

  }
.landing-image{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    //navbar is 12vh
    //background-image: url(${Sunflowermain});
    //background: linear-gradient(rgba(255,0,0,.8), rgba(0,0,0,.5)),url('${Sunflowermain}');
    //background: linear-gradient(rgba(0,0,0,0.5), rgba(255,0,0,0.5));
    animation: pulse 5s ;
    background:#FFC000;
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
    margin-bottom:5rem;
    height:auto;
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
    margin-bottom:0rem;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    background:#FFC000;
    color:white;
}
`
