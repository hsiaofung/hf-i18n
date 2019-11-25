import React, { Component } from "react";
import i18n from "i18next";

export default class Language extends Component {
  clickLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };
  render() {
    return (
      <div>
        <p>
          <button value="en" onClick={this.clickLanguage}>
            EN
          </button>
          <button value="zhTW" onClick={this.clickLanguage}>
            繁
          </button>
        </p>
      </div>
    );
  }
}
