import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    linkHome: "Home",
    linkPorto: "Portfolio",
    cocktailRecs: "Cocktail Recommendation",
    cocktailReci: "Cocktail Recipes",
    buttonMore: "Read more",
    search: "Search cocktail...",
    searchBtn: "Search",
    backHome: "Back to home",
    loading: "Loading content...",
    loadingRecs: "No recommendation available",
    loadingReci: "No recipes available",
    result: "The results for",
  },
  de: {
    linkHome: "Zuhause",
    linkPorto: "Portfolio",
    cocktailRecs: "Cocktail Empfehlung",
    cocktailReci: "Cocktail Rezepte",
    buttonMore: "Weiterlesen",
    search: "Cocktail suchen...",
    searchBtn: "Suche",
    backHome: "Zurück nach Hause",
    loading: "Laden von Inhalten",
    loadingRecs: "Keine Empfehlung verfügbar",
    loadingReci: "Keine Rezepte verfügbar",
    result: "Die Ergebnisse für",
  },
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "de", // set fallback locale
  messages, // set locale messages
});

export default i18n;
