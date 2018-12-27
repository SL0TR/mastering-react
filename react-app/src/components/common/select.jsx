import React from "react";

const Select = ({ name, label, error, data }) => {
  return (
    <div className="form-group col-lg-4 offset-lg-4 offset-2 col-8">
      <label htmlFor={name}>{label}</label>
      <select className="custom-select" id="SelectGroupSelect01">
        {data.map(el => {
          return (
            <option key={el._id} value={toCamelCase(el.name)}>
              {el.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

const toCamelCase = str => {
  return str
    .split(" ")
    .map((word, i) => {
      if (i === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export default Select;
