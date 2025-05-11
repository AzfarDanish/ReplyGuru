import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  const isLoggedIn = false; // Simulate logged-out state (replace with actual auth logic)

  const handleAvatarPress = () => {
    // If not logged in, show a login prompt; otherwise, navigate to user preferences
    if (!isLoggedIn) {
      Alert.alert(
        'Login Required',
        'Please log in to access your account preferences.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Login', onPress: () => console.log('Navigate to login screen') },
        ]
      );
    } else {
      console.log('Navigate to user preferences screen');
    }
  };

  const handleHistoryPress = () => {
    if (!isLoggedIn) {
      Alert.alert(
        'Login Required',
        'Please log in to view your chat history.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Login', onPress: () => console.log('Navigate to login screen') },
        ]
      );
    } else {
      console.log('Navigate to history screen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ReplyGuru <Text style={styles.betaText}>Beta</Text></Text>
        <TouchableOpacity onPress={handleAvatarPress}>
          <Ionicons name="person-circle-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Get smart replies INSTANTLY</Text>
      <Text style={styles.description}>
        Upload a screenshot or type your message to get AI-powered suggestions
      </Text>

      {/* Upload Screenshot Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/UploadScreen')}
      >
        <Ionicons name="cloud-upload-outline" size={40} color="#007AFF" />
        <Text style={styles.cardTitle}>Upload Screenshot</Text>
        <Text style={styles.cardSubtitle}>Upload a chat screenshot to analyze</Text>
      </TouchableOpacity>

      {/* Ask Directly Card */}
      <TouchableOpacity
        style={[styles.card, styles.cardSecondary]}
        onPress={() => router.push('/ChatScreen')}
      >
        <Text style={styles.cardTitle}>Ask AI Directly</Text>
        <Text style={styles.cardSubtitle}>Type your message for instant replies</Text>
      </TouchableOpacity>

      {/* History Button */}
      <TouchableOpacity
        style={[styles.historyButton, !isLoggedIn && styles.disabledButton]}
        onPress={handleHistoryPress}
        disabled={!isLoggedIn}
      >
        <Ionicons name="time-outline" size={24} color={isLoggedIn ? '#000' : '#ccc'} />
        <Text style={[styles.historyText, !isLoggedIn && styles.disabledText]}>
          History
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  betaText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'normal',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardSecondary: {
    borderColor: '#ccc',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  historyText: {
    fontSize: 16,
    marginLeft: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#ccc',
  },
});