// App types

export type MessageType = {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
};

export type SuggestionType = {
  id: string;
  text: string;
  contexts?: string[];
};

export type ChatHistoryItem = {
  id: string;
  date: Date;
  extractedText: string;
  suggestedReplies: SuggestionType[];
  selectedReply?: string;
};