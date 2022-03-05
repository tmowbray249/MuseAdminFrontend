import React from 'react';
import FunctionBar from "../common/FunctionBar";
import DataGrid from "../common/DataGrid";


class MediaHome extends React.Component {

	render() {
		return(
			<div className="page-content media-home">
            	<FunctionBar />
            	<h1>Media</h1>
				<DataGrid />
			</div>
        );
	}

}

export default MediaHome;