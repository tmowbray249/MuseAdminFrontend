import React from "react";
import MediaForm from "./MediaForm";
import {setNavContainerSize} from "../../Utils";


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

    componentDidUpdate(prevProps, prevState, snapshot) {
        setNavContainerSize();
    }


    handleSave = (e) => {
        alert("Handle Save");
    }

    handleSaveContinue = (e) => {
        alert("Handle Save Continue");
    }

    handleDelete = (e) => {
        alert("Handle Delete");
    }

    render() {
        let name = this.state.name;
        let type = this.state.type;
        let size = this.state.size;
        let date = this.state.date;
        let about = this.state.info;

        return (
            <div className="page-heading-container">
                <h2 className="sub-heading">{this.state.name}</h2>
                <MediaForm
                    name={name}
                    type={type}
                    size={size}
                    date={date}
                    about={about}
                    handleSave={this.handleSave}
                    handleSaveContinue={this.handleSaveContinue}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }

}

export default Media;
