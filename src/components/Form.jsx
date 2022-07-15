import React from "react";
import { InputField } from "./InputField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "./Select";
import { Radio } from "./Radio";
import { PhonePicker } from "./PhonePicker";

export const Form = () => {
  const initialValues = {
    fullName: "",
    position: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };
  const positionOptions = [
    {
      value: "",
      key: "Select position",
    },
    {
      value: 1,
      key: "Frontend",
    },
    {
      value: 2,
      key: "Backend",
    },
    {
      value: 3,
      key: "Quality-control",
    },
  ];
  const genderOptions = [
    {
      value: 1,
      key: "Male",
    },
    {
      value: 2,
      key: "Female",
    },
    {
      value: 3,
      key: "Other",
    },
    {
      value: 4,
      key: "Prefer not to say",
    },
  ];
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Name is required")
      .matches("^\\S*$", "Your name must not have spaces"),
    position: Yup.string().required("Position is required"),
    email: Yup.string()
      .required("Email is required")
      .email("your email is Invalid"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("city is required"),
    password: Yup.string()
      .required("password is required")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        "Your password should be Minimum eight characters, at least one letter ,one number and one special character"
      ),
    confirmPassword: Yup.string()
      .required("confirm password Is Required")
      .oneOf([Yup.ref("password"), "not matched!"], "password doesn't match"),

    gender: Yup.string().required("Gender is required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-4">
        <div className="row gy-2 gx-5">
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("fullName") }}
              label="FullName"
              placeholder="Please enter your name "
              errors={errors.fullName}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <Select
              register={{ ...register("position") }}
              label="Position"
              placeholder="Please enter your position "
              options={positionOptions}
              errors={errors.position}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("email") }}
              label="Email"
              placeholder="Email"
              errors={errors.email}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <PhonePicker
              register={{ ...register("phone") }}
              label="Phone number"
              errors={errors.phone}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("country") }}
              label="country"
              placeholder="Please enter your country "
              errors={errors.country}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("city") }}
              label="City"
              placeholder="Please enter your city "
              errors={errors.city}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("password") }}
              label="Password"
              placeholder="Please enter your password "
              errors={errors.password}
              type="password"
              control={control}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("confirmPassword") }}
              label="confirm password"
              placeholder="Please confirm password"
              errors={errors.confirmPassword}
              type="password"
            />
          </div>
          <div className="form-group px-2">
            <Radio
              register={{ ...register("gender") }}
              label="Gender"
              options={genderOptions}
              errors={errors.gender}
            />
          </div>

          <button type="submit" className="btn rounded-pill btn-primary shadow">
            next
          </button>
        </div>
      </div>
    </form>
  );
};
