import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { Mail, BookOpen, Calendar, GraduationCap } from 'lucide-react';

const DoctorantProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Mon profil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                <img 
                  src={user.profileImage || 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 mt-1">Doctorant</p>
              
              <div className="mt-6 w-full space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="text-gray-500 mr-2" size={18} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="text-gray-500 mr-2" size={18} />
                  <span>Inscrit en {new Date().getFullYear() - 2}</span>
                </div>
                <div className="flex items-center text-sm">
                  <GraduationCap className="text-gray-500 mr-2" size={18} />
                  <span>Université Caddy Ayyad</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-800">Sujet de recherche</h2>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-md flex items-start">
                <BookOpen className="text-blue-500 mr-3 mt-1" size={20} />
                <div>
                  <p className="text-blue-800 font-medium">Thèse en cours</p>
                  <p className="text-blue-700 mt-1">{user.researchTopic}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-md font-medium text-gray-800 mb-2">Résumé</h3>
                <p className="text-gray-600">
                  Cette recherche vise à explorer les implications théoriques et pratiques du sujet mentionné ci-dessus. L'approche méthodologique combinera des analyses qualitatives et quantitatives pour aborder la complexité du phénomène étudié.
                </p>
                <p className="text-gray-600 mt-3">
                  Les résultats attendus devraient contribuer significativement au domaine du management et ouvrir de nouvelles perspectives pour les recherches futures.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium text-gray-800">Progression académique</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-800">Revue de littérature</h3>
                    <span className="text-green-600 text-sm font-medium">75% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-800">Collecte de données</h3>
                    <span className="text-blue-600 text-sm font-medium">45% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-800">Analyse des résultats</h3>
                    <span className="text-amber-600 text-sm font-medium">20% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-800">Rédaction finale</h3>
                    <span className="text-gray-600 text-sm font-medium">5% complété</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorantProfilePage;