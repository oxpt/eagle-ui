import { IntlShape } from '@formatjs/intl';
import { KeyIcon } from '@heroicons/react/20/solid';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import SubmitButton from '@/components/SubmitButton';
import i18nConfig from '@/i18nConfig';

const schema = z.object({
  roomName: z
    .string()
    .regex(/^[^\/?\.:]+$/)
    .min(1)
    .max(12),
  locale: z.string().regex(/^[^\/?\.:]+$/),
});

async function joinRoom(formData: FormData) {
  'use server';

  let redirectURL = '/noRoomName';
  const parsed = schema.safeParse({
    roomName: formData.get('r'),
    locale: formData.get('locale'),
  });

  if (!parsed.success) {
    cookies().delete('roomName');
  } else {
    const days = 1;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    let newLocale = parsed.data.locale;
    if (i18nConfig.locales.indexOf(parsed.data.locale) < 0) newLocale = i18nConfig.defaultLocale;
    cookies().set('roomName', parsed.data.roomName, { expires: date, path: '/' });
    redirectURL = `/${newLocale}/join/${encodeURI(parsed.data.roomName)}`;
  }
  redirect(redirectURL);
}

type Props = {
  locale: string;
  intl: IntlShape<string>;
};

export default async function Top({ locale, intl }: Props) {
  const roomName = cookies().get('roomName')?.value;

  return (
    <div className='mx-auto items-center'>
      <Image
        src='/images/logo.svg'
        width={131.11}
        height={221.14}
        alt='Logo'
        priority
        className='relative mx-auto mb-[10svh] mt-[15svh] h-[40svh] w-auto'
      />
      <div className='mx-auto max-w-xs mb-[15svh]'>
        <form className='mx-auto flex' action={joinRoom}>
          <div className='relative w-full rounded-md shadow-sm'>
            <label htmlFor='room-name' className='sr-only'>
              {intl.formatMessage({ id: 'top_enter_room_name' })}
            </label>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <KeyIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
            </div>
            <input
              type='text'
              name='r'
              id='room-name'
              autoComplete='r'
              required
              defaultValue={roomName}
              className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              placeholder={intl.formatMessage({ id: 'top_enter_room_name' })}
            />
            <input type='hidden' name='locale' id='language' required value={locale} />
          </div>
          <div className='ml-2 flex-shrink-0'>
            <SubmitButton label={intl.formatMessage({ id: 'top_join' })} />
          </div>
        </form>
      </div>
    </div>
  );
}
