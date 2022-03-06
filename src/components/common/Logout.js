import React from "react";
import {IoLogOut} from 'react-icons/io5';
import './Logout.css';

/**
 * The logout button.
 *
 * Loads a button the user can use to log out.
 *
 * @param {function} handleLogoutClick The logout handler function
 * @author Tom Mowbray - w17020085
 */
class Logout extends React.Component {

    render() {
        return (
            <IoLogOut className="logout" onClick={this.props.handleLogoutClick} />
        );
    }

}

export default Logout;