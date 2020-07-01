import React, { Component } from 'react';

import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';

import TabContentOne from '../components/Media/TabContentOne';
import TabContentTwo from '../components/Media/TabContentTwo';
import TabContentThree from '../components/Media/TabContentThree';
import TabContentFour from '../components/Media/TabContentFour';


import logo1 from '../components/images/bp.jpg';
import logo2 from '../components/images/bp2.jpg';
class Media extends Component {
    state = {
        tabIndex: 0,
    }
    render() {
        return (
          <MediaContainer>
            <NavbarNew />
            <h3 style={{ fontSize: "2.5rem", margin: "1rem auto" }}>Gallery</h3>
            <div className="gallery">
              <Tabs className="tabs" selectedIndex={this.state.tabIndex}
            onSelect = {tabIndex => this.setState( {tabIndex} )}>
                <TabList className="tabs-list">
                  <Tab
                    className={`${
                      this.state.tabIndex === 0 ? "active-tab" : "tab"
                    } `}
                  >
                    <p>Campaign 1</p>
                  </Tab>
                  <Tab
                    className={`${
                      this.state.tabIndex === 1 ? "active-tab" : "tab"
                    } `}
                  >
                    <p>Campaign 2</p>
                  </Tab>
                  <Tab
                    className={`${
                      this.state.tabIndex === 2 ? "active-tab" : "tab"
                    } `}
                  >
                    <p>Campaign 3</p>
                  </Tab>
                  <Tab
                    className={`${
                      this.state.tabIndex === 3 ? "active-tab" : "tab"
                    } `}
                  >
                    <p>Campaign 4</p>
                  </Tab>
                </TabList>
                <TabPanel>
                  <TabContentOne />{" "}
                  {/*These tabs : TabContentX are for each campaign and each contains another navbar*/}
                </TabPanel>
                <TabPanel>
                  <TabContentTwo />
                </TabPanel>
                <TabPanel>
                  <TabContentThree />
                </TabPanel>
                <TabPanel>
                  <TabContentFour />
                </TabPanel>
              </Tabs>
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
// font-weight: 900;

.gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    weight: 100vw;
    justify-content: center;
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
}

.active-tab {
  background: blue;
}

.tab{
  margin: 0 1rem 0 1rem;
}

.tabs-list{
  display: flex;
  flex-direction: row;
}
// .images {
//     height: 12rem;
//     width: 12rem;
//     // border-radius: 24px;
//     margin-left: 1rem;
//     margin-right: 1rem;
//     margin-top: 1rem;
//     margin-bottom: 1rem;
//     padding:0;
//     &:hover {
//         transform: scale(1.05);
//         translate: transform 0.25s ease-out;
//     }
// }


`;