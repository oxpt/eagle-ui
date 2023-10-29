'server-only';

import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/i18nConfig';

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// Applies this middleware only to pages in the app directory.
// If using 'basePath' in Next.js config, see the next-i18n-router docs for an adjusted config
export const config = {
  matcher: '/((?!api|static|.*\..*|_next).*)'
};
      