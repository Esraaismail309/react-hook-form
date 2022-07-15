import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export const PhonePicker = (props) => {
  const { register, errors, label } = props;
  const [value, setValue] = useState();

  return (
    <div className="phone-picker">
      <label className="fw-bold m-1">{label}</label>
      <PhoneInput
        {...register}
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="form-control d-flex"
      />

      {errors ? <p className="m-2 text-danger">{errors.message}</p> : null}
    </div>
  );
};
