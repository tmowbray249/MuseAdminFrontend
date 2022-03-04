import React from "react";
import './NotFound.css';
import FunctionBar from "./FunctionBar";

/**
 * The 404 page.
 *
 * Notifies the user that the page they requested could not be found.
 *
 * @author Tom Mowbray - w17020085
 */
class NotFoundPage extends React.Component {

    render() {
        return (
            <div className="page-content not-found-page">
                <FunctionBar />
                <h1>404</h1>
                <h2>The page you requested was not found.</h2>
            </div>
        )
    }

}

export default NotFoundPage;