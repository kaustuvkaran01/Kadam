import React, { useState,useContext, useEffect } from 'react';
import logo from "./images/logo.png";
import styled from "styled-components";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



const NavbarNew = (props) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );
  
  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);
      }
    });
  };
  const unauthenticatedNavBar = () => {
    return (
      <NavbarNewContainer>
        <NavbarText>
        <NavLink className="link-text" href="/login">
          LOGIN
        </NavLink>
        </NavbarText> 
        <NavbarText>
        <NavLink className="link-text" href="/register">
          REGISTER
        </NavLink>
        </NavbarText>
        
      </NavbarNewContainer>
    );
  };
  
  const authenticatedNavBar = () => {
    return (
      <NavbarNewContainer>
        <NavbarText>
        <NavLink className="link-text" href="/profile">
          PROFILE
        </NavLink>
        </NavbarText>
        <NavbarText>
        <button type="button" onClick={onClickLogoutHandler}>
          LOGOUT
        </button>
        </NavbarText>
      </NavbarNewContainer>
    );
  };
  
  return (
    <NavbarNewContainer>
      <Navbar  color="dark" fixed="top" dark  expand="md">
        <NavbarBrand className='brand' href="/"><img className="logo" src={logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto custom-nav-link" navbar>
            <NavItem>
            <NavLink className="link-text" href="/">
            Home
          </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="link-text" href="/about">
            About Us
          </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="link-text" href="/mad">
            Make a Difference!
          </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Our Impact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  BloodyPure
                </DropdownItem>
                <DropdownItem>
                  Raksha Kaksha
                </DropdownItem>
                <DropdownItem>
                  Shh'ex'ed
                </DropdownItem>
                <DropdownItem>
                  Another one
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <NavLink className="link-text" href="/media">
            Media
          </NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="link-text" href="/blog">
            Blogs
          </NavLink>
            </NavItem>
            <NavLink className="link-text" href="/test">
            Test
          </NavLink>
          </Nav>
          {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
          {/* <NavbarText>Login</NavbarText> */}

        </Collapse>

      </Navbar>
      
    </NavbarNewContainer>
  );
}

export default NavbarNew;

const NavbarNewContainer =styled.div `

  .custom-nav-link{
    color:white;
  }
  .logo {
    height: 3rem;
    width: 3rem;
    margin-right:1.5rem;
  }
  .brand{
    margin:0;
    padding:0;
  }
`