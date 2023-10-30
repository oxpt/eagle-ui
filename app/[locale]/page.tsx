import getIntl from '@/app/[locale]/intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
import Top from '@/components/Top';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: Params) {
  const intl = await getIntl(locale, 'default');

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <main className='mx-auto max-w-7xl'>
        <Top locale={locale} />
      </main>
    </ServerIntlProvider>
  );
}
