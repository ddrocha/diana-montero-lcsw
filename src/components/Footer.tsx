import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { SparkleIcon } from './icons';
import { Drift } from './Drift';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-cream-100/90">
      <Drift className="pointer-events-none absolute right-10 top-8 hidden h-3.5 w-3.5 sm:block" duration={6} y={5} rotate={10}>
        <SparkleIcon className="h-full w-full text-cream-100/15" />
      </Drift>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-cream-100/15 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl text-cream-50">{t.footer.name}</p>
            <p className="mt-1 text-sm text-cream-100/70">{t.footer.license}</p>
          </div>
          <p className="text-sm text-cream-100/70 sm:text-right">
            {t.footer.tagline1}
            <br />
            {t.footer.tagline2}
          </p>
        </div>

        <div className="mt-6 space-y-3 text-xs leading-relaxed text-cream-100/60">
          <p>
            {t.footer.emergencyBefore}
            <strong className="font-medium text-cream-100/80">{t.footer.emergencyBold}</strong>
            {t.footer.emergencyAfter}
          </p>
          <p>
            {t.footer.copyright(new Date().getFullYear())}{' '}
            <Link to="/terms-and-conditions" className="underline decoration-cream-100/30 underline-offset-2 hover:text-cream-100/90">
              {t.footer.terms}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
