import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ReactNode } from 'react';
import getIntl from '@/app/[locale]/intl';
import Header from '@/components/Header';
import i18nConfig from '@/i18nConfig';

const inter = Inter({ subsets: ['latin'] });

function getDirection(locale: string) {
  if (locale === 'ar') {
    return 'rtl';
  }

  return 'ltr';
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

type Params = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Params): Promise<Metadata> {
  const intl = await getIntl(locale, 'default');
  return {
    title: intl.formatMessage({ id: 'head_title' }),
    description: intl.formatMessage({ id: 'head_description' }),
    authors: [{ name: intl.formatMessage({ id: 'head_author' }) }],
    keywords: [intl.formatMessage({ id: 'head_keyword' })],
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const intl = await getIntl(locale, 'default');
  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body className={inter.className}>
        <Header locale={locale} intl={intl} />
        {children}
      </body>
    </html>
  );
}
