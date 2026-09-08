import React, { useState, useEffect } from 'react';
import { CalendarDays, TrendingUp, BrainCircuit, Building2, Landmark, Mic2, UserCheck, BookMarked, Award, Trophy, Sparkles, BookOpen, Medal } from 'lucide-react';

export default function ProblemSection() {

  const coreSkills = [
    { title: 'Advanced Math & Problem Solving',     icon: <TrendingUp className="w-5 h-5" />,      border: 'border-blue-200',       bg: 'bg-blue-50',        color: 'text-blue-600' },
    { title: 'Practical Science & Logic',           icon: <BrainCircuit className="w-5 h-5" />,    border: 'border-emerald-200',    bg: 'bg-emerald-50',     color: 'text-emerald-600' },
    { title: 'Future-Ready Tech & AI Skills',       icon: <Sparkles className="w-5 h-5" />,        border: 'border-violet-200',     bg: 'bg-violet-50',      color: 'text-violet-600' },
    { title: 'Startup Business & Entrepreneurship', icon: <Building2 className="w-5 h-5" />,       border: 'border-orange-200',     bg: 'bg-orange-50',      color: 'text-orange-600' },
    { title: 'Real-World Financial Literacy',       icon: <Landmark className="w-5 h-5" />,        border: 'border-amber-200',      bg: 'bg-amber-50',       color: 'text-amber-600' },
    { title: 'Public Speaking & Communication',     icon: <Mic2 className="w-5 h-5" />,            border: 'border-rose-200',       bg: 'bg-rose-50',        color: 'text-rose-600' },
  ];

  const champions = [
    { skill: "Math", name: "Rohan Desai", color: "from-blue-600 to-cyan-500" },
    { skill: "Science", name: "Ananya Sharma", color: "from-emerald-600 to-teal-500" },
    { skill: "Tech & AI", name: "Kabir Verma", color: "from-violet-600 to-purple-500" },
    { skill: "Business & Entrepreneurship", name: "Ishaan Patel", color: "from-orange-600 to-amber-500" },
    { skill: "Finance", name: "Priya Singh", color: "from-amber-500 to-yellow-500" },
    { skill: "Communication", name: "Meera Reddy", color: "from-rose-600 to-pink-500" },
  ];

  const [certIndex, setCertIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % champions.length);
    }, 2800); // changes every 2.8 seconds
    return () => clearInterval(interval);
  }, []);

  const rewards = [
    {
      icon: <Award className="w-6 h-6 text-[#4E14F9]" />,
      bg: 'bg-[#4E14F9]/5', border: 'border-[#4E14F9]/15', badgeBg: 'bg-[#4E14F9]/8 text-[#4E14F9]',
      badge: null,
      title: 'Certificate & Recognition',
      desc: 'Official certificate + public recognition for every student who completes the program.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
      bg: 'bg-amber-50', border: 'border-amber-200', badgeBg: 'bg-amber-100 text-amber-700',
      badge: 'Top 3 Only',
      title: '₹5,000 Prize + Goodies',
      desc: 'Top 3 students win cash prizes, exclusive goodies, and a community shoutout.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      bg: 'bg-emerald-50', border: 'border-emerald-200', badgeBg: 'bg-emerald-100 text-emerald-700',
      badge: 'Worth ₹15,000',
      title: '3-Month Free Mentorship',
      desc: 'Top 3 students receive 3 months of continued 1:1 mentorship — absolutely free.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      bg: 'bg-rose-50', border: 'border-rose-200', badgeBg: 'bg-rose-100 text-rose-700',
      badge: 'Worth ₹3,000',
      title: 'Premium Skill Courses',
      desc: 'Top 3 students get lifetime access to premium communication & financial courses.',
    },
  ];

  const currentChamp = champions[certIndex];

  return (
    <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white relative overflow-hidden" id="benefits">
      {/* Background Decor */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none will-change-transform"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-3">
            Everything Included
          </div>
          <h2 className="text-[34px] md:text-[46px] font-black text-brand-dark leading-tight tracking-tight text-balance">
            Program Benefits for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-indigo-500">Students</span>
          </h2>
          <p className="text-gray-500 text-[16px] font-medium max-w-lg text-balance mx-auto">
            Skills, rewards, recognition — everything a student needs to level up in 30 days.
          </p>
        </div>

        {/* Main layout: Illustration left + Skills grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8">

          {/* Premium Authentic Certificate Card */}
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 border border-brand-purple/10 flex flex-col p-4 sm:p-6 min-h-[380px] lg:h-full shadow-inner">
            
            {/* Authentic Outer Frame */}
            <div className="flex-1 bg-[#FCFBF8] rounded-md shadow-2xl border-[8px] border-[#1C2033] p-1.5 relative flex flex-col">
              
              {/* Inner Authentic Decorative Border */}
              <div className="flex-1 border-[1.5px] border-amber-400/50 p-5 sm:p-6 flex flex-col items-center justify-center text-center relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                
                {/* Background watermark logo */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                  <Award className="w-64 h-64 text-brand-dark" />
                </div>

                {/* Header (Exact Growtopper Logo) */}
                <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/30">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                  </div>
                  <span className="font-black text-[18px] tracking-tight text-brand-dark">growtopper</span>
                </div>

                <h3 className="font-serif text-[28px] sm:text-[34px] font-black text-[#1C2033] uppercase tracking-widest mb-1 leading-none">
                  Certificate
                </h3>
                <span className="text-[12px] sm:text-[14px] tracking-[0.3em] text-amber-600 uppercase font-bold mb-6">Of Excellence</span>

                <p className="text-[12px] text-gray-600 font-medium mb-3 italic font-serif">
                  is hereby awarded to
                </p>

                {/* Dynamic Name area */}
                <div className={`font-['Caveat',cursive] text-[40px] sm:text-[46px] font-bold leading-none mb-3 border-b-2 border-gray-300 w-[90%] max-w-[320px] pb-1 mx-auto text-transparent bg-clip-text bg-gradient-to-r ${currentChamp.color} transition-all duration-300 shrink-0`}>
                  {currentChamp.name}
                </div>

                <p className="text-[11px] text-gray-700 max-w-[300px] leading-relaxed mb-10 mt-2 text-balance font-medium relative z-10 min-h-[48px]">
                  For demonstrating outstanding performance and earning the title of <strong className="text-brand-dark transition-opacity duration-300">{currentChamp.skill} Champion</strong> in the Growtopper 30-Day Growth Challenge.
                </p>

                {/* Signatures & Seal */}
                <div className="flex w-full items-end justify-between px-1 sm:px-2 mt-auto shrink-0 relative z-10">
                  
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 font-mono mb-1">GT-26-001</span>
                    <span className="w-16 sm:w-20 border-t border-gray-400 mt-2 mb-1"></span>
                    <span className="text-[8px] uppercase tracking-wider text-gray-500 font-bold">Ref No.</span>
                  </div>

                  {/* Authentic Rubber Stamp */}
                  <div className="relative transform rotate-[-15deg] translate-y-1 sm:translate-y-2 opacity-80 mix-blend-multiply">
                    <div className="border-[3px] border-blue-600 rounded-full w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center p-1">
                      <div className="border-[1.5px] border-blue-600 rounded-full w-full h-full flex flex-col items-center justify-center text-center px-1">
                        <span className="text-[6.5px] sm:text-[7.5px] font-black uppercase text-blue-600 leading-none tracking-widest">Growtopper</span>
                        <div className="w-[85%] border-y-[1.5px] border-blue-600 py-0.5 my-[2px] flex items-center justify-center">
                          <span className="text-[5px] sm:text-[6px] font-bold uppercase text-blue-600 tracking-[0.2em]">Verified</span>
                        </div>
                        <span className="text-[6.5px] sm:text-[7.5px] font-black uppercase text-blue-600 leading-none tracking-widest">Mentors</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="font-['Caveat',cursive] text-gray-900 text-[26px] leading-none -mb-2 transform -rotate-3">Subhasis Swain</span>
                    <span className="w-24 sm:w-28 border-t border-gray-400 mt-2 mb-1"></span>
                    <span className="text-[9px] uppercase tracking-wider text-gray-900 font-black">Subhasis Swain</span>
                    <span className="text-[8px] uppercase tracking-wider text-gray-500 font-bold mt-0.5">Founder & CEO</span>
                  </div>

                </div>

              </div>
            </div>
            
            {/* The centralized quote */}
            <div className="w-full bg-white px-6 py-4 mt-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-brand-purple/5 shrink-0">
              <span className="font-['Caveat',cursive] text-[20px] text-brand-purple font-bold leading-snug">
                "More than marks"
              </span>
              <span className="font-['Caveat',cursive] text-[16px] text-gray-600 font-bold leading-snug">
                Real growth for life.
              </span>
            </div>
          </div>

          {/* Core Skills Grid (6 items to perfectly balance height) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {coreSkills.map((s, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-5 sm:p-6 rounded-2xl border bg-white ${s.border} shadow-sm hover:shadow-md transition-shadow h-full`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.bg} ${s.color}`}>
                  {s.icon}
                </div>
                <span className="text-[14px] font-bold text-gray-700 leading-tight pr-2">{s.title}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Rewards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {rewards.map((r, idx) => (
            <div key={idx} className={`relative rounded-2xl border ${r.border} bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col gap-4 p-5`}>
              {r.badge && (
                <span className={`absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${r.badgeBg}`}>
                  {r.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${r.bg} border ${r.border}`}>
                {r.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-black text-brand-dark mb-1.5 leading-tight pr-12">{r.title}</h3>
                <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
