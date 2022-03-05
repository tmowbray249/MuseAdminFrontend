import React from 'react';
import {setNavContainerSize} from "../../Utils";
import DataGrid from "../common/DataGrid";


class MediaHome extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

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