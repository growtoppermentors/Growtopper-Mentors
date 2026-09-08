import React, { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

// Base: 500 students as of Sep 8 2026. Compounds at 0.2% per day.
function getDynamicStudentCount() {
  const BASE_COUNT = 500;
  const BASE_DATE = new Date('2026-09-08T00:00:00Z');
  const now = new Date();
  const daysPassed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  // 0.2% compound daily: count = base × (1.002)^days
  return Math.floor(BASE_COUNT * Math.pow(1.002, daysPassed));
}

// Subtle smiling school student avatars — notionists style (natural, gentle expressions)
const STUDENT_AVATARS = [
  'https://api.dicebear.com/9.x/notionists/svg?seed=Aanya&backgroundColor=b6e3f4',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Rohan&backgroundColor=c0aede',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Priya&backgroundColor=d1f0c4',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Kabir&backgroundColor=ffd5dc',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Sneha&backgroundColor=ffe4b5',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Arjun&backgroundColor=dce8f5',
  'https://api.dicebear.com/9.x/notionists/svg?seed=Meera&backgroundColor=e8d5f5',
];

export default function Hero({ onRequestInvite }) {
  const studentCount = useMemo(() => getDynamicStudentCount(), []);
  return (
    <section className="pt-20 lg:pt-24 pb-10 lg:pb-16 bg-[#F8F9FE] relative overflow-hidden flex flex-col justify-center items-center">
      
      {/* Soft Center Radial Glow — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#E8E2FF]/60 rounded-full blur-[100px] pointer-events-none z-0 will-change-transform"></div>

      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-8 flex flex-col items-center relative z-10">
        
        {/* Top Pill Badge */}
        <div className="bg-white border border-gray-200 rounded-full px-5 py-2 flex items-center gap-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] mb-5 mt-2 lg:mt-0">
          <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-purple">
            Grades 6–12 • Invite Only
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center font-black text-[38px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] text-[#111115] mb-5 max-w-[850px]">
          30 Days. One Mentor.<br/>
          A Structured System for <span className="inline-flex text-transparent bg-clip-text bg-[linear-gradient(110deg,#4E14F9,45%,#B28BFF,55%,#4E14F9)] bg-[length:200%_auto] md:animate-shimmer">Student Growth.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-[16px] md:text-[18px] text-[#4B5563] font-medium max-w-[750px] mb-8 leading-relaxed text-balance">
          We help students turn learning into consistent action through structured planning, daily accountability, and practical growth.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <button 
            onClick={onRequestInvite}
            className="px-10 py-4 lg:px-12 lg:py-5 rounded-full bg-brand-purple text-white font-bold text-[16px] lg:text-[17px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(78,20,249,0.25)]"
          >
            Request Invite Only Access
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player — 10% narrower on desktop */}
        <div className="w-full max-w-[765px] lg:max-w-[765px] mx-auto px-2 sm:px-0">
          <div className="relative p-[2px] sm:p-[3px] rounded-[24px] sm:rounded-[32px] bg-[linear-gradient(110deg,#4E14F9,45%,#B28BFF,55%,#4E14F9)] bg-[length:200%_auto] animate-shimmer shadow-[0_20px_60px_rgba(78,20,249,0.2)]">
            <div className="relative w-full aspect-video rounded-[22px] sm:rounded-[29px] overflow-hidden bg-black">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1" 
                title="Explainer Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Trust & Stats Bar */}
        <div className="w-full max-w-[1000px] mx-auto mt-12 lg:mt-20">
          <div className="p-[1px] rounded-[25px] sm:rounded-[33px] bg-gradient-to-r from-brand-purple/20 via-brand-purple/50 to-brand-purple/20 shadow-[0_8px_30px_rgba(78,20,249,0.06)]">
            <div className="bg-white rounded-[24px] sm:rounded-[32px] px-6 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">

              {/* Stats row — all in one line on desktop, wraps on mobile */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 sm:gap-x-8 gap-y-4 flex-1">
                {[
                  { val: '30',  label: 'Days' },
                  { val: '25',  label: 'Active' },
                  { val: '6',   label: 'Skills' },
                  { val: '1:1', label: 'Mentor' },
                  { val: '1',   label: 'Parent Meet' },
                ].map((s, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <div className="hidden sm:block w-px h-7 bg-gray-100 shrink-0" />}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="text-[22px] sm:text-[26px] font-black text-brand-dark leading-none">{s.val}</div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-brand-purple uppercase tracking-widest mt-1.5">{s.label}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 lg:hidden" />
              <div className="hidden lg:block w-px h-12 bg-gray-100 mx-6 shrink-0" />

              {/* Avatars + count — pinned right on desktop */}
              <div className="flex flex-row items-center gap-3 shrink-0">
                <div className="flex -space-x-3">
                  {STUDENT_AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border-2 border-white shadow-sm bg-gray-100"
                      style={{ zIndex: 20 - i }}
                      alt="Student"
                    />
                  ))}
                </div>
                <p className="text-[13px] sm:text-[14px] font-medium text-gray-600 text-left leading-tight whitespace-nowrap">
                  <strong className="text-brand-dark font-black block">{studentCount}+ students</strong>
                  growing
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

