import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../svg/logo.svg";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { Button } from "./Button";

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        {/* HEADER TOP */}
        <div className="header-top">
          <Logo src={logo} alt="Netflix Logo" />
          <Link className="signIn-btn">Sign In</Link>
          {/* <NavLink className="signIn-btn">Sign In</NavLink> */}
        </div>
        {/* HEADER CONTENT */}
        <div className="header-content">
          <Title>See what's next.</Title>
          <SubTitle>Watch Anywhere. Cancel Anytime.</SubTitle>
          <Button className="main-offer-btn" primary>
            Try it Now
            <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37} />
          </Button>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

// CSS (STYLED)
// LOGO
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// HEADER COMPONENT
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    color: white;
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    border: none;
    &:hover {
      background: var(--main-red-hover);
    }
  }

  // HEADER TOP
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // HEADER CONTENT
  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 1;
  }

  .Icon svg {
    vertical-align: botton;
    margin-left: 1.5rem;
  }
`;
// MAIN TITLE
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

// SUB TITLE
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
`;
