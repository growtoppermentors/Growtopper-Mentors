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

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar onRequestInvite={onRequestInvite} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[11px] font-black tracking-widest uppercase mb-4 border border-brand-purple/20">
              🎉 50% OFF TODAY
            </div>
            <h1 className="text-[32px] md:text-[40px] font-black text-brand-dark tracking-tight leading-tight mb-3">
              Transparent Pricing
            </h1>
            <p className="text-[15px] font-medium text-gray-500">
              Compare our guaranteed mentorship plans.
            </p>
          </div>

          {/* Step 1: Setup Call */}
          <div className="rounded-[26px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1.5px] mb-8 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 bg-brand-purple text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm rounded-tl-[24px] rounded-br-xl z-10">
              <Zap className="w-3 h-3 fill-current" /> EARLY BIRD: FIRST 100 ONLY
            </div>
            
            <div className="bg-gradient-to-br from-[#F4F1FF] to-[#FAFAFF] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
              
              <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">STEP 1 • ONE-TIME SETUP</div>
                <h2 className="text-[22px] md:text-[26px] font-black text-brand-dark mb-2">The Setup Call</h2>
                <p className="text-[13px] font-medium text-gray-500 max-w-sm mx-auto md:mx-0">
                  Includes the 30-min AI Test, 60-min Parent & Student goal-setting meeting, and custom study roadmap creation.
                </p>
              </div>
              
              <div className="w-full md:w-[45%] flex flex-col items-center bg-white border border-purple-100 rounded-2xl p-5 shadow-sm">
                
                {/* Progress Bar */}
                <div className="w-full mb-4 border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-end mb-1.5">
                    <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest">Early Bird Seats</span>
                    <span className="text-[10px] font-black text-brand-purple">1 left today</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1.5">
                    <div className="h-full bg-brand-purple rounded-full" style={{ width: '99%' }}></div>
                  </div>
                  <div className="text-[9px] font-medium text-gray-400 text-center">99/100 booked. Refreshes daily.</div>
                </div>

                {/* Price & CTA */}
                <div className="w-full flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[11px] font-bold text-gray-300 line-through">₹4,999</span>
                      <span className="text-[11px] font-bold text-gray-400 line-through">₹999</span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[32px] md:text-[38px] font-black text-brand-purple leading-none tracking-tighter">₹1</span>
                    </div>
                  </div>
                  <button onClick={() => window.open('https://pages.razorpay.com/setupcall', '_blank')} className="bg-brand-purple text-white px-5 py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#4E0EE6] transition-colors shadow-md shadow-brand-purple/25 flex-1 max-w-[160px] flex items-center justify-center gap-1.5">
                    Book for ₹1 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Step 2: 30-Day Growth Challenge */}
          <div className="rounded-[26px] bg-gradient-to-br from-orange-200 via-transparent to-orange-100 p-[1.5px] mb-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-[#FFF4ED] to-[#FFFaf0] rounded-[24px] p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">STEP 2 • BUILD THE FOUNDATION</div>
                <h2 className="text-[22px] md:text-[26px] font-black text-brand-dark mb-2">30-Day Growth Challenge</h2>
                <p className="text-[13px] font-medium text-gray-500 max-w-lg mx-auto">
                  An intensive 30-day program where your child learns 6 core life skills under the direct guidance of a dedicated mentor.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                <div className="w-full md:w-3/5 text-left bg-white/60 rounded-2xl p-5 border border-orange-50">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5 text-orange-500" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 leading-tight">Learn 6 Core Life Skills (Finance, Communication, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5 text-orange-500" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 leading-tight">Daily guided assignments & tracking</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 mt-0.5 rounded-full bg-orange-100 flex items-center justify-center shrink-0"><Check className="w-2.5 h-2.5 text-orange-500" strokeWidth={3} /></div>
                      <span className="text-[13px] font-bold text-gray-800 leading-tight">Weekly 1-on-1 performance review calls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col items-center justify-center bg-white rounded-2xl p-5 border border-orange-100 shadow-sm relative overflow-hidden group">
                  {/* Premium Locked State background effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative flex flex-col items-center z-10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 flex items-center justify-center mb-3 shadow-sm">
                      <Lock className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="text-[12px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 uppercase tracking-widest mb-1">
                      Invite Only
                    </div>
                    <div className="text-[11px] font-medium text-gray-400 mb-4 text-center">
                      Pricing revealed after Setup Call
                    </div>
                    <button onClick={onRequestInvite} className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold text-[13px] hover:bg-gray-800 transition-colors shadow-md w-full max-w-[180px]">
                      Request Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Choose Monthly Plan */}
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="text-center pt-8 md:pt-10 pb-6 border-b border-gray-100">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">STEP 3 • CHOOSE MONTHLY PLAN</div>
              <h2 className="text-[20px] font-black text-brand-dark">Long-Term Mentorship</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="w-2/5 p-6 font-black text-[15px] text-gray-800 border-b border-r border-gray-100 bg-gray-50/30">Features</th>
                    <th className="w-[30%] p-6 text-center border-b border-r border-gray-100 bg-white">
                      <div className="text-[14px] font-black text-gray-800 mb-1">Elite</div>
                      <div className="text-[12px] font-bold text-gray-300 line-through mb-0.5">₹1,999</div>
                      <div className="text-[20px] font-black text-brand-dark">₹999<span className="text-[12px] text-gray-400 font-medium">/mo</span></div>
                    </th>
                    <th className="w-[30%] p-0 text-center border-b border-gray-100 bg-[#F9F4FF] relative">
                      <div className="absolute top-0 left-0 right-0 bg-[#FBBF24] text-[9px] font-black text-white uppercase tracking-widest py-1">PRO PLAN</div>
                      <div className="pt-8 pb-6 px-6">
                        <div className="text-[14px] font-black text-brand-purple mb-1">Pro</div>
                        <div className="text-[12px] font-bold text-purple-200 line-through mb-0.5">₹2,999</div>
                        <div className="text-[20px] font-black text-brand-purple">₹1,499<span className="text-[12px] text-brand-purple/60 font-medium">/mo</span></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[13px] font-bold text-gray-600">
                  
                  {/* General Features */}
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">Custom daily study plan</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">Weekly 1-on-1 mentor calls</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">Mental wellness tracking</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">Parent progress reports</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-800">Monthly</td>
                    <td className="p-4 border-b border-gray-100 text-center text-brand-purple bg-[#F9F4FF]">Bi-weekly</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">Priority counselor access</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6">VIP 'Explore' Discounts</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  
                  {/* The 6 Skills (Only in Pro) */}
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Communication & Public Speaking</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Financial Literacy</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Critical Thinking</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Digital Literacy</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Emotional Intelligence</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-r border-gray-100 pl-6 text-brand-dark">Entrepreneurship & Leadership</td>
                    <td className="p-4 border-b border-r border-gray-100 text-center text-gray-300">-</td>
                    <td className="p-4 border-b border-gray-100 text-center bg-[#F9F4FF]"><Check className="w-4 h-4 text-brand-purple mx-auto" strokeWidth={3} /></td>
                  </tr>
                  
                </tbody>
                <tfoot>
                  <tr>
                    <td className="p-4 border-r border-gray-100 bg-gray-50/30"></td>
                    <td className="p-6 border-r border-gray-100 text-center">
                      <button onClick={() => window.open('https://pages.razorpay.com/growtoppereliteplan', '_blank')} className="bg-gray-100 text-gray-800 px-8 py-2.5 rounded-xl font-bold text-[13px] hover:bg-gray-200 transition-colors w-full">
                        Start Elite
                      </button>
                    </td>
                    <td className="p-6 text-center bg-[#F9F4FF]">
                      <button onClick={() => window.open('https://pages.razorpay.com/growtopperproplan', '_blank')} className="bg-brand-purple text-white px-8 py-2.5 rounded-xl font-bold text-[13px] hover:bg-[#4E0EE6] transition-colors shadow-md shadow-brand-purple/20 w-full">
                        Get Pro
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            
          </div>

        </div>
        <FAQ />
      </main>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
}
