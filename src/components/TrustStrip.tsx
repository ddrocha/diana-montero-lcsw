import { motion } from 'framer-motion';
import { BloomCheckIcon } from './icons';
import { useLanguage } from '../i18n/LanguageContext';

export function TrustStrip() {
  const { t } = useLanguage();
  const items = [t.trustStrip.licensed, t.trustStrip.virtual, t.trustStrip.therapy, t.trustStrip.sessions];

  return (
    <div className="border-y border-sage-300/60 bg-sage-200/70">
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 sm:justify-between sm:px-8"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm font-medium text-sage-800 sm:text-base"
          >
            <BloomCheckIcon className="h-5 w-5 shrink-0 text-sage-700" />
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
