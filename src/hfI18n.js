import React, { Component } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./css/language.css";

export const i18nInit = function(languageList) {
  let resources = {};

  for (const key in languageList) {
    resources[key] = { translation: languageList[key] };
  }

  i18n.use(initReactI18next).init({
    resources, //翻譯
    lng: "zhTW", //預設語言
    fallbackLng: "zhTW", //如果當前切換的語言沒有對應的翻譯則使用這個語言，
    interpolation: {
      escapeValue: false //如果語系檔中有巢狀的結構，則escapeValue要設為false，這樣就可以透過物件的方式來取得巢狀內的翻譯
    }
  });
};

export class Language extends Component {
  render() {
    const { lang } = this.props;
    return (
      <div className="language-btn-wrap">
        <div className="content">
          <span className="hoverChangeColor">
            {lang === "zhTW" ? "繁" : "EN"}
          </span>
          <div className="submenu">
            <button onClick={() => i18n.changeLanguage("zhTW")}>繁</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
          </div>
        </div>
      </div>
    );
  }
}
