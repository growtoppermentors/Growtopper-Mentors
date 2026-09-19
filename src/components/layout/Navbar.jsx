import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, Zap, Coins, BookOpen, Flame, GraduationCap } from 'lucide-react';

export default function Navbar({ onRequestInvite }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
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
    { name: '30 Days Growth Challenge', href: '/30-days-growth-challenge', Icon: Flame },
    { name: '1-1 Clarity Session Call',  href: '/1-1-clarity-session-call', Icon: Zap },
    { name: 'Pricing',          href: '/pricing', Icon: Coins },
    { 
      name: 'Explore',
      isDropdown: true,
      children: [
        { name: 'Blog & Resources', href: '/blog', Icon: BookOpen, desc: 'Insights for students & parents' },
        { name: 'Exams & Scholarships', href: '/exams-scholarships', Icon: GraduationCap, desc: 'Track OAV, JNV & more' },
      ]
    },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setMobileExploreOpen(false);
  };

  return (
    <div ref={menuRef} className="fixed top-0 left-0 right-0 z-50">

      {/* 🔮 Navbar Bar 🔮 */}
      <header
        className={`transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/98 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 z-10" onClick={handleNavClick}>
            <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/30">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="font-black text-[18px] tracking-tight text-brand-dark">growtopper</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => link.isDropdown ? (
              <div className="relative group" key={link.name}>
                <button className="flex items-center gap-1 text-[14px] font-bold text-gray-500 hover:text-brand-purple transition-colors py-2">
                  {link.name} <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                {/* Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 p-3 flex flex-col gap-1">
                  {link.children.map(child => (
                    <Link key={child.name} to={child.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item">
                      <div className="w-10 h-10 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-brand-purple/30 group-hover/item:bg-brand-purple/5 transition-colors text-brand-dark">
                        <child.Icon className="w-4.5 h-4.5 group-hover/item:text-brand-purple transition-colors" />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-brand-dark group-hover/item:text-brand-purple transition-colors">{child.name}</div>
                        <div className="text-[12px] font-medium text-gray-500 mt-0.5">{child.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.name} to={link.href} className="text-[14px] font-bold text-gray-500 hover:text-brand-purple transition-colors">
                {link.name}
              </Link>
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

      {/* 🔮 Mobile Dropdown - slides top-to-bottom 🔮 */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-y-auto ${
          mobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Frosted dropdown panel */}
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl shadow-black/[0.08] mx-0">
          
          {/* Nav Links Grid */}
          <div className="px-4 pt-4 pb-2 flex flex-col gap-2.5">
            {navLinks.map((link) => link.isDropdown ? (
              <div key={link.name} className="flex flex-col gap-2">
                <button
                  onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50/80 hover:bg-brand-purple/5 border border-gray-100 transition-all w-full text-left"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                    <BookOpen className="w-4 h-4 text-brand-dark" />
                  </div>
                  <span className="font-bold text-[15px] text-brand-dark tracking-tight flex-1">{link.name}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${mobileExploreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mobile Accordion Children */}
                <div className={`flex flex-col gap-2 pl-4 transition-all duration-200 overflow-hidden ${mobileExploreOpen ? 'max-h-[400px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                  {link.children.map(child => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={handleNavClick}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all active:scale-[0.98]"
                    >
                       <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                          <child.Icon className="w-3.5 h-3.5 text-brand-purple" />
                       </div>
                       <span className="font-bold text-[14px] text-gray-700">{child.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50/80 hover:bg-brand-purple/5 hover:text-brand-purple border border-gray-100 hover:border-brand-purple/20 active:scale-[0.98] transition-all group"
              >
                <div className="w-9 h-9 rounded-[10px] bg-white border border-gray-100 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5 transition-colors shrink-0">
                  <link.Icon className="w-4 h-4 text-brand-dark group-hover:text-brand-purple transition-colors" />
                </div>
                <span className="font-bold text-[15px] text-brand-dark group-hover:text-brand-purple transition-colors tracking-tight">{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-purple ml-auto transition-colors" />
              </Link>
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
