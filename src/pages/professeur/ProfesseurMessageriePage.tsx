import React, { useState, useEffect } from 'react';
import { DOCTORANTS, getMessagesByUser, PROFESSOR } from '../../data/mockData';
import { Message } from '../../types';
import Card from '../../components/ui/Card';
import ChatComponent from '../../components/ChatComponent';
import { User } from 'lucide-react';

const ProfesseurMessageriePage: React.FC = () => {
  const [selectedDoctorant, setSelectedDoctorant] = useState(DOCTORANTS[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (selectedDoctorant) {
      setMessages(getMessagesByUser(selectedDoctorant.id));
    }
  }, [selectedDoctorant]);

  const handleSendMessage = (content: string) => {
    if (!selectedDoctorant) return;
    
    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: PROFESSOR.id,
      senderName: PROFESSOR.name,
      recipientId: selectedDoctorant.id,
      content,
      timestamp: new Date().toISOString(),
      isRead: false
    };
    
    setMessages([...messages, newMessage]);
  };

  const filteredDoctorants = DOCTORANTS.filter(
    doctorant => doctorant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Messagerie</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card className="h-full">
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Rechercher un doctorant..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(75vh - 8rem)' }}>
              <ul className="divide-y divide-gray-200">
                {filteredDoctorants.length === 0 ? (
                  <li className="p-4 text-center text-gray-500">Aucun doctorant trouvé</li>
                ) : (
                  filteredDoctorants.map(doctorant => {
                    const unreadCount = messages.filter(
                      m => m.senderId === doctorant.id && !m.isRead
                    ).length;
                    
                    return (
                      <li 
                        key={doctorant.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                          selectedDoctorant?.id === doctorant.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setSelectedDoctorant(doctorant)}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <User size={20} className="text-gray-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {doctorant.name}
                              </p>
                              {unreadCount > 0 && (
                                <span className="ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
                                  {unreadCount}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 truncate">
                              {doctorant.email}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-3">
          <Card className="h-full flex flex-col min-h-[75vh]">
            {selectedDoctorant ? (
              <ChatComponent
                messages={messages}
                recipient={{
                  id: selectedDoctorant.id,
                  name: selectedDoctorant.name
                }}
                onSendMessage={handleSendMessage}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center p-6 text-gray-500">
                Sélectionnez un doctorant pour commencer une conversation
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfesseurMessageriePage;