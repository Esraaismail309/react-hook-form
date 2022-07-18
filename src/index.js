import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { IntlProvider } from 'react-intl';
// import locale_en from './locale/en.json'
// import locale_ar from './locale/ar-001.json'
// import { Wrapper } from './locale/Wrapper.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const messages = {
//   'en': locale_en,
//   'ar': locale_ar
// }

// const language = navigator.language.split(/[-_]/)[0]
// console.log(language);
root.render(
  <React.StrictMode>
    {/* <Wrapper> */}
    <App />
    {/* </Wrapper > */}
  </React.StrictMode >

);

reportWebVitals();
