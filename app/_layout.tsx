import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.container,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="UploadScreen" options={{ title: 'Upload Screenshot' }} />
      <Stack.Screen name="LoadingScreen" options={{ title: 'Loading' }} />
      <Stack.Screen name="ChatScreen" options={{ title: 'Chat' }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});