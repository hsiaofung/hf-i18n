## install

yarn add hf-i18n

## component

```javascript
<Language>
```

## features

- support 中/英

## API

## CSS

## Demo

```javascript
import React from "react";
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
```
