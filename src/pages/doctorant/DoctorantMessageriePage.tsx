import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { PROFESSOR, getMessagesByUser } from '../../data/mockData';
import { Message } from '../../types';
import Card from '../../components/ui/Card';
import ChatComponent from '../../components/ChatComponent';

const DoctorantMessageriePage: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (user) {
      setMessages(getMessagesByUser(user.id));
    }
  }, [user]);

  const handleSendMessage = (content: string) => {
    if (!user) return;
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: user.id,
      senderName: user.name,
      recipientId: PROFESSOR.id,
      content,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Messagerie avec le professeur</h1>
      
      <Card className="h-full min-h-[75vh]">
        <ChatComponent
          messages={messages}
          recipient={{
            id: PROFESSOR.id,
            name: PROFESSOR.name,
            profileImage: PROFESSOR.profileImage
          }}
          onSendMessage={handleSendMessage}
        />
      </Card>
    </div>
  );
};

export default DoctorantMessageriePage;