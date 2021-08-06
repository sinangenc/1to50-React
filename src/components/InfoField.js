import CurrentNumber from "./CurrentNumber";

function InfoField(props) {
    return (
        <div className="InfoField clearfix">
            <CurrentNumber currentNumber={props.currentNumber} />
        </div>
    );
}

export default InfoField;