import * as Crypto from 'expo-crypto';

import { Chat } from '@/components/Chat';

export default function NewChat() {
  const threadId = Crypto.randomUUID();

  return <Chat threadId={threadId} />;
}
