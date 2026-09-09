import React from 'react';
import { ArrowRight, Instagram, Twitter, Youtube, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer({ onRequestInvite }) {
  return (
    <footer className="bg-white">

      {/* Pre-footer CTA card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-brand-purple/8 via-purple-50 to-indigo-50 border border-brand-purple/15 px-6 sm:px-10 md:px-14 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Subtle orb */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/15 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
              Limited Seats Per Cohort
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-black text-brand-dark leading-[1.15] tracking-tight mb-3 text-balance">
              Ready to transform your child's growth?
            </h2>
            <p className="text-gray-500 font-medium text-[14px] sm:text-[15px] leading-relaxed">
              30 days. 6 skills. One mentor. Invite-only — apply before seats fill up.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onRequestInvite}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-purple text-white font-bold text-[14px] sm:text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-brand-purple/25 active:scale-[0.97]"
            >
              Request Invite Only Access
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/syllabus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-brand-purple/20 text-brand-purple font-bold text-[14px] sm:text-[15px] hover:bg-brand-purple/5 transition-colors"
            >
              View Full Syllabus
            </a>
          </div>
        </div>
      </div>

      {/* Thin black separator line */}
      <div className="w-full h-px bg-black opacity-20"></div>

      {/* Footer Body */}
      <div className="bg-[#F8F9FE] relative overflow-hidden">
        
        {/* Massive Watermark & Pattern Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-end md:justify-center">
          {/* Subtle Dotted Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#5B10FF 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
          {/* Giant Text */}
          <div className="font-black text-[18vw] md:text-[15vw] xl:text-[220px] text-[#5B10FF]/[0.03] tracking-tighter select-none whitespace-nowrap mb-[108px] md:mb-0 md:-mt-10 leading-none">
            growtopper
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-6 md:pb-8 relative z-10">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 md:mb-16 text-center lg:text-left">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/25">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <span className="font-black text-[22px] tracking-tight text-brand-dark">growtopper</span>
            </div>
            <p className="text-gray-500 text-[13px] font-medium leading-relaxed mb-6 max-w-[240px] mx-auto lg:mx-0">
              India's first invite-only 30-day student growth program for Grades 6—12.
            </p>
            <a href="https://growtopper.app" className="text-[13px] text-brand-purple font-bold tracking-wide hover:underline">
              growtopper.app
            </a>
          </div>

          {/* Program */}
          <div>
            <h4 className="font-black text-brand-dark text-[13px] uppercase tracking-widest mb-6">Program</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-[280px] mx-auto lg:mx-0 text-center lg:text-left">
              {[
                { label: 'Career Counseling', href: '/career-counseling' },
                { label: 'Abode', href: '/abode' },
                { label: 'Curriculum', href: '#program' },
                { label: 'Benefits', href: '#how-it-works' },
                { label: 'Cohort', href: '#cohort' },
                { label: 'Pricing', href: '#pricing' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] font-bold text-gray-500 hover:text-brand-purple transition-colors">{l.label}</a>
                </li>
              ))}
              <li className="col-span-2 lg:col-span-1">
                <a href="#faq" className="text-[13px] font-bold text-gray-500 hover:text-brand-purple transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black text-brand-dark text-[13px] uppercase tracking-widest mb-6">Legal</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 max-w-[280px] mx-auto lg:mx-0 text-center lg:text-left">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] font-bold text-gray-500 hover:text-brand-purple transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-brand-dark text-[13px] uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-3 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-2.5 text-[13px] text-gray-500 font-bold">
                <Mail className="w-4 h-4 shrink-0 text-brand-purple" />
                Support@growtopper.app
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-gray-500 font-bold">
                <Phone className="w-4 h-4 shrink-0 text-brand-purple" />
                +91 78539 88799
              </li>
            </ul>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/company/growtopper' },
                { Icon: Instagram, href: 'https://instagram.com/growtopper' },
                { Icon: Twitter, href: 'https://twitter.com/growtopper' },
                { Icon: Youtube, href: 'https://youtube.com/@growtopper' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-purple hover:border-brand-purple/30 hover:shadow-md transition-all shadow-sm relative z-20">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-20">
          <p className="text-[12px] font-medium text-gray-400">
            © {new Date().getFullYear()} Growtopper Education. All rights reserved. | growtopper.app
          </p>
          <p className="text-[11px] text-gray-400 font-medium">Made with ❤️ in Bhubaneswar, India</p>
        </div>

      </div>
      </div>
    </footer>
  );
}
