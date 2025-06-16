import { UIMessage } from 'ai';
import { Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

type Props = {
  message: UIMessage;
};

export const ChatMessage = ({ message }: Props) => (
  <View style={{ marginVertical: 8 }}>
    <View>
      <Text style={{ fontWeight: 700 }}>{message.role}</Text>
      <Markdown>{message.content}</Markdown>
      {message.parts
        .filter((part) => part.type === 'tool-invocation')
        .map((part) => (
          <Text key={part.toolInvocation.toolCallId}>
            {JSON.stringify(part.toolInvocation, null, 2)}
          </Text>
        ))}
    </View>
  </View>
);
