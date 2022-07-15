import React from "react";

export const Select = (props) => {
  const { label, errors, placeholder, register, options } = props;
  return (
    <div>
      <label className="fw-bold m-1">{label}</label>
      <select
        {...register}
        className="form-control form-select"
        aria-label="Default select example"
        placeholder={placeholder}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.key}>
              {option.key}
            </option>
          );
        })}
      </select>
      {errors ? <p className="m-2 text-danger">{errors.message}</p> : null}
    </div>
  );
};
