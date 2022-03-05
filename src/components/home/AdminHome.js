import React from 'react';
import FunctionBar from "../common/FunctionBar";
import DataGrid from "../common/DataGrid";


class AdminHome extends React.Component {

	render() {
		return(
			<div className="page-content admin-dashboard">
            	<FunctionBar />
            	<h1>Dashboard</h1>
				<DataGrid />
			</div>
        );
	}

}

export default AdminHome;