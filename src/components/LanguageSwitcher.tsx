import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`w-10 h-10 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
            language === lang.code
              ? 'bg-amber-400 text-black shadow-md scale-105'
              : 'text-white hover:bg-white/20'
          }`}
          title={lang.name}
          aria-label={`Switch to ${lang.name}`}
        >
          <span className="leading-none text-lg">{lang.flag}</span>
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
