'use clinet';

import { Dialog, Transition } from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/20/solid';
import { KeyIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import { Fragment, useRef } from 'react';
import { useIntl } from 'react-intl';
import SubmitButton from '@/components/SubmitButton';

export default function JoinRoomDialogBase({
  locale,
  onSubmit,
  onClose,
}: {
  locale: string;
  onSubmit: (formData: FormData) => Promise<void>;
  onClose: () => void;
}) {
  const { formatMessage } = useIntl();
  const cancelButtonRef = useRef(null);
  const pathname = usePathname();
  const regex = new RegExp('^/' + locale + '/join/([^/?\\.\\:]+)/?.*$');

  const regexResult = regex.exec(pathname);
  const roomName = regexResult ? decodeURI(regexResult[1]) : null;

  if (roomName !== null) {
    return (
      <Transition.Root show={true} as={Fragment}>
        <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={() => onClose()}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <form action={onSubmit}>
                    <div>
                      <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                        <KeyIcon className='h-6 w-6 text-green-600' aria-hidden='true' />
                      </div>
                      <div className='mt-3 text-center sm:mt-5'>
                        <Dialog.Title as='h3' className='text-base font-semibold leading-6 text-gray-900'>
                          {formatMessage({ id: 'join_dialog_title' })}
                        </Dialog.Title>
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>{formatMessage({ id: 'join_dialog_description' })}</p>
                        </div>
                        <div className='mx-auto flex mt-2'>
                          <div className='relative w-full rounded-md shadow-sm'>
                            <label htmlFor='id' className='sr-only'>
                              {formatMessage({ id: 'join_dialog_room_name' })}
                            </label>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                              <PencilIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
                            </div>
                            <input
                              type='text'
                              name='s'
                              id='subjectID'
                              autoComplete='subjectID'
                              required
                              className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                              placeholder={formatMessage({ id: 'join_dialog_subject_id' })}
                            />
                            <input type='hidden' name='r' id='roomName' required value={roomName} />
                            <input type='hidden' name='locale' id='language' required value={locale} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-5 sm:mt-6 sm:gap-3 inline-flex justify-end w-full'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                        onClick={() => onClose()}
                        ref={cancelButtonRef}
                      >
                        {formatMessage({ id: 'join_dialog_cancel' })}
                      </button>
                      <SubmitButton
                        label={formatMessage({ id: 'join_dialog_submit' })}
                        className='inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        classNamePending='inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
                      />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  } else {
    return <div>そんな部屋はない</div>;
  }
}
