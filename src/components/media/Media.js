import React from "react";

class Media extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="temp">
                    <h2>Type: </h2>
                    <h3>{this.props.media.director}</h3>
                </div>
                <div className="temp">
                    <h2>Size: </h2>
                    <h3>{this.props.media.genres}</h3>
                </div>
                <div className="temp">
                    <h2>Date: </h2>
                    <h3>{this.props.media.year}</h3>
                </div>
                <div className="temp">
                    <h2>About: </h2>
                    <p>{this.props.media.plot}</p>
                </div>
            </div>
        );
    }

}

export default Media;
