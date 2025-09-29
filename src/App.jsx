import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../i18n.js';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({ duration: 2000, distance: '100px', delay: 400, reset: false });
    sr.reveal('.hero__content, .about__content');
    sr.reveal('.hero__img', { origin: 'top' });
    sr.reveal('.hero__info-wrapper, .skills__title', { delay: 500, interval: 100 });
    sr.reveal('.qualification__footer-text, .contact__content', { origin: 'left' });
    sr.reveal('.qualification__footer .btn, .contact__btn', { origin: 'right' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <Services />
        <Projects />
        <Qualification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
