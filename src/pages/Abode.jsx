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
      <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-6xl mx-auto w-full">
        {/* Headings */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-[32px] md:text-[44px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4 text-balance">
            A Simple 3-Step Journey<br/>to <span className="text-[#5B10FF]">10X Growth.</span>
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            From clarity to execution to long-term success — everything your child needs, guided by the right mentor.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Dashed Line (Desktop & Mobile) */}
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-brand-purple/30"></div>

          <div className="space-y-12 md:space-y-24">

            {/* STEP 1 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
              {/* Left Column (Timeline) */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 w-full md:w-32 shrink-0 z-10 relative">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[20px] md:text-[24px] shadow-lg shadow-[#5B10FF]/30 md:ml-4 bg-clip-padding border-4 border-[#FAFAFA]">
                  1
                </div>
                <div className="md:mt-4 md:ml-2">
                  <div className="text-[10px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 1</div>
                  <div className="text-[16px] md:text-[18px] font-bold text-brand-purple leading-tight mb-1">Get Clarity</div>
                  <div className="text-[12px] md:text-[13px] font-medium text-gray-500 leading-snug">Know where<br className="hidden md:block"/>you stand</div>
                </div>
              </div>

              {/* Right Column (Card) */}
              <div className="flex-1 w-full">
                <div className="rounded-[32px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-lg hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[31px] p-6 md:p-10 relative overflow-hidden">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[10px] font-black uppercase tracking-widest mb-4">
                      CLARITY SESSION
                    </div>
                    
                    <h3 className="text-[24px] md:text-[32px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4 max-w-md">
                      Understand your child holistically.
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-medium mb-8 max-w-md leading-relaxed">
                      A deep-dive session to identify strengths, weaknesses and opportunities across academic and non-academic areas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                      <div className="flex-1 bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                          </div>
                          <h4 className="font-bold text-[13px] text-gray-800">30 min AI SWOT Test</h4>
                        </div>
                        <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Data-driven insights on strengths, weaknesses, interests and personality.</p>
                      </div>

                      <div className="flex-1 bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </div>
                          <h4 className="font-bold text-[13px] text-gray-800">30 min 1:1 Mentor Call</h4>
                        </div>
                        <p className="text-[12px] text-gray-500 font-medium leading-relaxed">Personalized discussion with a mentor to decode the results and set direction.</p>
                      </div>
                    </div>

                    {/* SWOT Mockup graphic */}
                    <div className="hidden lg:block absolute right-8 top-12 w-[220px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-5 rotate-3">
                      <h4 className="font-bold text-[13px] text-gray-800 mb-4 border-b border-gray-100 pb-2">SWOT Report</h4>
                      <ul className="space-y-3.5">
                        {[
                          { label: 'Strengths', color: 'bg-green-500' },
                          { label: 'Weaknesses', color: 'bg-red-500' },
                          { label: 'Opportunities', color: 'bg-[#5B10FF]' },
                          { label: 'Growth Areas', color: 'bg-yellow-400' }
                        ].map(s => (
                          <li key={s.label} className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${s.color}`}></div>
                            <span className="text-[12px] font-semibold text-gray-600">{s.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 w-full md:w-32 shrink-0 z-10 relative">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[20px] md:text-[24px] shadow-lg shadow-[#5B10FF]/30 md:ml-4 bg-clip-padding border-4 border-[#FAFAFA]">
                  2
                </div>
                <div className="md:mt-4 md:ml-2">
                  <div className="text-[10px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 2</div>
                  <div className="text-[16px] md:text-[18px] font-bold text-brand-purple leading-tight mb-1">Take Action</div>
                  <div className="text-[12px] md:text-[13px] font-medium text-gray-500 leading-snug">Turn insights<br className="hidden md:block"/>into progress</div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-[32px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-lg hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[31px] p-6 md:p-10 relative overflow-hidden">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[10px] font-black uppercase tracking-widest mb-4">
                      30 DAYS GROWTH CHALLENGE
                    </div>
                    
                    <h3 className="text-[24px] md:text-[32px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4 max-w-md">
                      Build real skills.<br/>Create real progress.
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-gray-500 font-medium mb-8 max-w-md leading-relaxed">
                      A structured 30-day program where one mentor trains your child on 6 essential skills to build confidence, discipline and future-ready abilities.
                    </p>

                    <div>
                      <div className="text-[10px] font-black text-[#5B10FF] uppercase tracking-widest mb-4">6 SKILLS FOR A BRIGHTER YOU</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl">
                        {[
                          { title: 'Tech & AI', sub: 'Be future ready', icon: '💻', color: 'bg-purple-100' },
                          { title: 'Communication', sub: 'Speak. Express. Lead.', icon: '💬', color: 'bg-blue-100' },
                          { title: 'Finance', sub: 'Build money smarts', icon: '📈', color: 'bg-green-100' },
                          { title: 'Business', sub: 'Think. Create. Solve.', icon: '💡', color: 'bg-yellow-100' },
                          { title: 'Academic', sub: 'Stronger fundamentals', icon: '📚', color: 'bg-red-100' },
                          { title: 'Personal Growth', sub: 'Discipline & Focus', icon: '🎯', color: 'bg-indigo-100' }
                        ].map((skill, i) => (
                          <div key={i} className="text-center">
                            <div className={`w-10 h-10 mx-auto rounded-xl ${skill.color} flex items-center justify-center text-[18px] mb-2`}>
                              {skill.icon}
                            </div>
                            <h5 className="font-bold text-[11px] text-gray-800 leading-tight mb-1">{skill.title}</h5>
                            <p className="text-[9px] text-gray-400 font-medium leading-tight">{skill.sub}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Calendar Mockup */}
                    <div className="hidden lg:block absolute right-8 top-12 w-[240px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-5 -rotate-2">
                      <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                        <svg className="w-4 h-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span className="font-bold text-[13px] text-gray-800">30-Day Challenge</span>
                      </div>
                      <div className="grid grid-cols-5 gap-2">
                        {Array(15).fill(0).map((_, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full flex items-center justify-center ${[0,1,2,3,6].includes(i) ? 'bg-[#5B10FF]' : 'bg-gray-100'}`}>
                            {[0,1,2,3,6].includes(i) && <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 w-full md:w-32 shrink-0 z-10 relative">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[20px] md:text-[24px] shadow-lg shadow-[#5B10FF]/30 md:ml-4 bg-clip-padding border-4 border-[#FAFAFA]">
                  3
                </div>
                <div className="md:mt-4 md:ml-2">
                  <div className="text-[10px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 3</div>
                  <div className="text-[16px] md:text-[18px] font-bold text-brand-purple leading-tight mb-1">Stay Ahead</div>
                  <div className="text-[12px] md:text-[13px] font-medium text-gray-500 leading-snug">Continuous<br className="hidden md:block"/>growth</div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-[32px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-lg hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[31px] p-6 md:p-10">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[10px] font-black uppercase tracking-widest mb-4">
                      LONG TERM MENTORSHIP
                    </div>
                    
                    <div className="flex flex-col xl:flex-row gap-8">
                      <div className="xl:w-1/3">
                        <h3 className="text-[24px] md:text-[32px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4">
                          Keep growing,<br/>for what's next.
                        </h3>
                        <p className="text-[14px] md:text-[15px] text-gray-500 font-medium mb-6 leading-relaxed">
                          Continue the journey with monthly mentorship. Choose a plan that fits your goals — and keep building life-ready skills with expert guidance.
                        </p>
                      </div>

                      <div className="xl:w-2/3 flex flex-col sm:flex-row gap-4">
                        {/* Elite Plan */}
                        <div className="flex-1 bg-gray-50/50 rounded-2xl p-5 border border-gray-100 flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[14px]">👑</div>
                            <div>
                              <h4 className="font-bold text-[14px] text-gray-800">Elite Plan</h4>
                              <p className="text-[11px] text-gray-500 font-medium">Only Mentorship</p>
                            </div>
                          </div>
                          <ul className="space-y-2.5 mt-auto">
                            {['Monthly 1:1 Mentor Sessions', 'Personalized Guidance', 'Progress Review & Support', 'Parent Updates'].map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[12px] font-medium text-gray-600">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#5B10FF] text-white flex items-center justify-center shrink-0 mt-0.5"><svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pro Plan */}
                        <div className="flex-1 bg-white rounded-2xl p-5 border border-[#5B10FF]/20 shadow-md shadow-[#5B10FF]/5 flex flex-col relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-[#5B10FF] text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-lg">Most Popular</div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#5B10FF]">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <div>
                              <h4 className="font-bold text-[14px] text-gray-800">Pro Plan</h4>
                              <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5 max-w-[140px]">Mentorship + 6 Skills + Academic Growth</p>
                            </div>
                          </div>
                          <ul className="space-y-2.5 mt-auto">
                            {['Monthly 1:1 Mentor Sessions', '6 Skills Training (Continued)', 'Academic Growth Guidance', 'Progress Tracking', 'Parent Updates'].map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-[12px] font-bold text-gray-700">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#5B10FF] text-white flex items-center justify-center shrink-0 mt-0.5"><svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
