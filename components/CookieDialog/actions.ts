'use server';

import { cookies } from 'next/headers';

export async function acceptCookie() {
  const date = new Date();
  const expires: number = process.env.COOKIE_EXPIRES_DAY ? Number(process.env.COOKIE_EXPIRES_DAY) : 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + expires);
  cookies().set('acceptCookie', 'true', { expires: date, path: '/' });
}

export async function rejectCookie() {
  const date = new Date();
  const expires: number = process.env.COOKIE_EXPIRES_DAY ? Number(process.env.COOKIE_EXPIRES_DAY) : 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + expires);
  cookies().set('acceptCookie', 'false', { expires: date, path: '/' });
}

export async function acceptCookieExist() {
  const cookie = cookies().has('acceptCookie') && cookies().get('acceptCookie')?.value === 'true' ? true : false;
  return cookie;
}
