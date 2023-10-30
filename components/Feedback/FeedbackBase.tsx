'use client';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const kind = {
  success: {
    bgColorLight: 'bg-green-50',
    bgColorDark: 'bg-green-100',
    progressColor: 'bg-green-300',
    ringColorLight: 'ring-offset-green-50',
    ringColorDark: 'ring-green-600',
    textColor: 'text-green-800',
    buttonColor: 'text-green-500',
    icon: <CheckCircleIcon className='h-5 w-5 text-green-400' aria-hidden='true' />,
  },
  warning: {
    bgColorLight: 'bg-yellow-50',
    bgColorDark: 'bg-yellow-100',
    progressColor: 'bg-yellow-300',
    ringColorLight: 'ring-offset-yellow-50',
    ringColorDark: 'ring-yellow-600',
    textColor: 'text-yellow-800',
    buttonColor: 'text-yellow-500',
    icon: <ExclamationTriangleIcon className='h-5 w-5 text-yellow-400' aria-hidden='true' />,
  },
  info: {
    bgColorLight: 'bg-blue-50',
    bgColorDark: 'bg-blue-100',
    progressColor: 'bg-blue-300',
    ringColorLight: 'ring-offset-blue-50',
    ringColorDark: 'ring-blue-600',
    textColor: 'text-blue-800',
    buttonColor: 'text-blue-500',
    icon: <InformationCircleIcon className='h-5 w-5 text-blue-400' aria-hidden='true' />,
  },
  error: {
    bgColorLight: 'bg-red-50',
    bgColorDark: 'bg-red-100',
    progressColor: 'bg-red-300',
    ringColorLight: 'ring-offset-red-50',
    ringColorDark: 'ring-red-600',
    textColor: 'text-red-800',
    buttonColor: 'text-red-500',
    icon: <XCircleIcon className='h-5 w-5 text-red-400' aria-hidden='true' />,
  },
};

export default function FeedbackBase({
  type,
  open,
  onClose,
}: {
  type: 'success' | 'warning' | 'info' | 'error';
  open: boolean;
  onClose: () => void;
}) {
  const icon = kind[type].icon;

  return (
    <div className='mx-auto max-w-7xl mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8' hidden={!open}>
      <div className={`flex ${kind[type].bgColorLight} rounded-t-md rounded-b-none`}>
        <div className='flex-shrink-0 p-4'>{icon}</div>
        <div className='p-4'>
          <p className={`text-sm font-medium ${kind[type].textColor}`}>Successfully uploaded</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='p-2.5'>
            <button
              type='button'
              onClick={onClose}
              className={`rounded-md ${kind[type].bgColorLight} p-1.5 ${kind[type].buttonColor} hover:${kind[type].bgColorDark} focus:outline-none focus:ring-2 focus:${kind[type].ringColorDark} focus:ring-offset-2 focus:${kind[type].ringColorLight}`}
            >
              <span className='sr-only'>Dismiss</span>
              <XMarkIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
      <div className={`flex justify-end ${kind[type].bgColorLight} rounded-b-md`}>
        <div
          className={`h-1 rounded-tr-none rounded-br-md rounded-l-md ${kind[type].progressColor} animate-alart-progress`}
        ></div>
      </div>
    </div>
  );
}
