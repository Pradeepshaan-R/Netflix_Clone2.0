import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

export class Footer extends Component {
    state = {
        langContent: false
    }

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: "17.5%", fontSize: "0.95rem" }}>
                    Questions ? <Link>Call 1-877-742-1335</Link>
                </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Coperate Information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>
                    {/* LANGUAGE BUTTON */}
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
                </div>
                {/* TOGGLE LANGUAGE COMPONENT */}
                {this.state.langContent && (
                    <div className="lang-toggle">
                        <ul>
                            <li>English</li>
                        </ul>
                        <ul>
                            <li>French</li>
                        </ul>
                    </div>
                )
                }
                <span style={{ marginLeft: "17.5%", fontSize: "0.9rem" }}>Netflix Canada</span>
            </FooterContainer >
        );
    }
}

export default Footer;

const FooterContainer = styled.div`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;
    list-style: none;

    .footer-columns{
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    ul li {
        list-style: none;
        line-height: 2.5rem;
    }

    a {
        color: #999;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    // LANGUAGE BUTTON

    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8.125rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 2rem 0 2rem 14.5%;
        cursor: pointer;
    }

    // TOGGLE LANGUAGE CONTENT
    .lang-toggle {
        margin-left: 14.9%;
        margin-top: -2rem;
        margin-bottom: 2rem;
    }
    .lang-toggle ul {
        margin-top: 0;
        margin-bottom: 0;
    }
    .lang-toggle ul li{
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
        &:hover {
            background: #0085ff;
            color: var(--main-white);
        }
    }
`;