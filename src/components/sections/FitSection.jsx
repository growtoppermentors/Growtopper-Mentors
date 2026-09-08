import React from 'react';

export default function FitSection() {
  const goodFit = [
    'Grades 6–12',
    'Needs better consistency',
    'Struggles with routine',
    'Needs guidance beyond academics',
    'Wants to build confidence',
    'Can participate in a structured program',
    'Has school/tuition but needs better execution'
  ];

  const notRight = [
    'Looking only for subject tuition',
    'Looking only for exam coaching',
    'Expecting guaranteed marks',
    'Not ready to participate'
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] leading-tight font-bold text-[#111115]">
            Is Growtopper Right for Your Child?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-[#F4F2FF] rounded-3xl p-8 md:p-10 border border-[#6610F2]/10">
            <h3 className="text-lg font-bold text-[#6610F2] mb-6 flex items-center gap-2 tracking-wide uppercase">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              Good Fit
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#6610F2] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[#111115] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-500 mb-6 flex items-center gap-2 tracking-wide uppercase">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              May Not Be Right
            </h3>
            <ul className="space-y-4">
              {notRight.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  <span className="text-gray-600 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
