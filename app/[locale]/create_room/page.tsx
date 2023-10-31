import getIntl from '@/app/[locale]/intl';
import CreateRoom from '@/components/Conductor/Research/CreateRoom';
import Title from '@/components/Title';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Page({ params: { locale } }: Params) {
  const intl = await getIntl(locale, 'default');
  return (
    <main className='mx-auto max-w-7xl'>
      <Title
        title={intl.formatMessage({ id: 'title_title' })}
        description={intl.formatMessage({ id: 'title_description' })}
      />
      <CreateRoom intl={intl} />
    </main>
  );
}
