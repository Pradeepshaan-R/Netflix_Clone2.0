import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                {/* TAB TOP CONTENT */}
                <div className="tab-top-content">
                    <span style={{ fontSize: "1.5rem" }}>Choose one plan and watch everything on Netflix.</span>
                    <Button className="btn">Try it Now</Button>
                </div>
                {/* TAB BOTTOM CONTENT */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$14.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={cross} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, Phone and Tablet</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                                <td><Icon icon={checkmark} size={10} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabContentThree;

// MAIN CONTAINER
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
        padding-bottom: 1%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
    }

    span {
        grid-column: 3/9;
    }
    .btn {
        grid-column: 9/12;
        margin-left: 3rem;
        margin-right: 4.5rem;
    }

    // TAB BOTTOM CONTENT
    .tab-bottom-content {
        margin: 2rem auto;
    }
    
    table {
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th {
        text-transform: uppercase;
        padding: 0.8rem;
    }

    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
    }

    table tbody tr td:first-child {
        text-align: left;
    }

    table tbody tr:nth-child(even) {
        background: #222;
    }
`;