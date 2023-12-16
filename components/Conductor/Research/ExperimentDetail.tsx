'use client';
import { Switch } from '@headlessui/react';
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useIntl } from 'react-intl';
import { experimentEnableAtom, useAtom } from '@/jotai';

type Props = {};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const UltimatumGameSetting = () => {
  const [enabled, setEnabled] = useAtom(experimentEnableAtom);
  const handleClose = () => {
    setEnabled(!enabled);
  };
  return (
    <form>
    <div className='space-y-12 sm:space-y-16'>
        <div className='mt-6 space-y-8 border-t border-gray-900/10 pb-12 sm:space-y-0 divide-y divide-gray-900/10 sm:pb-0'>
          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='round_num' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
            ラウンド数
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm'>
                <input
                  type='number'
                  name='round_num'
                  id='round_num'
                  autoComplete='round_num'
                  className='block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='ラウンド数'
                />
                <span className='flex select-none items-center pr-2 text-gray-500 sm:text-sm'>回</span>
              </div>
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
              配分者と応答者の役割交代
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0 sm:pt-1.5'>
            <Switch.Group as='div' className='flex items-center'>
            <Switch.Label as='span' className='mr-3 text-sm'>
              <span className='font-medium text-gray-900'>役割交代しない</span>
            </Switch.Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
              )}
            >
              <span
                aria-hidden='true'
                className={classNames(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                )}
              />
            </Switch>
            <Switch.Label as='span' className='ml-3 text-sm'>
              <span className='font-medium text-gray-900'>役割交代する</span>
            </Switch.Label>
          </Switch.Group>
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='re_suggestion_num' className='block text-sm font-medium leading-6 text-gray-900'>
              応答者に拒否された時の再提案回数
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm'>
                <input
                  type='number'
                  name='re_suggestion_num'
                  id='re_suggestion_num'
                  autoComplete='re_suggestion_num'
                  className='block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='応答者に拒否された時の再提案回数'
                />
                <span className='flex select-none items-center pr-2 text-gray-500 sm:text-sm'>回</span>
              </div>
              <div className='relative flex gap-x-3 mt-2'>
          <div className='flex h-6 items-center'>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
          </div>
          <div className='text-sm leading-6'>
            <label htmlFor='comments' className='font-medium text-gray-600'>
              無限回
            </label>
            <p className='text-gray-600'>承諾されるか実験終了まで回数制限なしで提案できます。</p>
          </div>
        </div>
            </div>
          </div>


          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='endowment_point' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
            初期保有ポイント
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm'>
                <input
                  type='number'
                  name='endowment_point'
                  id='endowment_point'
                  autoComplete='endowment_point'
                  className='block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='初期保有ポイント'
                />
                <span className='flex select-none items-center pr-2 text-gray-500 sm:text-sm'>ポイント</span>
              </div>
            </div>
          </div>

            <fieldset>
            <legend className='sr-only'>By Email</legend>
            <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6  py-2'>
              <div className='text-sm font-medium leading-6 text-gray-900' aria-hidden='true'>
              被験者に見せる画面
              </div>
              <div className='mt-4 sm:col-span-2 sm:mt-0'>
                <div className='max-w-2xl space-y-6'>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='comments'
                        name='comments'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label htmlFor='comments' className='font-medium text-gray-900'>
                      説明画面
                      </label>
                      <p className='mt-1 text-gray-600'>実験説明文がスライド形式で表示されます。独自説明資料などがあり、説明画面を表示したくない場合はオフにしてください。</p>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='candidates'
                        name='candidates'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label htmlFor='candidates' className='font-medium text-gray-900'>
                      実験画面
                      </label>
                      <p className='mt-1 text-gray-600'>説明のみで終了して実験は実施しない場合などはオフにしてください。</p>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        id='offers'
                        name='offers'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label htmlFor='offers' className='font-medium text-gray-900'>
                      結果画面
                      </label>
                      <p className='mt-1 text-gray-600'>
                      実験結果グラフ、ランキング表を表示します。ゲストに相対的な順位を知られたくない場合などはオフにして下さい。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='finish_timming' className='block text-sm font-medium leading-6 text-gray-900'>
            各ラウンドの提案終了タイミング
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm'>
                <input
                  type='number'
                  name='finish_timming'
                  id='finish_timming'
                  autoComplete='finish_timming'
                  className='block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  placeholder='各ラウンドの提案終了タイミング'
                />
                <span className='flex select-none items-center pr-2 text-gray-500 sm:text-sm'>秒</span>
              </div>
              <div className='relative flex gap-x-3 mt-2'>
          <div className='flex h-6 items-center'>
            <input
              id='comments'
              name='comments'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
            />
          </div>
          <div className='text-sm leading-6'>
            <label htmlFor='comments' className='font-medium text-gray-600'>
            提案者が送信した時点
            </label>
            <p className='text-gray-600'>グループ毎にゲームが進行していきます。</p>
          </div>
        </div>
            </div>
          </div>

          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6 py-2'>
            <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
            配分額決定過程表示
            </label>
            <div className='mt-2 sm:col-span-2 sm:mt-0 sm:pt-1.5'>
            <Switch.Group as='div' className='flex items-center'>
            <Switch.Label as='span' className='mr-3 text-sm'>
              <span className='font-medium text-gray-900'>表示しない</span>
              <p className='text-sm text-gray-500'>応答者には待機指示画面が表示されます。</p>
            </Switch.Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
              )}
            >
              <span
                aria-hidden='true'
                className={classNames(
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                )}
              />
            </Switch>
            <Switch.Label as='span' className='ml-3 text-sm'>
              <span className='font-medium text-gray-900'>表示する</span>
              <p className='text-sm text-gray-500'>配分者の操作に伴ってスライダーバーが動きます。</p>
            </Switch.Label>
          </Switch.Group>
            </div>
          </div>
      </div>
    </div>
  </form>
  )
}

const games = [
  {
    name: "最後通牒ゲーム",
    setting: <UltimatumGameSetting />,
  },
  {
    name: "最後通牒ゲーム",
    setting: <UltimatumGameSetting />,
  },
]

export default function ExperimentDetail({}: Props) {
  const { formatMessage } = useIntl();
  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {games.map((game) => (
              <Disclosure as="div" key={game.name} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{game.name}</span>
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
                      {game.setting}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
    </div>
  );
}
