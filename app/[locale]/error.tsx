'use client';

import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  error: Error & { digest?: string };
};

export default function Error({ error }: Props) {
  const { formatMessage } = useIntl();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='text-center mb-[15svh]'>
      <Image
        src='/images/503.svg'
        width={684.71}
        height={811.25}
        alt='Error'
        priority={true}
        className='relative mx-auto mb-[5svh] mt-[15svh] h-[40svh] w-auto'
      />
      <h2 className='mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
        {formatMessage({ id: 'error_code_503' })}
      </h2>
      <p className='mb-8 text-gray-500 sm:px-16 lg:px-48 lg:text-lg'>
        {formatMessage({ id: 'error_description_503' })}
      </p>
      <Link
        href={'/' as Route}
        className='max-w-xs items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        {formatMessage({ id: 'back_to_top' })}
      </Link>
    </div>
  );
}
