import { StyleSheet, Text, View } from 'react-native';

type Props = {
  threadId?: string;
};

export const Chat = ({ threadId }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {threadId ? `Chat ${threadId}` : 'New chat'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
