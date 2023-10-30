'use client';

import { useEffect } from 'react';
import { CookieDialogBase } from '@/components/CookieDialog/CookieDialogBase';
import { acceptCookie, rejectCookie, acceptCookieExist } from '@/components/CookieDialog/actions';
import { openCookieAtom, useAtom } from '@/jotai';

export default function CookieDialog() {
  const [openCookie, setOpenCookie] = useAtom(openCookieAtom);

  useEffect(() => {
    acceptCookieExist().then((value: boolean) => {
      setOpenCookie(!value);
    });
  }, []);

  const onAccept = () => {
    acceptCookie().then(() => {
      setOpenCookie(false);
    });
  };

  const onReject = () => {
    rejectCookie().then(() => {
      setOpenCookie(false);
    });
  };

  return <CookieDialogBase onAccept={onAccept} onReject={onReject} open={openCookie} />;
}
