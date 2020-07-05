import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg'

export class BloodyPure extends Component {
    render() {
        return (
            <BloodyPureContainer> 
                    <NavbarNew/>
                    <div className='landing-image'>
                        <div className='landing-text'>
                    This is #BloodyPure.
                    </div>
                    </div>

                    <div className='what-we-do'>
                        <div className='text'>
                            <h1>What we do</h1>
                        Our #BloodyPure initiative was created with the primary goal of creating a society that is free 
                    of menstrual prejudice. We aim to achieve this by changing the societal perception of menstruation
                    from a purely “woman’s issue” to a more inclusive understanding of the societal problem. 
                    Reiterating the role of men in menstruation, and including them in our education campaigns is of utmost
                     importance, wherein, we reinforce the fact that menstruation is not a disease or a sin, but rather 
                     a biological process that every female human being undergoes on a regular basis. 
                     Through the #BloodyPure initiative, we create awareness, spread education, and try to create a positive, 
                     unbiased perception of the biological process that is menstruation.
                        </div>
                        <div >
                            <img className='image' src={bloodypuremain} />
                        </div>
                    
                    </div>
                    <Footer />
            </BloodyPureContainer>     
        )
    }
}

export default BloodyPure

const BloodyPureContainer = styled.div`
background: #fffced;
.landing-image{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    //navbar is 12vh
    //background-image: url(${bloodypuremain});
    //background: linear-gradient(rgba(255,0,0,.8), rgba(0,0,0,.5)),url('${bloodypuremain}');
    background: linear-gradient(rgba(0,0,0), rgba(255,0,0));
    background-size: cover;
    background-position:center;
    
}
.landing-text{
    padding:0 8rem;
    color:white;
    font-size:5vh;
    text-align:center;
    background: rgba(0,0,0,0.4);
    
}
.what-we-do{
    height:auto;
    display:flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
}
.image{
    height: 60vh;
    width:auto;
    margin:3rem;
    border-radius:700px;
}
.text{
   height:100%;
   width:40%; 
   margin: 2rem;
   font-size:2 vh;
    text-align:center;
}
`
