import "./styles.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input"
import Counter from "../../components/Counter/Counter";

function Lesson04(){
    const schowMessage = () => {
        alert("Hello user")
    };

    const schowNameMessage = (userName) => {
        alert(`Hallo, ${userName}`);
    };

    const onChange = (event,message) => {
        console.log(`${event.target.value} - ${message}`);
    }

    return (
        <div className="lesson04-container">
            {/* <Input onInputChange={(event)=>onChange(event,"value")}/>
            <Button name='func inner' onButtonClick={() => alert("Hi")}/>
            <Button name='func Outer' onButtonClick={schowMessage}/>
            <Button name='func with Parametr' onButtonClick= {() => schowNameMessage("Tom")}/> */}
            <Counter/>
        </div>
    );

}

export default Lesson04;