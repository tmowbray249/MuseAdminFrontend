import React from "react";
import EventForm from "./EventForm";
import {setPageContentMargin} from "../../Utils";

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "http://localhost/museapp/MuseAppAPI/api/events",
            // url: "http://unn-w17020085.newnumyspace.co.uk/museapp/MuseAppAPI/api/events",
            event_id: "",
            event_name: "",
            event_summary: "",
            event_category: "",
            event_image_name: "",
            event_image: "",
            event_description: "",
            event_date: "",
            event_start: "",
            event_end: "",
            event_type: "",
            event_street: "",
            event_town: "",
            event_postcode: "",
            event_signup_url: "",
            show_on_site: 0
        };
    }

    componentDidMount() {
        setPageContentMargin();
        if (this.props.action === "edit") {
            this.setState({
                event_id: this.props.event[0].event_id,
                event_name: this.props.event[0].event_name,
                event_summary: this.props.event[0].event_summary,
                event_category: this.props.event[0].event_category,
                event_image_name: this.props.event[0].event_image_name,
                event_description: this.props.event[0].event_description,
                event_date: this.props.event[0].event_date,
                event_start: this.props.event[0].event_start,
                event_end: this.props.event[0].event_end,
                event_type: this.props.event[0].event_type,
                event_street: this.props.event[0].event_street,
                event_town: this.props.event[0].event_town,
                event_postcode: this.props.event[0].event_postcode,
                event_signup_url: this.props.event[0].event_signup_url,
                show_on_site: this.props.event[0].show_on_site
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setPageContentMargin();
    }

    handleEventNameChange = (name) => {
        this.setState({event_name: name.target.value})
    }

    handleEventSummaryChange = (summary) => {
        this.setState({event_summary: summary.target.value})
    }

    handleEventCategoryChange = (category) => {
        this.setState({event_category: category.target.value})
    }

    handleEventImageNameChange = (image_name) => {
        this.setState({
            event_image_name: image_name.target.value
        })
    }

    handleEventImageChange = (image) => {
        let files = image.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (img) => {
            this.setState({
                event_image_name: files[0].name,
                event_image: img.target.result,
            })
        }
    }

    handleEventDescriptionChange = (description) => {
        this.setState({event_description: description.target.value})
    }

    handleEventDateChange = (date) => {
        this.setState({event_date: date.target.value})
    }

    handleEventStartChange = (start) => {
        this.setState({event_start: start.target.value})
    }

    handleEventEndChange = (end) => {
        this.setState({event_end: end.target.value})
    }

    handleEventTypeChange = (type) => {
        this.setState({event_type: type.target.value})
    }

    handleEventStreetChange = (street) => {
        this.setState({event_street: street.target.value})
    }

    handleEventTownChange = (town) => {
        this.setState({event_town: town.target.value})
    }

    handleEventPostcodeChange = (postcode) => {
        this.setState({event_postcode: postcode.target.value})
    }

    handleEventSignupURLChange = (signup_url) => {
        this.setState({event_signup_url: signup_url.target.value})
    }

    handleEventSosChange = (show_on_site) => {
        this.setState({show_on_site: show_on_site.target.value})
    }
    
    prepareFormData = () => {
        let name = this.state.event_name;
        let summary = this.state.event_summary;
        let category = this.state.event_category;
        let description = this.state.event_description;
        let image_name = this.state.event_image_name;
        let image = this.state.event_image;
        let date = this.state.event_date;
        let start = this.state.event_start;
        let end = this.state.event_end;
        let type = this.state.event_type;
        let street = this.state.event_street;
        let town = this.state.event_town;
        let postcode = this.state.event_postcode;
        let url = this.state.event_signup_url;
        let sos = this.state.show_on_site;

        //todo do sanitization/preparation

        let data = {
            'name': name,
            'summary': summary,
            'category': category,
            'description': description,
            'image_name': image_name,
            'image': image,
            'date': date,
            'start': start,
            'end': end,
            'type': type,
            'street': street,
            'town': town,
            'postcode': postcode,
            'url': url,
            'sos': sos,
        }

        return data;
    }

    doSave = (create, saveExit) => {
        let data = this.prepareFormData()
        let formData = new FormData();
        formData.append('action', (create) ? "new-event" : "save-event");
        formData.append('event_id', this.state.event_id)
        formData.append('event_name', data.name)
        formData.append('event_summary', data.summary)
        formData.append('event_category', data.category)
        formData.append('event_description', data.description)
        formData.append('event_image_name', data.image_name)
        formData.append('event_image', data.image)
        formData.append('event_date', data.date)
        formData.append('event_start', data.start)
        formData.append('event_end', data.end)
        formData.append('event_type', data.type)
        formData.append('event_street', data.street)
        formData.append('event_town', data.town)
        formData.append('event_postcode', data.postcode)
        formData.append('event_signup_url', data.url)
        formData.append('show_on_site', data.sos)

        fetch(this.state.url, {
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
            if (create && !saveExit) {
                this.props.handleNewEventSave(data.data.event_id);
            } else {
                if (saveExit) {
                    this.props.handleSaveExit();
                }
            }
        }).catch( () => {
            this.setState({
                error: "Something went wrong. Please try again later."
            });
        });
    }

    handleNewSave = () => {
        this.doSave(true, false)
    }

    handleNewSaveExit =() => {
        this.doSave(true, true);
    }

    handleSave = (e) => {
        this.doSave(false, false)
    }

    handleSaveExit = (e) => {
        this.doSave(false, true)
    }

    handleDelete = (e) => {
        if (window.confirm("Are you sure you want to delete " + this.state.name + "\nThis can not be undone")){
            let formData = new FormData();
            formData.append('action', 'delete-event');
            formData.append('event_id', this.state.event_id);

            fetch(this.state.url, {
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
                if (data.statusCode === 200) {
                    this.props.handleDeletedEvent();
                } else {
                    //todo handle this error
                    console.log("error");
                }
            }).catch( () => {
                this.setState({
                    error: "Something went wrong. Please try again later."
                });
            });
        }
    }

    render() {

        let show_delete;
        let handleSave;
        let handleSaveExit;
        if (this.props.action === "create") {
            show_delete = false
            handleSave = this.handleNewSave;
            handleSaveExit = this.handleNewSaveExit;
        } else {
            show_delete = true;
            handleSave = this.handleSave;
            handleSaveExit = this.handleSaveExit
        }

        let event_img_name = this.state.event_image_name.split(".")[0];

        return (
            <div className="page-heading-container">
                <h2 className="sub-heading">{this.state.event_name}</h2>
                <EventForm
                    action={this.props.action}
                    id={this.state.event_id}
                    name={this.state.event_name}
                    handleNameChange={this.handleEventNameChange}
                    summary={this.state.event_summary}
                    handleSummaryChange={this.handleEventSummaryChange}
                    category={this.state.event_category}
                    handleCategoryChange={this.handleEventCategoryChange}
                    description={this.state.event_description}
                    handleDescriptionChange={this.handleEventDescriptionChange}
                    date={this.state.event_date}
                    handleDateChange={this.handleEventDateChange}
                    start={this.state.event_start}
                    handleStartChange={this.handleEventStartChange}
                    end={this.state.event_end}
                    handleEndChange={this.handleEventEndChange}
                    image_name={event_img_name}
                    handleImageNameChange={this.handleEventImageNameChange}
                    image={this.state.event_image}
                    handleImageChange={this.handleEventImageChange}
                    type={this.state.event_type}
                    handleTypeChange={this.handleEventTypeChange}
                    street={this.state.event_street}
                    handleStreetChange={this.handleEventStreetChange}
                    town={this.state.event_town}
                    handleTownChange={this.handleEventTownChange}
                    postcode={this.state.event_postcode}
                    handlePostcodeChange={this.handleEventPostcodeChange}
                    url={this.state.event_signup_url}
                    handleURLChange={this.handleEventSignupURLChange}
                    sos={this.state.show_on_site}
                    handleSosChange={this.handleEventSosChange}
                    handleSave={handleSave}
                    handleSaveExit={handleSaveExit}
                    showDelete={show_delete}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }

}

export default Event;
