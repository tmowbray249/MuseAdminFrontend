import React from 'react';
import './Media.css';
import {setPageResponsiveCSSValues} from "../../Utils";
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
		setPageResponsiveCSSValues();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		setPageResponsiveCSSValues();
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
			page_content = <Media media={row} />
			show_back = true
		}

		return(
			<div className="page-content">
				<PageHeader
						page_title="Media"
						page_bread_crumb={page_bread_crumb}
						show_back={show_back}
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