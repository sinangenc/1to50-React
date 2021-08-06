import React from 'react';
import Square from "./Square";

class GameBoard extends React.Component{

    getNthNumber(n){
        let number = null;

        // If n.th number between 1-25 is not found, take it
        if(!this.props.numbers[n].isFound){
            number = this.props.numbers[n];
        }
        else if(!this.props.numbers[n + 25].isFound){
            // If (n+25).th number is not found, take it
            number = this.props.numbers[n + 25];
        }

        return number;
    }

    render() {
        // Define a variable to store squares
        const squareArray = [];

        // Determine 25 numbers to be displayed
        for (let i = 0; i < 25; i++){
            const item = this.getNthNumber(i);

            if(item){
                squareArray.push(
                    <Square
                        key={i}
                        value={item.value}
                        handleOnclick={this.props.handleSquareOnclick}
                    />
                );
            }else {
                squareArray.push(
                    <Square
                        key={i}
                        value=""
                    />
                );
            }

        }

        return(
            <div className="GameBoard">
                {squareArray}
            </div>
        );
    }
}

export default GameBoard;