import getIntl from '@/app/[locale]/intl';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';
import ServerIntlProvider from '@/components/ServerIntlProvider';

interface Params {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: Params) {
  const intl = await getIntl(locale, 'default');

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <main>
        <h1>{intl.formatMessage({ id: 'homepage_header' })}</h1>
        <ExampleClientComponent />
        <LanguageChanger />
      </main>
    </ServerIntlProvider>
  );
}
