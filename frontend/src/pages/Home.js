import React, { Component } from 'react';

//Importing libraries
import styled from 'styled-components';
import { motion } from 'framer-motion';


//Importing images
import landingimage from '../components/images/BPMain.jpg';
import success1 from '../components/images/success1.jpg';
import success2 from '../components/images/success2.jpg';
import success3 from '../components/images/success3.jpg';
import success4 from '../components/images/success4.jpg';
import logo from '../components/images/landing-image.jpg';

//Importing the Components
// import Navbar from '../components/Navbar';
import NavbarNew from '../components/test2nav'
import Footer from '../components/Footer';

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
            {/*Who we are*/}
            <div className="who-we-are">
              <div className="box">We have served over # people</div>
              <div className="who-we-are-text">
                <h3>
                  <strong>WHO WE ARE:</strong>
                </h3>
                <br /> “One person can make a difference and everyone should
                try" - John Fitzgerald Kennedy
                <br /> “Let us remember: One book, one pen, one child, and one
                teacher can change the world.” – Malala Yousafzai. <br />
                Our motto of doing good, one step at a time, has allowed us to
                achieve a great many things, and spread happiness and awareness
                to thousands of individuals across India.
              </div>
            </div>
            {/*Success story section*/}
            <div className="red success-story">
              <div className="fund-section">
                <img className="fund-image" alt="Some image" src={logo} />
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                  dolor sit amet Lorem ipsum dolor sit amet
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Read More</motion.button>
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Donate</motion.button>
                </p>
              </div>
            </div>
            <div className="green success-story">
              <div className="fund-section">
                <img className="fund-image" alt="Some image" src={logo} />
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                  dolor sit amet Lorem ipsum dolor sit amet
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Read More</motion.button>
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Donate</motion.button>
                </p>
              </div>
            </div>
            <div className="pink success-story">
              <div className="fund-section">
                <img className="fund-image" alt="Some image" src={logo} />
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                  dolor sit amet Lorem ipsum dolor sit amet
                  <motion.button
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                   className="btn my-button btn-primary">Read More</motion.button>
                  <motion.button
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                   className="btn my-button btn-primary">Donate</motion.button>
                </p>
              </div>
            </div>
            <div className="blue success-story">
              <div className="fund-section">
                <img className="fund-image" alt="Some image" src={logo} />
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                  ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                  dolor sit amet Lorem ipsum dolor sit amet
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Read More</motion.button>
                  <motion.button 
                  whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)"
                  }}
                  className="btn my-button btn-primary">Donate</motion.button>
                </p>
              </div>
            </div>

          </HomeContainer>
        );
    }
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Avenir Roman;
    background: #fffced;

    .landing-image{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        //navbar is 12vh
        background-image: url(${landingimage});
        // background:linear-gradient(rgba(247,202,68,0.7),rgba(255,255,255,0.7));
        background-size: cover;
        background-position:center;
        border-top: 20px double black;
    border-bottom: 20px double black;

    }
    .landing-text{
        padding:0 8rem;
        color:black;
        font-size:5vh;
        text-align:center;
        font-weight:800;


    }
    .red{
        background: linear-gradient(rgba(255,0,0,.5), rgba(0,0,0,.5)),url('${success1}');
    }
    .pink{
        background: linear-gradient(rgba(255,20,147,.5), rgba(0,0,0,.5)),url('${success2}');
    }
    .green{
        background: linear-gradient(rgba(0,255,0,.5), rgba(0,0,0,.5)),url('${success3}');
    }
    .blue{
        background: linear-gradient(rgba(0,0,255,.5), rgba(0,0,0,.5)),url('${success4}');
    }
    .success-story{
        height: 60vh;
        background-size:cover;
        background-position:center;
        display:flex;
        width:100%;

    }


    .who-we-are{
        // padding-top:10vh;
        height:100vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-align:center;
        font-size:1.5rem;
    }
    .who-we-are-text{
        display:flex
        flex-direction:column;
        // height:80vh;
        width:40vw;
        // margin-top:20vh;
        // margin-right:20vh;
        // justify-content:center;
        // align-items:center;
    }
    .box{
        width: 25%;
        height:50vh;
        background-color: #f7ca44;
        display:flex;
        justify-content:center;
        align-items: center;
        border-radius: 24px;
    }

    .fund-section{
      display:flex;
      width:100%;
      text-align:center;
      align-content:center;
      justify-content:center;
      // margin:2rem 0 2rem 0;
    }
    .fund-section p{
      font-size:xx-large;
      // color:rgba(255,255,255,0.8);
      color:white;
      align-self:center;
      width:40%;
    }
    .fund-section .my-button {
      margin:1rem;
      float:left;
      background:#59156F;
      // background:black;
      border-radius:12px;
      border:1px solid white;
    }
    .fund-image{
      height:20rem;
      object-fit:cover;
      align-self:center;
      margin-right:2rem;
      box-shadow: 2px 2px 4px 2px rgba( 255, 255, 255, 0.2 );
      border-radius:24px;
    }

`;

