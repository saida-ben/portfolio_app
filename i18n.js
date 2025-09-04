import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import navEN from "./locales/en/navbar.json";
import heroEN from "./locales/en/hero.json";


import navFR from "./locales/fr/navbar.json";
import heroFR from "./locales/fr/hero.json";
import qualificationFR from "./locales/fr/qualification.json";
import qualificationEN from "./locales/en/qualification.json";

import ContactFr from  "./locales/fr/contact.json";
import ContactEn from "./locales/en/contact.json";

import prjFr from "./locales/fr/projects.json";
import prjEn from "./locales/en/projects.json";

import servicesEn from "./locales/en/services.json";
import servicesFr from "./locales/fr/services.json";

import footerFr from "./locales/fr/footer.json";
import footerEn from "./locales/en/footer.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: { nav: navEN, hero: heroEN, qualification: qualificationEN, contact: ContactEn, projects: prjEn, services: servicesEn, footer: footerEn },
      fr: { nav: navFR, hero: heroFR,  qualification: qualificationFR, contact: ContactFr, projects: prjFr, services: servicesFr, footer: footerFr },
    },
    lng: 'en', 
  });

export default i18n;
