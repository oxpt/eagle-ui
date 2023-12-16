import getIntl from '@/app/[locale]/intl';
import ExperimentDetail from '@/components/Conductor/Research/ExperimentDetail';
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
        title={intl.formatMessage({ id: 'experiment_detail_title_title' })}
        description={intl.formatMessage({ id: 'experiment_detail_title_description' })}
      />
      <ExperimentDetail />
      <Pagination steps={research_setting_steps} current_step='experiment_detail' />
    </main>
  );
}
