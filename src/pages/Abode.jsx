import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Abode() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans flex flex-col">
      <Navbar onRequestInvite={() => navigate('/counseling-room')} />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center justify-center min-h-screen pt-24 pb-12">
        
        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 mt-4 sm:mt-0">
          <h1 className="text-[32px] leading-[1.15] sm:text-[48px] md:text-[64px] font-black text-brand-dark sm:leading-[1.1] tracking-tight mb-3 sm:mb-4 text-balance">
            Mentor for Everything.<br/>
            Get a mentor for <span className="text-[#5B10FF]">10X growth.</span>
          </h1>
          <p className="text-[13px] sm:text-[16px] text-gray-500 font-medium leading-relaxed mt-4 sm:mt-6 px-4 sm:px-0">
            Not a Coaching Class. Not an App.<br/>
            India's First Mentor-Led Student Growth Platform.
          </p>
        </div>

        {/* The Card */}
        <div className="relative mt-2 sm:mt-4 w-full max-w-[320px] sm:max-w-[340px] mx-auto scale-95 sm:scale-100">
          {/* Start Here Badge (Overlapping) */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#222222] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-sm border border-[#333]">
            START HERE
          </div>

          <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-8 flex flex-col items-center text-center relative z-0">
            
            {/* 1on1 Graphic */}
            <div className="text-[#5B10FF] font-black text-[56px] sm:text-[64px] leading-none tracking-tighter my-5 sm:my-6 flex items-center justify-center">
              1<span className="text-[44px] sm:text-[52px] mx-0.5">on</span>1
            </div>

            {/* Content */}
            <div className="uppercase text-[10px] sm:text-[11px] font-black text-gray-800 tracking-widest mb-2 sm:mb-3">
              PARENT & STUDENT CALL
            </div>
            
            <p className="text-[11px] sm:text-[12px] text-gray-400 font-medium mb-6 sm:mb-8">
              Includes our 30-min student test.
            </p>

            {/* Divider line */}
            <div className="w-full h-px bg-gray-100 mb-6 sm:mb-8"></div>

            {/* Button */}
            <button 
              onClick={() => navigate('/career-counseling')}
              className="w-full bg-[#5B10FF] text-white font-bold text-[14px] sm:text-[15px] py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#4E0EE6] transition-colors shadow-md shadow-[#5B10FF]/20"
            >
              See the plans <ChevronRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
