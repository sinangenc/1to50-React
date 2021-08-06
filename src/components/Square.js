import React from "react";

class Square extends React.Component{

    render() {
        let content;

        // If props.value not null, display a square
        if (this.props.value){
            const className = (this.props.value <= 25) ? "Square light" : "Square dark";

            content = <div className={className} onClick={() => this.props.handleOnclick(this.props.value)}>
                {this.props.value}
            </div>;
        }else {
            content = <div className="Square disabled"/>;
        }

        return (
            content
        );
    }
}
export default Square;