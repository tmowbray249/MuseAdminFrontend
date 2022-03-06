import React from 'react';
import {setNavContainerSize} from "../../Utils";


class AccountsPage extends React.Component {

	componentDidMount() {
		setNavContainerSize();
	}

	render() {
		return(
			<div className="page-content accounts-home">
            	<h1>Accounts</h1>
			</div>
        );
	}

}

export default AccountsPage;