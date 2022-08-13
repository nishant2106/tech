import React from "react";

import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from '@fortawesome/free-solid-svg-icons'
const AppHeader:React.FC = () => {
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <FontAwesomeIcon color="blue" icon={ faBolt } />
                    <a href="/">Tech</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features</Menu.Item>
                    <Menu.Item key="howitworks">How it works?</Menu.Item>
                    <Menu.Item key="faq">FaQ</Menu.Item>
                    <Menu.Item key="pricing">Pricing</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default AppHeader;