import React from "react";
import "../../App.css";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type="text"
        className={label === "Email" ? "form-input-email" : "form-input"}
      />
      {error && <div className="text-yellow-400 px-16">{error}</div>}
    </div>
  );
};

export default Input;
