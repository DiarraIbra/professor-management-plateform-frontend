import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect them based on their role
    if (user) {
      if (user.role === 'professor') {
        navigate('/professeur');
      } else if (user.role === 'doctorant') {
        navigate('/doctorant');
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
            <Book size={32} className="text-white" />
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Plateforme Universitaire
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Accédez à votre espace personnel
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Démonstration d'accès étudiant :
          </p>
          <div className="mt-2 space-y-2">
            {['DIARRA Ibrahima', 'BENIAICH Mohamed'].map((name, i) => (
              <button 
                key={i}
                onClick={() => navigate(`/demo/doctorant/doc-${i+1}`)}
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm mx-2"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;