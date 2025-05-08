import React from 'react';
import { User, Mail, FileText } from 'lucide-react';
import { Doctorant } from '../types';
import Card, { CardHeader, CardContent } from './ui/Card';

interface DoctorantListProps {
  doctorants: Doctorant[];
  onSelectDoctorant?: (doctorant: Doctorant) => void;
}

const DoctorantList: React.FC<DoctorantListProps> = ({ doctorants, onSelectDoctorant }) => {
  return (
    <Card>
      <CardHeader className="bg-gray-50">
        <h2 className="text-lg font-medium text-gray-800">Liste des doctorants</h2>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-200">
          {doctorants.length === 0 ? (
            <li className="p-4 text-center text-gray-500">Aucun doctorant enregistré</li>
          ) : (
            doctorants.map((doctorant) => (
              <li 
                key={doctorant.id}
                className={`p-4 hover:bg-gray-50 transition-colors duration-150 ${onSelectDoctorant ? 'cursor-pointer' : ''}`}
                onClick={() => onSelectDoctorant && onSelectDoctorant(doctorant)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-shrink-0 mr-4 flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full">
                      <User size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">{doctorant.name}</h3>
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-xs text-gray-500">
                        <div className="flex items-center mr-4">
                          <Mail size={14} className="mr-1" />
                          <span>{doctorant.email}</span>
                        </div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <FileText size={14} className="mr-1" />
                          <span>{doctorant.researchTopic}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Ajouté le {new Date(doctorant.dateAdded).toLocaleDateString()}
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DoctorantList;