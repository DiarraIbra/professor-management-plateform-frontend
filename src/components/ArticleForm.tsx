import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import TextArea from './ui/TextArea';
import Card, { CardHeader, CardContent, CardFooter } from './ui/Card';
import { FileUp, X } from 'lucide-react';

interface ArticleFormProps {
  onSubmit: (title: string, content: string, attachment: string) => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachment, setAttachment] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(title, content, attachment);
      setTitle('');
      setContent('');
      setAttachment('');
      setFileName('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setAttachment(file.name); // In a real app, this would be the file itself
    }
  };

  const removeFile = () => {
    setFileName('');
    setAttachment('');
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-lg font-medium text-gray-800">Publier un nouvel article</h2>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            label="Titre de l'article"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez le titre de l'article"
            required
          />
          <TextArea
            label="Contenu"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Rédigez le contenu de l'article"
            rows={6}
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pièce jointe (PDF)
            </label>
            {!fileName ? (
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FileUp size={24} className="mb-2 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour sélectionner</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PDF, DOCX (MAX. 10MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            ) : (
              <div className="flex items-center p-2 border border-gray-300 rounded-md">
                <div className="flex-1 truncate">{fileName}</div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="ml-2 p-1 rounded-full hover:bg-gray-200"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" isLoading={isSubmitting}>
            Publier l'article
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ArticleForm;