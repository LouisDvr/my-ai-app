import { UIMessage } from 'ai';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

type Props = {
  message: UIMessage;
};

export const ChatMessage = ({ message }: Props) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>{message.role}</Text>
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  text: {
    fontWeight: '700',
  },
});
