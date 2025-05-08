import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts
import ProfesseurLayout from './layouts/ProfesseurLayout';
import DoctorantLayout from './layouts/DoctorantLayout';

// Pages
import LoginPage from './pages/LoginPage';
import DemoDoctorantLoginPage from './pages/DemoDoctorantLoginPage';

// Professor Pages
import ProfesseurDashboardPage from './pages/professeur/ProfesseurDashboardPage';
import ProfesseurDoctorantsPage from './pages/professeur/ProfesseurDoctorantsPage';
import ProfesseurArticlesPage from './pages/professeur/ProfesseurArticlesPage';
import ProfesseurMessageriePage from './pages/professeur/ProfesseurMessageriePage';

// Doctorant Pages
import DoctorantArticlesPage from './pages/doctorant/DoctorantArticlesPage';
import DoctorantMessageriePage from './pages/doctorant/DoctorantMessageriePage';
import DoctorantProfilePage from './pages/doctorant/DoctorantProfilePage';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Demo login for doctorants */}
        <Route path="/demo/doctorant/:id" element={<DemoDoctorantLoginPage />} />
        
        {/* Professor routes */}
        <Route path="/professeur" element={<ProfesseurLayout />}>
          <Route index element={<ProfesseurDashboardPage />} />
          <Route path="doctorants" element={<ProfesseurDoctorantsPage />} />
          <Route path="articles" element={<ProfesseurArticlesPage />} />
          <Route path="messagerie" element={<ProfesseurMessageriePage />} />
        </Route>
        
        {/* Doctorant routes */}
        <Route path="/doctorant" element={<DoctorantLayout />}>
          <Route index element={<DoctorantArticlesPage />} />
          <Route path="messagerie" element={<DoctorantMessageriePage />} />
          <Route path="profil" element={<DoctorantProfilePage />} />
        </Route>
        
        {/* Redirect to login for any other routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;