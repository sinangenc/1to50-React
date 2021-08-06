import React from "react";

class Square extends React.Component{
    render() {
        return (
            <div className="Square">
                {this.props.value}
            </div>
        );
    }
}
export default Square;