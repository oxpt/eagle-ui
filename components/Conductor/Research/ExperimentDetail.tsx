import { IntlShape } from '@formatjs/intl';

type Props = {
  intl: IntlShape<string>;
};

export default async function ExperimentDetail({ intl }: Props) {
  return <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>ExperimentDetail</div>;
}
