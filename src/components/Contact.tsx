import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon, DotIcon, FigureCallIcon } from './icons';
import { Drift } from './Drift';
import { useLanguage } from '../i18n/LanguageContext';
import { CONTACT_EMAIL } from '../config';

const inputStyles =
  'mt-1.5 w-full rounded-xl border border-sage-300 bg-cream-50 px-4 py-3 text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-terracotta-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400/25';

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(t.contact.emailSubject(name));
    const body = encodeURIComponent(t.contact.emailBody(name, email, message));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-32 overflow-hidden bg-cream-50">
      <Drift className="pointer-events-none absolute left-10 top-14 hidden h-2.5 w-2.5 lg:block" duration={4.5} y={4}>
        <DotIcon className="h-full w-full text-lavender-400" />
      </Drift>
      <Drift className="pointer-events-none absolute right-16 top-24 hidden h-5 w-5 sm:block" duration={5.5} y={7} rotate={12} delay={0.4}>
        <SparkleIcon className="h-full w-full text-butter-500" />
      </Drift>
      <Drift className="pointer-events-none absolute right-10 bottom-14 hidden h-10 w-10 lg:block" duration={5.5} y={5} delay={0.5}>
        <FigureCallIcon className="h-full w-full text-terracotta-400/70" />
      </Drift>

      <div className="mx-auto max-w-2xl px-6 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-medium tracking-tightest text-ink-900 sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-4 text-ink-700">{t.contact.intro}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium uppercase tracking-wide text-sage-700">
              {t.contact.nameLabel}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePlaceholder}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="text-sm font-medium uppercase tracking-wide text-sage-700">
              {t.contact.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.contact.emailPlaceholder}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="text-sm font-medium uppercase tracking-wide text-sage-700">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.messagePlaceholder}
              className={`${inputStyles} resize-none`}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-terracotta-600 px-8 py-3.5 text-base font-medium text-cream-50 shadow-soft transition-colors hover:bg-terracotta-700"
          >
            {t.contact.sendButton}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
