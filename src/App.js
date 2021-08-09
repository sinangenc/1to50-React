import './App.css';
import React from 'react';
import GameBoard from "./components/GameBoard";
import InfoField from "./components/InfoField";
import {createNumbersArray} from "./utils/Utils";
import FinishMessage from "./components/FinishMessage";
import RestartButton from "./components/RestartButton";


//TODO: Ranking


class App extends React.Component{

    constructor(props) {
        super(props);

        // Get numbers as shuffled list
        const numbers = createNumbersArray();

        // Set state
        this.state = {
            currentNumber: 1,
            numbers: numbers,
            elapsedTime: 0,
            isBoardActive: true
        }

        // Binding this
        this.handleSquareOnclick = this.handleSquareOnclick.bind(this);
        this.updateElapsedTime = this.updateElapsedTime.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    startGame(){
        this.timer = setInterval( this.updateElapsedTime, 10);
    }

    updateElapsedTime(){
        this.setState((oldState) => {
            return {
                elapsedTime: oldState.elapsedTime + 10,
            };
        });
    }

    endGame(){
        this.setState({
            isBoardActive: false,
        });

        clearInterval(this.timer);
    }

    restartGame(){
        clearInterval(this.timer);

        this.setState({
            currentNumber: 1,
            numbers: createNumbersArray(),
            elapsedTime: 0,
            isBoardActive: true
        });
    }

    getElapsedTime(){
        // Convert to String
        const tmpText = "" + this.state.elapsedTime;

        // Get first part of string (except from last 3 digits)
        const second = tmpText.substr(0, tmpText.length - 3);

        return ( second ? second : 0) + "." + tmpText.substr(tmpText.length - 3);
    }

    handleSquareOnclick(clickedNumber){
        //console.log("Clicked:", clickedNumber);

        // If current number clicked, set it as found
        // increase current number
        if(this.state.currentNumber === clickedNumber){

            // If clickedNumber == 1, start the counter
            if(clickedNumber === 1){
                this.startGame();
            }
            else if(clickedNumber === 50){
                // If clickedNumber == 50, stop the counter
                this.endGame();
            }

            this.setState((oldState) => {
                // Iterate numbers and update isFound value of clicked number
                const numbers = oldState.numbers.map((item) => {
                    if(item.value === clickedNumber){
                        item.isFound = true;
                    }
                    return item;
                });

                // find net value of currentNumber
                const nextNumber = (oldState.currentNumber < 50) ? oldState.currentNumber + 1 : oldState.currentNumber;

                return {
                    currentNumber: nextNumber,
                    numbers: numbers,
                };
            });
        }
    }

    render() {

        return(
            <div className="App">
                <InfoField
                    elapsedTime={this.getElapsedTime()}
                    currentNumber={this.state.currentNumber}
                />

                {this.state.isBoardActive ?
                    <GameBoard
                        numbers={this.state.numbers}
                        handleSquareOnclick={this.handleSquareOnclick}
                    />
                    :
                    <FinishMessage
                        elapsedTime={this.getElapsedTime()}
                    />
                }

                <RestartButton onClick={this.restartGame} />
            </div>
        );
    }
}

export default App;
