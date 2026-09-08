import React from 'react';

export default function GrowthSystem() {
  const steps = [
    { title: 'ASSESS', desc: 'Understand the student\'s current situation.' },
    { title: 'PLAN', desc: 'Build a practical growth plan.' },
    { title: 'LEARN', desc: 'Build academic and essential skills.' },
    { title: 'APPLY', desc: 'Turn learning into action.' },
    { title: 'TRACK', desc: 'Monitor consistency and progress.' },
    { title: 'REFLECT', desc: 'Understand what is working.' },
    { title: 'IMPROVE', desc: 'Create the next growth priority.' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile vertical view */}
        <div className="lg:hidden">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {steps.map((step, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-[#6610F2] rounded-full"></div>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm ml-4 md:ml-0 md:group-odd:text-right">
                  <h4 className="font-bold text-[#111115] mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop horizontal view */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-[85%] h-0.5 bg-gradient-to-r from-[#6610F2] via-[#6610F2]/50 to-transparent -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-7 gap-4 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-6 transition-colors ${i < 6 ? 'bg-[#6610F2] text-white' : 'bg-white border-2 border-gray-200 text-gray-300'}`}>
                    {i < 6 ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    )}
                  </div>
                  <div className="text-center px-2">
                    <h4 className="font-bold text-[#111115] text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
