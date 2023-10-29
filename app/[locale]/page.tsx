
import ServerIntlProvider from '@/components/ServerIntlProvider';
import getIntl from '@/app/[locale]/intl';
import ExampleClientComponent from '@/components/ExampleClientComponent';
import LanguageChanger from '@/components/LanguageChanger';

interface Params {
    params: {
      locale: string;
    }
}

export default async function Home({ params: { locale }}: Params) {
  const intl = await getIntl(locale, 'default');

  return (
    <main>
      <h1>{intl.formatMessage({ id: 'homepage_header' })}</h1>
      <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
        <ExampleClientComponent />
        <LanguageChanger />
      </ServerIntlProvider>
    </main>
  );
}