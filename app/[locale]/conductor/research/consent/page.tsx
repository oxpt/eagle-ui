import getIntl from '@/app/[locale]/intl';
import Consent from '@/components/Conductor/Research/Consent';
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
        title={intl.formatMessage({ id: 'consent_title_title' })}
        description={intl.formatMessage({ id: 'consent_title_description' })}
      />
      <Consent intl={intl} />
      <Pagination steps={research_setting_steps} current_step='consent' />
    </main>
  );
}
