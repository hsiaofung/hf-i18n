import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Translation } from "react-i18next";
import Language from "./Language";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Language />
        <Translation>{t => <p>{t("homePage.home")}</p>}</Translation>
      </div>
    );
  }
}

export default App;
