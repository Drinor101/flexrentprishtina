import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'sq', name: 'Shqip' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className="flex items-center gap-0.5 rounded-full border border-gold/30 bg-black/50 p-1 backdrop-blur-md"
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLanguage(lang.code)}
          className={`flex h-8 min-w-[2.25rem] items-center justify-center rounded-full px-2 text-xs font-semibold uppercase tracking-wider ${
            language === lang.code
              ? 'bg-gradient-to-br from-gold-light via-gold to-gold-dark text-ink shadow-md shadow-gold/20'
              : 'text-bone/75 hover:bg-gold/15 hover:text-gold-light'
          }`}
          title={lang.name}
          aria-label={lang.name}
          aria-pressed={language === lang.code}
          lang={lang.code}
        >
          {lang.code}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
