import React from "react";
import MediaForm from "./MediaForm";


class Media extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            type: "",
            size: "",
            date: "",
            info: ""
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.media.id,
            name: this.props.media.title,
            type: this.props.media.director,
            size: this.props.media.genres,
            date: this.props.media.year,
            info: this.props.media.plot
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <MediaForm
                    name={this.state.name}
                    type={this.state.type}
                    size={this.state.size}
                    date={this.state.date}
                    about={this.state.info}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }

}

export default Media;
