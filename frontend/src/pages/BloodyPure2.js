import React, { Component } from 'react';

import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import bloodypuremain from '../components/images/bloodypure-main.jpg';

export default function BloodyPure2() {
  return (
    <BloodyPureContainer>
      <NavbarNew />
      <div className="landing-image">
        <div className="landing-text">This is #BloodyPure2.</div>
      </div>

      <div className="what-we-do">
        <div className="text">
          <h1>What we do</h1>
          Our #BloodyPure initiative was created with the primary goal of
          creating a society that is free of menstrual prejudice. We aim to
          achieve this by changing the societal perception of menstruation from
          a purely “woman’s issue” to a more inclusive understanding of the
          societal problem. Reiterating the role of men in menstruation, and
          including them in our education campaigns is of utmost importance,
          wherein, we reinforce the fact that menstruation is not a disease or a
          sin, but rather a biological process that every female human being
          undergoes on a regular basis. Through the #BloodyPure initiative, we
          create awareness, spread education, and try to create a positive,
          unbiased perception of the biological process that is menstruation.
        </div>
        <div>
          <img className="image" src={bloodypuremain} />
        </div>
      </div>
      <div className="what-we-do sec-color">
        <div className="text2">
          <img className="image2" src={bloodypuremain} />
          <br />
          <h2>NORMALISE PERIODS</h2>
          <p>
            Educate school children (both boys and girls) that it's nothing but
            a biological process, thereby eliminating taboo
          </p>
        </div>
        <div className="text2">
          <img className="image2" src={bloodypuremain} />
          <br />
          <h2>CLOTH PADS</h2>
          <p>
            Distribute resuable cloth pads to improve hygiene, reduce and making
            them environmentally aware.
          </p>
        </div>
      </div>
      <div className="what-we-do ">
        <div className="text">
          <h1>Impact.</h1>
          IMPACT The #BloodyPure campaign was initiated in August 2019, since
          which we have organized (NO of EVENTS) events across 4 major cities,
          namely Amritsar, Bangalore, Chennai, and Coimbatore. These events are
          educational in nature and interactive by intent. Through these events
          we have reached out to more than (NO of STUDENTS) students, and have
          involved more than (NO of VOLUNTEERS) volunteers across the nation.
          #BloodyPure also provides hygiene kits to girls in rural areas, funded
          via our online fundraising. We have collaborated with Rebelle Pads, a
          cloth pad manufacturer, wherein we receive a kit containing 4 cloth
          pads, 1 wet pouch and 1 cloth bag at ₹(PRICE). Furthermore, these kits
          not only facilitate hygienic practices during menstruation, but are
          also eco-friendly as they sec-coloruce the monthly waste production
          caused by mainstream plastic sanitary napkins. Once received, these
          kits are then distributed to female children in areas of need. Through
          our BloodyPure memberships, sponsors, donations, and collaborations we
          have provided over 150 hygiene kits across the country. 80 kits were
          distributed to female students in a government school located in
          Tholasampatti Village, in the Salem district of Tamil Nadu, and 70
          kits to female students in SGRD School, Amritsar.
        </div>

        <div>
          <img className="image" src={bloodypuremain} />
        </div>
      </div>
      <div className="what-we-do sec-color">
        <div>
          <img className="image" src={bloodypuremain} />
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
      <div className="what-we-do ">
        <AddFundraiserContainer>
          {/* <NavbarAdmin /> */}
          <div className="container-form">
            <h2>CONTRIBUTE NOW</h2>
            <form className="form-about-fundraiser">
              <label htmlFor="fname">FULL NAME</label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name"
              />
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
              <label htmlFor="zip-code">ZIP CODE</label>
              <br />
              <input
                type="number"
                id="zip-code"
                name="zip-code"
                placeholder="ZIP CODE"
              />
              <label htmlFor="country">Country</label>
              <br />
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
              <br />
              <input
                type="submit"
                id="donate"
                name="Donate Now"
                placeholder="Donate Now"
              />
              <p>
                TO BECOME A VOLUNTEER YOU HAVE TO DONATE A MINIMUM AMOUNT OF
                Rs100 AS MEMBERSHIP FEE(PAYMENT PORTAL WILL OPEN ON CLICKING
                SUBMIT)
              </p>
            </form>
          </div>
        </AddFundraiserContainer>
      </div>
      <div className="what-we-do sec-color">
        <div className="text">
          <h1>WHAT DO WE DO WITH YOUR MONEY?</h1>
          Through #BloodyPure Campaign we also provide cloth pads to girls in
          rural areas through online fundraising. We have collaboratored with
          Rebelle Pads, a cloth pad manufacturer where we het 4 cloth pads, 1
          wet pouch and 1 cloth bag at Rs. 192. We have provided 80 kits to
          girls in a Government school in Tholasampatti Village, Salem and 70
          kits to girls in SGRD School, Amritsar. Total 150 kits are distributed
          with the help of the BloodyPure Memberships, contributing to our
          mission to reduce the monthly waste production from the mainstream
          plastic sanitary napkins.
        </div>
      </div>

      <Footer />
    </BloodyPureContainer>
  );
}


const customMedia = generateMedia({
  smTablet: '740px'

})


const BloodyPureContainer = styled.div`
background: #fffced;
font-family: Avenir Roman;

@keyframes pulse {
    0% {
    //   background-color: #90305A;
    background-color:#FF0000;
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
    font-size:xx-large;
    text-align:center;
    background: rgba(0,0,0,0.4);
    animation: slide-top 1s ease-in-out both;
    ${
      customMedia.lessThan('smTablet')`
        width:100%;
      `
    }
    
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
    ${customMedia.lessThan('smTablet')`
    
        height:10rem;

    `}
}
.image:hover{
    transform:scale(1.05);
}

.image2{
    height:10rem;
    width: auto;
    border-radius:15px;
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
    ${
      customMedia.lessThan('smTablet')`
        width:75%;
      `
    }
}
.text:hover{
    transform:scale(1.05);
}

.text2{
    height:100%;
   width:40%;
   margin: 2rem;
   font-size:x-large;
    text-align:center;
    transition: transform .2s;
    background: rgba(255,0,0,0.1);
    padding:1rem;
    border-radius: 15px;
    &:hover{
        transform:scale(1.05);
    }
    ${customMedia.lessThan('smTablet')`
      width:75%;
    
    `}
}

h1{
    margin-bottom:2rem;
}
.sec-color{
    margin-top:5rem;
    margin-bottom:0rem;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    background:#660000;
    color:white;
}
`;

const AddFundraiserContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  font-family: Avenir Roman;
  margin: 0.5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  ${
    customMedia.lessThan('smTablet')`
      width:100%;
    `
  }
  h2 {
    font-weight: 400;
  }
  .textarea {
    border-radius: 6px;
    background: #f5f5f5;
  }
  .container-form {
    margin: 2rem auto;
    margin-bottom: 0;
    margin-top:15vh;
    ${
      customMedia.lessThan('smTablet')`
        width:100%;
      `
    }
  }
  .form-about-fundraiser {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: white;
    margin: 3rem auto;
    margin-top: 1.5rem;
    border-radius: 12px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
    ${
      customMedia.lessThan('smTablet')`
        width:100%;
      `
    }
  }
  p{
    height: 2.75rem;
    width: 30rem;
    font-size: small;
    padding-bottom:2rem;
    color: rgba(0, 0, 0, 0.7);
    ${
      customMedia.lessThan('smTablet')`
        width:100%;
      `
    }
  }
  label {
    font-size: 1rem;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.7);
  }
  input {
    height: 2.75rem;
    width: 30rem;
    font-size: large;
    border-radius: 6px;
    border: 1px;
    background: #f5f5f5;
    padding-left: 0.85rem;
    margin-bottom:2rem;
    ${
      customMedia.lessThan('smTablet')`
        width:100%;
      `
    }
  }
  .desc {
    height: 5rem;
    cols: 30;
    rows: 5;
  }
  .about-input {
    height: 10.5rem;
  }

  .submit-btn {
    &:hover {
      background: #863547;
      color: white;
    }
    margin: auto;
    width: 15rem;
  }
  .bill-cards {
    margin: 1rem auto;
    display: flex;
  }
`;

