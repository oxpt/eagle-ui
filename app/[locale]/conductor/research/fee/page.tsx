import getIntl from '@/app/[locale]/intl';
import Fee from '@/components/Conductor/Research/Fee';
import Pagination from '@/components/Conductor/Research/Pagination';
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
        title={intl.formatMessage({ id: 'fee_title_title' })}
        description={intl.formatMessage({ id: 'fee_title_description' })}
      />
      <Fee />
      <Pagination steps={research_setting_steps} current_step='fee' />
    </main>
  );
}
