import React from 'react';

import styled from 'styled-components';
import { AiFillDashboard } from 'react-icons/ai'
import { FaMicroblog } from 'react-icons/fa';
import CampaignCard from './CampaignCard';
import Table from './Table';

function Admin() {
  return (
    <AdminContainer>
      <div className="sidebar">
        <div className="sidebar-title">
          <p>KADAM</p>
        </div>
        <div className="sidebar-row">
          <AiFillDashboard size={30} /> &nbsp;&nbsp;
          Dashboard
        </div>
        <div className="sidebar-row">
        <FaMicroblog size={30} /> &nbsp;&nbsp;
            Blogs</div>
      </div>
      <div className="main-area">
        <div className="cards">
          <div className="campaign-cards">
                <CampaignCard text="Bloody Pure" value="50"/>
          </div>
          <div className="campaign-cards">
                <CampaignCard text="Raksha Kaksha" value="60"/>
          </div>
          <div className="campaign-cards">
                <CampaignCard text="Sunflower Restoration" value="70"/>
          </div>
          <div className="campaign-cards">
                <CampaignCard text="ShhEx Ed" value="80"/>
          </div>
        </div>
        {/* <div className="main-card">
          <CampaignCard text="Something" value="90"/>
        </div> */}
        <br />
        <br />
        <br />
      <div>
        <Table />
      </div>
      </div>
    </AdminContainer>
  );
}
export default Admin;

const AdminContainer = styled.div`

    display: flex;
    flex-direction: row;

    .sidebar {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: fixed;
        width: 20vw;
        background: #061B3A;
    }

    .sidebar-title{
        height: 4rem;
        background: #ff3300;
        color: white;
        
    }

    .sidebar-row{
        margin: 1rem auto;
        color: white;
        font-size:1.5rem;
    }

    .main-area {
        display: flex;
        flex-direction: column;
        height:200vh;
        width: 80vw;
        margin-left: 20vw;
        background: #f5f2d0;
    }
    .campaign-cards {
        display:flex;
        flex-direction: row;
        margin: 1rem;
    }
    .cards{
      display: flex;
      flex-wrap:wrap;
      width: 40vw;
      margin: 3.5rem;
    }
    .main-card {
      display: flex;
      margin: 1rem;
      
    }
`;