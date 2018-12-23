import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group col-lg-4 offset-lg-4 offset-2 col-8">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        autoFocus
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
