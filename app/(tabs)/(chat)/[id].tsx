import { Chat } from '@/components/Chat';
import { useLocalSearchParams } from 'expo-router';

export default function ChatPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <Chat threadId={id} />;
}
