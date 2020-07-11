import React, { Component } from 'react';

import styled from 'styled-components';
import landingimage from '../components/images/BPMain.jpg';
import success1 from '../components/images/success1.jpg';
import success2 from '../components/images/success2.jpg';
import success3 from '../components/images/success3.jpg';
import success4 from '../components/images/success4.jpg';

//Importing the Components
// import Navbar from '../components/Navbar';
import NavbarNew from '../components/test2nav'
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
          <HomeContainer>
            <NavbarNew />
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
              <div className="image">
                <img alt="Some image" />
              </div>
            </div>
            <div className="green success-story">
              <div className="image">
                <img alt="Some image" />
              </div>
            </div>
            <div className="pink success-story">
              <div className="image">
                <img alt="Some image" />
              </div>
            </div>
            <div className="blue success-story">
              <div className="image">
                <img alt="Some image" />
              </div>
            </div>
            <Footer />
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
        //background-image: url(${landingimage});
        background:linear-gradient(rgba(247,202,68,0.7),rgba(255,255,255,0.7));
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
        width: 50vh;
        height:50vh;
        background-color: #f7ca44;
        display:flex;
        justify-content:center;
        align-items: center;
        border-radius: 24px;
    }
`;

