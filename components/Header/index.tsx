import { IntlShape } from '@formatjs/intl';
import type { Route } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import LocaleSelector from '@/components/Header/LocaleSelector';
import i18nConfig from '@/i18nConfig';

const schema = z.object({
  path: z.string(),
  current_locale: z.string().regex(/^[^\/?\.:]+$/),
  locale: z.string().regex(/^[^\/?\.:]+$/),
  search_params: z.string(),
});

export async function localeChange(formData: FormData) {
  'use server';

  const parsed = schema.safeParse({
    path: formData.get('path'),
    current_locale: formData.get('current_locale'),
    locale: formData.get('locale'),
    search_params: formData.get('search_params'),
  });

  const days = 30;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  if (!parsed.success) {
    cookies().set('NEXT_LOCALE', i18nConfig.defaultLocale, { expires: date, path: '/' });
    redirect('/');
  } else {
    const newLocale =
      i18nConfig.locales.indexOf(parsed.data.locale) < 0 ? i18nConfig.defaultLocale : parsed.data.locale;
    cookies().set('NEXT_LOCALE', newLocale, { expires: date, path: '/' });

    let redirectPath = parsed.data.path.replace(`/${parsed.data.current_locale}`, `/${newLocale}`);
    redirectPath = parsed.data.search_params ? `${redirectPath}?${parsed.data.search_params}` : redirectPath;
    redirect(redirectPath);
  }
}

type Props = {
  locale: string;
  intl: IntlShape<string>;
};

export default function Header({ locale, intl }: Props) {
  return (
    <header>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link href={'/' as Route} className='col-span-6 flex  items-center md:col-span-4'>
          <h2 className='text-3xl font-bold leading-7 text-blue-700'>{intl.formatMessage({ id: 'head_title' })}</h2>
        </Link>
        <div className='flex items-center gap-x-8'>
          <LocaleSelector locale={locale} localeChange={localeChange} />
        </div>
      </div>
    </header>
  );
}
