import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  threadId: string;
  title: string;
};

export const HistoryItem = ({ threadId, title }: Props) => {
  return (
    <Link href={`/(tabs)/(chat)/${threadId}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle}>Thread ID: {threadId}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
});
