import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SparkleIcon, FigureWaveIcon } from './icons';
import { Drift } from './Drift';
import { useLanguage } from '../i18n/LanguageContext';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const faqs = t.faq.items;

  return (
    <section id="faq" className="relative scroll-mt-32 overflow-hidden bg-cream-100">
      <Drift className="pointer-events-none absolute left-10 top-14 hidden h-5 w-5 sm:block" duration={5} y={7} rotate={12}>
        <SparkleIcon className="h-full w-full text-lavender-400" />
      </Drift>
      <Drift className="pointer-events-none absolute bottom-10 right-10 hidden h-10 w-10 sm:block" duration={6} y={6} delay={0.6}>
        <FigureWaveIcon className="h-full w-full text-sage-400/70" />
      </Drift>

      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="relative inline-block font-display text-4xl font-medium tracking-tightest text-ink-900 sm:text-5xl">
            {t.faq.heading}
            <Drift className="absolute -right-6 -top-3 h-5 w-5 sm:-right-8" duration={4.5} y={6} rotate={14}>
              <SparkleIcon className="h-full w-full text-butter-500" />
            </Drift>
          </h2>
          <p className="mt-4 text-ink-700">{t.faq.intro}</p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <div
                key={q}
                className={`rounded-2xl border px-6 py-5 transition-colors ${
                  open ? 'border-terracotta-300 bg-cream-50' : 'border-sage-300 bg-cream-50/60'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  onFocus={() => setOpenIndex(i)}
                  onBlur={() => setOpenIndex((cur) => (cur === i ? null : cur))}
                  onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-display text-lg font-medium text-ink-900 sm:text-xl">{q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      open
                        ? 'rotate-180 border-terracotta-400 bg-terracotta-500 text-cream-50'
                        : 'border-sage-400 text-sage-700'
                    }`}
                  >
                    &#8595;
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-measure leading-relaxed text-ink-700">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
