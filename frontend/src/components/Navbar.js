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
        <NavLink className='' to='/'>HOME</NavLink>  
        <NavLink className='' to='/about'>ABOUT US</NavLink>
        <NavLink className='' to='/impact'>OUR IMPACT</NavLink>
        <NavLink className='' to='/mad'>MAKE A DIFFERENCE</NavLink>
        <NavLink className='' to='/media'>MEDIA AND BLOG</NavLink>

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