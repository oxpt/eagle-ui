import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useRef } from 'react';
import { useIntl } from 'react-intl';

export const CookieDialogBase = ({
  onAccept,
  onReject,
  open,
}: {
  onAccept: () => void;
  onReject: () => void;
  open: boolean;
}) => {
  const { formatMessage } = useIntl();
  const acceptButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative' onClose={onReject} initialFocus={acceptButtonRef}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='pointer-events-none fixed inset-y-0 flex w-screen'>
          <Transition.Child
            as={Fragment}
            enter='transform transition ease-in-out duration-500 sm:duration-700'
            enterFrom='translate-y-full'
            enterTo='translate-y-0'
            leave='transform transition ease-in-out duration-500 sm:duration-700'
            leaveFrom='translate-y-0'
            leaveTo='translate-y-full'
          >
            <Dialog.Panel className='pointer-events-auto w-screen'>
              <div className='fixed  bottom-0 bg-gray-50 ring-1 ring-gray-900/10 py-6'>
                <div className='mx-auto  w-screen flex flex-col justify-between md:flex-row md:items-center gap-x-8 gap-y-4 px-4 sm:px-6 lg:px-8'>
                  <p className='max-w-4xl text-sm leading-6 text-gray-900'>
                    {formatMessage({ id: 'cookie_description' })}{' '}
                    <Link href='#' className='font-semibold text-indigo-600'>
                      {formatMessage({ id: 'cookie_link_to_policy' })}
                    </Link>
                    .
                  </p>
                  <div className='flex flex-none items-center justify-end gap-x-2'>
                    <button
                      type='button'
                      className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                      onClick={onReject}
                    >
                      {formatMessage({ id: 'cookie_reject' })}
                    </button>
                    <button
                      type='button'
                      className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      onClick={onAccept}
                      ref={acceptButtonRef}
                    >
                      {formatMessage({ id: 'cookie_accept' })}
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
