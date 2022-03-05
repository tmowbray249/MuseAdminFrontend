import React from 'react';
import {setNavContainerSize} from "../../Utils";


class AccountsHome extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content Accounts-home">
            	<h1>Accounts</h1>
			</div>
        );
	}

}

export default AccountsHome;