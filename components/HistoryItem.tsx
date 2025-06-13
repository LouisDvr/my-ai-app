import { Link } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  threadId: string;
  title: string;
};

export const HistoryItem = ({ threadId, title }: Props) => {
  return (
    <Link href={`/(tabs)/(chat)/${threadId}`} asChild>
      <TouchableOpacity style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={1}>
          {title}
        </Text>
        <Text style={{ color: '#666' }}>Thread ID: {threadId}</Text>
      </TouchableOpacity>
    </Link>
  );
};
