import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-accent-start selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <ClientLogos />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;