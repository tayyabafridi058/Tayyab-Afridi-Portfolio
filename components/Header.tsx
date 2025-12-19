import React, { useState, useEffect } from 'react';
import { Dribbble, Twitter, Linkedin, Menu, X, Github } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl tracking-tighter">Tayyab.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-2.5 rounded-full backdrop-blur-sm border border-white/20">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-muted">
            <a href="https://github.com/tayyabafridi058" className="hover:text-accent-start transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/tayyabafridi/" className="hover:text-accent-start transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/itstayyabafridi" className="hover:text-accent-start transition-colors"><Twitter size={20} /></a>
          </div>
          <a 
            href="#contact"
            className="px-6 py-2.5 bg-foreground text-white rounded-full text-sm font-bold hover:bg-accent-start transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl flex flex-col gap-6">
           <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-foreground hover:text-accent-start transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6 pt-4 border-t border-border">
            <a href="https://github.com/tayyabafridi058" className="hover:text-accent-start transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/tayyabafridi/" className="hover:text-accent-start transition-colors"><Linkedin size={20} /></a>
            <a href="https://x.com/itstayyabafridi" className="hover:text-accent-start transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;