import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
import Input from './ui/Input';
import { AtSign, Lock, AlertCircle } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const success = login(email, password);
      
      if (success) {
        navigate('/professeur');
      } else {
        setError('Identifiants invalides');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Espace Professeur</h2>
          <p className="text-gray-600">Connectez-vous pour accéder à votre espace</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start">
            <AlertCircle size={18} className="text-red-500 mr-2 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AtSign size={18} className="text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            Se connecter
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Identifiants pour la démonstration</p>
          <p className="mt-1">
            Email: <span className="font-medium">a.belakouiri@uca.ac.ma</span>
          </p>
          <p>
            Mot de passe: <span className="font-medium">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;