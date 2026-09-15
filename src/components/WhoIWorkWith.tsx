import { motion } from 'framer-motion';
import { LeafIcon, TwoLeavesIcon, SprigIcon, DotIcon, SquiggleIcon, FigureDuoIcon } from './icons';
import { Drift } from './Drift';
import { Sway } from './Sway';
import { useLanguage } from '../i18n/LanguageContext';

export function WhoIWorkWith() {
  const { t } = useLanguage();

  const modes = [
    { icon: LeafIcon, label: t.whoIHelp.modes.individual, offset: 'sm:translate-y-0' },
    { icon: TwoLeavesIcon, label: t.whoIHelp.modes.couples, offset: 'sm:translate-y-6' },
    { icon: SprigIcon, label: t.whoIHelp.modes.family, offset: 'sm:-translate-y-3' },
  ];

  return (
    <section id="who-i-help" className="relative scroll-mt-32 overflow-hidden bg-cream-50">
      <Drift className="pointer-events-none absolute right-12 top-10 hidden h-2 w-2 sm:block" duration={4} y={4}>
        <DotIcon className="h-full w-full text-sage-400" />
      </Drift>
      <Drift className="pointer-events-none absolute right-6 top-36 hidden h-10 w-10 lg:block" duration={5.5} y={5} delay={0.4}>
        <FigureDuoIcon className="h-full w-full text-terracotta-400/70" />
      </Drift>
      <Drift
        className="pointer-events-none absolute bottom-16 right-16 hidden h-3 w-20 text-terracotta-400 lg:block"
        duration={6}
        y={4}
        rotate={4}
      >
        <SquiggleIcon className="h-full w-full" />
      </Drift>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tightest text-ink-900 sm:text-4xl lg:text-5xl"
        >
          {t.whoIHelp.sentence.map((segment, i) =>
            segment.color ? (
              <Sway
                key={i}
                angle={2}
                duration={4 + i * 0.4}
                delay={i * 0.15}
                className={segment.color === 'terracotta' ? 'text-terracotta-600' : 'text-sage-700'}
              >
                {segment.text}
              </Sway>
            ) : (
              <span key={i}>{segment.text}</span>
            ),
          )}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 flex flex-wrap items-start gap-x-16 gap-y-10"
        >
          {modes.map(({ icon: Icon, label, offset }) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-start gap-3 ${offset}`}
            >
              <Icon className="h-11 w-11 text-sage-600" />
              <span className="font-display text-xl text-ink-800">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
