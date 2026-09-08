import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onRequestInvite }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'Syllabus', href: '#syllabus' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Cohort', href: '#cohort' },
    { name: 'Reviews', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/30">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="font-black text-[18px] tracking-tight text-brand-dark">growtopper</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[14px] font-bold text-gray-500 hover:text-brand-purple transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={onRequestInvite}
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-purple text-white text-[14px] font-bold hover:opacity-90 transition-opacity shadow-md shadow-brand-purple/25"
          >
            Request Invite Only Access <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden z-50 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen
              ? <X className="w-5 h-5 text-brand-dark" />
              : <Menu className="w-5 h-5 text-brand-dark" />
            }
          </button>

        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>

        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-[80vw] max-w-[320px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <span className="font-black text-[17px] text-brand-dark">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[18px] font-bold text-brand-dark hover:text-brand-purple transition-colors"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href.startsWith('#')) {
                    const el = document.querySelector(link.href);
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="p-5 border-t border-gray-100">
            <button
              onClick={() => { setMobileMenuOpen(false); onRequestInvite(); }}
              className="w-full py-4 rounded-2xl bg-brand-purple text-white font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/25 active:scale-[0.98] transition-transform"
            >
              Request Invite Only Access <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
