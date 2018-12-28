import React from "react";

const Select = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group col-lg-4 offset-lg-4 offset-2 col-8">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="custom-select" {...rest}>
        <option value="" />
        {options.map(el => {
          return (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
