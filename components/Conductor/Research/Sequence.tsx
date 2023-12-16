'use client';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { useIntl } from 'react-intl';
import SubmitButton from '@/components/SubmitButton';
import { setting, games } from '@/data/gameSettings';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sequence() {
  const { formatMessage } = useIntl();
  const [selected, setSelected] = useState(games[0]);

  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white space-y-12'>
      <form>
        <div className='space-y-12'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>実施する実験の追加</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>実施する実験を追加してください。</p>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='sm:col-span-4'>
                <div className='mt-2'>
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className='block  text-sm font-medium leading-6 text-gray-900'>
                          実施する実験
                        </Listbox.Label>
                        <div className='flex relative mt-2'>
                          <Listbox.Button className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                            <span className='block truncate'>{selected.name}</span>
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
                            <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                              {games.map((game) => (
                                <Listbox.Option
                                  key={game.id}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-8 pr-4',
                                    )
                                  }
                                  value={game}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected ? 'font-semibold' : 'font-normal',
                                          'block truncate',
                                        )}
                                      >
                                        {game.name}
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

                          <div className='ml-3 flex-shrink-0'>
                            <SubmitButton label='追加' />
                          </div>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3'>
            <div>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>実験進行設定</h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>実験進行条件を設定してください。</p>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
              <div className='col-span-full'>
                <label htmlFor='street-address' className='block text-sm font-medium leading-6 text-gray-900'>
                  進行条件
                </label>
                <div className='flow-root mt-2'>
                  <ul role='list' className='-mb-8'>
                    {setting.timeline.map((event, eventIdx) =>
                      games
                        .filter((games) => games.id === event.game_id)
                        .map((game) => (
                          <li key={'timeline_' + event.id}>
                            <div className='relative pb-8'>
                              {eventIdx !== setting.timeline.length - 1 ? (
                                <span
                                  className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200'
                                  aria-hidden='true'
                                />
                              ) : null}
                              <div className='relative flex space-x-3'>
                                <div>
                                  <span
                                    className={classNames(
                                      game.iconBackground,
                                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                                    )}
                                  >
                                    <game.icon className='h-5 w-5 text-white' aria-hidden='true' />
                                  </span>
                                </div>

                                <div className='relative block min-w-0 justify-start space-x-4 pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 hover:ring-indigo-600 group/game'>
                                  <div className='flex'>
                                    <p className='text-sm font-medium text-gray-900 group-hover/game:text-indigo-600 group-hover/game:font-semibold'>
                                      game.name
                                    </p>
                                    <XCircleIcon className='absolute right-1 top-1.5 h-5 w-5 text-red-300 hover:text-red-600 hover:font-semibold' />
                                  </div>
                                  {game.result && (
                                    <div className='relative flex items-start my-2'>
                                      <div className='flex h-6 items-center'>
                                        <input
                                          id='comments'
                                          aria-describedby='comments-description'
                                          name='comments'
                                          type='checkbox'
                                          defaultChecked={event.result}
                                          className='h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700'
                                        />
                                      </div>
                                      <div className='ml-3 text-sm leading-6'>
                                        <label htmlFor='comments' className='font-medium text-gray-900'>
                                          結果ページ表示
                                        </label>
                                      </div>
                                    </div>
                                  )}

                                  {game.continue && (
                                    <div className='relative flex items-start my-2'>
                                      <div className='flex h-6 items-center'>
                                        <input
                                          id='comments'
                                          aria-describedby='comments-description'
                                          name='comments'
                                          type='checkbox'
                                          defaultChecked={event.continue}
                                          className='h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700'
                                        />
                                      </div>
                                      <div className='ml-3 text-sm leading-6'>
                                        <label htmlFor='comments' className='font-medium text-gray-900'>
                                          個別進行
                                        </label>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </li>
                        )),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
