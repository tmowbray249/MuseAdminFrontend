import React from "react";
import './Pagination.css';

/**
 * The pagination component.
 *
 * Loads in the page navigation. Includes buttons to step through the pages as well as a drop-down box to navigate to a
 * particular page
 *
 * @param {int} totalPages The number of total pages
 * @param {int} page The current page
 * @param {function} handleNextClick The next page button handler
 * @param {function} handlePrevClick The previous page button handler
 * @param {function} handlePageSelect The page select handler
 * @param {boolean} checkNextDisabled Whether or the next/previous button should be disabled or not
 * @author Tom Mowbray - w17020085
 */
class Pagination extends React.Component {

    render() {
        let options = []
        let i = 0
        while (i < this.props.totalPages) {
            let val = i + 1;
            options.push(<option key={val} value={val}>{val}</option>)
            i++;
        }

        return(
            <div className="pagination-wrapper">
                <div>
                    <button className="pagination-btn btn btn-light" onClick={this.props.handlePrevClick} disabled={this.props.page <= 1}>Prev</button>
                    <label>
                        <p className="pages-title">Page:</p>
                       <select value={this.props.page} onChange={this.props.handlePageSelect} className="form-select" aria-label="Default select example">
                           {options}
                       </select>
                    </label>
                    <button className="pagination-btn btn btn-light" onClick={this.props.handleNextClick} disabled={this.props.checkNextDisabled}>Next</button>
                </div>
                <p>of {this.props.totalPages}</p>
            </div>
        )
    }

}

export default Pagination;