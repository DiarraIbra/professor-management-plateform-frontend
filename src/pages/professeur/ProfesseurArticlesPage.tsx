import React, { useState } from 'react';
import { ARTICLES } from '../../data/mockData';
import ArticleForm from '../../components/ArticleForm';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { FileText, Calendar, Eye } from 'lucide-react';

const ProfesseurArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState(ARTICLES);

  const handleAddArticle = (title: string, content: string, attachment: string) => {
    const newArticle = {
      id: `art-${Date.now()}`,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      attachment: attachment || undefined,
      views: []
    };

    setArticles([newArticle, ...articles]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Gestion des articles</h1>
      
      <ArticleForm onSubmit={handleAddArticle} />
      
      <div className="space-y-6">
        {articles.map(article => (
          <Card key={article.id}>
            <CardHeader className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-medium text-gray-800">{article.title}</h2>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>Publié le {new Date(article.date).toLocaleDateString()}</span>
                  
                  {article.attachment && (
                    <span className="ml-4 flex items-center">
                      <FileText size={16} className="mr-1" />
                      {article.attachment}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Eye size={16} className="mr-1" />
                <span>{article.views.length} consultation{article.views.length !== 1 ? 's' : ''}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Consultations par doctorants</h3>
                {article.views.length === 0 ? (
                  <p className="text-gray-500 text-sm">Aucune consultation pour le moment</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Doctorant
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date de consultation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {article.views.map((view, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {view.doctorantName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(view.date).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProfesseurArticlesPage;