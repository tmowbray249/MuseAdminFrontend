import React from 'react';
import {setNavContainerSize} from "../../Utils";


class UserHome extends React.Component {

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

export default UserHome;