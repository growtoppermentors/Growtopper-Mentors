import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight, Zap, Lock } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQ from '../components/sections/FAQ';

export default function PricingPage({ onRequestInvite }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const daysPassed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const bookedSeats = Math.min(99, 40 + (daysPassed % 6) * 10);
  const seatsLeft = 100 - bookedSeats;

  return (
    <div className="min-h-[100dvh] bg-[#FAFAFA] font-sans">
      <Navbar onRequestInvite={onRequestInvite} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[11px] font-black tracking-widest uppercase mb-4 border border-brand-purple/20 shadow-sm">
              🎉 50% OFF TODAY • 100% MONEY-BACK GUARANTEE
            </div>
            <h1 className="text-[32px] md:text-[42px] font-black text-brand-dark tracking-tight leading-tight mb-3">
              Transparent Pricing
            </h1>
            <p className="text-[15px] font-medium text-gray-500 max-w-lg mx-auto">
              Compare our guaranteed mentorship plans. No hidden fees or surprises.
            </p>
          </div>

          {/* Step 1: Setup Call */}
          <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/30 via-white/5 to-[#5B10FF]/20 p-[1.5px] mb-8 relative shadow-[0_12px_40px_rgba(91,16,255,0.08)] hover:shadow-[0_16px_50px_rgba(91,16,255,0.14)] transition-all">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-brand-purple to-[#875BFB] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm rounded-tl-[26px] rounded-br-xl z-10 border-b border-r border-white/20">
              <Zap className="w-3 h-3 fill-current" /> EARLY BIRD: FIRST 100 ONLY
            </div>
            
            <div className="pricing-setup-card bg-gradient-to-br from-[#F4F1FF] to-[#FAFAFF] rounded-[26px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              
              <div className="flex-1 text-center md:text-left mt-5 md:mt-0">
                <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">STEP 1 • ONE-TIME SETUP</div>
                <h2 className="text-[24px] md:text-[28px] font-black text-brand-dark mb-2 tracking-tight">The Setup Call</h2>
                <p className="text-[13px] md:text-[14px] font-medium text-gray-600 dark:text-gray-300 max-w-sm mx-auto md:mx-0 leading-relaxed mb-4">
                  Includes the 30-min AI Test, 60-min Parent & Student goal-setting meeting, and custom study roadmap creation.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-[11px] font-bold text-gray-700 dark:text-gray-300">
                  <span className="inline-flex items-center gap-1 bg-white/80 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-purple-100 dark:border-purple-900/40">
                    <Check className="w-3 h-3 text-[#5B10FF]" strokeWidth={3} /> 30-Min AI SWOT Test
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/80 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-purple-100 dark:border-purple-900/40">
                    <Check className="w-3 h-3 text-[#5B10FF]" strokeWidth={3} /> 60-Min Mentor Call
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-[45%] flex flex-col items-center bg-white dark:bg-[#151928] border border-purple-100 dark:border-purple-900/40 rounded-2xl p-6 shadow-sm">
                
                {/* Progress Bar */}
                <div className="w-full mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[10px] font-black text-gray-800 dark:text-gray-200 uppercase tracking-widest">Early Bird Seats</span>
                    <span className="text-[10px] font-black text-brand-purple">{seatsLeft} left today</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-gradient-to-r from-brand-purple to-[#875BFB] rounded-full transition-all duration-1000 shadow-sm" style={{ width: `${bookedSeats}%` }}></div>
                  </div>
                  <div className="text-[9px] font-medium text-gray-500 dark:text-gray-400 text-center">{bookedSeats}/100 booked. Refreshes daily.</div>
                </div>

                {/* Price & CTA */}
                <div className="w-full flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[12px] font-bold text-gray-400 line-through">₹999</span>
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded">SAVE 99%</span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[34px] md:text-[40px] font-black text-brand-purple leading-none tracking-tighter">₹1</span>
                    </div>
                    <span className="text-[9px] font-medium text-gray-400 mt-1">One-time payment</span>
                  </div>
                  <button 
                    onClick={() => window.open('https://pages.razorpay.com/setupcall', '_blank')} 
                    className="bg-gradient-to-r from-brand-purple via-[#6B17FF] to-[#875BFB] text-white px-5 py-3 rounded-xl font-bold text-[13px] hover:brightness-110 transition-all shadow-md shadow-brand-purple/30 flex-1 max-w-[170px] flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    Book for ₹1 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-3 text-[10px] font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1">
                  <span>🔒 256-bit Secure Razorpay Checkout</span>
                </div>
              </div>

            </div>
          </div>

          {/* Step 2: 30-Day Growth Challenge */}
          <div className="rounded-[28px] bg-gradient-to-br from-orange-400/25 via-amber-400/10 to-orange-400/20 p-[1.5px] mb-8 shadow-[0_12px_40px_rgba(249,115,22,0.06)] hover:shadow-[0_16px_50px_rgba(249,115,22,0.12)] transition-shadow">
            <div className="pricing-setup-card bg-gradient-to-br from-[#FFF4ED] to-[#FFFaf0] rounded-[26px] p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">STEP 2 • BUILD THE FOUNDATION</div>
                <h2 className="text-[24px] md:text-[28px] font-black text-brand-dark mb-2 tracking-tight">30-Day Growth Challenge</h2>
                <p className="text-[13px] md:text-[14px] font-medium text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                  An intensive 30-day program where your child learns 6 core life skills under the direct guidance of a dedicated mentor.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                <div className="w-full md:w-3/5 text-left bg-white/70 dark:bg-white/[0.03] rounded-2xl p-6 border border-orange-100/80 dark:border-orange-900/30 flex flex-col justify-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-3">CORE CURRICULUM HIGHLIGHTS</div>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 mt-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center shrink-0 border border-orange-200/50"><Check className="w-2.5 h-2.5 text-orange-600 dark:text-orange-400" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200 leading-tight">Master 6 Essential Skills (Finance, Communication, AI & Strategy)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 mt-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center shrink-0 border border-orange-200/50"><Check className="w-2.5 h-2.5 text-orange-600 dark:text-orange-400" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200 leading-tight">Daily structured assignments with personalized tracking</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-4.5 h-4.5 mt-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center shrink-0 border border-orange-200/50"><Check className="w-2.5 h-2.5 text-orange-600 dark:text-orange-400" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200 leading-tight">Weekly 1-on-1 mentor performance review calls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col items-center justify-center bg-white dark:bg-[#16141F] rounded-2xl p-6 border border-orange-100 dark:border-orange-900/30 shadow-sm relative overflow-hidden group">
                  <div className="relative flex flex-col items-center z-10 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 dark:from-orange-950/60 dark:to-amber-950/40 border border-orange-200/80 dark:border-orange-800/40 flex items-center justify-center mb-3 shadow-sm">
                      <Lock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="text-[12px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 uppercase tracking-widest mb-1">
                      Invite Only
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 mb-4 max-w-[180px]">
                      Pricing unlocked directly after your Setup Call
                    </div>
                    <button
                      onClick={onRequestInvite}
                      onMouseEnter={() => import('../components/ui/ApplicationModal')}
                      onTouchStart={() => import('../components/ui/ApplicationModal')}
                      className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md w-full max-w-[180px] active:scale-95"
                    >
                      Request Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Choose Monthly Plan */}
          <div className="rounded-[28px] md:rounded-[36px] bg-gradient-to-b from-[#5B10FF]/25 via-white/5 to-[#5B10FF]/15 p-[1.5px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_0_40px_rgba(91,16,255,0.12)] overflow-hidden">
            <div className="pricing-tier-card bg-white rounded-[26.5px] md:rounded-[34.5px] overflow-hidden">
              <div className="text-center pt-8 md:pt-10 pb-6 border-b border-gray-100 dark:border-gray-800/80 px-4">
                <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">STEP 3 • CHOOSE MONTHLY PLAN</div>
                <h2 className="text-[22px] md:text-[26px] font-black text-brand-dark mb-1">Long-Term Mentorship</h2>
                <p className="text-[13px] font-medium text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                  Continue your trajectory with monthly 1-on-1 mentorship after completing the 30-Day Growth Challenge.
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[620px]">
                  <thead>
                    <tr>
                      <th className="w-[38%] p-5 md:p-6 font-black text-[11px] md:text-[12px] text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-r border-gray-100 dark:border-gray-800/80 align-bottom">
                        Features & Curriculums
                      </th>
                      
                      {/* Elite Column Header */}
                      <th className="w-[31%] p-5 md:p-6 text-center border-b border-r border-gray-100 dark:border-gray-800/80 bg-white dark:bg-transparent align-bottom">
                        <div className="flex flex-col items-center">
                          <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1.5">
                            FOUNDATION TIER
                          </span>
                          <div className="text-[18px] md:text-[20px] font-black text-gray-800 dark:text-gray-100 mb-2.5">
                            Elite
                          </div>
                          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-gray-100/90 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 text-gray-500 dark:text-gray-400">
                            <Lock className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Locked</span>
                          </div>
                        </div>
                      </th>

                      {/* Pro Column Header (Standout Premium) */}
                      <th className="w-[31%] p-0 text-center border-b border-[#5B10FF]/25 dark:border-[#5B10FF]/35 pro-column-highlight relative align-bottom">
                        {/* Top Radiant Gold Banner */}
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-[9px] font-black text-gray-900 uppercase tracking-widest py-1 shadow-sm">
                          PRO PLAN • ALL-INCLUSIVE
                        </div>
                        <div className="pt-8 pb-6 px-5 md:px-6 flex flex-col items-center">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#5B10FF] dark:text-[#C4B5FD] mb-1.5">
                            MOST COMPREHENSIVE
                          </span>
                          <div className="text-[18px] md:text-[20px] font-black text-[#5B10FF] dark:text-[#C4B5FD] mb-2.5">
                            Pro
                          </div>
                          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#5B10FF]/15 border border-[#5B10FF]/30 text-[#5B10FF] dark:text-[#C4B5FD] shadow-sm shadow-[#5B10FF]/20">
                            <Lock className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Locked</span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[13px] font-semibold text-gray-600 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-800/70">
                    
                    {/* Category Divider 1 */}
                    <tr className="bg-gray-50/50 dark:bg-white/[0.01]">
                      <td colSpan={3} className="px-6 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        Core Mentorship Features
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Custom daily study plan</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center">
                        <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto text-gray-600 dark:text-gray-300">
                          <Check className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
                        </div>
                      </td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Weekly 1-on-1 mentor calls</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center">
                        <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto text-gray-600 dark:text-gray-300">
                          <Check className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
                        </div>
                      </td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Mental wellness tracking</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center">
                        <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto text-gray-600 dark:text-gray-300">
                          <Check className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" strokeWidth={2.5} />
                        </div>
                      </td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Parent progress reports</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-700 dark:text-gray-300 font-bold">Monthly</td>
                      <td className="p-4 text-center text-brand-purple dark:text-[#C4B5FD] font-bold pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">Bi-weekly</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Priority counselor access</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">VIP 'Explore' Discounts</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    
                    {/* Category Divider 2 */}
                    <tr className="bg-purple-50/30 dark:bg-purple-950/20">
                      <td colSpan={3} className="px-6 py-2.5 text-[10px] font-black uppercase tracking-wider text-[#5B10FF] dark:text-[#C4B5FD] flex items-center gap-1.5">
                        <Zap className="w-3 h-3" /> The 6 Real-World Life Skills (Pro Exclusive)
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Communication & Public Speaking</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Financial Literacy</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Critical Thinking</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Digital Literacy</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Emotional Intelligence</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/70 text-gray-800 dark:text-gray-200">Entrepreneurship & Leadership</td>
                      <td className="p-4 border-r border-gray-100 dark:border-gray-800/70 text-center text-gray-400 dark:text-gray-600 font-semibold">—</td>
                      <td className="p-4 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#5B10FF] to-[#875BFB] flex items-center justify-center mx-auto text-white shadow-sm shadow-[#5B10FF]/30">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </td>
                    </tr>
                    
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-100 dark:border-gray-800/80">
                      <td className="p-4 md:px-6 border-r border-gray-100 dark:border-gray-800/80 text-[11px] font-bold text-gray-400">Monthly Enrollment</td>
                      <td className="p-5 border-r border-gray-100 dark:border-gray-800/80 text-center">
                        <button disabled className="bg-gray-100/90 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 px-6 py-2.5 rounded-xl font-bold text-[12px] border border-gray-200 dark:border-gray-700 cursor-not-allowed w-full flex justify-center items-center gap-2 shadow-sm">
                          <Lock className="w-3.5 h-3.5" /> Unlocks Post-Challenge
                        </button>
                      </td>
                      <td className="p-5 text-center pro-column-highlight border-l border-[#5B10FF]/25 dark:border-[#5B10FF]/35">
                        <button disabled className="bg-brand-purple/15 text-brand-purple dark:text-[#C4B5FD] px-6 py-2.5 rounded-xl font-bold text-[12px] border border-brand-purple/30 cursor-not-allowed w-full flex justify-center items-center gap-2 shadow-sm shadow-brand-purple/20">
                          <Lock className="w-3.5 h-3.5 text-brand-purple dark:text-[#C4B5FD]" /> Unlocks Post-Challenge
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              {/* Trust Reassurance Strip */}
              <div className="p-4 md:p-5 bg-gray-50/70 dark:bg-white/[0.02] border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[11px] md:text-[12px] font-semibold text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#5B10FF]" strokeWidth={3} />
                  <span>No Lock-ins • Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#5B10FF]" strokeWidth={3} />
                  <span>1-on-1 Dedicated Mentors Only</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#5B10FF]" strokeWidth={3} />
                  <span>Weekly Parent Reports Included</span>
                </div>
              </div>

            </div>
          </div>

        </div>
        <FAQ />
      </main>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
}
