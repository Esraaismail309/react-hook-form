import React, { useContext, useState } from "react";
import bg from "./../assets/isometric-exhibition-demonstration-promo-stands-trade-stalls-expo-demonstration-stand-with-workers-visitors-vector-illustration-promo-stands-composition_229548-2111.webp";
import logo from "./../assets/logo-tv-logo.png";
import "./register.css";
import { FormattedMessage, useIntl } from "react-intl";
import { Context } from "./../locale/Wrapper";
import { Form } from "../components/Form";
export const Registration = () => {
  const locale = useContext(Context);
  const intl = useIntl();
  const [dir, setDir] = useState("ltr");

  return (
    <>
      <div className="container" dir={dir}>
        <div className="row justify-content-between align-item-center">
          <div className="col-md-6 position-relative mt-4">
            <img src={bg} className="img-fluid " alt="register img" />
            <img src={logo} alt="logo" className="logo position-absolute " />
          </div>
          <div className="col-md-6 mt-5  form__content">
            <div className="d-flex justify-content-between">
              <h2 className="position-relative ms-2">
                <FormattedMessage id="title" />
              </h2>
              <div className="d-flex align-items-center justify-content-center p-2">
                <button
                  type="button"
                  className={
                    intl.locale === "en"
                      ? " rounded-circle mx-1 border border-light btn-primary"
                      : " rounded-circle mx-1 border border-light "
                  }
                  onClick={(e) => {
                    locale.changeLanguage(e);
                    setDir("ltr");
                  }}
                  value="en"
                >
                  En
                </button>
                <button
                  type="button"
                  className={
                    intl.locale === "ar"
                      ? " rounded-circle mx-1 border border-light btn-primary"
                      : " rounded-circle mx-1 border border-light "
                  }
                  onClick={(e) => {
                    locale.changeLanguage(e);
                    setDir("rtl");
                  }}
                  value="ar"
                >
                  Ar
                </button>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
