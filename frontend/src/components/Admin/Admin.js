import React from 'react';

import styled from 'styled-components';
import { AiFillDashboard } from 'react-icons/ai'
import { FaMicroblog } from 'react-icons/fa';
import CampaignCard from './CampaignCard';
import Table from './Table';
import NavbarAdmin from './NavbarAdmin';
import Gallery from '../Media/Gallery';


function Admin() {
  return (
    <AdminContainer>
      <Gallery />
    </AdminContainer>
  );
}
export default Admin;

const AdminContainer = styled.div`

    display: flex;
    flex-direction: row;
    margin-top: 2vh;
    height: 100vh;
    background: #f5f2d0;
    font-family: Avenir Roman;
`;