import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
      {/* <a href style={{paddingLeft:"2.5rem"}}>Home</a>
        <a href>Something</a>
        <a href>Homeset</a>
        <a href style={{paddingRight:"2.5rem"}}>Somethingset</a> */}
      <div className="links">
        <NavLink className="link-text" to="/">
          HOME
        </NavLink>
        <NavLink className="link-text" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="link-text" to="/impact">
          OUR IMPACT
        </NavLink>
        <NavLink className="link-text" to="/mad">
          MAKE A DIFFERENCE
        </NavLink>
        <NavLink className="link-text" to="/media">
          MEDIA AND BLOG
        </NavLink>
      </div>
    </NavbarContainer>
  );
}
export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: grey;
  color: #ecc731;
  height: 10vh;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

    
`;