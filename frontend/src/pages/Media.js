import React, { Component } from 'react';

import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';

import Gallery from '../components/Media/Gallery';
import TabContentOne from '../components/Media/TabContentOne';
import TabContentTwo from '../components/Media/TabContentTwo';
import TabContentThree from '../components/Media/TabContentThree';
import TabContentFour from '../components/Media/TabContentFour';


import logo1 from '../components/images/bp.jpg';
import logo2 from '../components/images/bp2.jpg';
function Admin() {
  return (
    <AdminContainer>
      <NavbarNew />
      <div>
      <Gallery />
      </div>
      <Footer />
    </AdminContainer>
  );
}
export default Admin;

const AdminContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    height: auto;
    background: #f5f2d0;
    font-family: Avenir Roman;
`;