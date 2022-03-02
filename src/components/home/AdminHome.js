import React from 'react';
import FunctionBar from "../common/FunctionBar";


class AdminHome extends React.Component {

	render() {
		return(
			<div className="page-content admin-dashboard">
            	<FunctionBar />
            	<h1>Dashboard</h1>
			</div>
        );
	}

}

export default AdminHome;