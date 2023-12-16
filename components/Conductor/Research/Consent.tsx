'use client';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState, useEffect } from 'react';
import HostDescriptionInput from '@/components/Conductor/Research/HostDescriptionInput';
import { setting } from '@/data/gameSettings';
import { locale_list } from '@/data/localeList';

type Props = {
  locale: string;
};

type LocaleListType = {
  name: string;
  locale: string;
  flag: JSX.Element;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Consent({ locale }: Props) {
  const locale_index = locale_list.find((elm) => elm.locale === locale)
    ? locale_list.find((elm) => elm.locale === locale)
    : locale_list[0];
  const [selected, setSelected] = useState(locale_index);
  const [props, setProps] = useState(setting.consent.find((elm) => elm.locale === selected?.locale));

  const handleChange = (value: LocaleListType) => {
    setSelected(value);
    setProps(setting.consent.find((elm) => elm.locale === value.locale));
    window.scrollTo(0, 0);
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
      <Listbox value={selected} onChange={(value) => handleChange(value)}>
        {({ open }) => (
          <>
            <Listbox.Label className='block text-sm font-medium leading-6 text-gray-900'>編集する言語</Listbox.Label>
            <div className='relative mt-2 grid grid-cols-3'>
              <Listbox.Button className='relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                <span className='block truncate'>{selected?.name}</span>
                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-10 mt-10 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {locale_list.map((locale) => (
                    <Listbox.Option
                      key={locale.locale}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-8 pr-4',
                        )
                      }
                      value={locale}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            {locale.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                              )}
                            >
                              <CheckIcon className='h-5 w-5' aria-hidden='true' />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <div className='rounded-lg border-2 border-dashed border-blue-100 bg-white px-1 mt-6'>
        <HostDescriptionInput
          locale={props!.locale}
          pageTitle={props!.pageTitle.title}
          pageTitleDescription={props!.pageTitle.description}
          researchTitle={props!.researchTitle}
          details={props!.details}
          confirm={props!.confirm}
        />
      </div>
      <Listbox value={selected} onChange={(value) => handleChange(value)}>
        {({ open }) => (
          <div className='relative mt-6 grid grid-cols-3'>
            <Listbox.Button className='relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='block truncate'>{selected?.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-10 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {locale_list.map((locale) => (
                  <Listbox.Option
                    key={locale.locale}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4',
                      )
                    }
                    value={locale}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {locale.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5',
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
