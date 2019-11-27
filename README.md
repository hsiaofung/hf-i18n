## install

yarn add hf-i18n

## component

```javascript
<Language>
```

## features

- support 中/英 切換
- support 切換語言的按鈕。
- support i18n init

## API

- i18nInit function(languageList)
  - languageList 參數: 資料型態:物件，其為語言檔的 path。語言的縮寫必須依照 i18n 的規範。
- Language 元件: API 無。

## CSS

- language 的 font-size 使用 em 為單位，可在 language 外層設定 font-size。或改變.language-btn-wrap font-size 的屬性。
- .language-btn-wrap :

## 使用方法

- 需要在 app 的進入點，index.js 中 import i18nInit，執行 i18nInit 函數，初始化 i18n。
- 在你的 header 中呼叫元件 Language。

## Demo

```javascript
//App.js
import React from "react";
import { Translation } from "react-i18next";
import { Language } from "./hfi18n";
import i18n from "i18next";

class App extends React.Component {
  componentDidMount() {
    i18n.on("languageChanged", function(lng) {
      //當changeLanguage被呼叫。
      console.log(lng); //可以在這裡增加語言改變時的行為。
    });
  }
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

//index.js(App的進入點)
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { i18nInit } from "./hfi18n"; //呼叫i18nInit
import en from "./locales/en.json"; //英文的語言檔
import zhTW from "./locales/zhTW.json"; //繁體的語言檔

i18nInit({ en, zhTW }); //初始化i18n
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
