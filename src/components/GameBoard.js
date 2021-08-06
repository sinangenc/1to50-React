import React from 'react';
import Square from "./Square";
import {createNumbersArray} from "../utils/Utils";

class GameBoard extends React.Component{

    constructor(props) {
        super(props);

        // Get numbers as shuffled list
        const numbers = createNumbersArray();

        // Set state
        this.state = {
            currentNumber: 1,
            numbers: numbers
        }

        // Binding this
        this.handleSquareOnclick = this.handleSquareOnclick.bind(this);
    }

    handleSquareOnclick(clickedNumber){
        //console.log("Clicked:", clickedNumber);

        // If current number clicked, set it as found
        // increase current number
        if(this.state.currentNumber === clickedNumber){
            this.setState((oldState) => {
                // Iterate numbers and update isFound value of clicked number
                const numbers = oldState.numbers.map((item) => {
                    if(item.value === clickedNumber){
                        item.isFound = true;
                    }
                    return item;
                });

                return {
                    currentNumber: oldState.currentNumber + 1,
                    numbers: numbers,
                };
            });
        }
    }


    getNthNumber(n){
        let number = null;

        // If n.th number between 1-25 is not found, take it
        if(!this.state.numbers[n].isFound){
            number = this.state.numbers[n];
        }
        else if(!this.state.numbers[n + 25].isFound){
            // If (n+25).th number is not found, take it
            number = this.state.numbers[n + 25];
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
                        handleOnclick={this.handleSquareOnclick}
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