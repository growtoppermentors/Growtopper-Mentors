import React from 'react';

export default function GrowthReport() {
  const reportItems = [
    'Student Profile', 'Academic Progress', 'Productivity & Habits',
    'Essential Skills', 'Mentor Observations', 'Key Improvements',
    'Areas to Work On', 'Next Steps', '90-Day Growth Roadmap'
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Report Mockup */}
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200 border border-gray-200 p-8 transform rotate-[-2deg] max-w-md mx-auto">
              <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                <div>
                  <h4 className="font-bold text-xl text-[#111115] mb-1">30-Day Growth Report</h4>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Confidential</div>
                </div>
                <div className="w-8 h-8 rounded bg-[#6610F2] text-white flex items-center justify-center font-bold">G</div>
              </div>

              <div className="space-y-4">
                {reportItems.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6610F2]"></div>
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                    <div className="flex-1 border-b border-dashed border-gray-200 mt-1"></div>
                  </div>
                ))}
                <div className="pt-2 text-xs font-bold text-gray-300 text-center uppercase tracking-widest">+ 4 more sections</div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="p-4 bg-[#F4F2FF] rounded-xl border border-[#6610F2]/10">
                  <div className="text-xs font-bold text-[#6610F2] uppercase tracking-wider mb-1">90-Day Roadmap</div>
                  <div className="text-sm font-semibold text-[#111115]">Ready for Advanced Application Phase</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-[44px] leading-tight font-bold text-[#111115] mb-6">
              30 Days Should End With Clarity.
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 text-balance">
              Every 30-Day Challenge concludes with a comprehensive Growth Report. We track developmental indicators—not just arbitrary scores—to show you exactly what changed and what to focus on next.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#6610F2] tracking-wide uppercase">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              No scientific precision claims. Just clear, actionable observation.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
