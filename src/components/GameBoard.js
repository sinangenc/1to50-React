import React from 'react';
import Square from "./Square";

class GameBoard extends React.Component{

    render() {
        // Define a variable to store squares
        const squareArray = [];

        // Add squares to list
        for (let i = 1; i <= 25; i++){
            squareArray.push(<Square value={i} />);
        }

        return(
            <div className="GameBoard">
                {squareArray}
            </div>
        );
    }
}

export default GameBoard;