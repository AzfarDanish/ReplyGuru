import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from 'react';

export default function ChatScreen() {
  const router = useRouter();
  const [chatText, setChatText] = useState<string>(''); // Simulated extracted chat
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Simulate OCR and AI suggestion generation
    setChatText('Friend: Hey, are you free this weekend?\nYou: Not sure, let me check.');
    setSuggestions([
      'I checked my schedule, and I’m free! What did you have in mind?',
      'I might be free, but I need to confirm something first. Can I let you know tomorrow?',
      'Unfortunately, I’m busy this weekend. How about next week?',
    ]);
  }, []);

  const handleCopy = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Alert.alert('Copied!', 'The suggestion has been copied to your clipboard.');
  };

  const renderSuggestion = ({ item }: { item: string }) => (
    <View style={styles.suggestionCard}>
      <Text style={styles.suggestionText}>{item}</Text>
      <View style={styles.suggestionActions}>
        <TouchableOpacity onPress={() => handleCopy(item)} style={styles.actionButton}>
          <Ionicons name="copy-outline" size={20} color="#007AFF" />
          <Text style={styles.actionText}>Copy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Edit', 'Editing feature coming soon!')} style={styles.actionButton}>
          <Ionicons name="pencil-outline" size={20} color="#007AFF" />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Chat Analysis</Text>

      {/* Extracted Chat or Typed Input */}
      <View style={styles.chatContainer}>
        <Text style={styles.chatText}>{chatText || 'Type your message here...'}</Text>
      </View>

      {/* Suggestions List */}
      <Text style={styles.suggestionsTitle}>Suggested Replies</Text>
      <FlatList
        data={suggestions}
        renderItem={renderSuggestion}
        keyExtractor={(item, index) => index.toString()}
        style={styles.suggestionsList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  chatText: {
    fontSize: 16,
    color: '#333',
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestionsList: {
    flex: 1,
  },
  suggestionCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  suggestionActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  actionText: {
    fontSize: 14,
    color: '#007AFF',
    marginLeft: 5,
  },
});