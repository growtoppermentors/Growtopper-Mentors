import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

export default function Navbar({ onRequestInvite }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Clarity Session', href: '/clarity-session', emoji: '✨' },
    { name: 'Program',  href: '/#program',  emoji: '🚀' },
    { name: 'Syllabus', href: '/#syllabus', emoji: '🗂️' },
    { name: 'Benefits', href: '/#benefits', emoji: '✦' },
    { name: 'Cohort',   href: '/#cohort',   emoji: '🎓' },
    { name: 'Reviews',  href: '/#results',  emoji: '🏅' },
    { name: 'Pricing',  href: '/pricing',  emoji: '🪙' },
    { name: 'FAQ',      href: '/#faq',      emoji: '🔍' },
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const el = document.querySelector(href.substring(1));
      if (el) {
        e.preventDefault();
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  };

  return (
    <div ref={menuRef} className="fixed top-0 left-0 right-0 z-50">

      {/* ── Navbar Bar ── */}
      <header
        className={`transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/98 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0 z-10">
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
            className="lg:hidden w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`transition-all duration-200 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {mobileMenuOpen
                ? <X className="w-4 h-4 text-brand-dark" />
                : <Menu className="w-4 h-4 text-brand-dark" />
              }
            </span>
          </button>

        </div>
      </header>

      {/* ── Mobile Dropdown — slides top-to-bottom ── */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Frosted dropdown panel */}
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl shadow-black/[0.08] mx-0">
          
          {/* Nav Links Grid */}
          <div className="px-4 pt-3 pb-2 grid grid-cols-2 gap-1.5">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-gray-50 hover:bg-brand-purple/5 hover:text-brand-purple active:scale-[0.97] transition-all group ${
                  i === navLinks.length - 1 && navLinks.length % 2 !== 0 ? 'col-span-2' : ''
                }`}
              >
                <span className="text-[16px] leading-none">{link.emoji}</span>
                <span className="font-bold text-[14px] text-brand-dark group-hover:text-brand-purple transition-colors">{link.name}</span>
                <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-brand-purple ml-auto transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="px-4 pb-4 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onRequestInvite(); }}
              className="w-full py-3.5 rounded-2xl bg-brand-purple text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20 active:scale-[0.98] transition-transform"
            >
              Request Invite Only Access <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
