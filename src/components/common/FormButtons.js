import React from 'react';
import Button from "react-bootstrap/Button";

class FormButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-buttons">
                <div className="save-buttons-container">
                    <Button className="save-button" variant="primary" onClick={this.props.handleSave}>Save</Button>
                    <Button className="save-button" variant="primary" onClick={this.props.handleSaveContinue}>Save & Continue</Button>
                </div>
                <div className="delete-button-container">
                    <Button className="delete-button" variant="primary" onClick={this.props.handleDelete}>Delete</Button>
                </div>
            </div>
        )
    }

}

export default FormButtons;