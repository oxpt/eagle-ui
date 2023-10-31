'use client';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import type { Route } from 'next';
import Link from 'next/link';
import { useIntl } from 'react-intl';

type Steps = {
  id: number;
  name: string;
  href: string;
};

type Props = {
  steps: Steps[];
  current_step: string;
};

export default function Pagination({ steps, current_step }: Props) {
  const { formatMessage } = useIntl();
  const current_id = steps.find((e) => e.name === `pagination_${current_step}`)?.id;

  return (
    <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
      <nav className='flex items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
        <div className='-mt-px flex w-0 flex-1'>
          {current_id && current_id > 1 ? (
            <Link
              href={steps[current_id - 2].href as Route}
              className='inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            >
              <ArrowLongLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />
              {formatMessage({ id: 'pagination_previous' })}
            </Link>
          ) : (
            <div className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
              {formatMessage({ id: 'pagination_start' })}
            </div>
          )}
        </div>
        <div className='hidden md:-mt-px md:flex'>
          {steps.map((step, index) => (
            <div className='group/page relative' id={`pagination_step_${index}`} key={`pagination_step_${index}`}>
              <span className='sr-only'>{formatMessage({ id: `${step.name}` })}</span>
              {index + 1 === current_id ? (
                <Link
                  href={step.href as Route}
                  className='inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600'
                >
                  {index + 1}
                </Link>
              ) : (
                <Link
                  href={step.href as Route}
                  className='inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                >
                  {index + 1}
                </Link>
              )}
              <div className='absolute left-1/2 -translate-x-1/2 invisible group-hover/page:visible text-center z-10 mt-2 rounded bg-white px-2 py-1 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                {formatMessage({ id: step.name })}
              </div>
            </div>
          ))}
        </div>
        <div className='-mt-px flex w-0 flex-1 justify-end'>
          {current_id && current_id < Object.keys(steps).length ? (
            <Link
              href={steps[current_id].href as Route}
              className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            >
              {formatMessage({ id: 'pagination_next' })}
              <ArrowLongRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
            </Link>
          ) : (
            <div className='inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
              {formatMessage({ id: 'pagination_finish' })}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
