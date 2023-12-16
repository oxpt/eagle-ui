'use client';

import { Menu, Transition } from '@headlessui/react';
import {
  EllipsisHorizontalIcon,
  TrashIcon,
  ArrowPathRoundedSquareIcon,
  PencilIcon,
  DocumentCheckIcon,
  PlayIcon,
  GiftIcon,
} from '@heroicons/react/20/solid';
import { FolderPlusIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { toSvg } from 'jdenticon';
import { Fragment } from 'react';
import { useIntl } from 'react-intl';

const setting = {
  data: [
    {
      id: 99,
      create_date: '2023/06/12 11:12',
      room_name: 'a',
      games: [1, 2],
      guest_amount: 32,
      deleted: false,
      status: 'Running',
    },
    {
      id: 1,
      create_date: '2023/06/12 11:12',
      room_name: 'a',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'Running',
    },
    {
      id: 2,
      create_date: '2023/06/12 11:12',
      room_name: 'テスト',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'Finished',
    },
    {
      id: 3,
      create_date: '2023/06/12 11:12',
      room_name: 'マクロ',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'Ready',
    },
    {
      id: 4,
      create_date: '2023/06/12 11:12',
      room_name: 'ミクロ',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'NotReady',
    },
    {
      id: 5,
      create_date: '2023/06/12 11:12',
      room_name: 'テスト',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'Deleted',
    },
    {
      id: 6,
      create_date: '2023/06/12 11:12',
      room_name: 'ヤフー',
      games: [1, 2, 3, 5, 4],
      guest_amount: 32,
      deleted: false,
      status: 'Finished',
    },
  ],
};

const games = [
  {
    id: 1,
    name: 'games_agreement',
    result: false,
    continue: true,
    icon: DocumentCheckIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 2,
    name: 'games_attribute_survey',
    result: false,
    continue: true,
    icon: PencilIcon,
    iconBackground: 'bg-gray-500',
  },
  {
    id: 3,
    name: 'games_ultimatum_game',
    result: true,
    continue: true,
    icon: PlayIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    name: 'games_fee',
    result: true,
    continue: true,
    icon: GiftIcon,
    iconBackground: 'bg-gray-500',
  },
];

const statuses = {
  NotReady: 'text-red-700 bg-red-50 ring-red-600/10',
  Ready: 'text-yellow-700 bg-yellow-50 ring-yellow-600/10',
  Running: 'text-blue-700 bg-blue-50 ring-blue-600/10',
  Finished: 'text-green-700 bg-green-50 ring-green-600/20',
  Deleted: 'text-gray-600 bg-gray-50 ring-gray-500/10',
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Restoration() {
  const { formatMessage } = useIntl();
  const svgString = toSvg('value', 100);

  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
      <ul role='list' className='grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'>
        <button
          type='button'
          className='relative hover:border-indigo-600 block w-full rounded-lg border-[1px] border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group/new'
        >
          <FolderPlusIcon
            className='mx-auto h-10 w-10 text-gray-400 group-hover/new:text-indigo-600'
            aria-hidden='true'
          />
          <span className='mt-2 block text-sm text-gray-400 group-hover/new:text-indigo-600 group-hover/new:font-semibold'>
            Create a new room
          </span>
        </button>
        {setting.data.map((data) => (
          <li
            key={data.id}
            className='overflow-hidden  flex flex-col rounded-xl border border-gray-200 hover:border-indigo-600 group/room'
          >
            <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
              <div
                className='rounded-md text-lg border-2 bg-white border-gray-900/10 w-12 h-12 text-center align-top overflow-hidden'
                dangerouslySetInnerHTML={{ __html: toSvg(data.room_name, 44) }}
              />
              <div className='text-sm font-medium leading-6 text-gray-900 group-hover/room:font-semibold group-hover/room:text-indigo-600'>
                {data.room_name}
              </div>
              <Menu as='div' className='relative ml-auto'>
                <Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Open options</span>
                  <EllipsisHorizontalIcon className='h-5 w-5' aria-hidden='true' />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900',
                          )}
                        >
                          View<span className='sr-only'>, {data.room_name}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900',
                          )}
                        >
                          Edit<span className='sr-only'>, {data.room_name}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Status</dt>
                <dd className='text-gray-700'>
                  <div
                    className={classNames(
                      statuses[data.status as keyof typeof statuses],
                      'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset',
                    )}
                  >
                    {data.status}
                  </div>
                </dd>
              </div>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Create Date</dt>
                <dd className='text-gray-700'>
                  <time dateTime={data.create_date}>{data.create_date}</time>
                </dd>
              </div>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Subject amount</dt>
                <dd className='text-gray-700'>{data.guest_amount}</dd>
              </div>
              <div className='flex justify-between gap-x-4 py-3'>
                <dt className='text-gray-500'>Games</dt>
                <dd className='text-gray-700'>
                  {data.games.map((game) => (
                    <ul key={'ul_' + game} className='list-disc'>
                      {games
                        .filter((g) => g.id === game)
                        .map((game_item) => (
                          <li key={'restoration.game_list_' + game_item.name}>{game_item.name}</li>
                        ))}
                    </ul>
                  ))}
                </dd>
              </div>
            </dl>
            <div className='mt-auto border-gray-200 border-t-[1px]'>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='flex w-0 flex-1 hover:bg-indigo-600 group/delete'>
                  <a
                    href={`mailto:mail@example.com`}
                    className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm text-gray-900 group-hover/delete:text-white group-hover/delete:font-semibold'
                  >
                    <TrashIcon className='h-5 w-5 text-gray-400 group-hover/delete:text-white' aria-hidden='true' />
                    Delete
                  </a>
                </div>
                <div className='-ml-px flex w-0 flex-1 hover:bg-indigo-600 group/restore'>
                  <a
                    href={`tel:0123-45-6789`}
                    className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm text-gray-900 group-hover/restore:text-white group-hover/restore:font-semibold'
                  >
                    <ArrowPathRoundedSquareIcon
                      className='h-5 w-5 text-gray-400 group-hover/restore:text-white'
                      aria-hidden='true'
                    />
                    Restore
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
        <button
          type='button'
          className='relative hover:border-indigo-600 block w-full rounded-lg border-[1px] border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group/file'
        >
          <CloudArrowUpIcon
            className='mx-auto h-10 w-10 text-gray-400 group-hover/file:text-indigo-600'
            aria-hidden='true'
          />
          <span className='mt-2 block text-sm text-gray-400 group-hover/file:text-indigo-600 group-hover/file:font-semibold'>
            Upload setting file
          </span>
        </button>
      </ul>
    </div>
  );
}
