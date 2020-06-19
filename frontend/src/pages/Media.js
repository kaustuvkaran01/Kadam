import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import logo1 from '../components/images/gurleen.jpg';
import logo2 from '../components/images/hamza.jpg';
class Media extends Component {
    render() {
        return (
            <MediaContainer>
                <Navbar />
                <h3 style={{fontSize:"2.5rem", margin:"1rem auto"}}>Gallery</h3>
                <div className="gallery">
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                        <img className="images" src={logo2} />
                        <img className="images" src={logo1} />
                </div>
                <Footer />
            </MediaContainer>
        );
    }
}

export default Media;

const MediaContainer = styled.div`
display: flex;
flex-direction: column;
font-family: Avenir Roman;
font-weight: 900;

.gallery {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    weight: 100vw;
    justify-content: center;
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
}
.images {
    height: 12rem;
    width: 12rem;
    // border-radius: 24px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding:0;
    &:hover {
        transform: scale(1.05);
        translate: transform 0.25s ease-out;
    }
}
`;