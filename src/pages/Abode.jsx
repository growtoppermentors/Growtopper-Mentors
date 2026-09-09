import React from 'react';
import { ChevronRight, Check, Building2, MonitorPlay, Zap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Abode() {
  const navigate = useNavigate();

  const features = [
    { name: "Personalized Study Plans", offline: false, online: false, growtopper: true },
    { name: "1-on-1 Dedicated Mentor", offline: false, online: false, growtopper: true },
    { name: "Daily Accountability", offline: false, online: false, growtopper: true },
    { name: "Mental Wellness Support", offline: false, online: false, growtopper: true },
    { name: "Parent Weekly Reports", offline: false, online: true, growtopper: true },
    { name: "Doubt Clearing", offline: true, online: true, growtopper: true },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans flex flex-col">
      <Navbar onRequestInvite={() => navigate('/counseling-room')} />
      
      {/* Hero Section (Strictly Full Viewport Height) */}
      <section className="px-4 w-full flex flex-col items-center justify-center min-h-[100dvh] pt-20 pb-4 max-w-7xl mx-auto">
        
        {/* Hero Headings */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 w-full mt-auto">
          <h1 className="text-[28px] sm:text-[36px] md:text-[46px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3 text-balance">
            Mentor for Everything.<br/>
            Get a mentor for <span className="text-[#5B10FF]">10X growth.</span>
          </h1>
          <p className="text-[13px] sm:text-[14px] text-gray-500 font-medium leading-relaxed mt-2 sm:mt-3">
            Not a Coaching Class. Not an App.<br/>
            India's First Mentor-Led Student Growth Platform.
          </p>
        </div>

        {/* The Card */}
        <div className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto scale-95 sm:scale-100 mb-auto">
          {/* Start Here Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#222222] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-sm border border-[#333]">
            START HERE
          </div>

          <div className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-5 sm:p-6 flex flex-col items-center text-center relative z-0">
            
            <div className="text-[#5B10FF] font-black text-[46px] sm:text-[54px] leading-none tracking-tighter my-4 sm:my-5 flex items-center justify-center">
              1<span className="text-[36px] sm:text-[44px] mx-0.5">on</span>1
            </div>

            <div className="uppercase text-[9px] sm:text-[10px] font-black text-gray-800 tracking-widest mb-2">
              PARENT & STUDENT CALL
            </div>
            
            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium mb-4 sm:mb-5">
              Includes our 30-min student test.
            </p>

            <div className="w-full h-px bg-gray-100 mb-4 sm:mb-5"></div>

            <button 
              onClick={() => navigate('/career-counseling')}
              className="w-full bg-[#5B10FF] text-white font-bold text-[13px] sm:text-[14px] py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#4E0EE6] transition-colors shadow-md shadow-[#5B10FF]/20"
            >
              See the plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 pt-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF4FF] border border-[#D1E4FF] text-[#0066FF] text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-5">
            <Award className="w-3.5 h-3.5" /> THE SMARTER CHOICE
          </div>
          <h2 className="text-[32px] md:text-[40px] font-black text-brand-dark leading-[1.15] tracking-tight mb-3 text-balance">
            Not a Coaching Class.<br/>Not just an App.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-500 font-medium">
            See why parents are making the switch.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-6 md:p-8 w-[40%] align-bottom">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">FEATURE</span>
                  </th>
                  <th className="p-6 md:p-8 w-[20%] text-center align-bottom border-l border-gray-100">
                    <div className="flex flex-col items-center gap-2.5">
                      <Building2 className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-700 leading-tight">Offline<br/>Coaching</span>
                    </div>
                  </th>
                  <th className="p-6 md:p-8 w-[20%] text-center align-bottom border-l border-gray-100">
                    <div className="flex flex-col items-center gap-2.5">
                      <MonitorPlay className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                      <span className="text-[12px] sm:text-[13px] font-bold text-gray-700 leading-tight">Online<br/>Apps</span>
                    </div>
                  </th>
                  <th className="p-6 md:p-8 w-[20%] text-center align-bottom border-l border-gray-100 bg-[#F9F4FF]">
                    <div className="flex flex-col items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#5B10FF] flex items-center justify-center text-white shadow-sm shadow-[#5B10FF]/30">
                        <Zap className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] font-bold text-[#5B10FF]">Growtopper</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 md:px-8 md:py-6">
                      <span className="text-[14px] font-medium text-gray-600">{feature.name}</span>
                    </td>
                    <td className="p-5 md:px-8 md:py-6 text-center border-l border-gray-100">
                      {feature.offline ? (
                        <Check className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-300 font-medium">-</span>
                      )}
                    </td>
                    <td className="p-5 md:px-8 md:py-6 text-center border-l border-gray-100">
                      {feature.online ? (
                        <Check className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-300 font-medium">-</span>
                      )}
                    </td>
                    <td className="p-5 md:px-8 md:py-6 text-center border-l border-gray-100 bg-[#F9F4FF]">
                      <div className="w-5 h-5 rounded-full bg-[#5B10FF] flex items-center justify-center mx-auto shadow-sm shadow-[#5B10FF]/20">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
