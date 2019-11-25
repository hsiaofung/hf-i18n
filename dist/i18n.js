"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _en = _interopRequireDefault(require("./locales/en.json"));

var _zhTW = _interopRequireDefault(require("./locales/zhTW.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = {
  en: {
    translation: _en.default
  },
  zhTW: {
    translation: _zhTW.default
  }
};

_i18next.default.use(_reactI18next.initReactI18next).init({
  resources: resources,
  //翻譯
  lng: "zhTW",
  //預設語言
  fallbackLng: "zhTW",
  //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false //如果語系檔中有巢狀的結構，則escapeValue要設為false，這樣就可以透過物件的方式來取得巢狀內的翻譯

  }
});

var _default = _i18next.default;
exports.default = _default;