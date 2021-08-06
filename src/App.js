import './App.css';
import React from 'react';
import GameBoard from "./components/GameBoard";
import InfoField from "./components/InfoField";
import {createNumbersArray} from "./utils/Utils";

//TODO: Timer
//TODO: Game Menu (Restart, play again, ...)
//TODO: Ranking


class App extends React.Component{

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

    render() {
        return(
            <div className="App">
                <InfoField currentNumber={this.state.currentNumber} />
                <GameBoard numbers={this.state.numbers} handleSquareOnclick={this.handleSquareOnclick}  />
            </div>
        );
    }
}

export default App;
