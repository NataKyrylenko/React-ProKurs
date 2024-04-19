import "./styles.css";

function Button({ name, type, onButtonClick}) {
  return (
    <button className="main-button" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

// function Button({ buttonName = "Login", isPrimaryButton = false, typeButton = "submit"}) {
//   const buttonClass = `main-button ${
//     isPrimaryButton ? "primary-button" : "secondary-button"
//   }`;

//   return <button className={buttonClass} type={typeButton}>{buttonName}</button>;
// }
export default Button;
