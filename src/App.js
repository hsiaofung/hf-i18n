import React from "react";
import { Translation } from "react-i18next";
import { Language } from "./hfi18n";
import i18n from "i18next";

class App extends React.Component {
  state = { lng: "zhTW" };
  componentDidMount() {
    i18n.on("languageChanged", lng => {
      //當changeLanguage被呼叫。
      console.log(lng); //可以在這裡增加語言改變時的行為。
      this.setState({
        lng: lng
      });
    });
  }
  render() {
    return (
      <div className="App">
        <header style={{ border: "1px solid red" }}>
          <div style={{ width: "50%", textAlign: "right" }}>
            <Language lang={this.state.lng} />
          </div>
        </header>

        <div>
          <Translation>{t => <p>{t("homePage.home")}</p>}</Translation>
        </div>
      </div>
    );
  }
}

export default App;
