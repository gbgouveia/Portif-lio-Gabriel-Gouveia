import React, { createContext, useContext, useState, useEffect } from 'react';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';

const translations = { 'pt-BR': pt, en, es };

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('user_lang_pref');
    return saved && translations[saved] ? saved : 'pt-BR';
  });

  useEffect(() => {
    localStorage.setItem('user_lang_pref', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || pt;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
