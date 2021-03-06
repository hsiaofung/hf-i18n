"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Language = exports.i18nInit = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

require("./css/language.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var i18nInit = function i18nInit(languageList) {
  var resources = {};

  for (var key in languageList) {
    resources[key] = {
      translation: languageList[key]
    };
  }

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
};

exports.i18nInit = i18nInit;

var Language =
/*#__PURE__*/
function (_Component) {
  _inherits(Language, _Component);

  function Language() {
    _classCallCheck(this, Language);

    return _possibleConstructorReturn(this, _getPrototypeOf(Language).apply(this, arguments));
  }

  _createClass(Language, [{
    key: "render",
    value: function render() {
      var lang = this.props.lang;
      return _react.default.createElement("div", {
        className: "language-btn-wrap"
      }, _react.default.createElement("div", {
        className: "content"
      }, _react.default.createElement("span", {
        className: "hoverChangeColor"
      }, lang === "zhTW" ? "繁" : "EN"), _react.default.createElement("div", {
        className: "submenu"
      }, _react.default.createElement("button", {
        onClick: function onClick() {
          return _i18next.default.changeLanguage("zhTW");
        }
      }, "\u7E41"), _react.default.createElement("button", {
        onClick: function onClick() {
          return _i18next.default.changeLanguage("en");
        }
      }, "EN"))));
    }
  }]);

  return Language;
}(_react.Component);

exports.Language = Language;
