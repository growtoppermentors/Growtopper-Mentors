import React from 'react';
import { WEEKLY_SCHEDULE } from '../../data/content';

export default function WeeklyExperience() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] leading-tight font-bold text-[#111115]">
            A Week in the Life.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            {WEEKLY_SCHEDULE.map((day, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row sm:items-center p-5 sm:p-6 transition-colors ${
                  idx !== WEEKLY_SCHEDULE.length - 1 ? 'border-b border-gray-100' : ''
                } ${
                  day.day === 'SUNDAY' ? 'bg-gray-50' : 'hover:bg-[#F9FAFB]'
                }`}
              >
                <div className="w-40 shrink-0 mb-2 sm:mb-0">
                  <span className={`text-sm font-bold tracking-wider ${
                    day.day === 'SUNDAY' ? 'text-gray-400' : 'text-[#6610F2]'
                  }`}>
                    {day.day}
                  </span>
                </div>
                <div className="flex-1">
                  <span className={`font-semibold ${
                    day.day === 'SUNDAY' ? 'text-gray-500' : 'text-gray-800'
                  }`}>
                    {day.task}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
