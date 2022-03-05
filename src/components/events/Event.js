import React from "react";

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="temp">
                    <h2>Bookings: </h2>
                    <h3>{this.props.event.director}</h3>
                </div>
                <div className="temp">
                    <h2>Time: </h2>
                    <h3>{this.props.event.genres}</h3>
                </div>
                <div className="temp">
                    <h2>Date: </h2>
                    <h3>{this.props.event.year}</h3>
                </div>
                <div className="temp">
                    <h2>About: </h2>
                    <p>{this.props.event.plot}</p>
                </div>
            </div>
        );
    }

}

export default Event;
