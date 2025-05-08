export interface Doctorant {
  id: string;
  name: string;
  email: string;
  researchTopic: string;
  dateAdded: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  attachment?: string;
  views: ArticleView[];
}

export interface ArticleView {
  doctorantId: string;
  doctorantName: string;
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  recipientId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'professor' | 'doctorant';
  profileImage?: string;
  researchTopic?: string;
}