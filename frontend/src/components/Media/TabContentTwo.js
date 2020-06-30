import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import logo1 from '../images/bp.jpg';
import logo2 from '../images/bp2.jpg';

import styled from 'styled-components';

class TabContentTwo extends Component {

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
          <Tab className={`${this.state.tabIndex === 0 ? "active" : null} `}>
            <p>Chennai</p>
          </Tab>
          <Tab className={`${this.state.tabIndex === 1 ? "active" : null} `}>
            <p>Amritsar</p>
          </Tab>
          <Tab className={`${this.state.tabIndex === 2 ? "active" : null} `}>
            <p>Coimbatore</p>
          </Tab>
          <Tab className={`${this.state.tabIndex === 3 ? "active" : null} `}>
            <p>Bangalore</p>
          </Tab>
        </TabList>
        <TabPanel>
        <p>First panel</p>
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

export default TabContentTwo;

const TabContainer = styled.div`

    display: flex;
    flex-direction:row;

    .active{
        background: red;
    }
    
    img{
        height: 5rem;
        width: 5rem;
    }
    .tabs-list{
        display: flex;
        flex-direction: row;
      }
`