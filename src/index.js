import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { i18nInit, Language } from "./hfI18n";
import en from "./locales/en.json";
import zhTW from "./locales/zhTW.json";

const languageList = { en, zhTW };
i18nInit(languageList);
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
