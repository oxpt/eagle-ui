import { IntlShape } from '@formatjs/intl';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { footerNavigation } from '@/data/footerNavigation';

type Props = {
  intl: IntlShape<string>;
};

export default async function Footer({ intl }: Props) {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        {intl.formatMessage({ id: 'footer_heading' })}
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Image
              src='/images/logo_right.svg'
              width={128.79}
              height={223.92}
              alt='Logo Left'
              priority
              className='relative h-8 w-auto'
            />
            <p className='text-sm leading-6 text-gray-600'>{intl.formatMessage({ id: 'footer_subtitle' })}</p>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                {/* <h3 className='text-sm font-semibold leading-6 text-gray-900'>{intl.formatMessage({ id: 'about' })}</h3> */}
                <div className='text-sm font-semibold leading-6 text-gray-900'>
                  {intl.formatMessage({ id: 'footer_about_title' })}
                </div>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as Route} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                        {intl.formatMessage({ id: `footer_about_item_${item.name}` })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  {intl.formatMessage({ id: 'footer_conductor_title' })}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.conductor.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as Route} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                        {intl.formatMessage({ id: `footer_conductor_item_${item.name}` })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  {intl.formatMessage({ id: 'footer_system_info' })}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.system.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as Route} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                        {intl.formatMessage({ id: `footer_system_item_${item.name}` })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                  {intl.formatMessage({ id: 'footer_legal_title' })}
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href as Route} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                        {intl.formatMessage({ id: `footer_legal_item_${item.name}` })}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
          <div>
            <h3 className='text-sm font-semibold leading-6 text-gray-900'>
              {intl.formatMessage({ id: 'footer_subscribe' })}
            </h3>
            <p className='mt-2 text-sm leading-6 text-gray-600'>
              {intl.formatMessage({ id: 'footer_subscribe_description' })}
            </p>
          </div>
          <form className='mt-6 sm:flex sm:max-w-md lg:mt-0'>
            <label htmlFor='email-address' className='sr-only'>
              {intl.formatMessage({ id: 'footer_email' })}
            </label>
            <input
              type='email'
              name='email-address'
              id='email-address'
              autoComplete='email'
              required
              className='w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6'
              placeholder={intl.formatMessage({ id: 'footer_enter_email' })}
            />
            <div className='mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0'>
              <button
                type='submit'
                className='flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {intl.formatMessage({ id: 'footer_submit' })}
              </button>
            </div>
          </form>
        </div>
        <div className='mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            {footerNavigation.social.map((item) => (
              <a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-500'>
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
          <p className='mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0'>
            {intl.formatMessage({ id: 'footer_opereted' })}
            <br />
            &copy;{intl.formatMessage({ id: 'footer_copyright' })}
          </p>
        </div>
      </div>
    </footer>
  );
}
