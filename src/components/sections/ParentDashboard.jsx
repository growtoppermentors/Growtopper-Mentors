import React from 'react';

export default function ParentDashboard() {
  return (
    <section className="py-16 md:py-24 bg-[#111115] text-white" id="parents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] leading-tight font-bold mb-6">
            Parents Shouldn't Have to Guess If Their Child Is Progressing.
          </h2>
          <p className="text-xl text-gray-400 font-medium text-balance">
            Complete visibility into what is actually changing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Dashboard Mockup */}
          <div className="bg-[#1C1C22] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
            <div className="border-b border-gray-800 px-6 py-4 flex items-center justify-between bg-[#18181D]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6610F2] flex items-center justify-center font-bold text-sm">P</div>
                <span className="font-semibold text-sm tracking-wide">Parent Dashboard</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="md:col-span-2 space-y-6">
                {/* Academic & Skills Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#24242C] p-5 rounded-2xl border border-gray-800">
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-3">Academic</div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="text-sm font-semibold">Math + Science</div>
                      <div className="text-emerald-400 font-bold text-sm">On Track</div>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="bg-[#24242C] p-5 rounded-2xl border border-gray-800">
                    <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-3">Execution</div>
                    <div className="flex justify-between items-end mb-2">
                      <div className="text-sm font-semibold">Task Completion</div>
                      <div className="text-[#6610F2] font-bold text-sm">92%</div>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#6610F2] rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>

                {/* Mentor Observation */}
                <div className="bg-gradient-to-r from-[#2A1654] to-[#24242C] p-6 rounded-2xl border border-[#6610F2]/30">
                  <div className="text-xs text-[#9B7BFF] uppercase font-bold tracking-wider mb-3">Mentor Observation</div>
                  <p className="text-gray-300 font-medium text-sm leading-relaxed">
                    "Great improvement in daily routine this week. Finished all science applications on time. Next focus: starting assignments earlier to reduce evening rush."
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#24242C] p-5 rounded-2xl border border-gray-800 h-full">
                  <div className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-4">Next Priority</div>
                  <div className="flex flex-col gap-3">
                    <div className="w-full p-4 rounded-xl bg-[#1C1C22] border border-[#6610F2]/50 text-center">
                      <span className="font-bold text-[#9B7BFF]">Consistent Start Time</span>
                    </div>
                    <div className="w-full p-3 rounded-xl bg-[#1C1C22] border border-gray-800 text-center opacity-50">
                      <span className="text-sm font-semibold text-gray-500">Weekend Review</span>
                    </div>
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
