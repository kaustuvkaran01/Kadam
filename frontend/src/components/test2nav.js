import React, { useState, useContext, useEffect } from "react";
import logo from "./images/logo.png";
import styled from "styled-components";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import Login from "./images/login.svg";
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
  NavbarText,
  Button, ButtonGroup 
} from "reactstrap";

const NavbarNew = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        console.log(data, "data");
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);

        return (
          <>
            <Link to="/" />;
          </>
        );
      }
    });
  };
  const unauthenticatedNavBar = () => {
    return (
      <NavbarNewContainer>
        <NavbarText>
          {/* <NavLink className="link-text" href="/login"> */}
          <LoginModal buttonLabel="Login" />
          {/* </NavLink> */}
        </NavbarText>
        {/* <NavbarText>
          <NavLink className="link-text" href="/register">
            Register
          </NavLink>
        </NavbarText> */}
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
          <button
            type="button"
            onClick={onClickLogoutHandler}
            className="log-button"
          >
            LOGOUT
          </button>
        </NavbarText>
      </NavbarNewContainer>
    );
  };

  return (
    <NavbarNewContainer>
      <Navbar color="dark" fixed="top" dark expand="md">
        <NavbarBrand className="brand" href="/">
          <img className="logo" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto custom-nav-link" navbar>
            <UncontrolledDropdown className="dropdown link-text" nav inNavbar>
              <DropdownToggle nav caret>
                Our Impact
              </DropdownToggle>
              <DropdownMenu left>
                <NavLink className="link-text" href="/bloodypure">
                  <DropdownItem>BloodyPure</DropdownItem>
                </NavLink>
                <NavLink className="link-text" href="/rakshakaksha">
                  <DropdownItem>RakshaKaksha</DropdownItem>
                </NavLink>
                <NavLink className="link-text" href="/sexed">
                  <DropdownItem>Sex'Ed</DropdownItem>
                </NavLink>
                <NavLink className="link-text" href="/sunflower">
                  <DropdownItem>Sunflower Restoration</DropdownItem>
                </NavLink>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink className="link-text" href="/">
                Home
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink className="link-text" href="/about">
                About Us
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="link-text " href="/mad">
                Make a Difference!
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-text" href="/media">
                Others
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-text" href="/blog">
                Our Story
              </NavLink>
            </NavItem>
            {/* <NavLink className="link-text" href="/test">
              Test
            </NavLink> */}
          </Nav>
          <ButtonGroup>
      <Button color="danger">Contribute</Button>
      <Button color="warning">Donate</Button>
      <Button color="info">Intern</Button>
      <Button color="success">Volunteer</Button>
      
    </ButtonGroup>
    <img style={{height:"32px",width:"auto" }} src={Login}/>
          {/* {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()} */}
          
        </Collapse>
      </Navbar>
      <div className="filler"></div>
    </NavbarNewContainer>
  );
};

export default NavbarNew;

const NavbarNewContainer = styled.div`
  // #343a40 is dark
  display: block;
  height: 8vh;
  font-size:small;
  font-weight:600;
  .dropdown {
    background: #24231F;
  }
  .custom-nav-link {
    color: white;
  }
  .logo {
    height: 3rem;
    width: 3rem;
    margin-right: 1.5rem;
  }
  .brand {
    margin: 0;
    padding: 0;
  }
  .filler {
  }
  .dropdown-menu {
    background-color: #24231F;
    color: white;
  }
  .dropdown-item {
    color: rgba(255, 255, 255, 0.5);
  }
  .dropdown-item: hover {
    background-color: #343a40;
    color: rgba(255, 255, 255, 0.8);
  }

  .log-button {
    background: #008080;
    border-radius: 12px;
    border: none;
    color: white;
  }
  .bg-dark{
    background-color:#24231F !important;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
    border-right: 1px solid rgba(255,255,255,0.1);
    box-sizing:border-box;
  }
  .btn-group{
    margin-right: 3rem;
  }
  .btn{
    margin-right:0.25rem;
    font-size:small;
    font-weight:600;
  }
  .navbar{
    padding-left:8rem;
    padding-right:8rem;
    
  }
  @media only screen and (max-width: 1200px) {
    .navbar{
      padding-left:2rem;
      padding-right:2rem; 
    }
    .btn-group{
      margin-right: 0.5rem;
    }
  }
  @media only screen and (max-width: 1000px){
    font-size:x-small;
    .btn{
      font-size:x-small;
    }
  }
`;
