import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';

/**
 * Copies text to clipboard with haptic feedback
 */
export const copyToClipboard = async (text: string) => {
  try {
    await Clipboard.setStringAsync(text);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

/**
 * Extracts text from an image (mock function)
 * In a real app, this would use OCR services
 */
export const extractTextFromImage = async (imageUri: string) => {
  // This is a mock function - in a real app, you would use
  // a service like Google Cloud Vision API, Tesseract OCR, etc.
  
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock data
  return {
    text: "Friend: Hey, could you take a look at this project proposal I sent you? Need your feedback by tomorrow if possible.",
    confidence: 0.89
  };
};

/**
 * Generates reply suggestions based on conversation text (mock function)
 * In a real app, this would call an AI service
 */
export const generateReplySuggestions = async (conversationText: string) => {
  // This is a mock function - in a real app, you would call
  // an AI service like OpenAI API, Claude API, etc.
  
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return mock suggestions
  return [
    { 
      id: '1', 
      text: "Sure, I'll check it out and send you feedback by tomorrow." 
    },
    { 
      id: '2', 
      text: "I'll take a look at the proposal right away and get back to you with my thoughts before tomorrow." 
    },
    { 
      id: '3', 
      text: "Thanks for sending the proposal! I'll review it and share my feedback by tomorrow as requested." 
    },
  ];
};