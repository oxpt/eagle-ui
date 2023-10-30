'use server';

import { cookies } from 'next/headers';

export async function acceptCookie() {
  const days = 30;
  const date = new Date();
  // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  date.setTime(date.getTime() + 1000);
  cookies().set('acceptCookie', 'true', { expires: date, path: '/' });
}

export async function rejectCookie() {
  const days = 30;
  const date = new Date();
  // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  date.setTime(date.getTime() + 1000);
  cookies().set('acceptCookie', 'false', { expires: date, path: '/' });
}

export async function acceptCookieExist() {
  const cookie = cookies().has('acceptCookie') && cookies().get('acceptCookie')?.value === 'true' ? true : false;
  return cookie;
}
