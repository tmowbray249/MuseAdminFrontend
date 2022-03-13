import React from 'react';
import './Events.css';
import {setPageContentMargin} from "../../Utils";
import DataGrid from "../common/DataGrid";
import Event from "./Event";
import PageHeader from "../common/PageHeader";
import Button from "react-bootstrap/Button";


class EventsPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 'home',
			table_data: [],
			event_data: [],
			selected_event: "",
			error: ""
		};
	}

	componentDidMount() {
		setPageContentMargin();
		this.getEvents();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		setPageContentMargin();
		if (prevState.selected_event !== this.state.selected_event) {
			if (this.state.selected_event !== "" && this.state.selected_event !==0) {
				this.getEventDetails(this.state.selected_event);
			} else {
				this.getEvents();
			}
		}
	}

	getEvents = () => {
		// let url = "http://localhost/museapp/MuseAppAPI/api/events";
		let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/events";
		let formData = new FormData();
		formData.append('action', 'get-events');

		fetch(url, {
			method: 'POST',
			headers: new Headers(),
			body: formData
		}).then( (response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw Error();
			}
		}).then( (data) => {
			this.prepareDataForTable(data.data)
		}).catch( () => {
			this.setState({
				error: "Something went wrong. Please try again later."
			});
		});
	}

	getEventDetails = (event_id) => {
		// let url = "http://localhost/museapp/MuseAppAPI/api/events";
		let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/events";
		let formData = new FormData();
		formData.append('action', 'get-event-details');
		formData.append('event_id', event_id)

		fetch(url, {
			method: 'POST',
			headers: new Headers(),
			body: formData
		}).then( (response) => {
			if (response.status === 200) {
				return response.json();
			} else {
				throw Error();
			}
		}).then( (data) => {
			this.setState({
				page: "event-form",
				table_data: [],
				event_data: data.data
			})
		}).catch( () => {
			this.setState({
				error: "Something went wrong. Please try again later."
			});
		});
	}

	prepareDataForTable = (events_data) => {

		let columns = [
			{ name: "Name", selector: row => row.name, sortable: true },
			{ name: "Type", selector: row => row.type, sortable: true },
			{ name: "Date", selector: row => row.date, sortable: true },
			{ name: "Start", selector: row => row.start, sortable: true },
			{ name: "End", selector: row => row.end, sortable: true },
		];


		let data = [];
		for (let event_data in events_data) {
			data.push({
				id: events_data[event_data].event_id,
				name: events_data[event_data].event_name,
				type: events_data[event_data].event_type_name,
				date: events_data[event_data].event_date,
				start: events_data[event_data].event_start,
				end: events_data[event_data].event_end
			});
		}


		this.setState({
			table_data: [columns, data]
		});

	}

	handleNewEvent = () => {
		this.setState({
			page: 'new-event',
			selected_event: 0
		})
	}

	handleRowClick = (row) => {
		this.setState({
			selected_event: row.id
		});
	}

	handleBackClick = () => {
		this.resetPage()
	}

	handleNewEventSave = (event_id) => {
		this.setState({
			page: 'event-form',
			selected_event: event_id
		})
	}

	handleSaveExit = () => {
		this.resetPage();
	}

	handleDeletedEvent = () => {
		this.resetPage();
	}

	resetPage = () => {
		this.setState({
			page: "home",
			selected_event: ""
		})
	}

	render() {
		let page_title;
		let page_content;
		let show_back;

		if (this.state.page === "home") {
			page_title = "Events - Home";
			page_content = (<div><DataGrid
					columns={this.state.table_data[0]}
					data={this.state.table_data[1]}
					handleRowClick={this.handleRowClick}
			/><Button className="new-event-button" variant="primary" onClick={this.handleNewEvent}>Add New Event</Button></div>);
			show_back = false;
		} else if (this.state.page === "event-form" && this.state.selected_event !== "")  {
			page_title = "Events - Edit"
			page_content = <Event action="edit" event={this.state.event_data} handleSaveExit={this.handleSaveExit} handleDeletedEvent={this.handleDeletedEvent}/>
			show_back = true;
		} else if (this.state.page === "new-event" && this.state.selected_event !== "") {
			page_title = "Events - Create";
			page_content = <Event action="create" handleNewEventSave={this.handleNewEventSave} handleSaveExit={this.handleSaveExit} />
			show_back = true;
		}

		return(
			<div className="page-container">
				<PageHeader
					page_title={page_title}
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

export default EventsPage;