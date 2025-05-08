import React, { useState } from 'react';
import { DOCTORANTS } from '../../data/mockData';
import DoctorantList from '../../components/DoctorantList';
import Card, { CardHeader, CardContent, CardFooter } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';
import { Plus, CheckCircle } from 'lucide-react';

const ProfesseurDoctorantsPage: React.FC = () => {
  const [doctorants, setDoctorants] = useState(DOCTORANTS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddDoctorant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !researchTopic) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newDoctorant = {
        id: `doc-${Date.now()}`,
        name,
        email,
        researchTopic,
        dateAdded: new Date().toISOString().split('T')[0]
      };

      setDoctorants([...doctorants, newDoctorant]);
      setName('');
      setEmail('');
      setResearchTopic('');
      setIsSubmitting(false);
      setShowAddForm(false);
      setShowSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Gestion des doctorants</h1>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center"
        >
          <Plus size={18} className="mr-1" />
          Ajouter un doctorant
        </Button>
      </div>

      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
          <CheckCircle size={20} className="text-green-500 mr-2" />
          <div>
            <p className="text-green-800 font-medium">Doctorant ajouté avec succès</p>
            <p className="text-green-700 text-sm">Un email d'accès a été envoyé automatiquement.</p>
          </div>
        </div>
      )}

      {showAddForm && (
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-800">Ajouter un nouveau doctorant</h2>
          </CardHeader>
          <form onSubmit={handleAddDoctorant}>
            <CardContent className="space-y-4">
              <Input
                label="Nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom et prénom du doctorant"
                required
              />
              <Input
                label="Adresse email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email professionnel du doctorant"
                required
              />
              <TextArea
                label="Sujet de thèse"
                value={researchTopic}
                onChange={(e) => setResearchTopic(e.target.value)}
                placeholder="Décrivez le sujet de recherche du doctorant"
                rows={3}
                required
              />
            </CardContent>
            <CardFooter className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowAddForm(false)}
              >
                Annuler
              </Button>
              <Button type="submit" isLoading={isSubmitting}>
                Envoyer un accès
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}

      <DoctorantList doctorants={doctorants} />
    </div>
  );
};

export default ProfesseurDoctorantsPage;