'use client';

import { useIntl } from 'react-intl';

export default function ExampleClientComponent() {
  const { formatMessage } = useIntl();

  return <h3>{formatMessage({ id: 'homepage_subheader' })}</h3>;
}