import CurrentNumber from "./CurrentNumber";
import Timer from "./Timer";

function InfoField(props) {
    return (
        <div className="InfoField clearfix">
            <CurrentNumber currentNumber={props.currentNumber} />
            <Timer time={props.elapsedTime} />
        </div>
    );
}

export default InfoField;