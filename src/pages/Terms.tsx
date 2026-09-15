import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export function Terms() {
  const { t } = useLanguage();

  return (
    <main className="bg-cream-50">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <Link to="/" className="text-sm font-medium text-sage-700 underline decoration-sage-300 underline-offset-4 hover:text-sage-800">
          {t.terms.backHome}
        </Link>

        <h1 className="mt-6 font-display text-4xl font-medium tracking-tightest text-ink-900 sm:text-5xl">
          {t.terms.title}
        </h1>
        <p className="mt-3 text-sm text-ink-700/70">{t.terms.lastUpdated}</p>

        <p className="mt-8 max-w-measure text-lg leading-relaxed text-ink-700">{t.terms.intro}</p>

        <div className="mt-12 space-y-10">
          {t.terms.sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="font-display text-2xl font-medium text-ink-900 sm:text-[1.75rem]">
                {heading}
              </h2>
              <p className="mt-3 max-w-measure leading-relaxed text-ink-700">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
