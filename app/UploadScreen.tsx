import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function UploadScreen() {
  const router = useRouter();
  const [imageSelected, setImageSelected] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImageSelected(true);
    } else {
      setImageSelected(false);
    }
  };

  const handleProcessScreenshot = () => {
    if (!imageSelected) {
      Alert.alert('No Image Selected', 'Please select a screenshot to process.');
      return;
    }
    router.push('/LoadingScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Upload Screenshot</Text>

      {/* Upload Area */}
      <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
        <Ionicons name="cloud-upload-outline" size={40} color="#007AFF" />
        <Text style={styles.uploadText}>Tap to upload</Text>
        <Text style={styles.uploadSubtext}>
          Upload a single screenshot from your any messaging app
        </Text>
      </TouchableOpacity>

      {/* Tips Section */}
      <View style={styles.tipsContainer}>
        <Ionicons name="information-circle-outline" size={20} color="#007AFF" />
        <Text style={styles.tipsTitle}>Tips for best results</Text>
      </View>
      <Text style={styles.tipsText}>• Chat must be visible</Text>
      <Text style={styles.tipsText}>• Portrait mode is preferred</Text>
      <Text style={styles.tipsText}>• Include the last 3–5 messages for better context</Text>

      {/* Process Screenshot Button */}
      <TouchableOpacity
        style={[styles.processButton, !imageSelected && styles.disabledButton]}
        onPress={handleProcessScreenshot}
        disabled={!imageSelected}
      >
        <Text style={styles.processButtonText}>Process Screenshot</Text>
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
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadArea: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#007AFF',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 10,
  },
  uploadSubtext: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  tipsText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 25,
    marginBottom: 5,
  },
  processButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  processButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});