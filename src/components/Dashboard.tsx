import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, MessageSquare, BookOpen } from 'lucide-react';
import Card, { CardContent } from './ui/Card';
import { DOCTORANTS, ARTICLES, MESSAGES } from '../data/mockData';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const statsCards = [
    {
      title: 'Doctorants',
      value: DOCTORANTS.length,
      icon: <Users size={24} className="text-blue-500" />,
      bgColor: 'bg-blue-50',
      onClick: () => navigate('/professeur/doctorants')
    },
    {
      title: 'Articles publiés',
      value: ARTICLES.length,
      icon: <FileText size={24} className="text-green-500" />,
      bgColor: 'bg-green-50',
      onClick: () => navigate('/professeur/articles')
    },
    {
      title: 'Messages non lus',
      value: MESSAGES.filter(m => m.recipientId === 'prof-1' && !m.isRead).length,
      icon: <MessageSquare size={24} className="text-amber-500" />,
      bgColor: 'bg-amber-50',
      onClick: () => navigate('/professeur/messagerie')
    }
  ];

  // Calculate the total number of article views
  const totalArticleViews = ARTICLES.reduce((total, article) => total + article.views.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Tableau de bord</h1>
        <p className="text-gray-500">
          {new Date().toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsCards.map((card, i) => (
          <Card
            key={i}
            className={`${card.bgColor} cursor-pointer transition-transform hover:scale-105`}
            onClick={card.onClick}
          >
            <CardContent className="flex items-center p-6">
              <div className="mr-4">{card.icon}</div>
              <div>
                <p className="text-lg font-semibold text-gray-800">{card.value}</p>
                <p className="text-sm text-gray-600">{card.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-800">Activité récente</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen size={16} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {totalArticleViews} consultations d'articles au total
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {ARTICLES[0].views.length} consultations pour l'article le plus récent
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users size={16} className="text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {DOCTORANTS.length} doctorants actifs
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Dernier doctorant ajouté : {DOCTORANTS[DOCTORANTS.length - 1].name}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <MessageSquare size={16} className="text-amber-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {MESSAGES.filter(m => m.recipientId === 'prof-1').length} messages reçus
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {MESSAGES.filter(m => m.recipientId === 'prof-1' && !m.isRead).length} messages non lus
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-800">Doctorants récemment actifs</h2>
            </div>
            <ul className="space-y-3">
              {DOCTORANTS.slice(0, 3).map(doctorant => (
                <li key={doctorant.id} className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">{doctorant.name}</p>
                    <p className="text-xs text-gray-500 truncate max-w-xs">
                      {doctorant.researchTopic}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button 
                onClick={() => navigate('/professeur/doctorants')}
                className="text-blue-600 text-sm hover:text-blue-700 hover:underline"
              >
                Voir tous les doctorants
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;