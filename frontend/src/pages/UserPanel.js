import React from 'react';

import Profile from '../components/Profile/Profile';
import ProfileBill from '../components/Profile/ProfileBill';

import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';

import styled from 'styled-components';

function UserPanel() {
  return (
    <UserPanelContainer>
  
        <Profile /> 
        {/* <ProfileBill /> */}
    </UserPanelContainer>
  );
}
export default UserPanel;

const UserPanelContainer = styled.div`

    display: flex;
    flex-direction:column;
    background: #F4F5F6;    

`;