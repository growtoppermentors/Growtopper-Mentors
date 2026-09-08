import React, { useState, useEffect } from 'react';
import { CalendarDays, Users, Crown } from 'lucide-react';

export default function CohortSection({ onRequestInvite }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target: October 1st of the current year (or next year if already passed)
    const now = new Date();
    let target = new Date(now.getFullYear(), 9, 1); // Month is 0-indexed, so 9 is October
    if (now > target) {
      target = new Date(now.getFullYear() + 1, 9, 1);
    }

    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cohort" className="pt-10 md:pt-14 pb-16 md:pb-24 bg-[#F8F9FE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/15 text-brand-purple text-[11px] font-black uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
            Admissions Open
          </div>
          <h2 className="text-[34px] md:text-[46px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4">
            The October <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE6E3C] via-[#9D68A1] to-[#6074D7]">Cohort.</span>
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto text-balance">
            We intentionally keep our cohorts small to ensure high-quality personalized mentorship. Secure your spot before it fills up.
          </p>
        </div>

        {/* Premium White Mix Gradient Card with Shining Border */}
        <div className="relative rounded-[32px] p-[2px] bg-gradient-to-r from-[#7280DE] via-[#B28BFF] to-[#7280DE] md:animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%] shadow-[0_20px_40px_rgba(114,128,222,0.15)] hover:shadow-[0_20px_50px_rgba(114,128,222,0.25)] transition-shadow">
          <div className="relative rounded-[30px] overflow-hidden bg-white bg-gradient-to-br from-[#7280DE]/10 via-[#7280DE]/5 to-transparent h-full w-full">
            
            {/* Full Card Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7280DE]/5 to-transparent md:animate-[shimmer_4s_linear_infinite] bg-[length:200%_100%] pointer-events-none"></div>

            {/* Subtle soft top-light overlay */}
          <div className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] bg-[#7280DE]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 -translate-y-1/4 will-change-transform"></div>

          {/* Inner card content */}
          <div className="relative p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left: Info */}
            <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-brand-dark font-bold bg-[#7280DE]/10 px-4 py-2 rounded-xl border border-[#7280DE]/20 shadow-sm md:backdrop-blur-sm">
                  <CalendarDays className="w-4 h-4 text-[#7280DE]" />
                  Starts Oct 1st
                </div>
                <div className="flex items-center gap-2 text-brand-dark font-bold bg-[#7280DE]/10 px-4 py-2 rounded-xl border border-[#7280DE]/20 shadow-sm md:backdrop-blur-sm">
                  <Users className="w-4 h-4 text-[#7280DE]" />
                  Only 20 Seats
                </div>
              </div>

              <h3 className="text-brand-dark font-black text-[28px] sm:text-[34px] mb-4 leading-tight">
                Next Cohort begins in:
              </h3>

              {/* Countdown Timer */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#7280DE]/10 border border-[#7280DE]/20 flex items-center justify-center mb-2 shadow-sm md:backdrop-blur-sm">
                      <span className="text-[24px] sm:text-[32px] font-black text-brand-dark tabular-nums tracking-tight">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onRequestInvite}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark md:animate-[shimmer_2s_linear_infinite] bg-[length:200%_100%] text-white font-black text-[15px] hover:scale-[0.98] transition-all shadow-xl shadow-brand-dark/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:animate-[shimmer_1.5s_linear_infinite] bg-[length:200%_100%]"></div>
                <span className="relative z-10">Request Invite Only Access</span>
              </button>
            </div>

            {/* Right: Premium Badge */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative z-10 w-full">
              <div className="bg-white border border-[#7280DE]/20 rounded-[24px] p-6 sm:p-8 w-full max-w-md shadow-xl relative">
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#7280DE] text-white flex items-center justify-center shadow-lg transform rotate-12">
                  <Crown className="w-6 h-6 fill-current" />
                </div>
                <h4 className="text-brand-dark font-black text-[18px] mb-4">Why apply early?</h4>
                <ul className="space-y-4">
                  {[
                    "Early applicants get priority seating.",
                    "Exclusive pre-cohort orientation session.",
                    "Personalized roadmap planning before Day 1.",
                    "First access to mentor selection & pairing.",
                    "Early bird pricing locked before public reveal.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7280DE]/10 border border-[#7280DE]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <span className="text-[10px] text-[#7280DE] font-bold">{i + 1}</span>
                      </div>
                      <span className="text-gray-700 font-semibold text-[14px] leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
