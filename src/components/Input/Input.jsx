import "./styles.css";

function Input({name,type, placeholder, label, onInputChange}) {
  return (
    <div className="input-wrapper">
        <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder} 
        onChange={onInputChange}
      />
    </div>
  );
}

export default Input;
