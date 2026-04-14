import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, type Lang, type Translations } from './translations';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored === 'fr' || stored === 'en') return stored;
  return 'fr';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
