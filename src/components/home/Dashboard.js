import React from 'react';
import {setNavContainerSize} from "../../Utils";


class Dashboard extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content admin-dashboard">
            	<h1>Dashboard</h1>
				{/*<DataGrid />*/}
			</div>
        );
	}

}

export default Dashboard;