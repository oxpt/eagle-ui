'use client';

import { useEffect } from 'react';
import FeedbackBase from '@/components/Feedback/FeedbackBase';
import { alartCountAtom, alartOpenAtom, useAtom } from '@/jotai';

export default function Feedback() {
  const [open, setOpen] = useAtom(alartOpenAtom);
  const [count, setCount] = useAtom(alartCountAtom);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 10000);

    if (count >= 1) {
      setOpen(false);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [count]);

  return <FeedbackBase type='success' open={open} onClose={handleClose} />;
}
