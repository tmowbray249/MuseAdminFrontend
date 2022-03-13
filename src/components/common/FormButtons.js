import React from 'react';
import Button from "react-bootstrap/Button";

class FormButtons extends React.Component {

    render() {
        let delete_buttons = "";
        if (this.props.showDelete) {
            delete_buttons = (<div className="delete-button-container">
                <Button className="delete-button" variant="primary" onClick={this.props.handleDelete}>Delete</Button>
            </div>);
        }

        return (
            <div className="form-buttons">
                <div className="save-buttons-container">
                    <Button className="save-button" variant="primary" onClick={this.props.handleSave}>Save</Button>
                    <Button className="save-button" variant="primary" onClick={this.props.handleSaveExit}>Save & Exit</Button>
                </div>
                {delete_buttons}
            </div>
        )
    }

}

export default FormButtons;