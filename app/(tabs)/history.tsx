import { useThreadHistory } from '@/context/ThreadHistoryContext';
import { router } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HistoryItem } from '@/components/HistoryItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HistoryScreen() {
  const { threads } = useThreadHistory();
  const insets = useSafeAreaInsets();

  const handleNewChat = () => {
    router.navigate('/(tabs)/(chat)/new');
  };

  return (
    <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
      {threads.length === 0 ? (
        <View style={styles.emptyState}>
          <IconSymbol size={64} name="paperplane.fill" color="#808080" />
          <ThemedText style={styles.emptyStateText}>
            No chat history yet
          </ThemedText>
          <TouchableOpacity
            style={styles.newChatButton}
            onPress={handleNewChat}
          >
            <ThemedText style={styles.newChatButtonText}>
              Start a New Chat
            </ThemedText>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={threads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HistoryItem threadId={item.id} title={item.title} />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      {threads.length > 0 && (
        <TouchableOpacity
          style={[styles.floatingButton, { bottom: insets.bottom + 66 }]}
          onPress={handleNewChat}
        >
          <IconSymbol size={24} name="plus" color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#FF6B6B',
  },
  list: {
    paddingBottom: 80,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 24,
  },
  newChatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  newChatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
