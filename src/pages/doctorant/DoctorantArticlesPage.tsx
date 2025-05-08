import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ARTICLES, markArticleAsViewed } from '../../data/mockData';
import { Article } from '../../types';
import Card, { CardHeader, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FileText, Calendar, Eye, CheckCircle } from 'lucide-react';

const DoctorantArticlesPage: React.FC = () => {
  const { user } = useAuth();
  const [articles] = useState(ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [markedAsRead, setMarkedAsRead] = useState<Record<string, boolean>>({});

  const handleMarkAsRead = (articleId: string) => {
    if (!user) return;

    // Update local state
    setMarkedAsRead(prev => ({
      ...prev,
      [articleId]: true
    }));

    // Update mock data
    markArticleAsViewed(articleId, user.id);
  };

  const isArticleRead = (articleId: string): boolean => {
    if (markedAsRead[articleId]) return true;
    
    // Check if the article is already marked as read in the mock data
    const article = articles.find(a => a.id === articleId);
    if (!article || !user) return false;
    
    return article.views.some(view => view.doctorantId === user.id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Articles académiques</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-800">Liste des articles</h2>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-gray-200">
                {articles.map(article => {
                  const isRead = isArticleRead(article.id);
                  
                  return (
                    <li 
                      key={article.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                        selectedArticle?.id === article.id ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => setSelectedArticle(article)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-800">
                            {article.title}
                          </h3>
                          <div className="mt-1 flex items-center text-xs text-gray-500">
                            <Calendar size={12} className="mr-1" />
                            <span>
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {isRead ? (
                            <span className="flex items-center text-green-600 text-xs">
                              <CheckCircle size={14} className="mr-1" />
                              Lu
                            </span>
                          ) : (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              Nouveau
                            </span>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="h-full">
            {selectedArticle ? (
              <>
                <CardHeader>
                  <div>
                    <h2 className="text-xl font-medium text-gray-800">
                      {selectedArticle.title}
                    </h2>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      <span>
                        Publié le {new Date(selectedArticle.date).toLocaleDateString()}
                      </span>
                      
                      {selectedArticle.attachment && (
                        <span className="ml-4 flex items-center">
                          <FileText size={16} className="mr-1" />
                          {selectedArticle.attachment}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose max-w-none" 
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    {isArticleRead(selectedArticle.id) ? (
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-600 mr-1" />
                        <span>Marqué comme lu</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        <span>Non lu</span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    onClick={() => handleMarkAsRead(selectedArticle.id)}
                    disabled={isArticleRead(selectedArticle.id)}
                  >
                    Marquer comme lu
                  </Button>
                </CardFooter>
              </>
            ) : (
              <div className="flex items-center justify-center p-10 h-full">
                <div className="text-center text-gray-500">
                  <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                  <p>Sélectionnez un article pour en afficher le contenu</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorantArticlesPage;