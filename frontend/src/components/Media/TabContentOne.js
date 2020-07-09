import React, { useState } from 'react';
import styled from 'styled-components';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import logo from '../images/landing-image.jpg';

function TabContentOne(props){
    
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <TabContentOneContainer>
      <Nav tabs>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            City 1
          </NavLink>
        </NavItem>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            City 2
          </NavLink>
        </NavItem>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            City 3
          </NavLink>
        </NavItem>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            City 4
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="gallery-div">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="gallery-div">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div className="gallery-div">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <div className="gallery-div">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </TabContentOneContainer>
  );
}

export default TabContentOne;

const TabContentOneContainer = styled.div`
  // display:flex;
  .gallery-div{
    height: auto;
    width: auto;
  }

  img{
    height: 10rem;
    margin:1rem;
  }

`;