import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Message } from '../types';
import Button from './ui/Button';
import { Clock, Send } from 'lucide-react';

interface ChatComponentProps {
  messages: Message[];
  recipient: { id: string; name: string; profileImage?: string };
  onSendMessage: (content: string) => void;
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  messages,
  recipient,
  onSendMessage,
}) => {
  const { user } = useAuth();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    onSendMessage(newMessage.trim());
    setNewMessage('');
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 border-b">
        <div className="flex-shrink-0">
          <img 
            src={recipient.profileImage || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            alt={recipient.name} 
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{recipient.name}</p>
          <p className="text-xs text-gray-500 flex items-center">
            <Clock size={12} className="mr-1" />
            <span>
              {new Date().toLocaleDateString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isUserMessage = message.senderId === user?.id;
          
          return (
            <div 
              key={message.id}
              className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs sm:max-w-md p-3 rounded-lg ${
                  isUserMessage 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p 
                  className={`text-xs mt-1 ${
                    isUserMessage ? 'text-blue-200' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button 
            type="submit" 
            className="rounded-l-none flex items-center"
            disabled={newMessage.trim() === ''}
          >
            <Send size={18} className="mr-1" />
            <span>Envoyer</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;