import React from "react";
import "../../App.css";

const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};

export default Input;
