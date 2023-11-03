'use client';

import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';

function getDirection(locale: string) {
  if (locale === 'ar') {
    return 'rtl';
  }

  return 'ltr';
}

type Params = {
  error: Error & { digest?: string };
};

export default function Error({ error }: Params) {
  const { formatMessage, locale, messages } = useIntl();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body>
        <ServerIntlProvider messages={messages} locale={locale}>
          <main>
            <div className='text-center mb-[15svh]'>
              <Image
                src='/images/500.svg'
                width={638.6}
                height={861.89}
                alt='Error'
                priority={true}
                className='relative mx-auto mb-[5svh] mt-[15svh] h-[40svh] w-auto'
              />
              <h2 className='mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
                {formatMessage({ id: 'error_code_500' })}
              </h2>
              <p className='mb-8 text-gray-500 sm:px-16 lg:px-48 lg:text-lg'>
                {formatMessage({ id: 'error_description_500' })}
              </p>
              <Link
                href={'/' as Route}
                className='max-w-xs items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {formatMessage({ id: 'back_to_top' })}
              </Link>
            </div>
          </main>
        </ServerIntlProvider>
      </body>
    </html>
  );
}
