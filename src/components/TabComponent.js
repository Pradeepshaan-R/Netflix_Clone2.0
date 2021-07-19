import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrice from "./tabs_nav/TabPrice";
import "../css/TabsNav.css";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? "active tab-selected " : null}`}>
                            <TabDoor />
                            <p>
                                <strong>No commitments<br />Cancel online at anytime</strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? "active tab-selected " : null}`}>
                            <TabDevices />
                            <p style={{ marginTop: "-5.3125rem" }} >
                                <strong>Watch anywhere</strong>
                            </p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? "active tab-selected " : null}`}>
                            <TabPrice />
                            <p>
                                <strong>Pick your price</strong>
                            </p>
                        </Tab>
                    </TabList>
                    {/* TABS CONTENT */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </ div>
        );
    }
}

export default TabComponent;
