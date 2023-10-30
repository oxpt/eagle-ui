'use client';

import { useFormStatus } from 'react-dom';

const spinner = (readOnly: string) => {
  return (
    <div
      className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent text-white motion-reduce:animate-[spin_1.5s_linear_infinite]'
      role='status'
    >
      <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
        {readOnly}
      </span>
    </div>
  );
};

type Props = {
  label: string;
  className?: string;
  classNamePending?: string;
};

export default function SubmitButton({ label, className, classNamePending }: Props) {
  const { pending } = useFormStatus();
  // return <SubmitButtonBase pending={pending} label={label} className={className} classNamePending={classNamePending} />;
  return (
    <button
      type='submit'
      aria-disabled={pending}
      className={
        pending
          ? classNamePending
            ? classNamePending
            : 'flex items-center justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
          : className
          ? className
          : 'flex items-center gap-x-1.5 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      }
    >
      {pending ? spinner(label) : label}
    </button>
  );
}
