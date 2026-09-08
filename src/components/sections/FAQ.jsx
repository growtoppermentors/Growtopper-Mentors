import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../../data/content';

const CATEGORIES = ['All', 'Program', 'Results', 'Parents', 'Process'];

const faqMeta = [
  { category: 'Program',  accent: 'from-[#4E14F9]/10 via-[#B28BFF]/5', border: 'border-[#4E14F9]/20', chip: 'bg-[#4E14F9]/10 text-[#4E14F9]' },
  { category: 'Program',  accent: 'from-[#4E14F9]/10 via-[#B28BFF]/5', border: 'border-[#4E14F9]/20', chip: 'bg-[#4E14F9]/10 text-[#4E14F9]' },
  { category: 'Process',  accent: 'from-[#E96614]/10 via-[#F69748]/5', border: 'border-[#E96614]/20', chip: 'bg-[#E96614]/10 text-[#E96614]' },
  { category: 'Process',  accent: 'from-[#E96614]/10 via-[#F69748]/5', border: 'border-[#E96614]/20', chip: 'bg-[#E96614]/10 text-[#E96614]' },
  { category: 'Results',  accent: 'from-[#74AB55]/10 via-[#9DC67F]/5', border: 'border-[#74AB55]/20', chip: 'bg-[#74AB55]/10 text-[#74AB55]' },
  { category: 'Parents',  accent: 'from-[#9D68A1]/10 via-[#C49EC8]/5', border: 'border-[#9D68A1]/20', chip: 'bg-[#9D68A1]/10 text-[#9D68A1]' },
  { category: 'Parents',  accent: 'from-[#9D68A1]/10 via-[#C49EC8]/5', border: 'border-[#9D68A1]/20', chip: 'bg-[#9D68A1]/10 text-[#9D68A1]' },
  { category: 'Program',  accent: 'from-[#4E14F9]/10 via-[#B28BFF]/5', border: 'border-[#4E14F9]/20', chip: 'bg-[#4E14F9]/10 text-[#4E14F9]' },
  { category: 'Results',  accent: 'from-[#74AB55]/10 via-[#9DC67F]/5', border: 'border-[#74AB55]/20', chip: 'bg-[#74AB55]/10 text-[#74AB55]' },
  { category: 'Results',  accent: 'from-[#74AB55]/10 via-[#9DC67F]/5', border: 'border-[#74AB55]/20', chip: 'bg-[#74AB55]/10 text-[#74AB55]' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  const enriched = FAQS.map((f, i) => ({ ...f, ...faqMeta[i] }));
  const filtered = activeCategory === 'All'
    ? enriched
    : enriched.filter(f => f.category === activeCategory);

  return (
    <section className="pt-10 md:pt-14 pb-16 md:pb-24 bg-[#F8F9FE]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-5">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-[32px] md:text-[44px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance mb-4">
            Everything You <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Need to Know.</span>
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[17px] font-medium max-w-lg mx-auto text-balance">
            Real answers to the questions parents ask us every day before joining.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIdx(null); }}
              className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/20'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-purple/30 hover:text-brand-purple'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Cards */}
        <div className="space-y-3">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? `${faq.border} shadow-md bg-gradient-to-br ${faq.accent} bg-white`
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    {/* Category chip */}
                    <span className={`hidden sm:inline-block shrink-0 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${faq.chip}`}>
                      {faq.category}
                    </span>
                    <span className={`font-bold text-[14px] sm:text-[15px] leading-snug transition-colors ${isOpen ? 'text-brand-dark' : 'text-gray-800 group-hover:text-brand-dark'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-brand-purple text-white rotate-180' : 'bg-gray-100 text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className={`h-px w-full mb-4 ${faq.border} border-t`}></div>
                    <p className="text-gray-600 font-medium leading-relaxed text-[14px] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white border border-brand-purple/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6 text-brand-purple" />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-black text-brand-dark text-[16px] mb-0.5">Still have questions?</p>
            <p className="text-gray-500 text-[14px] font-medium">We're happy to help. Reach out and our team will respond within a few hours.</p>
          </div>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-brand-purple text-white font-bold text-[14px] hover:opacity-90 transition-opacity shadow-md shadow-brand-purple/25 whitespace-nowrap"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
