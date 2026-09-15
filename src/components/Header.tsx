import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BOOKING_URL } from '../config';
import { TabRibbon } from './TabRibbon';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-sage-200/70 bg-cream-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:gap-3 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <img
            src="/logos/mark/logo.png"
            alt=""
            className="h-6 w-auto shrink-0 sm:h-7"
          />
          <span className="truncate font-display text-lg font-medium tracking-tight text-ink-900 sm:text-2xl">
            Diana Montero, <span className="text-sage-700">LCSW</span>
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <LanguageToggle />
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="whitespace-nowrap rounded-full bg-terracotta-600 px-3.5 py-2 text-sm font-medium text-cream-50 shadow-card transition-colors hover:bg-terracotta-700 sm:px-5 sm:py-2.5 sm:text-base"
          >
            <span className="sm:hidden">{t.header.bookButtonShort}</span>
            <span className="hidden sm:inline">{t.header.bookButton}</span>
          </motion.a>
        </div>
      </div>
      {isHome && <TabRibbon />}
    </header>
  );
}
