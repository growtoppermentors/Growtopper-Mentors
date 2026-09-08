import React from 'react';
import { OUTCOMES } from '../../data/content';

export default function Outcomes() {
  return (
    <section className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] leading-tight font-bold text-[#111115]">
            What Can Change in 30 Days?
          </h2>
          <p className="mt-4 text-gray-500 font-medium">We do not promise guaranteed marks. We build the foundation for them.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {OUTCOMES.map((outcome, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-[#F4F2FF] flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-[#6610F2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-[#111115] tracking-wider uppercase mb-2">{outcome.title}</h3>
              <p className="text-gray-600 font-medium">{outcome.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
