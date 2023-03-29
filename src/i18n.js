import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = {
    language: "English",
    tMake: "Make",
    tModel: "Model",
    tYear: "Year",
    tBody: "Body",
    tFuel: "Fuel",
    tNumber: "Number"
};

const translationLt = {
    language: "Lietuvių",
    tMake: "Gamintojas",
    tModel: "Modelis",
    tYear: "Pagaminimo metai",
    tBody: "Kėbulo tipas",
    tFuel: "Kuro tipas",
    tNumber: "Valst. Numeris"
};

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEn },
        lt: { translation: translationLt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export { i18n };
