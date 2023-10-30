import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
  locales: ['en', 'ja', 'es', 'zh'],
  defaultLocale: 'ja',
  prefixDefault: true,
};

export default i18nConfig;
