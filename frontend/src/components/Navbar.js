import React from 'react';
import styled from 'styled-components';


function Navbar() {
  return (
    <NavbarContainer>
        <p>
            This is the Navbar component
        </p>
    </NavbarContainer>
  );
}
export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    background: #32302F;
    color: #ECC731;
    height: 10vh;
    width: 100%;
`;