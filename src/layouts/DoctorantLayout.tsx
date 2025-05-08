import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import HeaderDoctorant from '../components/HeaderDoctorant';

const DoctorantLayout: React.FC = () => {
  const { user } = useAuth();

  // If user is not logged in or is not a doctorant, redirect to login
  if (!user || user.role !== 'doctorant') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderDoctorant />
      <main className="flex-grow py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Espace Doctorant - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DoctorantLayout;