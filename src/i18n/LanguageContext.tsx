import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'flexrent-language';
const SUPPORTED = Object.keys(translations) as Language[];

const isSupported = (code: string | null): code is Language =>
  code !== null && (SUPPORTED as string[]).includes(code);

// Saved choice first, then the browser's language list, then English
function detectLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isSupported(saved)) return saved;
  } catch {
    // storage unavailable (private mode): fall through to browser language
  }

  const preferred = typeof navigator !== 'undefined' ? navigator.languages ?? [navigator.language] : [];
  for (const locale of preferred) {
    const code = locale.slice(0, 2).toLowerCase();
    if (isSupported(code)) return code;
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // choice just won't be remembered
    }
  }, []);

  // Keep the document language in sync for screen readers and translation tools
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
