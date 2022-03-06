import React from 'react';
import './Media.css';
import {setNavContainerSize} from "../../Utils";
import PageHeader from "../common/PageHeader";
import DataGrid from "../common/DataGrid";
import {columns, data} from '../common/REPLACE-WITH-API-DATA/media-data';
import Media from "../media/Media";


class MediaPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rowSelected: false
		};
	}

	componentDidMount() {
		setNavContainerSize();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		setNavContainerSize();
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

		let page_title = "Media";
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
			page_title = "Media: " + row.title;
			page_content = <Media media={row} />
		}

		return(
			<div className="page-content">
				<PageHeader
						page_title={page_title}
						page_bread_crumb={page_bread_crumb}
						handleBackClick={this.handleBackClick}
				/>
				<div className="events-page-content">
					{page_content}
				</div>
			</div>
        );
	}

}

export default MediaPage;