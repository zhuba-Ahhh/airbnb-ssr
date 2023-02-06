import { createI18n } from "vue-i18n";

import zh from "./src/zh";
import en from "./src/en";

const i18n = createI18n({
  legacy: false,
  locale: "zh",
  messages: {
    zh,
    en,
  },
});

export default i18n;
