import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo1 from '../images/bp.jpg';
import logo2 from '../images/bp2.jpg';
import styled from 'styled-components';

class TabContentOne extends Component {

    state = {
        tabIndex:0,
    }

    render() {
        return (
          <TabContainer>
            <Tabs
              className="tabs"
              selectedIndex={this.state.tabIndex}
              onSelect={(tabIndex) => this.setState({ tabIndex })}
            >
              <TabList className="tabs-list">
                <Tab
                  className={`${this.state.tabIndex === 0 ? "active" : "tab"} `}
                >
                  <p>Chennai</p>
                </Tab>
                <Tab
                  className={`${this.state.tabIndex === 1 ? "active" : "tab"} `}
                >
                  <p>Amritsar</p>
                </Tab>
                <Tab
                  className={`${this.state.tabIndex === 2 ? "active" : "tab"} `}
                >
                  <p>Coimbatore</p>
                </Tab>
                <Tab
                  className={`${this.state.tabIndex === 3 ? "active" : "tab"} `}
                >
                  <p>Bangalore</p>
                </Tab>
              </TabList>
              <TabPanel>
                <div>
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                  <img src={logo1} size="5rem" />
                </div>
              </TabPanel>
              <TabPanel>
                <p>Second panel</p>
              </TabPanel>
              <TabPanel>
                <p>Third panel</p>
              </TabPanel>
              <TabPanel>
                <p>Fourth panel</p>
              </TabPanel>
            </Tabs>
          </TabContainer>
        );
    }
}

export default TabContentOne;
const TabContainer = styled.div`

    display: flex;
    flex-direction: row;
    background: black;
    color: white;

    .active{
        background: red;
        margin: 0 1rem 0 1rem;
    }


    img{
        height: 8rem;
        width: 8rem;
        margin:1rem 1rem 1rem 1rem;
    }
    .tabs-list{
        display: flex;
        flex-direction: row;
        margin: 1rem auto;
      }

      .tab{
          margin: 0 1rem 0 1rem;
      }

`;