import React from 'react'
import SideNav, {Nav, NavIcon, NavItem, NavText, Toggle} from '@trendmicro/react-sidenav';
import {NavLink} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Navigation.css'
import {HiHome} from 'react-icons/hi'
import {MdPermMedia} from 'react-icons/md'
import {BsFillCalendarEventFill} from 'react-icons/bs'
import {FaProductHunt} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {AiFillSetting} from 'react-icons/ai'
import {RiAccountCircleFill} from 'react-icons/ri'
import {setNavContainerSize} from "../../Utils";

//todo add hover over icon notice for each option?

class Navigation extends React.Component {


    componentDidMount() {
        setNavContainerSize();
    }
    
    handleClick = () => {
        let page_content = document.getElementsByClassName('page-content')[0];
        let options = document.getElementsByClassName('nav-text');

        // set the page content margin to width of menu if open & unset if closed
        if (page_content.style.marginLeft === "240px") {
            page_content.style.marginLeft = "64px";
        } else {
            page_content.style.marginLeft = "240px";
        }

        // show the nav option text if menu open and hide if menu closed
        for(let i = 0; i < options.length; i++) {
            if (options[i].style.display === "block") {
                options[i].style.display = 'none';
            } else {
                options[i].style.display = 'block';
            }
        }
        setNavContainerSize();
    }

    handleSideMenuToggleClick = () => {

    }

    handleMobileNavClick = () => {
        document.getElementById("mobile-nav-checkbox").checked = false;
        setNavContainerSize();
    }

    render() {
        return (
            <div className="navigation">
                <div className="mobile-nav">
                    <input id="mobile-nav-checkbox" type="checkbox" />

                    <span/>
                    <span/>
                    <span/>

                    <ul className="menu">
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/dashboard">Dashboard</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/media">Media</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/events">Events</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/products">Products</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/accounts">Accounts</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/my-information">My Information</NavLink>
                        <NavLink onClick={this.handleMobileNavClick} className="nav-link" to="/settings">Settings</NavLink>
                    </ul>
                </div>

                <SideNav>

                    <Toggle onClick={this.handleClick}/>

                    <Nav defaultSelected="dashboard">

                        <NavLink to={"/dashboard"}>
                            <NavItem eventKey="dashboard">
                                <NavIcon><HiHome /></NavIcon>
                                <NavText><p className="nav-text">Dashboard</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/media"}>
                            <NavItem eventKey="media">
                                <NavIcon><MdPermMedia /></NavIcon>
                                <NavText><p className="nav-text">Media</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/events"}>
                            <NavItem eventKey="events">
                                <NavIcon><BsFillCalendarEventFill /></NavIcon>
                                <NavText><p className="nav-text">Events</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/products"}>
                            <NavItem eventKey="products">
                                <NavIcon><FaProductHunt /></NavIcon>
                                <NavText><p className="nav-text">Products</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/accounts"}>
                            <NavItem eventKey="accounts">
                                <NavIcon><ImUsers /></NavIcon>
                                <NavText><p className="nav-text">Accounts</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/my-information"}>
                            <NavItem eventKey="my-information">
                                <NavIcon><RiAccountCircleFill /></NavIcon>
                                <NavText><p className="nav-text">My Information</p></NavText>
                            </NavItem>
                        </NavLink>

                        <NavLink to={"/settings"}>
                            <NavItem eventKey="settings">
                                <NavIcon><AiFillSetting /></NavIcon>
                                <NavText><p className="nav-text">Settings</p></NavText>
                            </NavItem>
                        </NavLink>

                    </Nav>

                </SideNav>
            </div>
        );
    }
}

export default Navigation;