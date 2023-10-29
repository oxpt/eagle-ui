
'server-only';

import { createIntl } from '@formatjs/intl';
import { currentLocale } from 'next-i18n-router';
import { headers } from 'next/headers';

const getMessages = async (locale, namespace) => {
  // const url = `https://api.i18nexus.com/project_resources/translations/${locale}/${namespace}.json?api_key=${process.env.I18NEXUS_API_KEY}`;
  const url = `@/messages/${locale}/${namespace}.json`;
  const res = await fetch(url);

  return res.json();
};

export async function useIntl(namespace) {
  const locale = currentLocale();

  return createIntl({
    locale: locale,
    messages: await getMessages(locale, namespace)
  });
}

export default async function getIntl(locale, namespace) {
    return createIntl({
      locale: locale,
      messages: (await import(`@/messages/${locale}/${namespace}.json`)).default
    });
  }