import { LanguageProvider } from './i18n/LanguageContext';
import Hero from './components/Hero';
import CarShowcase from './components/CarShowcase';
import ContactForm from './components/ContactForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Hero />
        <CarShowcase />
        <LocationSection />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
