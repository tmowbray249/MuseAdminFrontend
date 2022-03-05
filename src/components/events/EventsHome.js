import React from 'react';
import './Events.css';
import {setNavContainerSize} from "../../Utils";
import DataGrid from "../common/DataGrid";
import {columns, data} from '../common/REPLACE-WITH-API-DATA/events-data';
import Event from "./Event";
import {IoIosArrowRoundBack} from 'react-icons/io';

class EventsHome extends React.Component {

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

		let page_title = "Events";
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
			page_title = "Event: " + row.title;
			page_content = <Event event={row} />
		}


		return(
			<div className="page-content">
				<div className="events-home">
					<IoIosArrowRoundBack className="back-arrow" onClick={this.handleBackClick} />
					<h1 className="page-heading">{page_title}</h1>
					<p>{page_bread_crumb}</p>
					{page_content}
				</div>

			</div>
        );
	}

}

export default EventsHome;