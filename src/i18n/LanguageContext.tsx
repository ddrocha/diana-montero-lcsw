import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content } from './content';

export type Language = 'en' | 'es';

const STORAGE_KEY = 'diana-language';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof content.en;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  return window.localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
