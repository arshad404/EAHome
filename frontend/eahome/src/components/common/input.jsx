import React from "react";
import "../../App.css";

const Input = ({ name, label, value, onChange, error, fieldType }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={fieldType}
        className={
          label === "Email" || "name" ? "form-input-email" : "form-input"
        }
      />
      {error && <div className="text-yellow-400 px-16">{error}</div>}
    </div>
  );
};

export default Input;
