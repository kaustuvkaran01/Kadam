import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import logo from "./images/logo.png";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  useEffect(() => {
    console.log(user, isAuthenticated);
  }, []);

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
      <NavbarContainer>
        <NavLink className="link-text" to="/login">
          LOGIN
        </NavLink>
        <NavLink className="link-text" to="/register">
          REGISTER
        </NavLink>
      </NavbarContainer>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <NavbarContainer>
        <NavLink className="link-text" to="/profile">
          PROFILE
        </NavLink>
        <button type="button" onClick={onClickLogoutHandler}>
          LOGOUT
        </button>
      </NavbarContainer>
    );
  };

  return (
    <NavbarContainer>
      <div className="nav">
        <NavLink className="" to="/">
          <img className="logo" src={logo} />
        </NavLink>

        <div className="all-links">
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
            MEDIA
          </NavLink>
          <NavLink className="link-text" to="/blog">
            BLOGS
          </NavLink>
          <NavLink className="link-text" to="/test">
            Test
          </NavLink>
          {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
        </div>
      </div>
    </NavbarContainer>
  );
}
export default Navbar;

const NavbarContainer = styled.div`
  padding-bottom: 10vh;
  .nav {
    z-index: 99;
    position: fixed;
    display: flex;
    flex-direction: row;
    background: #404040;
    color: #ecc731;
    height: 11vh;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 2vh;
  }
  .logo {
    height: 4.5rem;
    width: 4.5rem;
    padding-bottom: 0.2rem;
  }

  .all-links {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0rem 1.5rem;
  }
  .link-text {
    &:hover {
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    }
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: white;
  }
`;
