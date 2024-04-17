import "./styles.css";

function Button (){
    const sendButtonName = "Send";
    const getButton = "Get";
    const isGetButton = false;
    return <button className="main-button">{isGetButton ? getButton : sendButtonName} data</button>;
}
export default Button;