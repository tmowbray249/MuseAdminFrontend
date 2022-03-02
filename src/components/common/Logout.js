import React from "react";
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
            <div>
                <button className="btn-logout btn btn-primary btn-login fw-bold" type="submit" onClick={this.props.handleLogoutClick}>
                    Log out
                </button>
            </div>
        );
    }

}

export default Logout;