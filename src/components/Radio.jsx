import React from "react";

export const Radio = (props) => {
  const { label, options, register, errors } = props;

  return (
    <>
      <label className="d-block fw-bold">{label}</label>
      <div className="form-check d-flex justify-content-between m-3">
        {options.map((option) => {
          return (
            <div key={option.value}>
              <input
                {...register}
                id={option.value}
                className="form-check-input "
                type="radio"
                value={option.key}
              />
              <label className="form-check-label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          );
        })}
      </div>
      {errors ? <p className="m-2 text-danger">{errors.message}</p> : null}
    </>
  );
};
