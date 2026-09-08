import React from 'react';
import { ArrowLeft, ArrowRight, Target, BookOpen, Lightbulb, BarChart2, Trophy, Check } from 'lucide-react';

export default function Journey() {
  const phases = [
    {
      id: '01',
      title: 'Reset & Discover',
      days: 'Days 1–5',
      icon: <Target className="w-6 h-6" />,
      text: 'text-[#E96614]',
      borderGrad: 'from-[#E96614] via-[#F69748] to-[#EAEFFF]',
      lightBg: 'from-[#E96614]/10',
      items: ['Self-assessment', 'Goal setting', 'Build your routine']
    },
    {
      id: '02',
      title: 'Learn Better',
      days: 'Days 6–10',
      icon: <BookOpen className="w-6 h-6" />,
      text: 'text-[#74AB55]',
      borderGrad: 'from-[#74AB55] via-[#9DC67F] to-[#E3EFDB]',
      lightBg: 'from-[#74AB55]/10',
      items: ['Math & Science', 'Technology & AI', 'Study techniques']
    },
    {
      id: '03',
      title: 'Think & Build',
      days: 'Days 11–15',
      icon: <Lightbulb className="w-6 h-6" />,
      text: 'text-[#6974D6]',
      borderGrad: 'from-[#6974D6] via-[#8592E5] to-[#D5DAF4]',
      lightBg: 'from-[#6974D6]/10',
      items: ['Problem solving', 'Business thinking', 'Real-world application']
    },
    {
      id: '04',
      title: 'Real-World Skills',
      days: 'Days 16–20',
      icon: <BarChart2 className="w-6 h-6" />,
      text: 'text-[#9D68A1]',
      borderGrad: 'from-[#DE6E3C] via-[#9D68A1] to-[#6074D7]',
      lightBg: 'from-[#9D68A1]/10',
      items: ['Finance', 'Creative projects', 'Communication']
    },
    {
      id: '05',
      title: 'Execute & Grow',
      days: 'Days 21–25',
      icon: <Trophy className="w-6 h-6" />,
      text: 'text-brand-purple',
      borderGrad: 'from-brand-purple via-[#875BFB] to-[#DED4FE]',
      lightBg: 'from-brand-purple/10',
      items: ['Final project', 'Progress review', '90-day roadmap']
    }
  ];

  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-white" id="syllabus">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
              Step-by-step
            </div>
            <h2 className="text-[36px] md:text-[48px] font-black text-brand-dark mb-2 leading-[1.15] tracking-tight text-balance">
              A Simple, Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DE6E3C] via-[#9D68A1] to-[#6074D7]">Journey.</span>
            </h2>
            <p className="text-[17px] md:text-[19px] text-gray-500 font-medium leading-relaxed max-w-xl mt-4 text-balance">
              A clear plan. Real progress. Watch how students transform in just 30 days.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95 shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-brand-dark transition-all active:scale-95 shadow-sm">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-10 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth snap-x">
          {phases.map((phase, idx) => (
            
            /* Outer Wrapper for Gradient Border */
            <div key={idx} className={`shrink-0 w-[280px] sm:w-[300px] snap-center p-[1.5px] rounded-[32px] bg-gradient-to-br ${phase.borderGrad} shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow duration-500 group relative`}>
              
              {/* Inner Card with Light Gradient Fade */}
              <div className={`relative h-full bg-white bg-gradient-to-b ${phase.lightBg} to-transparent rounded-[30.5px] p-8 flex flex-col overflow-hidden`}>
                
                {/* Arrow Connector for Desktop (Absolute positioned outside) */}
                {idx < phases.length - 1 && (
                  <div className="absolute top-1/2 -right-5 w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-md z-10 hidden lg:flex translate-x-full">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-[28px] font-black tracking-tighter ${phase.text}`}>{phase.id}</div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-white/50 ${phase.text}`}>
                    {phase.icon}
                  </div>
                </div>

                <h3 className="text-[20px] font-black text-brand-dark mb-1.5 leading-tight">{phase.title}</h3>
                <div className="text-gray-500 text-[14px] font-bold uppercase tracking-widest mb-8">{phase.days}</div>
                
                <ul className="space-y-4 mt-auto relative z-10">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-white shadow-sm border border-white/50 ${phase.text}`}>
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-[14px] font-semibold text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Subtle Hover Glow inside card */}
                <div className={`absolute inset-0 bg-gradient-to-t ${phase.lightBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
