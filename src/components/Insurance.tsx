import { motion } from 'framer-motion';
import { LeafIcon, SparkleIcon, DotIcon, FigureCheerIcon } from './icons';
import { Drift } from './Drift';
import { AetnaMark, CignaMark, UnitedHealthcareMark, OscarMark } from './insurer-marks';
import { useLanguage } from '../i18n/LanguageContext';

const insurers = [
  { name: 'Aetna', Mark: AetnaMark },
  { name: 'Carelon Behavioral Health' },
  { name: 'Cigna', Mark: CignaMark },
  { name: 'Horizon Blue Cross Blue Shield of NJ' },
  { name: 'Oscar', Mark: OscarMark },
  { name: 'Oxford' },
  { name: 'Quest Behavioral Health' },
  { name: 'United Healthcare', Mark: UnitedHealthcareMark },
];

const track = [...insurers, ...insurers];

export function Insurance() {
  const { t } = useLanguage();
  return (
    <section id="insurance" className="relative scroll-mt-32 overflow-hidden bg-sage-200/70">
      <Drift className="pointer-events-none absolute right-12 top-8 hidden h-2 w-2 sm:block" duration={4} y={4} delay={0.3}>
        <DotIcon className="h-full w-full text-terracotta-400" />
      </Drift>
      <Drift className="pointer-events-none absolute right-20 top-24 hidden h-10 w-10 lg:block" duration={5.5} y={5} delay={0.5}>
        <FigureCheerIcon className="h-full w-full text-sage-500/60" />
      </Drift>

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <h2 className="relative inline-block font-display text-3xl font-medium tracking-tightest text-ink-900 sm:text-4xl">
            {t.insurance.heading}
            <Drift className="absolute -right-6 -top-2 h-4 w-4 sm:-right-7 sm:h-5 sm:w-5" duration={4.5} y={5} rotate={12}>
              <SparkleIcon className="h-full w-full text-butter-500" />
            </Drift>
          </h2>
          <p className="mt-4 text-ink-700">{t.insurance.intro}</p>
        </motion.div>
      </div>

      <div
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto sm:mt-12"
      >
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {track.map(({ name, Mark }, i) => (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 px-8 pb-16 pt-6 text-sage-800 sm:pb-20"
            >
              {Mark ? (
                <>
                  <Mark className="h-7 w-auto sm:h-8" />
                  <span className="sr-only">{name}</span>
                </>
              ) : (
                <>
                  <LeafIcon className="h-4 w-4 shrink-0 text-sage-500" aria-hidden="true" />
                  <span className="text-lg font-medium tracking-tight sm:text-xl">{name}</span>
                </>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
