import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function FinalCTA({ onRequestInvite }) {
  const benefits = [
    'Live interactive mentor sessions',
    'Practical activities & challenges',
    'Personalized 1:1 mentorship',
    'Progress tracking & reports',
    'Certificate & 90-day roadmap',
  ];

  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 bg-white" id="cta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium gradient card — shimmer only on desktop for mobile perf */}
        <div className="relative rounded-[32px] p-[2px] bg-gradient-to-r from-[#A5D172] via-[#6A9A3B] to-[#A5D172] md:animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%] shadow-[0_20px_40px_rgba(116,171,85,0.15)] hover:shadow-[0_20px_50px_rgba(116,171,85,0.2)] transition-shadow">
          <div className="relative rounded-[30px] overflow-hidden bg-white bg-gradient-to-br from-[#74AB55]/10 via-[#74AB55]/5 to-transparent h-full w-full">

            {/* Blur orbs — hidden on mobile for performance */}
            <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-[#74AB55]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none will-change-transform"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#74AB55]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none will-change-transform"></div>

            <div className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">

              {/* Left Column (55%) - Content + Checklist + Button */}
              <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-10 h-10 bg-[#74AB55]/10 rounded-[12px] flex items-center justify-center mb-4 border border-[#74AB55]/20 mx-auto lg:mx-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#74AB55]" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>

                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3 text-balance w-full">
                  Start Your 30-Day<br/>Growth Challenge
                </h2>

                <p className="text-gray-600 font-medium text-[14px] md:text-[15px] mb-6 max-w-[400px] leading-relaxed mx-auto lg:mx-0">
                  Give your child the skills, habits and confidence to build a brighter future — starting today.
                </p>

                {/* Checklist (Block Centered on mobile, Left on desktop) */}
                <div className="w-full flex justify-center lg:justify-start mb-6 mx-auto lg:mx-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 w-fit text-left">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 group">
                        <div className="w-4 h-4 rounded-full bg-[#74AB55]/10 border border-[#74AB55]/20 flex items-center justify-center shrink-0 group-hover:bg-[#74AB55]/20 transition-colors">
                          <Check className="w-2.5 h-2.5 text-[#74AB55] stroke-[3px]" />
                        </div>
                        <span className="font-semibold text-gray-700 text-[13px] sm:text-[14px]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button Area */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mx-auto lg:mx-0">
                  <button
                    onClick={onRequestInvite}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#74AB55] text-white font-black text-[14px] hover:bg-[#649649] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#74AB55]/20 active:scale-[0.97]"
                  >
                    Request Invite Only Access
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-gray-500 font-bold text-[12px] uppercase tracking-widest shrink-0">For Grades 6–12</span>
                </div>
              </div>

              {/* Right Column (40%) - Large Quote Proof Card */}
              <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                <div className="bg-white border border-[#74AB55]/20 rounded-[24px] p-6 sm:p-8 shadow-2xl flex flex-col justify-center items-center text-center w-full max-w-[280px] relative overflow-hidden group">
                  
                  {/* Internal Card Decor */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#74AB55]/10 rounded-full blur-[40px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="text-[40px] leading-none text-[#74AB55]/20 font-serif mb-1 relative z-10">"</div>
                  
                  <span className="font-['Caveat',cursive] text-[24px] sm:text-[28px] text-[#74AB55] font-bold leading-tight z-10 text-balance mb-5">
                    Invest in Growth,<br/>Not Just Grades.
                  </span>
                  
                  {/* Footer Social Proof strip inside the card */}
                  <div className="flex flex-col items-center gap-2 pt-4 border-t border-gray-100 w-full relative z-10">
                    <div className="flex -space-x-2">
                      <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Aanya" alt="Student" className="w-6 h-6 rounded-full border-2 border-white bg-gray-50 shadow-sm" />
                      <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Rohan" alt="Student" className="w-6 h-6 rounded-full border-2 border-white bg-gray-50 shadow-sm" />
                      <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Priya" alt="Student" className="w-6 h-6 rounded-full border-2 border-white bg-gray-50 shadow-sm" />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">Join 500+ Parents</div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
