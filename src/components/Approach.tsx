import { motion } from 'framer-motion';
import { SparkleIcon, FigureRestIcon } from './icons';
import { Drift } from './Drift';
import { useLanguage } from '../i18n/LanguageContext';

const topSpecialtyStyles = [
  { rotate: '-rotate-2', size: 'text-2xl sm:text-3xl' },
  { rotate: 'rotate-1', size: 'text-xl sm:text-2xl' },
  { rotate: '-rotate-1', size: 'text-2xl sm:text-3xl' },
  { rotate: 'rotate-2', size: 'text-xl sm:text-2xl' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const popIn = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};

export function Approach() {
  const { t } = useLanguage();
  const topSpecialties = t.approach.topSpecialties.map((label, i) => ({ label, ...topSpecialtyStyles[i] }));

  return (
    <section id="approach" className="relative scroll-mt-32 overflow-hidden bg-sage-900 text-cream-50">
      <Drift className="pointer-events-none absolute right-10 top-10 hidden h-5 w-5 sm:block" duration={5.5} y={7} rotate={10}>
        <SparkleIcon className="h-full w-full text-butter-300/80" />
      </Drift>
      <Drift className="pointer-events-none absolute right-16 top-28 hidden h-10 w-10 lg:block" duration={5.5} y={5} delay={0.3}>
        <FigureRestIcon className="h-full w-full text-sage-300/60" />
      </Drift>
      <Drift
        className="pointer-events-none absolute bottom-10 right-[12%] hidden h-4 w-4 sm:block"
        duration={6}
        y={6}
        rotate={14}
        delay={0.8}
      >
        <SparkleIcon className="h-full w-full text-terracotta-400/70" />
      </Drift>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-measure"
        >
          <h2 className="font-display text-4xl font-medium tracking-tightest sm:text-5xl">
            {t.approach.heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-sage-200 sm:text-xl">{t.approach.intro}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-5"
        >
          {topSpecialties.map(({ label, rotate, size }) => (
            <motion.span
              key={label}
              variants={popIn}
              whileHover={{ scale: 1.06, rotate: 0 }}
              className={`inline-block cursor-default rounded-full bg-terracotta-500/90 px-6 py-3 font-display font-medium text-cream-50 shadow-soft ${rotate} ${size}`}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="mt-8 flex flex-wrap gap-3"
        >
          {t.approach.moreSpecialties.map((label) => (
            <motion.span
              key={label}
              variants={fadeIn}
              className="rounded-full border border-sage-600 px-4 py-1.5 text-sm text-sage-100"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-16 border-t border-sage-700 pt-10">
          <h3 className="font-display text-2xl font-medium sm:text-3xl">{t.approach.modalitiesHeading}</h3>
          <p className="mt-3 max-w-measure text-sage-200">{t.approach.modalitiesIntro}</p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={stagger}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {t.approach.modalities.map((label) => (
              <motion.span
                key={label}
                variants={fadeIn}
                className="rounded-full bg-sage-800 px-3.5 py-1.5 text-sm text-sage-100"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
