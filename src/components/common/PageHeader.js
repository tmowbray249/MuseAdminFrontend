import React from 'react';
import './PageHeader.css';
import {IoIosArrowRoundBack} from "react-icons/io";

class PageHeader extends React.Component {

    render() {

        let back_button;
        if (this.props.show_back) {
            back_button = <div className="back-arrow-container"><IoIosArrowRoundBack className="back-arrow" onClick={this.props.handleBackClick} /></div>
        }

        return (
            <div className="page-header">
                {back_button}
                <div className="heading-container">
                    <h1 className="page-heading">{this.props.page_title}</h1>
                    <p>{this.props.page_bread_crumb}</p>
                </div>
            </div>
        );
    }

}

export default PageHeader;