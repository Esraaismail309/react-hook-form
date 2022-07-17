import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

export const PhonePicker = (props) => {
  const [value, setValue] = useState();
  const { register, errors, label } = props;

  return (
    <div className="phone-picker">
      <label className="fw-bold m-1">{label}</label>
      <PhoneInput
        {...register}
        international
        placeholder="Enter phone number"
        className="form-control d-flex"
        value={value}
        onChange={setValue}
      />

      {value && !isValidPhoneNumber(value) ? (
        <p className="m-2 text-danger">Enter valid phone number </p>
      ) : null}
      {errors ? <p className="m-2 text-danger">{errors.message}</p> : null}
    </div>
  );
};
