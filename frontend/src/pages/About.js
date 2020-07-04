import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Card_person from '../components/Card_person';

class About extends Component {
    render() {
        return (
          <AboutContainer>
            <NavbarNew />
              <div className="history">
                <h3>OUR HISTORY</h3>
                <div className="history-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni, necessitatibus officiis facere nisi et, ut adipisci a
                    quis quisquam vitae doloremque tempora repellat quae
                    accusantium atque eum voluptatibus aperiam cumque. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                    necessitatibus officiis facere nisi et, ut adipisci a quis
                    quisquam vitae doloremque tempora repellat quae accusantium
                    atque eum voluptatibus aperiam cumque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni, necessitatibus officiis facere nisi et, ut adipisci a
                    quis quisquam vitae doloremque tempora repellat quae
                    accusantium atque eum voluptatibus aperiam cumque. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                    necessitatibus officiis facere nisi et, ut adipisci a quis
                    quisquam vitae doloremque tempora repellat quae accusantium
                    atque eum voluptatibus aperiam cumque.
                  </p>
                </div>
              </div>
              <h3 style={{ margin: "auto", fontSize: "4vh" }}>LEADERSHIP</h3>
              <div className="leadership">
                <div className="leadership-card">
                  <Card_person text="Hamza" description="VP" />
                  <Card_person text="Gurleen" description="VP" />
                  <Card_person text="Siva" description="President" />
                </div>
              </div>
            <Footer />
          </AboutContainer>
        );
    }
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Avenir Roman;
  .history {
    font-family: Avenir Roman;
    font-size: 3vh;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-top: 9rem;
    height: 75vh;
  }

  .history-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem auto;
    color: rgba(0, 0, 0, 0.7);
  }

  .leadership {
    font-size: 3vh;
    font-family: Avenir Roman;
    display: flex;
    margin: 1rem auto;
    margin-left: 10rem;
    margin-right: 10rem;
  }

  .leadership-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem auto;
    justify-content: center;
    margin-auto: 5rem;
  }
`;