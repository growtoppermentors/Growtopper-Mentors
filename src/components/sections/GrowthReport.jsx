import React from 'react';
import { Sparkles, Trophy, Medal, ChevronRight } from 'lucide-react';

export default function GrowthReport() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FE] border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: The Curious Evaluation Card */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="bg-white rounded-[32px] shadow-2xl shadow-brand-purple/10 border border-brand-purple/10 p-8 md:p-10 transform rotate-[-1deg] max-w-md mx-auto relative z-10 hover:rotate-0 hover:scale-[1.02] transition-all duration-500">
              
              <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-black uppercase tracking-widest mb-3">
                    <Trophy className="w-3 h-3" /> Day 30 Finale
                  </div>
                  <h4 className="font-black text-2xl text-brand-dark leading-none tracking-tight">The Growth Evaluation</h4>
                </div>
              </div>

              {/* Scoring Logic */}
              <div className="space-y-6">
                
                {/* 100 Marks Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-purple font-black text-lg">100</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-[15px] mb-1">One Final Exam</h5>
                    <p className="text-gray-500 text-[13px] font-medium leading-relaxed">100 Total Marks. Divided across core skills (20 marks per skill). A true test of applied knowledge.</p>
                  </div>
                </div>

                {/* Skill Champion Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900 text-[15px] mb-1">The Skill Champions</h5>
                    <p className="text-emerald-700/80 text-[13px] font-medium leading-relaxed">Out of 20 cohort students, the one who scores the absolute highest in a specific skill takes the crown for that domain.</p>
                  </div>
                </div>

                {/* Overall Rank Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Medal className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-amber-900 text-[15px] mb-1">The Grand Rank</h5>
                    <p className="text-amber-700/80 text-[13px] font-medium leading-relaxed">The ultimate leaderboard. Rank 1 goes to the student holding the highest number of Skill Champion titles.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
              The Grand Finale
            </div>
            <h2 className="text-[36px] md:text-[46px] leading-[1.1] font-black text-brand-dark mb-6 tracking-tight text-balance">
              Not Just A Report.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-indigo-500">A Battle of Skills.</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8 text-balance">
              We don't just hand out participation certificates. At the end of 30 days, all 20 students in the cohort face the ultimate Growth Evaluation. It's designed to trigger their curiosity, competitive spirit, and drive for excellence.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <ChevronRight className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[15px] font-bold text-gray-700">100 Marks. 20 Marks per core skill.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <ChevronRight className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[15px] font-bold text-gray-700">Top scorers become Skill Champions.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <ChevronRight className="w-4 h-4 text-brand-purple" />
                </div>
                <span className="text-[15px] font-bold text-gray-700">Most titles won secures Rank 1, 2, and 3.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
