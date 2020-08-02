import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nProvider } from './i18n';

const locales = [ 'en', 'zh' ];
const translations = {
  'en': require('./resources/en').default,
  'zh': require('./resources/zh').default,
}


ReactDOM.render(
  <I18nProvider locales={locales} translations={translations}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nProvider>,
  document.getElementById('root')
);
  // <IntlProvider locale = {locale} key = {locale} defaultLocale="en">
  // </IntlProvider>,
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
