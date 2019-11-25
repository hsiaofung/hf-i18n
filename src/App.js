import React from "react";
import { Translation } from "react-i18next";
import { Language } from "./hfi18n";

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
