import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { PROFESSOR, USERS } from '../data/mockData';
import { User } from '../types';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  loginAsDoctorant: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // This is a mock login - in a real app, this would call an API
    if (email === 'a.belakouiri@uca.ac.ma' && password === 'admin123') {
      setUser(PROFESSOR);
      localStorage.setItem('currentUser', JSON.stringify(PROFESSOR));
      toast.success('Bienvenue Professeur Belakouiri !', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#4CAF50',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
      return true;
    }
    toast.error('Identifiants invalides. Veuillez réessayer.', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#f44336',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
    return false;
  };

  const loginAsDoctorant = (id: string) => {
    const doctorant = USERS.find(user => user.id === id && user.role === 'doctorant');
    if (doctorant) {
      setUser(doctorant);
      localStorage.setItem('currentUser', JSON.stringify(doctorant));
      toast.success(`Bienvenue ${doctorant.name} !`, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#4CAF50',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } else {
      toast.error('Accès non autorisé.', {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    toast.success('Déconnexion réussie. À bientôt !', {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#2196F3',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginAsDoctorant }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};