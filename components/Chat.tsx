import { useThreadHistory } from '@/context/ThreadHistoryContext';
import { generateAPIUrl } from '@/utils/generateApiUrl';
import { useChat } from '@ai-sdk/react';
import { fetch as expoFetch } from 'expo/fetch';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatMessage } from './ChatMessage';

type Props = {
  threadId: string;
};

export const Chat = ({ threadId }: Props) => {
  const { bottom } = useSafeAreaInsets();
  const { getThread, addThread } = useThreadHistory();

  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    id: threadId,
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: generateAPIUrl('/api/chat'),
    onFinish: (message) => {
      if (!getThread(threadId)) {
        addThread({
          id: threadId,
          title: message.content,
        });
      }
    },
    onError: (error) => console.error(error, 'ERROR'),
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 8,
        paddingBottom: bottom + 60,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        {messages.map((m) => (
          <ChatMessage message={m} key={m.id} />
        ))}
      </ScrollView>

      <View style={{ marginTop: 8 }}>
        <TextInput
          style={{ backgroundColor: 'white', padding: 12 }}
          placeholder="Say something..."
          value={input}
          onChange={(e) =>
            handleInputChange({
              ...e,
              target: {
                ...e.target,
                value: e.nativeEvent.text,
              },
            } as unknown as React.ChangeEvent<HTMLInputElement>)
          }
          onSubmitEditing={(e) => {
            handleSubmit(e);
            e.preventDefault();
          }}
          autoFocus={true}
        />
      </View>
    </View>
  );
};
