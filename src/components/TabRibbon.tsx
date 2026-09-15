import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export function TabRibbon() {
  const [active, setActive] = useState('');
  const { t } = useLanguage();

  const TABS = [
    { id: 'about', label: t.tabs.about },
    { id: 'approach', label: t.tabs.services },
    { id: 'who-i-help', label: t.tabs.whoIHelp },
    { id: 'insurance', label: t.tabs.insurance },
    { id: 'faq', label: t.tabs.faq },
    { id: 'contact', label: t.tabs.contact },
  ];

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    const header = document.querySelector('header');
    if (!target) return;
    const offset = (header?.getBoundingClientRect().height ?? 0) + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav aria-label="Page sections" className="border-t border-sage-200/70">
      <div className="mx-auto flex max-w-6xl justify-between gap-0.5 overflow-x-auto px-2 py-2 scrollbar-hide [mask-image:linear-gradient(to_right,black_92%,transparent)] sm:justify-center sm:gap-1 sm:px-8 sm:[mask-image:none]">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab.id)}
            aria-current={active === tab.id ? 'true' : undefined}
            className={`relative shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
              active === tab.id ? 'text-cream-50' : 'text-ink-700 hover:text-sage-700'
            }`}
          >
            {active === tab.id && (
              <motion.span
                layoutId="tab-ribbon-pill"
                className="absolute inset-0 rounded-full bg-sage-700"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
