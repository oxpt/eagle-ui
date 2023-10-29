import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import getIntl from '@/app/[locale]/intl';

export default async function NotFoundCatchAll({
  params: { locale, notFound },
}: {
  params: {
    locale: string;
    notFound: string;
  };
}) {
  const intl = await getIntl(locale, 'default');
  return (
    <div className='text-center mb-[15svh]'>
      <Image
        src='/images/404.svg'
        width={863.89}
        height={882.11}
        alt='Error'
        priority={true}
        className='relative mx-auto mb-[5svh] mt-[15svh] h-[40svh] w-auto'
      />
      <h2 className='mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl'>
        {intl.formatMessage({ id: 'error_code_404' })}
      </h2>
      <p className='mb-8 text-gray-500 sm:px-16 lg:px-48 lg:text-lg'>
        {intl.formatMessage({ id: 'error_description_404' })}
      </p>
      <Link
        href={'/' as Route}
        className='max-w-xs items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        {intl.formatMessage({ id: 'back_to_top' })}
      </Link>
    </div>
  );
}
