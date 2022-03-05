import React from 'react';
import './PageHeader.css';
import {IoIosArrowRoundBack} from "react-icons/io";

class PageHeader extends React.Component {

    render() {
        return (
            <div className="page-header">
                <IoIosArrowRoundBack className="back-arrow" onClick={this.props.handleBackClick} />
                <h1 className="page-heading">{this.props.page_title}</h1>
                <p>{this.props.page_bread_crumb}</p>
            </div>
        );
    }

}

export default PageHeader;