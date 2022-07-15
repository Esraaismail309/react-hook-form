import React from "react";

export const InputField = (props) => {
  const { errors, label, placeholder, register, type } = props;
  return (
    <div>
      <label className="fw-bold m-1">{label}</label>
      <input
        {...register}
        className="form-control mx-1"
        placeholder={placeholder}
        type={type || "text"}
      />
      <p className="m-2 text-danger">{errors ? errors.message : null}</p>
    </div>
  );
};
