import React from 'react';
import './Footer.css';

/**
 * The footer component.
 *
 * Creates a footer containing a student name/id as well as a disclaimer.
 *
 * @author Tom Mowbray - w17020085
 */
class Footer extends React.Component {

	render() {
		return (
    		<footer>    		   
    		    <p><b>Name:</b> Tom Mowbray</p>
    		    <p><b>ID:</b> w17020085</p>
    		    <div className="disclaimer">
    		    	<p><b>Disclaimer:</b></p>
    		    	<p>This is a university project, there is no association or endorsement from the Designing Interactive Systems (DIS).</p>
					<p>All the data used on this site has been provided by the DIS.</p>
    			</div>
    		</footer>
		)
	}

}

export default Footer;