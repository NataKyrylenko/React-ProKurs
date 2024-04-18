import "./styles.css";

function Input({name,type, placeholder, label}) {
  return (
    <div className="input-wrapper">
        <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder} 
      />
    </div>
  );
}

export default Input;
