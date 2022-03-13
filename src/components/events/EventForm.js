import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import "../common/FormTemplate.css";
import FormButtons from "../common/FormButtons";
import {setPageContentMargin} from "../../Utils";


class EventForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            type_options: [],
            category_options: [],
            show_venue_fields: false
        }
    }

    componentDidMount() {
        setPageContentMargin();
        this.toggleShowVenueFields(this.props.type)
        this.getEventTypes()
        this.getEventCategories()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.type !== this.props.type) {
            setPageContentMargin()
            this.toggleShowVenueFields(this.props.type)
        }
    }

    getEventCategories = () => {
        // let url = "http://localhost/museapp/MuseAppAPI/api/events";
        let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/events";
        let formData = new FormData();
        formData.append('action', 'get-event-categories');

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        }).then( (response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw Error();
            }
        }).then( (data) => {
            let category_options = [];
            for (let event_category in data.data) {
                let event = data.data[event_category];
                category_options.push(<option key={event['event_category_id']} value={event['event_category_id']}>{event['event_category_name']}</option> )
            }
            this.setState({
                category_options: category_options
            })
        }).catch( () => {
            this.setState({
                error: "Something went wrong. Please try again later."
            });
        });
    }

    getEventTypes = () => {
        // let url = "http://localhost/museapp/MuseAppAPI/api/events";
        let url = "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/events";
        let formData = new FormData();
        formData.append('action', 'get-event-types');

        fetch(url, {
            method: 'POST',
            headers: new Headers(),
            body: formData
        }).then( (response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw Error();
            }
        }).then( (data) => {
            let type_options = [];
            for (let event_type in data.data) {
                let event = data.data[event_type];
                type_options.push(<option key={event['event_type_id']} value={event['event_type_id']}>{event['event_type_name']}</option> )
            }
            this.setState({
                type_options: type_options
            })
        }).catch( () => {
            this.setState({
                error: "Something went wrong. Please try again later."
            });
        });
    }

    toggleShowVenueFields = (type) => {
        if (type === "1") {
            this.setState({show_venue_fields: false})
        } else {
            this.setState({show_venue_fields: true})
        }
    }

    render () {

        let venue_fields = [];
        if (this.state.show_venue_fields) {
            venue_fields.push(<Form.Group key={0} controlId="form-event_street">
                                <Form.Label>Event Street</Form.Label>
                                <Form.Control type="text" name="event_street" placeholder="Event street"
                                value={this.props.street} onChange={this.props.handleStreetChange}/>
                            </Form.Group>);
            venue_fields.push(<Form.Group key={1} controlId="form-event_town">
                <Form.Label>Event Town</Form.Label>
                <Form.Control type="text" name="event_town" placeholder="Event town"
                              value={this.props.town} onChange={this.props.handleTownChange}/>
            </Form.Group>);
            venue_fields.push(<Form.Group key={2} controlId="form-event_postcode">
                <Form.Label>Event Postcode</Form.Label>
                <Form.Control type="text" name="event_postcode" placeholder="Event postcode"
                              value={this.props.postcode} onChange={this.props.handlePostcodeChange}/>
            </Form.Group>);
        }

        let default_type;
        let default_category;
        if (this.props.action === "create") {
            default_type = (<option key={0} value={0}>Please Chose</option>)
            default_category = (<option key={0} value={0}>Please Choose</option>)
        }

        return(
            <div>
                <Container>
                    <Form className="event_form">

                        <Form.Group controlId="form-event_name">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" name="event_name" placeholder="Event name" value={this.props.name} onChange={this.props.handleNameChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_summary">
                            <Form.Label>Event Summary</Form.Label>
                            <Form.Control type="text" name="event_summary" placeholder="Event summary" value={this.props.summary} onChange={this.props.handleSummaryChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_category">
                            <Form.Label>Event Category</Form.Label>
                            <Form.Select name="event_category" value={this.props.category} onChange={this.props.handleCategoryChange}>
                                {default_category}
                                {this.state.category_options}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="form-event_description">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control as="textarea" rows={5} name="event_description" placeholder="Event description" value={this.props.description} onChange={this.props.handleDescriptionChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_date">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="date"  name="event_date" value={this.props.date} onChange={this.props.handleDateChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_start">
                            <Form.Label>Event Start Time</Form.Label>
                            <Form.Control type="time" name="event_time" value={this.props.start} onChange={this.props.handleStartChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_end">
                            <Form.Label>Event End Time</Form.Label>
                            <Form.Control type="time" name="event_end" value={this.props.end} onChange={this.props.handleEndChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_image">
                            <Form.Label>Event Image</Form.Label>
                            <Form.Control type="image" name="event_image" value={this.props.image} onChange={this.props.handleImageChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-event_type">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Select name="event_type" value={this.props.type} onChange={this.props.handleTypeChange}>
                                {default_type}
                                {this.state.type_options}
                            </Form.Select>
                        </Form.Group>

                        {venue_fields}

                        <Form.Group controlId="form-signup_url">
                            <Form.Label>Signup URL</Form.Label>
                            <Form.Control type="text" name="signup_url" placeholder="Signup URL" value={this.props.url} onChange={this.props.handleURLChange}/>
                        </Form.Group>

                        <Form.Group controlId="form-S_o_S">
                            <Form.Label>Show on Site</Form.Label>
                            <Form.Select name="show_on_site" value={this.props.sos} onChange={this.props.handleSosChange}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Select>
                        </Form.Group>

                        <FormButtons handleSave={this.props.handleSave}
                                     handleSaveExit={this.props.handleSaveExit}
                                     showDelete={this.props.showDelete}
                                     handleDelete={this.props.handleDelete}
                        />

                    </Form>
                </Container>
            </div>
        );
    }

}

export default EventForm;