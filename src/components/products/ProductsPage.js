import React from 'react';
import {setPageContentMargin} from "../../Utils";
import DataGrid from "../common/DataGrid";
import {columns, data} from '../common/REPLACE-WITH-API-DATA/events-data';
import PageHeader from "../common/PageHeader";


class ProductsPage extends React.Component {

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

		let page_title = "Products";
		let page_bread_crumb = "bread/crumb/here"
		let page_content = "";

		if (!this.state.rowSelected) {
			page_content =
				<DataGrid
					columns={columns}
					data={data}
					handleRowClick={this.handleRowClick}
				/>;
		} else {
			let row = this.state.rowSelected;
			page_title = "Products: " + row.title;
			// page_content = <Event event={row} />
		}


		return(
			<div className="page-container">
				<PageHeader
					page_title={page_title}
					page_bread_crumb={page_bread_crumb}
					handleBackClick={this.handleBackClick}
				/>
				<div className="page-content">
					{page_content}
				</div>
			</div>
		);
	}

}

export default ProductsPage;