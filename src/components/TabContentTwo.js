import React from "react";
import { Button } from "./Button"
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMacbook from "../images/tab-macbook.png";

function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                {/* TAB TOP CONTENT */}
                <div className="tab-top-content">
                    <span style={{ fontSize: "1.5rem" }}>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                    <Button className="btn">Try it Now</Button>
                </div>
                {/* TAB BOTTOM CONTENT */}
                <div className="tab-bottom-content">
                    {/* TABLET IMAGE CONTAINER */}
                    <div>
                        <img src={ImgTv} alt="TV" style={{ width: "18.75rem" }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart Tvs, PlayStation, Xbox, Chromcast, Apple Tv, Blueray players and more.</p>
                    </div>
                    {/* MACBOOK IMAGE CONTAINER */}
                    <div>
                        <img src={ImgTablet} alt="Tablet" style={{ width: "18.75rem", paddingTop: "0.625rem " }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart Tvs, PlayStation, Xbox, Chromcast, Apple Tv, Blueray players and more.</p>
                    </div>
                    {/* TV IMAGE CONTAINER */}
                    <div>
                        <img src={ImgMacbook} alt="Macbook"
                            style={{ width: "18.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart Tvs, PlayStation, Xbox, Chromcast, Apple Tv, Blueray players and more.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabContentTwo;

// MAIN TAB CONTENT CONTAINER
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    // TAB CONTENT
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 1/8;
    }
    
    .btn {
        grid-column: 10/12;
        margin: 0 1.25rem 1.25rem;
    }
    
    // TAB BOTTOM CONTENT
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem; 
    }    

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }

`;
