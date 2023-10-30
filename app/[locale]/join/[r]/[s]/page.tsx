import getIntl from '@/app/[locale]/intl';

type Params = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: Params) {
  const intl = await getIntl(locale, 'default');

  return <main className='mx-auto max-w-7xl'>できだか</main>;
}
