import getIntl from '@/app/[locale]/intl';
import Pagination from '@/components/Conductor/Research/Pagination';
import Sequence from '@/components/Conductor/Research/Sequence';
import Title from '@/components/Title';
import { research_setting_steps } from '@/data/researchSettingSteps';

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
        title={intl.formatMessage({ id: 'sequence_title_title' })}
        description={intl.formatMessage({ id: 'sequence_title_description' })}
      />
      <Sequence />
      <Pagination steps={research_setting_steps} current_step='sequence' />
    </main>
  );
}
