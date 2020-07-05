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
                    <div className='what-we-do red'>
                        <div >
                            <img className='image' src={bloodypuremain} />
                        </div>
                        <div className='text'>
                            <h1>India</h1>
                            India is home to approximately 120 million adolescent girls— roughly 10% of the Indian population. A girl menstruates on an average of five days a month, 12 months a year, and this cycle carries on until she reaches menopause between the ages of 30–40. Periods are normal and healthy, yet many girls across both rural and urban India struggle to manage this monthly occurrence. Menstrual taboos are still widespread and commonplace in our society. Most women, even those working in corporations, are hesitant to apply for leave due to menstrual cramps or other menstrual symptoms, instead labeling it as merely a stomachache. This is a clear sign of the systemic imprinting that occurs in our society that leads to the perception that menstruation is a problem or a disease. At #BloodyPure, we strive to undo this imprinting, for both men and women.

                        </div>
                        
                    
                    </div>
                    <div className='what-we-do '>
                        <div className='text'>
                            <h1>Impact.</h1>
                            IMPACT
The #BloodyPure campaign was initiated in August 2019, since which we have organized (NO of EVENTS) events across 4 major cities, namely Amritsar, Bangalore, Chennai, and Coimbatore. These events are educational in nature and interactive by intent. Through these events we have reached out to more than (NO of STUDENTS) students, and have involved more than (NO of VOLUNTEERS) volunteers across the nation.  
#BloodyPure also provides hygiene kits to girls in rural areas, funded via our online fundraising. We have collaborated with Rebelle Pads, a cloth pad manufacturer, wherein we receive a kit containing 4 cloth pads, 1 wet pouch and 1 cloth bag at ₹(PRICE). Furthermore, these kits not only facilitate hygienic practices during menstruation, but are also eco-friendly as they reduce the monthly waste production caused by mainstream plastic sanitary napkins. Once received, these kits are then distributed to female children in areas of need. Through our BloodyPure memberships, sponsors, donations, and collaborations we have provided over 150 hygiene kits across the country. 80 kits were distributed to female students in a government school located in Tholasampatti Village, in the Salem district of Tamil Nadu, and 70 kits to female students in SGRD School, Amritsar.


                        </div>
                        
                        <div >
                            <img className='image' src={bloodypuremain} />
                        </div>
                    
                    </div>
                    <div className='what-we-do red'>
                        <div >
                            <img className='image' src={bloodypuremain} />
                        </div>
                        <div className='text'>
                            <h1>Where we work</h1>
                            Our main targeted demographic for our educational events are for school children from 6th standard to 12th standard. Amritsar, Chennai, Coimbatore, and Bangalore are the major cities in which we have a core team presence, while having smaller and travelling teams in smaller cities. We aim to strike a chord with these school children, both boys and girls, in order to create awareness and normalize periods for both genders, and thus as a society as a whole. Since learning starts early on in a person’s life, we feel that if we can inform, educate, and normalize menstruation at this age, we combat the issue from forming late on in a person’s life. This is the primary reasoning behind targeting students at such a young age.

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
font-family: Avenir Roman;

@keyframes pulse {
    0% {
      background-color: #90305A;
    }
    100%{
        background-color: #660000;
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
    background:#660000;
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
.red{
    margin-top:5rem;
    margin-bottom:5rem;
    background:#660000;
    color:white;
}
`
