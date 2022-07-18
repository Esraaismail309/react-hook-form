// import React, { createContext, useState } from "react";
// import { IntlProvider } from "react-intl";
// import { createIntl, createIntlCache } from "@formatjs/intl";
// import locale_en from "./en.json";
// import locale_ar from "./ar-AE.json";
// export const Context = createContext();

// const messages = {
//   en: locale_en,
//   ar: locale_ar,
// };
// export const Wrapper = (props) => {
//   console.log(props);
//   const [locale, setLocale] = useState("ar");
//   const cache = createIntlCache();
//   const intl = createIntl(
//     {
//       locale: "ar",
//       messages: messages[locale],
//     },
//     cache
//   );
//   console.log(intl);
//   return (
//     <Context.Provider value={{ locale, setLocale }}>
//       <IntlProvider locale={intl.locale} messages={intl.messages}>
//         {props.childern}
//       </IntlProvider>
//     </Context.Provider>
//   );
// };
