import getIntl from '@/app/[locale]/intl';
import Pagination from '@/components/Conductor/Research/Pagination';
import SubjectList from '@/components/Conductor/Research/SubjectList';
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
        title={intl.formatMessage({ id: 'subject_list_title_title' })}
        description={intl.formatMessage({ id: 'subject_list_title_description' })}
      />
      <SubjectList />
      <Pagination steps={research_setting_steps} current_step='subject_list' />
    </main>
  );
}
