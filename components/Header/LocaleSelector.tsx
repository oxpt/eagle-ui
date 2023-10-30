'use client';

import { Popover, Transition } from '@headlessui/react';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Fragment } from 'react';
import 'flag-icons';
import { locale_list } from '@/data/localeList';

type Props = {
  locale: string;
  localeChange: (formData: FormData) => Promise<void>;
};

export default function LocaleSelector({ locale, localeChange }: Props) {
  const currentLocale = locale_list.find((e) => e.locale === locale)?.name;
  const currentPath = usePathname();
  const currentParams = useSearchParams();

  return (
    <Popover className='relative'>
      <Popover.Button
        className={`rounded-md bg-white px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
      >
        <span>{currentLocale}</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute right-0 z-10 mt-5 flex w-screen max-w-min px-4 origin-top-right'>
          <div className='w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
            <form action={localeChange}>
              <input type='hidden' name='path' value={currentPath} />
              <input type='hidden' name='current_locale' value={locale} />
              <input type='hidden' name='search_params' value={currentParams.toString()} />
              {locale_list.map((item) => {
                return item.locale != locale ? (
                  <button
                    key={item.name}
                    name='locale'
                    type='submit'
                    value={item.locale}
                    className='flex p-2 hover:text-indigo-600'
                  >
                    <div className='mr-2'>{item.flag}</div>
                    <div>{item.name}</div>
                  </button>
                ) : null;
              })}
            </form>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
