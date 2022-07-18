import React from "react";
import { InputField } from "./InputField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "./Select";
import { Radio } from "./Radio";
import { PhonePicker } from "./PhonePicker";
import { useIntl } from "react-intl";

export const Form = () => {
  const intl = useIntl();

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
      key: intl.messages.gender.male,
    },
    {
      value: 2,
      key: intl.messages.gender.female,
    },
    {
      value: 3,
      key: intl.messages.gender.other,
    },
    {
      value: 4,
      key: intl.messages.gender.preferNotToSay,
    },
  ];
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required(intl.messages.errors.main)
      .matches("^\\S*$", intl.messages.errors.noSpace),
    position: Yup.string().required(intl.messages.errors.main),
    email: Yup.string()
      .required(intl.messages.errors.main)
      .email(intl.messages.errors.inValid),
    phone: Yup.string().required(intl.messages.errors.main),
    country: Yup.string().required(intl.messages.errors.main),
    city: Yup.string().required(intl.messages.errors.main),
    password: Yup.string()
      .required(intl.messages.errors.main)
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        intl.messages.errors.validPassword
      ),
    confirmPassword: Yup.string()
      .required(intl.messages.errors.main)
      .oneOf(
        [Yup.ref("password"), "not matched!"],
        intl.messages.errors.dontMatch
      ),

    gender: Yup.string().required(intl.messages.errors.main),
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
              label={intl.messages.labels.name}
              placeholder={intl.messages.placeholder.nameContent}
              errors={errors.fullName}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <Select
              register={{ ...register("position") }}
              label={intl.messages.labels.position}
              placeholder={intl.messages.placeholder.positionContent}
              options={positionOptions}
              errors={errors.position}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("email") }}
              label={intl.messages.labels.email}
              placeholder={intl.messages.placeholder.emailContent}
              errors={errors.email}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <PhonePicker
              register={{ ...register("phone") }}
              label={intl.messages.labels.phone}
              placeholder={intl.messages.placeholder.phoneContent}
              errors={errors.phone}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("country") }}
              label={intl.messages.labels.country}
              placeholder={intl.messages.placeholder.countryContent}
              errors={errors.country}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("city") }}
              label={intl.messages.labels.city}
              placeholder={intl.messages.placeholder.cityContent}
              errors={errors.city}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("password") }}
              label={intl.messages.labels.password}
              placeholder={intl.messages.placeholder.passwordContent}
              errors={errors.password}
              type="password"
              control={control}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("confirmPassword") }}
              label={intl.messages.labels.confirmPassword}
              placeholder={intl.messages.placeholder.confirmPasswordContent}
              errors={errors.confirmPassword}
              type="password"
            />
          </div>
          <div className="form-group px-2">
            <Radio
              register={{ ...register("gender") }}
              label={intl.messages.labels.gender}
              options={genderOptions}
              errors={errors.gender}
            />
          </div>

          <button type="submit" className="btn rounded-pill btn-primary shadow">
            {intl.messages.submit}
          </button>
        </div>
      </div>
    </form>
  );
};
