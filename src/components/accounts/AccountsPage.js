import React from 'react';
import {setPageContentMargin} from "../../Utils";
import PageHeader from "../common/PageHeader";
import DataGrid from "../common/DataGrid";
import {columns, data} from '../common/REPLACE-WITH-API-DATA/media-data';


class AccountsPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false
		};
	}

	componentDidMount() {
		setPageContentMargin();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		setPageContentMargin();
	}

	handleRowClick = (row) => {
		this.setState({
			rowSelected: row
		});
	}

	handleBackClick = () => {
		this.setState({
			rowSelected: false
		});
	}

	render() {

		let page_bread_crumb = "bread/crumb/here"
		let page_content;
		let show_back

		if (!this.state.rowSelected) {
			page_content =
				<DataGrid
					columns={columns}
					data={data}
					handleRowClick={this.handleRowClick}
				/>;
			show_back = false
		} else {
			let row = this.state.rowSelected;
			// page_content = <Media media={row} />
			show_back = true
		}

		return(
			<div className="page-container">
				<PageHeader
					page_title="Accounts"
					page_bread_crumb={page_bread_crumb}
					show_back={show_back}
					handleBackClick={this.handleBackClick}
				/>
				<div className="page-content">
					{page_content}
				</div>
			</div>
		);
	}

}

export default AccountsPage;