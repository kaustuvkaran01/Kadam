import React, { Component } from 'react';

import styled from 'styled-components';
import landingimage from '../components/images/landing-image.jpg';
import success1 from '../components/images/success1.jpg';
import success2 from '../components/images/success2.jpg';
import success3 from '../components/images/success3.jpg';
import success4 from '../components/images/success4.jpg';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
          <HomeContainer>
            <Navbar />
            <div className="landing-image">
              <div className="landing-text">
                “One person can make a difference and everyone should try" -
                John Fitzgerald Kennedy
              </div>
            </div>
            {/*Who we are*/}
            <div className="who-we-are">
              <div className="box">We have served over # people</div>
              <div className="who-we-are-text">
                <h3>WHO WE ARE:</h3>
                <br /> “One person can make a difference and everyone should
                try" - John Fitzgerald Kennedy “Let us remember: One book, one
                pen, one child, and one teacher can change the world.” – Malala
                Yousafzai. Our motto of doing good, one step at a time, has
                allowed us to achieve a great many things, and spread happiness
                and awareness to thousands of individuals across India.
              </div>
            </div>
            {/*Success story section*/}
            <div className="red success-story">Bloody Pure</div>
            <div className="green success-story">Raksha Kaksha</div>
            <div className="pink success-story">Sex'ed</div>
            <div className="blue success-story">Another one</div>
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

    .landing-image{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        //navbar is 12vh
        background-image: url(${landingimage});
        background-size: cover;
        background-position:center;
        
    }
    .landing-text{
        padding:0 8rem;
        color:white;
        font-size:5vh;
        text-align:center;
        
        
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
        height: 50vh;
        background-size:cover;
        background-position:center;
        display:flex;
        
    }
    

    .who-we-are{
        padding-top:10vh;
        height:100vh;
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-align:center;
        font-size:3vh;
    }
    .who-we-are-text{
        display:flex
        flex-direction:column;
        height:80vh;
        width:80vh;
        margin-top:20vh;
        margin-right:20vh;
        justify-content:center;
        align-items:center;
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

