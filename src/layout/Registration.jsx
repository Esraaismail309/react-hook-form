import React from "react";
import bg from "./../assets/isometric-exhibition-demonstration-promo-stands-trade-stalls-expo-demonstration-stand-with-workers-visitors-vector-illustration-promo-stands-composition_229548-2111.webp";
import logo from "./../assets/logo-tv-logo.png";
import "./register.css";

import { Form } from "../components/Form";
export const Registration = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between align-item-center">
          <div className="col-md-6 position-relative mt-4">
            <img src={bg} className="img-fluid " alt="register img" />
            <img src={logo} alt="logo" className="logo position-absolute " />
          </div>
          <div className="col-md-6 mt-5  form__content">
            <div className="d-flex justify-content-between">
              <h2 className="position-relative ms-2">Registration</h2>
              <div className="d-flex align-items-center justify-content-center p-2">
                <button
                  type="button"
                  className=" rounded-circle mx-1 border border-light"
                >
                  En
                </button>
                <button
                  type="button"
                  className=" rounded-circle mx-1 border border-light"
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
