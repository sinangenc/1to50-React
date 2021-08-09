import React from "react";

class Timer extends React.Component{
    render() {
        return(
            <div className="Timer">
                <span className="text">Elapsed Time</span>
                <div className="block">{this.props.time}</div>
            </div>
        );
    }
}

export default Timer;