import React, { useState } from 'react';
import styled from 'styled-components';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import TabContentFour from './TabContentFour';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <GalleryTabContainer>
      <h2 style={{fontWeight:"800", alignSelf:"center"}}>Gallery</h2>
      <Nav tabs>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Bloody Pure
          </NavLink>
        </NavItem>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Raksha Kaksha
          </NavLink>
        </NavItem>
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Sunflower
          </NavLink>
        </NavItem >
        <NavItem className="gallery-nav-items">
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Sex Ed
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TabContentOne/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
             <TabContentTwo / >
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
             <TabContentThree / >
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
             <TabContentFour / >
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </GalleryTabContainer>
  );
}

const GalleryTabContainer = styled.div`

  {/* background: blue; */}
  display:flex;
  margin:auto;
  margin-top:2vh;
  flex-wrap:wrap;
  flex-direction: column;
  height:100vh;
  {/* justify-content:space-evenly; */}
  width: 90vw;
  .gallery-nav-items{
    // width: 7.5rem;
    margin: auto;
  }

`;