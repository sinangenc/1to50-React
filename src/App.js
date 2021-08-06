import './App.css';
import React from 'react';
import GameBoard from "./components/GameBoard";

class App extends React.Component{
    render() {
        return(
            <div className="App">
                <GameBoard />
            </div>
        );
    }
}

export default App;
