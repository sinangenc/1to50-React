function FinishMessage(props) {
    return(
        <div className="FinishMessage">
            <h2>Congratulations!</h2>
            <h3>You have completed the game. Your Score:</h3>
            <h2 className="Score">{props.elapsedTime}</h2>
        </div>
    );
}

export default FinishMessage;