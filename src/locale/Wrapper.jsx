import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import English from "./../i18n/locales/en/en-US.json";
import Arabic from "./../i18n/locales/ar/ar-AE.json";

export const Context = createContext();

export const Wrapper = (props) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(English);
  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      setMessages(Arabic);
    }
  };
  return (
    <Context.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
