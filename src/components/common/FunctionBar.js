import React from 'react';
import './FunctionBar.css'
import SearchBox from "./SearchBox";
import {RiAccountCircleFill} from 'react-icons/ri'
import {NavLink} from "react-router-dom";
import {GoSearch} from 'react-icons/go';
import {AiOutlineCloseCircle} from 'react-icons/ai';

class FunctionBar extends React.Component {

    //todo theres a bug when making screen big with mobile search open

    constructor() {
        super();
        this.state = {
            function_bar: "",
            account_icon: "",
            mobile_search_box: "",
            mobile_search_icon: "",
            mobile_search: "",
            search_box: "",
            mobile_search_close_icon: ""
        }
    }

    componentDidMount() {
        this.setState({
            function_bar: document.getElementsByClassName("function-bar")[0],
            account_icon: document.getElementsByClassName("account-icon")[0],
            mobile_search_box: document.getElementsByClassName("mobile-search-box")[0],
            mobile_search_icon: document.getElementsByClassName("mobile-search-icon")[0],
            mobile_search: document.getElementsByClassName("mobile-search")[0],
            search_box: document.getElementsByClassName("search-box")[1],
            mobile_search_close_icon: document.getElementsByClassName("mobile-search-close-icon")[0]
        });
    }

    handleMobileSearchClick = (e) => {
        //todo hit boxes may need tuning
        let action = e.target.className.baseVal;
        if (action === "close-search") {
            this.closeMobileSearchBar()
        } else {
            this.showMobileSearchBar()
        }

    }

    showMobileSearchBar = () => {
        let function_bar = this.state.function_bar;
        let account_icon = this.state.account_icon;
        let mobile_search_box = this.state.mobile_search_box;
        let mobile_search_icon = this.state.mobile_search_icon;
        let mobile_search = this.state.mobile_search;
        let search_box = this.state.search_box;
        let mobile_search_close_icon = this.state.mobile_search_close_icon;

        function_bar.style.display = "block"
        function_bar.style.width = "100%";
        function_bar.style.margin = "0";

        account_icon.style.display = "none";

        mobile_search_box.style.display = "block";

        mobile_search_icon.style.display = "none"

        mobile_search.style.display = "grid";
        mobile_search.style.gridTemplateColumns = "99% 1%";
        mobile_search.style.padding = "0 2px 7px 6px";

        search_box.style.padding = "7px 0 14px";

        mobile_search_close_icon.style.display = "block"
        mobile_search_close_icon.style.padding = "3px"
        mobile_search_close_icon.style.fontSize = "36px"
        mobile_search_close_icon.style.textAlign = "center"
        mobile_search_close_icon.style.marginLeft = "87%"
        mobile_search_close_icon.style.position = "absolute";
        mobile_search_close_icon.style.bottom = "9px";
    }

    closeMobileSearchBar = () => {
        let function_bar = this.state.function_bar;
        let account_icon = this.state.account_icon;
        let mobile_search_box = this.state.mobile_search_box;
        let mobile_search_icon = this.state.mobile_search_icon;
        let mobile_search = this.state.mobile_search;
        let mobile_search_close_icon = this.state.mobile_search_close_icon;

        function_bar.style.display = "inline-flex";
        function_bar.style.width = "20%";
        function_bar.style.marginLeft = "80%";

        account_icon.style.display = "inline-block";

        mobile_search_box.style.display = "none";

        mobile_search_icon.style.display = "inline-block"

        mobile_search.style.padding = "9px";

        mobile_search_close_icon.style.display = "none";

    }

    render() {
        return(
            <div className="function-bar">
                <div className="search">
                    <SearchBox />
                </div>
                <div className="mobile-search" onClick={this.handleMobileSearchClick}>
                    <div className="mobile-search-box">
                        <SearchBox />
                    </div>
                    <div className="mobile-search-icon">
                        <GoSearch className="open-search"/>
                    </div>
                    <div className="mobile-search-close-icon">
                        <AiOutlineCloseCircle className="close-search"/>
                    </div>
                </div>
                <NavLink to="/my-information" className="account-icon">
                    <RiAccountCircleFill />
                </NavLink>
            </div>
        );
    }

}

export default FunctionBar;