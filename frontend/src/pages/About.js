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
                  Kadam was founded on June 8th of 2018, with the core belief
                  that an act of kindness, however small or large, is possible
                  by all of us, regardless of time, place, or schedule. All it
                  takes is one step to do good. We believe that no matter how
                  busy our lives get, we all have the capacity to do good and to
                  give back, all that is needed is to take the first step of
                  doing an act of kindness.
                </p>
                <p>
                  This core belief is shared amongst all of our volunteers,
                  members, and officers, who comprise the very backbone of
                  Kadam. We are a consortium of like-minded, young individuals,
                  who have a passion to do good, give back, and better our
                  society. We have over 250 members and volunteers located
                  across the nation, with our main branches located in Amritsar,
                  Bangalore, Chennai, Coimbatore, and Lucknow. However, we also
                  have a significant presence in cities such as Delhi,
                  Ernakulam, Kochi, Madurai, Mumbai, Prayagraj, and Salem.
                </p>
                <p>
                  Our motto of doing good, one step at a time, has allowed us to
                  achieve a great many things, and spread happiness and
                  awareness to thousands of individuals across India. We will
                  continue to keep taking steps forward, and as long as there is
                  work to be done, we will do it, one step at a time.
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
  flex-wrap:wrap;
  font-family: Avenir Roman;
  background: #fffced;
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
    flex-wrap:wrap;
    // justify-content: space-around;
    align-items: center;
    margin: 2rem auto;
    color: rgba(0, 0, 0, 0.7);
  }

  .leadership {
    font-size: 3vh;
    font-family: Avenir Roman;
    display: flex;
    flex-wrap:wrap;
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