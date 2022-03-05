import React from 'react';
import './Media.css';
import {setNavContainerSize} from "../../Utils";
import DataGrid from "../common/DataGrid";
import {columns, data} from '../common/REPLACE-WITH-API-DATA/media-data';
import {IoIosArrowRoundBack} from 'react-icons/io';
import Media from "../media/Media";


class MediaHome extends React.Component {

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
			console.log(this.state.rowSelected);
			let row = this.state.rowSelected;
			page_title = "Media: " + row.title;
			page_content = <Media media={row} />
		}

		return(
			<div className="page-content">
				<div className="media-home">
					{/*todo make the header and break crumb its onw component*/}
            		<h1 className="page-heading">{page_title}</h1>
					<p>{page_bread_crumb}</p>
					{page_content}
				</div>
			</div>
        );
	}

}

export default MediaHome;