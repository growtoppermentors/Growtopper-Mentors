import React from 'react';

export default function Mentorship() {
  const steps = [
    { title: 'Observe', active: true },
    { title: 'Ask', active: false },
    { title: 'Guide', active: false },
    { title: 'Challenge', active: false },
    { title: 'Track', active: false }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="mentorship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-[44px] leading-tight font-bold text-[#111115] mb-8">
              A Mentor Who Helps Your Child Execute.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed mb-10 text-balance">
              <p>Students don't only need someone to teach them.</p>
              <p>They need someone who notices when they're stuck, helps them understand the obstacle, challenges them to improve and keeps them accountable.</p>
            </div>

            {/* Mentorship Core Concept Flow */}
            <div className="flex flex-wrap items-center gap-2">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    step.active ? 'bg-[#6610F2] text-white' : 'bg-gray-50 text-gray-500 border border-gray-200'
                  }`}>
                    {step.title}
                  </div>
                  {i < steps.length - 1 && (
                    <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#F4F2FF] rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#6610F2] rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-[#F4F2FF]">
                  M
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-800">Your Mentor</div>
                  <div className="text-sm text-gray-500 font-medium">Growtopper Guide</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 relative before:absolute before:-top-3 before:left-8 before:w-6 before:h-6 before:bg-gray-50 before:rotate-45 before:border-l before:border-t before:border-gray-100">
                <p className="text-gray-700 font-medium relative z-10">
                  "I noticed you struggled with consistency on Thursday. Let's break down tomorrow's task into two smaller 20-minute chunks. You've got this."
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 mt-2 text-sm font-semibold text-[#6610F2]">
                <span>Weekly Check-in</span>
                <span className="w-2 h-2 rounded-full bg-[#6610F2]"></span>
                <span>Daily Tracking</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
