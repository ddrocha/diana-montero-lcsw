import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Terms } from './pages/Terms';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-cream-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
