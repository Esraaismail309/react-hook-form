import React from "react";
import { InputField } from "./InputField";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Select } from "./Select";
import { Radio } from "./Radio";
import { PhonePicker } from "./PhonePicker";
// import { FormattedMessage, useIntl } from "react-intl";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const { t } = useTranslation();
  // console.log(t);
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
      key: t("gender.male"),
    },
    {
      value: 2,
      key: t("gender.female"),
    },
    {
      value: 3,
      key: t("gender.other"),
    },
    {
      value: 4,
      key: t("gender.preferNotToSay"),
    },
  ];
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required(t("errors.main"))
      .matches("^\\S*$", t("errors.noSpace")),
    position: Yup.string().required(t("errors.main")),
    email: Yup.string().required(t("errors.main")).email(t("errors.inValid")),
    phone: Yup.string().required(t("errors.main")),
    country: Yup.string().required(t("errors.main")),
    city: Yup.string().required(t("errors.main")),
    password: Yup.string()
      .required(t("errors.main"))
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        t("errors.validPassword")
      ),
    confirmPassword: Yup.string()
      .required(t("errors.main"))
      .oneOf([Yup.ref("password"), "not matched!"], t("errors.dontMatch")),

    gender: Yup.string().required(t("errors.main")),
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
              label={t("labels.name")}
              placeholder={t("placeholder.nameContent")}
              errors={errors.fullName}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <Select
              register={{ ...register("position") }}
              label={t("labels.position")}
              placeholder={t("placeholder.positionContent")}
              options={positionOptions}
              errors={errors.position}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("email") }}
              label={t("labels.email")}
              placeholder={t("placeholder.emailContent")}
              errors={errors.email}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <PhonePicker
              register={{ ...register("phone") }}
              label={t("labels.phone")}
              errors={errors.phone}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("country") }}
              label={t("labels.country")}
              placeholder={t("placeholder.name")}
              errors={errors.country}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("city") }}
              label={t("labels.city")}
              placeholder={t("placeholder.cityContent")}
              errors={errors.city}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("password") }}
              label={t("labels.password")}
              placeholder={t("placeholder.passwordContent")}
              errors={errors.password}
              type="password"
              control={control}
            />
          </div>
          <div className="form-group col-md-6 px-2">
            <InputField
              register={{ ...register("confirmPassword") }}
              label={t("labels.confirmPassword")}
              placeholder={t("placeholder.confirmPasswordContent")}
              errors={errors.confirmPassword}
              type="password"
            />
          </div>
          <div className="form-group px-2">
            <Radio
              register={{ ...register("gender") }}
              label={t("labels.gender")}
              options={genderOptions}
              errors={errors.gender}
            />
          </div>

          <button type="submit" className="btn rounded-pill btn-primary shadow">
            {t("submit")}
          </button>
        </div>
      </div>
    </form>
  );
};
