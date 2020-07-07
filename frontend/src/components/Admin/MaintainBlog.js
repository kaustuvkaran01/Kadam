import React from 'react';
import styled from 'styled-components';

import NavbarAdmin from './NavbarAdmin';
import Table from './Table';
import Footer from '../Footer';

function MaintainBlog() {
  return (
    <MaintainBlogContainer>
      <NavbarAdmin />
      <div className="main-container">
        <p>View/Hide Blogs</p>
        <Table />
      </div>
      <Footer />
    </MaintainBlogContainer>
  );
}

export default MaintainBlog;

const MaintainBlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #f5f2d0;
    font-family: Avenir Roman;


    .main-container{
        margin-top: 5vh;
        display: flex;
        flex-direction:column;
        height: auto;
    }
    p{
        align-self:center;
        justify-content: center;
        font-weight: 800;
        font-size:x-large;
    }
`;