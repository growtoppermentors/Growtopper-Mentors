import React, { useRef, useEffect } from 'react';
import { ChevronRight, Check, Building2, MonitorPlay, Zap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Abode() {
  const navigate = useNavigate();
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth < 768) {
        
        setTimeout(() => {
          const container = tableContainerRef.current;
          if (!container) return;

          const start = container.scrollLeft;
          const target = 200; // scroll amount
          const duration = 2500; // 2.5 seconds duration for a premium slow walk
          const startTime = performance.now();

          // Smooth easeOutQuad function
          const easeOutQuad = (t) => t * (2 - t);

          function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeProgress = easeOutQuad(progress);
            container.scrollLeft = start + (target - start) * easeProgress;

            if (progress < 1) {
              requestAnimationFrame(animateScroll);
            }
          }

          requestAnimationFrame(animateScroll);
        }, 500); // Wait 0.5s after seeing it to start walking

        observer.disconnect(); 
      }
    }, { threshold: 0.5 }); 

    if (tableContainerRef.current) {
      observer.observe(tableContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        <div className="text-center max-w-3xl mx-auto mb-6 w-full mt-auto">
          <h1 className="text-[36px] md:text-[46px] font-black text-brand-dark leading-[1.05] tracking-tight mb-4 text-balance">
            Mentor for Everything.<br/>
            Get a mentor for <span className="whitespace-nowrap text-[#5B10FF]">10X growth.</span>
          </h1>
          <p className="text-[14px] text-gray-500 font-medium leading-relaxed mt-4">
            Not a Coaching Class. Not an App.<br/>
            India's First Mentor-Led Student Growth Platform.
          </p>
        </div>

        {/* The Card */}
        <div className="relative w-full max-w-[320px] md:max-w-[300px] mx-auto mb-auto">
          {/* Start Here Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#222222] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-sm border border-[#333]">
            START HERE
          </div>

          <div className="bg-white rounded-[32px] md:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col items-center text-center relative z-0">
            
            <div className="text-[#5B10FF] font-black text-[56px] md:text-[54px] leading-none tracking-tighter my-5 flex items-center justify-center">
              1<span className="text-[44px] mx-0.5">on</span>1
            </div>

            <div className="uppercase text-[10px] font-black text-gray-800 tracking-widest mb-3">
              PARENT & STUDENT CALL
            </div>
            
            <p className="text-[11px] text-gray-400 font-medium mb-6">
              Includes our 30-min student test.
            </p>

            <div className="w-full h-px bg-gray-100 mb-6"></div>

            <button 
              onClick={() => navigate('/career-counseling')}
              className="w-full bg-[#5B10FF] text-white font-bold text-[14px] py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#4E0EE6] transition-colors shadow-md shadow-[#5B10FF]/20"
            >
              See the plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 pt-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF4FF] border border-[#D1E4FF] text-[#0066FF] text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" /> THE SMARTER CHOICE
          </div>
          <h2 className="text-[28px] md:text-[32px] font-black text-brand-dark leading-[1.15] tracking-tight mb-2 text-balance">
            Not a Coaching Class.<br/>Not just an App.
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500 font-medium">
            See why parents are making the switch.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="overflow-x-auto" ref={tableContainerRef}>
            <table className="w-full text-left border-collapse min-w-[500px] md:min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 md:p-5 w-[40%] align-bottom">
                    <span className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">FEATURE</span>
                  </th>
                  <th className="p-4 md:p-5 w-[20%] text-center align-bottom border-l border-gray-100">
                    <div className="flex flex-col items-center gap-2">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6 text-gray-400" strokeWidth={1.5} />
                      <span className="text-[11px] md:text-[12px] font-bold text-gray-700 leading-tight">Offline<br/>Coaching</span>
                    </div>
                  </th>
                  <th className="p-4 md:p-5 w-[20%] text-center align-bottom border-l border-gray-100">
                    <div className="flex flex-col items-center gap-2">
                      <MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-gray-400" strokeWidth={1.5} />
                      <span className="text-[11px] md:text-[12px] font-bold text-gray-700 leading-tight">Online<br/>Apps</span>
                    </div>
                  </th>
                  <th className="p-4 md:p-5 w-[20%] text-center align-bottom border-l border-gray-100 bg-[#F9F4FF]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#5B10FF] flex items-center justify-center text-white shadow-sm shadow-[#5B10FF]/30">
                        <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />
                      </div>
                      <span className="text-[12px] md:text-[13px] font-bold text-[#5B10FF]">Growtopper</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 md:px-5 md:py-4">
                      <span className="text-[13px] md:text-[14px] font-medium text-gray-600">{feature.name}</span>
                    </td>
                    <td className="p-4 md:px-5 md:py-4 text-center border-l border-gray-100">
                      {feature.offline ? (
                        <Check className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-300 font-medium">-</span>
                      )}
                    </td>
                    <td className="p-4 md:px-5 md:py-4 text-center border-l border-gray-100">
                      {feature.online ? (
                        <Check className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-300 font-medium">-</span>
                      )}
                    </td>
                    <td className="p-4 md:px-5 md:py-4 text-center border-l border-gray-100 bg-[#F9F4FF]">
                      <div className="w-5 h-5 rounded-full bg-[#5B10FF] flex items-center justify-center mx-auto shadow-sm shadow-[#5B10FF]/20">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" strokeWidth={3} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it Works / Roadmap Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/15 text-brand-purple text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-[28px] md:text-[36px] font-black text-brand-dark leading-[1.15] tracking-tight mb-3 text-balance">
            Your Roadmap to 10X Growth
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500 font-medium">
            A structured, proven journey from confusion to execution.
          </p>
        </div>

        {/* Roadmap Container */}
        <div className="relative max-w-2xl mx-auto ml-2 sm:ml-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-[19px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-brand-purple/30 via-brand-purple/5 to-transparent"></div>

          {/* Steps */}
          {[
            {
              num: 1,
              title: "Clarity Session",
              description: "Identify your true baseline and uncover hidden potential.",
              items: [
                "30-min AI SWOT Test",
                "30-min 1-on-1 Mentor Video Call",
                "Pinpoint academic & non-academic strengths"
              ]
            },
            {
              num: 2,
              title: "30-Day Growth Challenge",
              description: "A tailored, high-intensity sprint to align focus and habit.",
              items: [
                "30 Days, 6 Core Skills",
                "1 Dedicated Expert Mentor",
                "Receive a personalized Execution Action Plan"
              ]
            },
            {
              num: 3,
              title: "Long-Term Mentorship",
              description: "Monthly guidance to ensure continuous, compounding growth.",
              items: [
                "Elite Plan: Dedicated monthly mentorship",
                "Pro Plan: Mentorship + 6 Skills Knowledge + Academic Growth",
                "Continuous trajectory tracking and execution review"
              ]
            }
          ].map((step, i) => (
            <div key={i} className="relative mb-8 md:mb-12 last:mb-0">
              {/* Node */}
              <div className="absolute left-0 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-[3px] border-brand-purple flex items-center justify-center z-10 shadow-sm mt-1">
                <span className="text-[13px] md:text-[15px] font-black text-brand-purple">{step.num}</span>
              </div>

              {/* Card */}
              <div className="ml-12 md:ml-16 bg-white rounded-[24px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 hover:border-brand-purple/20 hover:shadow-[0_8px_30px_rgba(91,16,255,0.06)] transition-all">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                  Step 0{step.num}
                </div>
                <h3 className="text-[20px] md:text-[24px] font-black text-brand-dark tracking-tight mb-2">{step.title}</h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-5 md:mb-6 leading-relaxed">{step.description}</p>
                
                <ul className="space-y-3 md:space-y-4">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-purple/5 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-purple" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] md:text-[14px] font-medium text-gray-700 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
