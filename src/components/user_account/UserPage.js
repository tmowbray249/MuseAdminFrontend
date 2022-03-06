import React from 'react';
import {setNavContainerSize} from "../../Utils";


class UserPage extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content user-home">
            	<h1>My Information</h1>
			</div>
        );
	}

}

export default UserPage;