import { motion } from 'framer-motion';
import { BlobPhoto } from './BlobPhoto';
import { SparkleIcon, DotIcon, SquiggleIcon, FigureThinkIcon } from './icons';
import { Drift } from './Drift';
import { useLanguage } from '../i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative scroll-mt-32 overflow-hidden bg-cream-50">
      <Drift className="pointer-events-none absolute left-8 top-16 hidden h-2.5 w-2.5 lg:block" duration={4.5} y={4}>
        <DotIcon className="h-full w-full text-lavender-400" />
      </Drift>
      <Drift className="pointer-events-none absolute left-16 top-24 hidden h-1.5 w-1.5 lg:block" duration={5} y={3} delay={0.5}>
        <DotIcon className="h-full w-full text-terracotta-400" />
      </Drift>
      <Drift
        className="pointer-events-none absolute right-10 top-24 hidden h-3 w-20 text-sage-400 lg:block"
        duration={6.5}
        y={5}
        rotate={5}
      >
        <SquiggleIcon className="h-full w-full" />
      </Drift>
      <Drift className="pointer-events-none absolute right-8 bottom-10 hidden h-10 w-10 lg:block" duration={5.5} y={5} delay={0.4}>
        <FigureThinkIcon className="h-full w-full text-lavender-400/70" />
      </Drift>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
          className="relative mx-auto w-full max-w-xs lg:max-w-none"
        >
          <Drift
            className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 sm:right-2 sm:top-0"
            duration={5}
            y={6}
            rotate={10}
          >
            <SparkleIcon className="h-full w-full text-butter-400" />
          </Drift>
          <BlobPhoto
            src="/images/diana-photo-suit.jpg"
            alt="Diana Montero, LCSW, in a black blazer"
            className="w-full drop-shadow-[0_25px_35px_rgba(43,34,26,0.18)]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
          className="max-w-measure"
        >
          <h2 className="font-display text-4xl font-medium tracking-tightest text-ink-900 sm:text-5xl">
            {t.about.heading}
          </h2>
          <p className="mt-6 font-display text-2xl italic leading-snug text-sage-700 sm:text-3xl">
            {t.about.quote}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-700">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-sage-200 pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-sage-700">{t.about.training.label}</dt>
              <dd className="mt-1 text-ink-800">{t.about.training.value}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-sage-700">{t.about.license.label}</dt>
              <dd className="mt-1 text-ink-800">{t.about.license.value}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-sage-700">{t.about.experience.label}</dt>
              <dd className="mt-1 text-ink-800">{t.about.experience.value}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium uppercase tracking-wide text-sage-700">{t.about.languages.label}</dt>
              <dd className="mt-1 text-ink-800">{t.about.languages.value}</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
