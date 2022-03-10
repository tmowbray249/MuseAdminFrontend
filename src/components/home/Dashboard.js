import React from 'react';
import {setPageResponsiveCSSValues} from "../../Utils";
import PageHeader from "../common/PageHeader";


class Dashboard extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setPageResponsiveCSSValues();
	}

	render() {
		let page_content = "Dashboard content here"
		let page_title = "Hi " + this.props.user + "!";
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

export default Dashboard;