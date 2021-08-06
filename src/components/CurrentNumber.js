import React from "react";

class CurrentNumber extends React.Component{
    render() {
        return(
            <div className="CurrentNumber">
                <span className="text">Current Number</span>
                <div className="block">{this.props.currentNumber}</div>
            </div>
        );
    }
}

export default CurrentNumber;