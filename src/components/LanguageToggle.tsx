import { useLanguage } from '../i18n/LanguageContext';
import { UsFlagIcon, MexicoFlagIcon } from './flag-icons';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div role="group" aria-label="Language" className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label={t.languageToggle.switchToEnglish}
        className={`grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-cream-50 transition-all duration-200 sm:h-8 sm:w-8 ${
          language === 'en'
            ? 'scale-105 ring-sage-600'
            : 'opacity-50 grayscale ring-transparent hover:opacity-90 hover:grayscale-0'
        }`}
      >
        <UsFlagIcon className="h-full w-full" />
      </button>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        aria-label={t.languageToggle.switchToSpanish}
        className={`grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-cream-50 transition-all duration-200 sm:h-8 sm:w-8 ${
          language === 'es'
            ? 'scale-105 ring-sage-600'
            : 'opacity-50 grayscale ring-transparent hover:opacity-90 hover:grayscale-0'
        }`}
      >
        <MexicoFlagIcon className="h-full w-full" />
      </button>
    </div>
  );
}
