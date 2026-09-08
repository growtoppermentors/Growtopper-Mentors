import React from 'react';
import { ArrowRight, Atom, BrainCircuit, Building2, Landmark, Mic2, Flame } from 'lucide-react';

const skillIcons = {
  math:    <Atom className="w-6 h-6" />,
  tech:    <BrainCircuit className="w-6 h-6" />,
  biz:     <Building2 className="w-6 h-6" />,
  finance: <Landmark className="w-6 h-6" />,
  comm:    <Mic2 className="w-6 h-6" />,
  growth:  <Flame className="w-6 h-6" />,
};

export default function Pillars() {
  const skills = [
    {
      key: 'math',
      title: 'Mathematics & Science',
      desc: 'Real-world problem solving over rote learning. Concepts that click and stay.',
      grad: 'from-[#4E14F9] to-[#875BFB]',
      iconBg: 'bg-[#4E14F9]/10',
      iconColor: 'text-[#4E14F9]',
      hoverGrad: 'from-[#4E14F9]/5 to-transparent',
      borderHover: 'hover:from-[#4E14F9]/40 hover:via-[#4E14F9]/15 hover:to-[#4E14F9]/40',
    },
    {
      key: 'tech',
      title: 'Technology & AI',
      desc: 'Coding, AI tools, and digital skills that set students apart in the next decade.',
      grad: 'from-[#0EA5E9] to-[#38BDF8]',
      iconBg: 'bg-[#0EA5E9]/10',
      iconColor: 'text-[#0EA5E9]',
      hoverGrad: 'from-[#0EA5E9]/5 to-transparent',
      borderHover: 'hover:from-[#0EA5E9]/40 hover:via-[#0EA5E9]/15 hover:to-[#0EA5E9]/40',
    },
    {
      key: 'biz',
      title: 'Business & Strategy',
      desc: 'Entrepreneurial thinking, market understanding, and how to build real value.',
      grad: 'from-[#E96614] to-[#F69748]',
      iconBg: 'bg-[#E96614]/10',
      iconColor: 'text-[#E96614]',
      hoverGrad: 'from-[#E96614]/5 to-transparent',
      borderHover: 'hover:from-[#E96614]/40 hover:via-[#E96614]/15 hover:to-[#E96614]/40',
    },
    {
      key: 'finance',
      title: 'Financial Literacy',
      desc: 'Saving, investing, budgeting — the money skills schools forget to teach.',
      grad: 'from-[#F59E0B] to-[#FBBF24]',
      iconBg: 'bg-[#F59E0B]/10',
      iconColor: 'text-[#F59E0B]',
      hoverGrad: 'from-[#F59E0B]/5 to-transparent',
      borderHover: 'hover:from-[#F59E0B]/40 hover:via-[#F59E0B]/15 hover:to-[#F59E0B]/40',
    },
    {
      key: 'comm',
      title: 'Communication',
      desc: 'Speak clearly, listen deeply, and lead every room they walk into.',
      grad: 'from-[#74AB55] to-[#9DC67F]',
      iconBg: 'bg-[#74AB55]/10',
      iconColor: 'text-[#74AB55]',
      hoverGrad: 'from-[#74AB55]/5 to-transparent',
      borderHover: 'hover:from-[#74AB55]/40 hover:via-[#74AB55]/15 hover:to-[#74AB55]/40',
    },
    {
      key: 'growth',
      title: 'Personal Growth',
      desc: 'Habits, mindset, routine, and the clarity to know where they\'re going.',
      grad: 'from-[#9D68A1] to-[#C49EC8]',
      iconBg: 'bg-[#9D68A1]/10',
      iconColor: 'text-[#9D68A1]',
      hoverGrad: 'from-[#9D68A1]/5 to-transparent',
      borderHover: 'hover:from-[#9D68A1]/40 hover:via-[#9D68A1]/15 hover:to-[#9D68A1]/40',
    },
  ];

  return (
    <section className="pt-10 md:pt-14 pb-8 md:pb-12 bg-white" id="program">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Indian Student Facts Card --- */}
        <div className="relative mb-20 lg:mb-28 rounded-[32px] p-[2px] bg-gradient-to-r from-[#F69748] via-[#FFC085] to-[#F69748] md:animate-[shimmer_3s_linear_infinite] bg-[length:200%_100%] shadow-[0_20px_40px_rgba(233,102,20,0.1)] hover:shadow-[0_20px_50px_rgba(233,102,20,0.15)] transition-shadow group">
          
          <div className="relative rounded-[30px] overflow-hidden bg-white bg-gradient-to-br from-[#E96614]/10 via-[#E96614]/5 to-transparent h-full w-full p-8 md:p-10 lg:p-12 z-10">
            
            {/* Soft Glow Decor — desktop only */}
            <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-[#E96614]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
              
              {/* Left: Copy */}
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E96614]/10 border border-[#E96614]/20 text-[#E96614] text-[11px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  The Reality Check
                </div>
                <h3 className="text-[28px] md:text-[36px] font-black text-brand-dark leading-[1.15] tracking-tight mb-4 text-balance">
                  Why traditional schooling isn't enough anymore.
                </h3>
                <p className="text-gray-600 font-medium text-[15px] md:text-[16px] leading-relaxed text-balance">
                  India has the world's largest student population, yet the gap between academic scores and real-world employability is widening. Growtopper exists to bridge this exact gap early on.
                </p>
              </div>

              {/* Right: Data Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-auto shrink-0 mt-2 lg:mt-0">
                <div className="bg-white/60 border border-[#E96614]/20 hover:bg-white transition-colors rounded-2xl sm:rounded-[24px] p-4 sm:p-6 backdrop-blur-sm shadow-sm">
                  <div className="text-[22px] sm:text-[32px] font-black text-brand-dark mb-1 leading-none">300M+</div>
                  <div className="text-[11px] sm:text-[13px] text-gray-600 font-semibold leading-tight sm:leading-snug mt-1.5">Total students<br className="hidden sm:block"/>in India</div>
                </div>
                <div className="bg-white/60 border border-[#E96614]/20 hover:bg-white transition-colors rounded-2xl sm:rounded-[24px] p-4 sm:p-6 backdrop-blur-sm shadow-sm">
                  <div className="text-[22px] sm:text-[32px] font-black text-[#E96614] mb-1 leading-none">&lt; 10%</div>
                  <div className="text-[11px] sm:text-[13px] text-gray-600 font-semibold leading-tight sm:leading-snug mt-1.5">Possess real-world<br className="hidden sm:block"/>21st-century skills</div>
                </div>
                <div className="bg-white/60 border border-[#E96614]/20 hover:bg-white transition-colors rounded-2xl sm:rounded-[24px] p-4 sm:p-6 backdrop-blur-sm shadow-sm">
                  <div className="text-[22px] sm:text-[32px] font-black text-brand-dark mb-1 leading-none">51.2%</div>
                  <div className="text-[11px] sm:text-[13px] text-gray-600 font-semibold leading-tight sm:leading-snug mt-1.5">Current graduate<br className="hidden sm:block"/>employability rate</div>
                </div>
                <div className="bg-white/60 border border-[#E96614]/20 hover:bg-white transition-colors rounded-2xl sm:rounded-[24px] p-4 sm:p-6 backdrop-blur-sm shadow-sm">
                  <div className="text-[22px] sm:text-[32px] font-black text-[#E96614] mb-1 leading-none">93%</div>
                  <div className="text-[11px] sm:text-[13px] text-gray-600 font-semibold leading-tight sm:leading-snug mt-1.5">Students aware of only<br className="hidden sm:block"/>7 conventional careers</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* --- End of Facts Card --- */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
              The Core Curriculum
            </div>
            <h2 className="text-[36px] md:text-[48px] font-black text-brand-dark mb-4 leading-[1.15] tracking-tight text-balance">
              6 Future-Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Skills.</span>
            </h2>
            <p className="text-[17px] md:text-[19px] text-gray-500 font-medium leading-relaxed max-w-xl text-balance">
              We go far beyond textbooks. Skills that make students stand out — in classrooms, boardrooms, and beyond.
            </p>
          </div>

          {/* Highlighted CTA Button */}
          <a
            href="/syllabus"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/10 to-green-500/20 border border-green-500/30 text-green-700 font-bold text-[15px] transition-all shrink-0 self-start md:self-auto hover:from-green-500/15 hover:to-green-500/25 hover:border-green-500/40 hover:scale-[1.02] active:scale-95"
          >
            Explore Full Syllabus
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.key}
              className={`group relative p-[1.5px] rounded-[28px] bg-gradient-to-br from-gray-150 via-gray-100 to-gray-150 ${skill.borderHover} transition-all duration-500`}
            >
              <div className="relative h-full bg-white rounded-[26.5px] p-7 lg:p-8 flex flex-col items-start text-left overflow-hidden">

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.hoverGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${skill.iconBg}`}>
                  <span className={skill.iconColor}>
                    {skillIcons[skill.key]}
                  </span>
                </div>

                {/* Number tag */}
                <div className={`absolute top-7 right-7 w-6 h-6 rounded-full bg-gradient-to-br ${skill.grad} flex items-center justify-center`}>
                  <span className="text-white text-[10px] font-black">
                    {String(Object.keys(skillIcons).indexOf(skill.key) + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-black text-brand-dark mb-2.5 text-[18px] leading-tight relative z-10 group-hover:text-brand-dark transition-colors duration-300">
                  {skill.title}
                </h3>

                <p className="text-gray-500 text-[14px] font-medium leading-relaxed relative z-10">
                  {skill.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
