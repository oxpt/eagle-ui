import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { ReactNode } from 'react';
import i18nConfig from '@/i18nConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eagle UI',
  description: 'A Game Engine for Academic Large-scale Experiments',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
