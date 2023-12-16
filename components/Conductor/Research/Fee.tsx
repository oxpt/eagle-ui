"use client"
import { setting, games } from '@/data/gameSettings'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { locale_list } from '@/data/localeList'

function getLocale(locale: string) {
  let result: typeof locale_list = locale_list.filter((elm) => (elm.locale === locale))
  return result
}

export default function Fee() {
  return <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
        <div className='py-6 px-4 sm:px-6 lg:px-8'>
    </div>
    <div className="divide-y divide-gray-900/10">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {setting.locales.map((locale) => (
              <Disclosure as="div" key={locale.locale} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{getLocale(locale.locale).map((elm) => (elm.name))}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2">
                    {setting.timeline.map((value) => {
        return (
          <div
            key={value.id}
            className='grid grid-cols-1 gap-x-8 gap-y-2 border-t border-gray-900/10 pb-12 md:grid-cols-12'
          >
            <div className='col-span-1 md:col-span-4'>
              {games
                .filter((game) => game.id === value.game_id)
                .map((game) => (
                  <h2
                    key={'h2_' + value.id}
                    className='text-base font-semibold leading-7 text-gray-900'
                  >
                    game.name
                  </h2>
                ))}
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                {value.peymentType === 'join' && '参加報酬 (' + value.min + '-' + value.max + ')'}
                {value.peymentType === 'point' && '実験報酬 (' + value.min + '-' + value.max + ')'}
                {value.peymentType === 'none' && '報酬設定なし'}
              </p>
            </div>
            {value.peymentType !== 'none' && (
              <div className='col-span-1 gap-x-6 gap-y-8 md:col-span-4'>
                {value.peyment.map((element) => {
                  return (
                    <div key={value.id + '_' + element.category} className='mt-4 md:mt-8'>
                      <label
                        htmlFor='round_num'
                        className='text-sm font-semibold leading-6 text-gray-900'
                      >
                        被験者カテゴリ：{element.category}
                      </label>
                      <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600'>
                          <input
                            type='number'
                            name='round_num'
                            id='round_num'
                            className='block flex-1 border-0 bg-transparent py-1.5 pr-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                            placeholder={element.rate.en.toString()}
                            defaultValue={0}
                          />
                          <span className='flex select-none items-center pr-2 text-gray-500 sm:text-sm'>
                            {setting.locales.find((l) => ( l.locale === locale.locale))!.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
  </div>;
}

