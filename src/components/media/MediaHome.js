import React from 'react';
import FunctionBar from "../common/FunctionBar";
import DataGrid from "../common/DataGrid";


class MediaHome extends React.Component {

	render() {
		return(
			<div className="page-content media-home">
            	<h1>Media</h1>
				<DataGrid title/>
			</div>
        );
	}

}

export default MediaHome;