import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DemoDoctorantLoginPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loginAsDoctorant } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loginAsDoctorant(id);
      navigate('/doctorant');
    }
  }, [id, loginAsDoctorant, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Connexion en cours...</h1>
        <p className="mt-2 text-gray-600">Veuillez patienter pendant que nous vous connectons.</p>
      </div>
    </div>
  );
};

export default DemoDoctorantLoginPage;