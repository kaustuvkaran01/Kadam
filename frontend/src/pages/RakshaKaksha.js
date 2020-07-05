import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg'

class RakshaKaksha extends Component {
    render() {
        return (
          <RakshaKakshaContainer>
            <NavbarNew />
            <div className="landing-image">
              <div className="landing-text">This is #RakshaKaksha.</div>
            </div>

            <div className="what-we-do">
              <div className="text">
                <h1>What we do</h1>
                Raksha Kaksha is a budding initiative wherein we strive to
                provide value education amongst socioeconomically
                underprivileged children. We believe that childhood is a pure,
                beautiful, and innocent phase of life that should be encouraged
                and supported. It is during this phase where we try to instill
                values, virtues, and moral education. This is achieved by our
                unique approach to value education. We do not primarily focus on
                in-classroom learning, but rather employ a more holistic
                approach to learning. We reach out to and coordinate with
                schools in target areas, and work alongside their administration
                to develop a fun and educational course structure that has the
                highest efficacy possible. By utilizing strategies such as story
                telling, educational games, team activities, and various other
                tactics, we instill essential values, virtues, and beliefs in
                these children.
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
                We strive to impart lessons such as how to work cohesively in a
                team, how to be respectful of others regardless of caste, creed,
                or culture, how to be polite and well-mannered, how to be
                self-confident and self-assured, how to be dedicated and
                committed an endeavor, and many other valuable life lessons.
                Furthermore, we have also developed a unique platform through
                which we encourage underprivileged youth to explore, harness,
                and hone their innate talents and abilities, while
                simultaneously offering them an avenue to showcase and display
                their talents to the global audience through our social media
                platforms. This is done through competitions, drives, and
                special events wherein we offer these youngsters prizes, awards,
                and accolades while giving them guidance on how these talents
                can be utilized in future endeavors.
              </div>
            </div>
            <div className="what-we-do ">
              <div className="text">
                <h1>Impact.</h1>
                Currently, Raksha Kaksha’s has collaborated with schools in
                Lucknow and Kanpur and developed a self-defense course for
                female students. We at Kadam realize that we do not live in a
                perfect world, but we also realize that the necessary tools and
                knowledge required to thrive in an imperfect world do exist. By
                teaching these students in the art of self defense we prepare
                them to not only face any obstacle or adversity, but we also
                instill within them a sense of confidence and capability, which
                further translates to the empowerment of women in India. These
                classes are conducted by trained, and qualified, martial arts
                instructors and coaches, and usually occur over a month of
                special classes. We also launched our first art competition in
                June of 2020, wherein we (DETAILS OF NEW COMPETITION)
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
          </RakshaKakshaContainer>
        );
    }
}

export default RakshaKaksha;

const RakshaKakshaContainer = styled.div`
background: #fffced;
font-family: Avenir Roman;

@keyframes pulse {
    0% {
      background-color: #000000;
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
    //background-image: url(${bloodypuremain});
    //background: linear-gradient(rgba(255,0,0,.8), rgba(0,0,0,.5)),url('${bloodypuremain}');
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
    margin-bottom:0rem;
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
    margin-bottom: 0rem;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    // padding-bottom:5rem;
    background:#FFC000;
    color:white;
}
`
