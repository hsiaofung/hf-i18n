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

- i18nInit:
  - languageList: 物件，語言檔的 path。語言的縮寫必須依照 i18n 的規範。

## CSS

## Demo

```javascript
//App.js
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
