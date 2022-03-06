import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class MediaForm extends React.Component {

    render() {

        return(
            <div>
                <Container>
                    <Form>

                        <Form.Group controlId="form.Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" defaultValue={this.props.name} onChange={this.props.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="form.Type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" name="type" placeholder=".jpg" defaultValue={this.props.type} onChange={this.props.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="form.Size">
                            <Form.Label>Size</Form.Label>
                            <Form.Control type="text" name="size" placeholder="500kb" defaultValue={this.props.size} onChange={this.props.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="form.Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="text" name="date" placeholder="2022" defaultValue={this.props.date} onChange={this.props.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="form.Textarea">
                            <Form.Label>About</Form.Label>
                            <Form.Control as="textarea" rows={3} name="about" defaultValue={this.props.about} onChange={this.props.handleChange} />
                        </Form.Group>

                    </Form>
                </Container>
            </div>
        );
    }


}

export default MediaForm;