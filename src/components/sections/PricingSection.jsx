import React from 'react';
import { Lock, Award, Check, ArrowRight } from 'lucide-react';

export default function PricingSection({ onRequestInvite }) {
  return (
    <section id="pricing" className="pt-10 md:pt-14 pb-16 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[34px] md:text-[46px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Pricing.</span>
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium max-w-2xl mx-auto text-balance">
            We believe in quality education without the exorbitant fees. But to maintain the standard, admission is strictly by invite.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Pricing Card */}
          <div className="relative rounded-[32px] bg-white border border-gray-200 shadow-xl overflow-hidden group">
            
            {/* Header Area */}
            <div className="p-8 sm:p-10 text-center relative border-b border-gray-100">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-purple via-purple-400 to-[#E96614]"></div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-purple/5 text-brand-purple mb-6 border border-brand-purple/10">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-[24px] font-black text-brand-dark mb-2">30-Day Growth Program</h3>
              <p className="text-gray-500 font-medium text-[15px]">Everything included. No hidden fees.</p>
              
              {/* Blurred Pricing Reveal */}
              <div className="mt-8 mb-4 relative flex flex-col items-center justify-center py-6 px-4 border border-brand-purple/10 bg-brand-purple/5 rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 backdrop-blur-[6px] bg-white/40 flex flex-col items-center justify-center z-10 cursor-pointer transition-all hover:bg-white/30"
                  onClick={onRequestInvite}
                >
                  <Lock className="w-8 h-8 text-brand-purple mb-2" />
                  <span className="font-bold text-brand-dark text-[15px]">Invite Only</span>
                  <span className="text-[13px] font-medium text-gray-500 mt-1">Apply to reveal pricing</span>
                </div>
                
                {/* The blurred price text behind */}
                <div className="flex items-start justify-center gap-1 opacity-40 select-none blur-[4px]">
                  <span className="text-[24px] font-bold text-brand-dark mt-2">₹</span>
                  <span className="text-[64px] font-black text-brand-dark leading-none tracking-tight">XX,XXX</span>
                </div>
              </div>
            </div>

            {/* Features Area — always fully visible */}
            <div className="p-8 sm:p-10 bg-gray-50 flex flex-col sm:flex-row gap-8">
              
              <div className="flex-1 flex justify-center sm:justify-start">
                <div className="flex flex-col space-y-4 w-fit">
                  {[
                    "30 days of structured curriculum",
                    "8 sessions per skill (6 skills)",
                    "1:1 Weekly Mentor check-ins",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-purple stroke-[3px]" />
                      </div>
                      <span className="font-medium text-gray-700 text-[15px] text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex justify-center sm:justify-start">
                <div className="flex flex-col space-y-4 w-fit">
                  {[
                    "Final Day 30 evaluation & rank",
                    "Assured goodies & certificates",
                    "Priority access to next cohort",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-purple stroke-[3px]" />
                      </div>
                      <span className="font-medium text-gray-700 text-[15px] text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA Footer */}
            <div className="p-6 sm:p-8 bg-white text-center border-t border-gray-100">
              <button
                onClick={onRequestInvite}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-brand-purple text-white font-black text-[14px] hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(78,20,249,0.25)] active:scale-95"
              >
                Request Invite Only Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
