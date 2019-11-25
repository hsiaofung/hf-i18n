import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import zhTw from "./locales/zhTW.json";
const resources = {
  en: {
    translation: en
  },
  zhTW: {
    translation: zhTw
  }
};
i18n.use(initReactI18next).init({
  resources, //翻譯
  lng: "zhTW", //預設語言
  fallbackLng: "zhTW", //如果當前切換的語言沒有對應的翻譯則使用這個語言，
  interpolation: {
    escapeValue: false //如果語系檔中有巢狀的結構，則escapeValue要設為false，這樣就可以透過物件的方式來取得巢狀內的翻譯
  }
});
export default i18n;
