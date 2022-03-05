import React from 'react';
import './media.css';
import {setNavContainerSize} from "../../Utils";
import DataGrid from "../common/DataGrid";


class MediaHome extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content">
				<div className="media-home">
            		<h1 className="page-heading">Media</h1>
					<p>bread/crumb/here</p>
					<DataGrid />
				</div>
			</div>
        );
	}

}

export default MediaHome;