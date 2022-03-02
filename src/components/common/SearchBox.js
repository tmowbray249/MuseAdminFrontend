import React from "react";
import './SearchBox.css';
import {GoSearch} from 'react-icons/go';

/**
 * The search function.
 *
 * Allows the user to enter a search term to filter down a set of results.
 *
 * @param {string} search The current search term.
 * @param {function} handleSearch The search handler function
 *
 * @author Tom Mowbray - w17020085
 */
class SearchBox extends React.Component {

    render() {
        return (
            <div className="search-box">
                <div className="search-icon"><GoSearch /></div>
                <div className="search-area"><input type="text" placeholder="Search" className="form-control rounded" value={this.props.search} onChange={this.props.handleSearch} /></div>
            </div>
        );
    }

}

export default SearchBox;