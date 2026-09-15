import { motion } from 'framer-motion';
import { BOOKING_URL } from '../config';
import { SparkleIcon, FigureStepIcon } from './icons';
import { Drift } from './Drift';
import { useLanguage } from '../i18n/LanguageContext';

export function BookingCta() {
  const { t } = useLanguage();
  return (
    <section id="book" className="relative overflow-hidden bg-terracotta-600 text-cream-50">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-terracotta-500/60 blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-terracotta-700/50 blur-2xl"
      />
      <Drift className="pointer-events-none absolute left-[15%] top-12 hidden h-5 w-5 sm:block" duration={5} y={7} rotate={12}>
        <SparkleIcon className="h-full w-full text-cream-100/70" />
      </Drift>
      <Drift
        className="pointer-events-none absolute right-[18%] bottom-14 hidden h-4 w-4 sm:block"
        duration={6}
        y={6}
        rotate={14}
        delay={0.7}
      >
        <SparkleIcon className="h-full w-full text-butter-300/80" />
      </Drift>
      <Drift
        className="pointer-events-none absolute left-[8%] bottom-10 hidden h-10 w-10 lg:block"
        duration={5.5}
        y={5}
        delay={0.4}
      >
        <FigureStepIcon className="h-full w-full text-cream-100/50" />
      </Drift>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-24"
      >
        <h2 className="font-display text-4xl font-medium tracking-tightest sm:text-5xl">{t.bookingCta.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-100/95 sm:text-xl">
          {t.bookingCta.body}
        </p>
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="mt-9 inline-block rounded-full bg-cream-50 px-8 py-4 text-base font-medium text-terracotta-700 shadow-soft transition-colors hover:bg-cream-100"
        >
          {t.bookingCta.button}
        </motion.a>
      </motion.div>
    </section>
  );
}
