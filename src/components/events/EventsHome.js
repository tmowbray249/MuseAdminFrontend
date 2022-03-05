import React from 'react';
import {setNavContainerSize} from "../../Utils";


class EventsHome extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content events-home">
            	<h1>Events</h1>
			</div>
        );
	}

}

export default EventsHome;