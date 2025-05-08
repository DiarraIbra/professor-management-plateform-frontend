import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HeaderProfesseur: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Tableau de bord', href: '/professeur' },
    { name: 'Doctorants', href: '/professeur/doctorants' },
    { name: 'Articles', href: '/professeur/articles' },
    { name: 'Messagerie', href: '/professeur/messagerie' },
  ];

  // Determine if navigation item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-blue-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-white text-xl font-serif">Espace Professeur</h1>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? 'bg-blue-900 text-white'
                      : 'text-blue-100 hover:bg-blue-700'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              {user && (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <img
                      className="h-8 w-8 rounded-full object-cover border-2 border-white"
                      src={user.profileImage || 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                      alt={user.name}
                    />
                    <span className="text-white text-sm font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-blue-700 p-2 rounded-full text-blue-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.href)
                  ? 'bg-blue-900 text-white'
                  : 'text-blue-100 hover:bg-blue-700'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-blue-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={user?.profileImage || 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt={user?.name}
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">{user?.name}</div>
              <div className="text-sm font-medium text-blue-200">{user?.email}</div>
            </div>
            <button
              onClick={logout}
              className="ml-auto flex-shrink-0 bg-blue-700 p-1 rounded-full text-blue-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderProfesseur;