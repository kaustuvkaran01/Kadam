import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <NavbarContainer>
        <Link to ="/">HOME</Link>
        <Link to ="/about">ABOUT</Link>
        <a href>Homeset</a>
        <a href style={{paddingRight:"2.5rem"}}>Somethingset</a>
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