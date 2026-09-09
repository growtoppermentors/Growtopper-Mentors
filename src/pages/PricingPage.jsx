import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronRight, Zap } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function PricingPage({ onRequestInvite }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar onRequestInvite={onRequestInvite} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
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
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden mb-8 relative">
            <div className="absolute top-0 left-0 bg-brand-purple text-white px-4 py-1.5 rounded-br-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3 h-3 fill-current" /> EARLY BIRD: FIRST 100 ONLY
            </div>
            
            <div className="p-8 md:p-10 text-center">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 mt-2">STEP 1 • ONE-TIME SETUP</div>
              <h2 className="text-[24px] md:text-[28px] font-black text-brand-dark mb-3">The Setup Call</h2>
              <p className="text-[14px] font-medium text-gray-500 max-w-lg mx-auto mb-8">
                Includes the 30-min AI Test, 60-min Parent & Student goal-setting meeting, and custom study roadmap creation.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50/50 border border-gray-100 rounded-2xl p-6">
                
                {/* Progress Bar */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8 md:border-r border-gray-200 text-left">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[11px] font-black text-gray-800 uppercase tracking-widest">Early Bird Seats</span>
                    <span className="text-[11px] font-black text-brand-purple">1 left today</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-purple rounded-full" style={{ width: '99%' }}></div>
                  </div>
                  <div className="text-[10px] font-medium text-gray-400 text-center">99/100 booked. Availability refreshes daily.</div>
                </div>

                {/* Price & CTA */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[14px] font-bold text-gray-300 line-through">₹4,999</span>
                    <span className="text-[14px] font-bold text-gray-400 line-through">₹999</span>
                  </div>
                  <div className="flex items-end justify-center gap-2 mb-4 relative">
                    <span className="text-[48px] font-black text-brand-purple leading-none tracking-tighter">₹1</span>
                    <span className="text-[10px] font-black text-brand-purple uppercase tracking-widest mb-2 border border-brand-purple/20 bg-brand-purple/5 px-2 py-0.5 rounded">OFFER<br/>ONE TIME</span>
                  </div>
                  <button onClick={() => window.open('https://pages.razorpay.com/setupcall', '_blank')} className="bg-brand-purple text-white px-8 py-3 rounded-xl font-bold text-[14px] hover:bg-[#4E0EE6] transition-colors shadow-lg shadow-brand-purple/25 w-full max-w-[200px] flex items-center justify-center gap-2">
                    Book for ₹1 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Step 2: 30-Day Growth Challenge */}
          <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden mb-8">
            <div className="p-8 md:p-10 text-center">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">STEP 2 • BUILD THE FOUNDATION</div>
              <h2 className="text-[24px] md:text-[28px] font-black text-brand-dark mb-3">30-Day Growth Challenge</h2>
              <p className="text-[14px] font-medium text-gray-500 max-w-lg mx-auto mb-8">
                An intensive 30-day program where your child learns 6 core life skills under the direct guidance of a dedicated mentor.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-3/5 text-left bg-[#F9F4FF] rounded-2xl p-6 border border-brand-purple/10">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center"><Check className="w-3 h-3 text-brand-purple" strokeWidth={3} /></div>
                      <span className="text-[14px] font-bold text-gray-800">Learn 6 Core Life Skills (Finance, Communication, etc.)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center"><Check className="w-3 h-3 text-brand-purple" strokeWidth={3} /></div>
                      <span className="text-[14px] font-bold text-gray-800">Daily guided assignments & tracking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center"><Check className="w-3 h-3 text-brand-purple" strokeWidth={3} /></div>
                      <span className="text-[14px] font-bold text-gray-800">Weekly 1-on-1 performance review calls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col items-center">
                  <div className="text-[14px] font-bold text-gray-400 line-through mb-1">₹9,999</div>
                  <div className="text-[48px] font-black text-brand-dark leading-none tracking-tighter mb-4">₹4,999</div>
                  <button onClick={() => navigate('/abode')} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-[14px] hover:bg-gray-800 transition-colors shadow-lg w-full max-w-[200px]">
                    Join Challenge
                  </button>
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
      </main>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
}
