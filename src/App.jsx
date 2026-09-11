import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './styles/global.css';

export function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <I18nProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}

export default App;
