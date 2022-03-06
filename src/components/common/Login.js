import React from 'react';
import './Login.css';
import button from "bootstrap/js/src/button";

/**
 * The login box.
 *
 * Loads a login box. The user enters an email and password to be sent to the authenticate endpoint for authentication.
 * Any authentication errors are displayed here when they occur.
 *
 * @param {string} email The users email
 * @param {function} handleEmail The email handler function
 * @param {string} password The users password
 * @param {function} handlePassword The password handler function
 * @param {function} handleLoginClick The login click handler function
 * @param {string} error The error that occurred. Empty string if none.
 * @author Tom Mowbray - w17020085
 */
class Login extends React.Component {

    render() {

        let errorText = (this.props.error !== "")
            ? <div className="login-error-container"><p className="error-text">{this.props.error}</p></div>
            : "";

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="login-card card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4">
                                <h2 className="card-title text-center">Log In</h2>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="name@example.com"
                                           value={this.props.email} onChange={this.props.handleEmail}
                                    />
                                    <label>Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" placeholder="Password"
                                           value={this.props.password} onChange={this.props.handlePassword}
                                    />
                                    <label>Password</label>
                                </div>
                                <div className="d-grid">
                                    {errorText}
                                    <button className="login-btn btn btn-login fw-bold" onClick={this.props.handleLoginClick}>
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Login;