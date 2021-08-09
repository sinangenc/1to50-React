import React from "react";

class CurrentNumber extends React.Component{
    render() {
        return(
            <div className="CurrentNumber">
                <span className="text"><span className="hideSmallScreen">Current</span> Number</span>
                <div className="block">{this.props.currentNumber}</div>
            </div>
        );
    }
}

export default CurrentNumber;