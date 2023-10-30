'use client';

import JoinRoomDialogBase from '@/components/JoinRoomDialog/JoinRoomDialigBase';
import { joinRoomWithId, redirectToTop } from '@/components/JoinRoomDialog/actions';

export default function JoinRoomDialog({ locale }: { locale: string }) {
  return <JoinRoomDialogBase locale={locale} onSubmit={joinRoomWithId} onClose={redirectToTop} />;
}
