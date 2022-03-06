import React from 'react';
import { Form, Button, FormGroup, FormControl} from "react-bootstrap";


class MediaForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_input: ""
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            user_input: e.target.value
        })
    }

    render() {
        let user_input = this.state.user_input;

        return(
            <div>
                <h1>User Input: {user_input}</h1>
                <Form>
                    <input type="text" value={user_input} onChange={this.handleChange}/>
                </Form>
            </div>
        );
    }


}

export default MediaForm;