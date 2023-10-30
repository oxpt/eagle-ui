'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import i18nConfig from '@/i18nConfig';

const schema = z.object({
  roomName: z
    .string()
    .regex(/^[^\/?\.:]+$/)
    .min(0, { message: 'Must be 1 or more characters long' })
    .max(12, { message: 'Must be 12 or fewer characters long' }),
  subjectID: z
    .string()
    .regex(/^[^\/?\.:]+$/)
    .min(0, { message: 'Must be 1 or more characters long' })
    .max(12, { message: 'Must be 12 or fewer characters long' }),
  locale: z.string().regex(/^[^\/?\.:]+$/),
});

export async function joinRoomWithId(formData: FormData) {
  let locale = i18nConfig.defaultLocale;
  let redirectURL = '../noRoomName';

  const parsed = schema.safeParse({
    roomName: formData.get('r'),
    subjectID: formData.get('s'),
    locale: formData.get('locale'),
  });

  if (!parsed.success) {
    cookies().delete('roomName');
    cookies().delete('subjectID');
  } else {
    i18nConfig.locales.indexOf(parsed.data.locale) < 0
      ? (locale = i18nConfig.defaultLocale)
      : (locale = parsed.data.locale);
    cookies().set('roomName', parsed.data.roomName);
    cookies().set('subjectID', parsed.data.subjectID);
    redirectURL = `/${locale}/join/${encodeURI(parsed.data.roomName)}/${encodeURI(parsed.data.subjectID)}`;
  }

  redirect(redirectURL);
}

export async function redirectToTop() {
  cookies().delete('roomName');
  cookies().delete('subjectID');
  redirect('../');
}
