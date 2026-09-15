import { motion } from 'framer-motion';
import { HeroPhotoFrame } from './HeroPhotoFrame';
import { LeafIcon, TwoLeavesIcon, SprigIcon, LanguageIcon, SparkleIcon, TrianglePointer } from './icons';
import { Drift } from './Drift';
import { Sway } from './Sway';
import { BOOKING_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.hero.quickLinks.individual, icon: LeafIcon },
    { label: t.hero.quickLinks.couples, icon: TwoLeavesIcon },
    { label: t.hero.quickLinks.family, icon: SprigIcon },
    { label: t.hero.quickLinks.adolescent, icon: LanguageIcon },
  ];

  const floatingBadges = [
    {
      label: t.hero.badges.bilingual,
      className: 'left-4 -top-4 sm:-left-8 sm:-top-5',
      bg: 'bg-butter-300',
      pointer: '-bottom-1.5 left-6 rotate-[100deg] text-butter-300',
    },
    {
      label: t.hero.badges.licensed,
      className: 'right-4 -top-4 sm:-right-6 sm:-top-6',
      bg: 'bg-lavender-300',
      pointer: '-bottom-1.5 right-8 rotate-[130deg] text-lavender-300',
    },
    {
      label: t.hero.badges.virtual,
      className: 'right-4 -bottom-4 sm:-right-6 sm:-bottom-5',
      bg: 'bg-sage-300',
      pointer: '-top-1.5 left-8 -rotate-[75deg] text-sage-300',
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-24 -top-32 h-[32rem] w-[32rem] rounded-full bg-sage-200/70 blur-2xl sm:-right-10"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 16, 0], y: [0, -12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-lavender-200/60 blur-2xl"
      />
      <Drift
        className="pointer-events-none absolute bottom-24 left-6 hidden h-4 w-4 lg:block"
        duration={5}
        y={7}
        rotate={12}
      >
        <SparkleIcon className="h-full w-full text-lavender-400" />
      </Drift>

      <div className="relative mx-auto grid max-w-6xl gap-0 px-6 pb-16 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8 lg:pb-20 lg:pt-20">
        <div className="contents lg:block lg:max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 font-display text-[2.75rem] font-medium leading-[1.05] tracking-tightest text-ink-900 sm:text-6xl lg:text-[3.75rem]"
          >
            {t.hero.titleBefore}
            <span className="relative text-sage-700">
              <Sway angle={2.5} duration={4.5}>{t.hero.titleEmphasis}</Sway>
              <Drift
                className="absolute -right-6 top-full mt-1 h-4 w-4 sm:-right-7 sm:h-5 sm:w-5"
                duration={4.5}
                y={5}
                rotate={15}
              >
                <SparkleIcon className="h-full w-full text-butter-500" />
              </Drift>
            </span>
            {t.hero.titleAfter}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 mt-6 max-w-measure text-lg leading-relaxed text-ink-700 sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="order-4 mt-8"
          >
            <motion.a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full bg-terracotta-600 px-8 py-4 text-base font-medium text-cream-50 shadow-soft transition-colors hover:bg-terracotta-700 sm:text-lg"
            >
              {t.hero.bookNow}
            </motion.a>
            <p className="mt-3 text-sm text-ink-700/80">{t.hero.bookNowNote}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="order-5 mt-10 text-sm font-medium uppercase tracking-wide text-sage-700"
          >
            {t.hero.quickLinksLabel}
          </motion.p>
          <div className="order-6 mt-3 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {quickLinks.map(({ label, icon: Icon }, i) => (
              <motion.a
                key={label}
                href="#who-i-help"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between border-b border-sage-200 py-3 text-ink-800 transition hover:border-terracotta-400"
              >
                <span className="flex items-center gap-2.5 font-display text-lg">
                  <Icon className="h-5 w-5 text-sage-600" />
                  {label}
                </span>
                <span className="text-sage-600 transition group-hover:translate-x-1 group-hover:text-terracotta-600">
                  &#8594;
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-3 mx-auto mt-10 w-full max-w-sm lg:order-none lg:mt-0 lg:max-w-none"
        >
          {floatingBadges.map(({ label, className, bg, pointer }, i) => (
            <motion.span
              key={label}
              animate={{ y: [0, -8, 0], rotate: [i % 2 === 0 ? -2 : 2, i % 2 === 0 ? 1 : -1, i % 2 === 0 ? -2 : 2] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
              className={`pointer-events-none absolute z-10 hidden items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-soft sm:flex ${bg} ${className}`}
            >
              {label}
              <TrianglePointer className={`absolute h-3 w-3 ${pointer}`} />
            </motion.span>
          ))}
          <HeroPhotoFrame
            src="/images/diana-photo.jpg"
            alt="Diana Montero, LCSW, in a warm cream sweater"
            className="w-full drop-shadow-[0_18px_40px_rgba(43,34,26,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
