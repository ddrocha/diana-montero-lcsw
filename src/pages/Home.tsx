import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { About } from '../components/About';
import { Approach } from '../components/Approach';
import { WhoIWorkWith } from '../components/WhoIWorkWith';
import { Insurance } from '../components/Insurance';
import { Faq } from '../components/Faq';
import { BookingCta } from '../components/BookingCta';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <Approach />
      <WhoIWorkWith />
      <Insurance />
      <Faq />
      <BookingCta />
      <Contact />
    </main>
  );
}
