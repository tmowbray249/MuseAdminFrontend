import React from 'react';
import {setPageContentMargin} from "../../Utils";
import PageHeader from "../common/PageHeader";


class SettingsPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setPageContentMargin();
    }

    render() {
        let page_content = "Settings content here"
        let page_title = "Settings";
        let page_bread_crumb = "page/bread/crumb";

        return(
            <div className="page-container">
                <PageHeader
                    page_title={page_title}
                    page_bread_crumb={page_bread_crumb}
                    show_back={false}
                />
                <div className="page-content">
                    {page_content}
                </div>
            </div>
        );
    }

}

export default SettingsPage;