import React from 'react';
import {setPageContentMargin} from "../../Utils";
import PageHeader from "../common/PageHeader";


class UserPage extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }

	componentDidMount() {
		setPageContentMargin();
	}

	render() {
		let page_content = "User content here"
		let page_title = "Your Account";
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

export default UserPage;