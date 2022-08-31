import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
          translation: {
            "Home": "Home",
            "About us": "About us",
            "Our shop": "Our shop",
            "News": "News"
          }
        },
        vn: {
            translation: {
              "Home": "Trang chủ",
              "About us": "Giới thiệu",
              "Our shop": "Quán xá",
              "News": "Tin tức"
            }
          }
      },
      lng: "vn", // if you're using a language detector, do not define the lng option
      fallbackLng: "vn"
});
export default i18n;