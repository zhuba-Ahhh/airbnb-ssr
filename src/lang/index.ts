import { createI18n } from 'vue-i18n';

import zhCn from './src/zhCn';
import en from './src/en';

const i18n = createI18n({
  legacy: false,
  locale: 'zhCn',
  messages: {
    zhCn,
    en
  }
});

export default i18n;
