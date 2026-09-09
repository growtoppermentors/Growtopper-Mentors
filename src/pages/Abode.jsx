import React, { useRef, useEffect } from 'react';
import { ChevronRight, Check, Building2, MonitorPlay, Zap, Award, Cpu, MessageSquare, TrendingUp, Lightbulb, BookOpen, Target, Calendar, FileText, Video } from 'lucide-react';
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
          const duration = 2500; 
          const startTime = performance.now();

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
        }, 500); 

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

        <div className="relative w-full max-w-[320px] md:max-w-[300px] mx-auto mb-auto">
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
      <section className="px-4 sm:px-6 lg:px-8 pb-32 max-w-[1000px] mx-auto w-full">
        {/* Headings */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-[28px] md:text-[38px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3 text-balance">
            A Simple 3-Step Journey<br/>to <span className="text-[#5B10FF]">10X Growth.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            From clarity to execution to long-term success — everything your child needs, guided by the right mentor.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Vertical Dashed Line - Centered relative to the circles. 
              Mobile: circle w-10 center is left-5 (20px). Line left-19.
              Desktop: col w-[100px] items-center. Center is 50px. Line left-49. */}
          <div className="absolute left-[19px] md:left-[49px] top-4 bottom-0 w-[2px] border-l-2 border-dashed border-brand-purple/20"></div>

          <div className="space-y-12 md:space-y-16">

            {/* STEP 1 */}
            <div className="relative flex flex-col md:flex-row gap-5 md:gap-10">
              {/* Left Column (Timeline) */}
              <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 w-full md:w-[100px] shrink-0 z-10 relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[18px] md:text-[20px] shadow-lg shadow-[#5B10FF]/20 bg-clip-padding border-[3px] border-[#FAFAFA] relative z-20">
                  1
                </div>
                <div className="md:mt-2 md:text-center bg-[#FAFAFA] py-1 md:py-2 relative z-20">
                  <div className="text-[9px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 1</div>
                  <div className="text-[15px] md:text-[16px] font-bold text-brand-purple leading-tight mb-1">Get Clarity</div>
                  <div className="text-[11px] md:text-[12px] font-medium text-gray-500 leading-snug">Know where<br className="hidden md:block"/>you stand</div>
                </div>
              </div>

              {/* Right Column (Card) */}
              <div className="flex-1 w-full">
                <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-md hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[27px] p-6 md:p-8 relative overflow-hidden">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4">
                      CLARITY SESSION
                    </div>
                    
                    <h3 className="text-[20px] md:text-[26px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3 max-w-sm">
                      Understand your child holistically.
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-6 max-w-sm leading-relaxed">
                      A deep-dive session to identify strengths, weaknesses and opportunities across academic and non-academic areas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-[480px]">
                      <div className="flex-1 bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                            <FileText className="w-3.5 h-3.5 text-blue-500" strokeWidth={2.5} />
                          </div>
                          <h4 className="font-bold text-[12px] text-gray-800">30 min AI SWOT Test</h4>
                        </div>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">Data-driven insights on strengths, weaknesses, interests and personality.</p>
                      </div>

                      <div className="flex-1 bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
                            <Video className="w-3.5 h-3.5 text-brand-purple" strokeWidth={2.5} />
                          </div>
                          <h4 className="font-bold text-[12px] text-gray-800">30 min 1:1 Mentor Call</h4>
                        </div>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">Personalized discussion with a mentor to decode the results and set direction.</p>
                      </div>
                    </div>

                    {/* SWOT Mockup graphic */}
                    <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[200px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-4 rotate-2">
                      <h4 className="font-bold text-[12px] text-gray-800 mb-3 border-b border-gray-100 pb-2">SWOT Report</h4>
                      <ul className="space-y-3">
                        {[
                          { label: 'Strengths', color: 'bg-green-500' },
                          { label: 'Weaknesses', color: 'bg-red-500' },
                          { label: 'Opportunities', color: 'bg-[#5B10FF]' },
                          { label: 'Growth Areas', color: 'bg-yellow-400' }
                        ].map(s => (
                          <li key={s.label} className="flex items-center gap-2.5">
                            <div className={`w-2.5 h-2.5 rounded-full ${s.color}`}></div>
                            <span className="text-[11px] font-semibold text-gray-600">{s.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-col md:flex-row gap-5 md:gap-10">
              <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 w-full md:w-[100px] shrink-0 z-10 relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[18px] md:text-[20px] shadow-lg shadow-[#5B10FF]/20 bg-clip-padding border-[3px] border-[#FAFAFA] relative z-20">
                  2
                </div>
                <div className="md:mt-2 md:text-center bg-[#FAFAFA] py-1 md:py-2 relative z-20">
                  <div className="text-[9px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 2</div>
                  <div className="text-[15px] md:text-[16px] font-bold text-brand-purple leading-tight mb-1">Take Action</div>
                  <div className="text-[11px] md:text-[12px] font-medium text-gray-500 leading-snug">Turn insights<br className="hidden md:block"/>into progress</div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-md hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[27px] p-6 md:p-8 relative overflow-hidden">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4">
                      30 DAYS GROWTH CHALLENGE
                    </div>
                    
                    <h3 className="text-[20px] md:text-[26px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3 max-w-sm">
                      Build real skills.<br/>Create real progress.
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-6 max-w-md leading-relaxed">
                      A structured 30-day program where one mentor trains your child on 6 essential skills to build confidence, discipline and future-ready abilities.
                    </p>

                    <div>
                      <div className="text-[9px] font-black text-[#5B10FF] uppercase tracking-widest mb-3">6 SKILLS FOR A BRIGHTER YOU</div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 max-w-[500px]">
                        {[
                          { title: 'Tech & AI', sub: 'Be future ready', icon: Cpu, color: 'bg-purple-100 text-purple-600' },
                          { title: 'Communication', sub: 'Speak. Express. Lead.', icon: MessageSquare, color: 'bg-blue-100 text-blue-600' },
                          { title: 'Finance', sub: 'Build money smarts', icon: TrendingUp, color: 'bg-green-100 text-green-600' },
                          { title: 'Business', sub: 'Think. Create. Solve.', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-600' },
                          { title: 'Academic', sub: 'Stronger fundamentals', icon: BookOpen, color: 'bg-red-100 text-red-600' },
                          { title: 'Personal Growth', sub: 'Discipline & Focus', icon: Target, color: 'bg-indigo-100 text-indigo-600' }
                        ].map((skill, i) => (
                          <div key={i} className="text-center">
                            <div className={`w-9 h-9 mx-auto rounded-xl ${skill.color} flex items-center justify-center mb-2 shadow-sm`}>
                              <skill.icon className="w-4 h-4" strokeWidth={2.5} />
                            </div>
                            <h5 className="font-bold text-[10px] text-gray-800 leading-tight mb-0.5">{skill.title}</h5>
                            <p className="text-[8px] text-gray-400 font-medium leading-tight">{skill.sub}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Calendar Mockup */}
                    <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[210px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-4 -rotate-2">
                      <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
                        <Calendar className="w-3.5 h-3.5 text-brand-purple" strokeWidth={2.5} />
                        <span className="font-bold text-[12px] text-gray-800">30-Day Challenge</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1.5">
                        {Array(15).fill(0).map((_, i) => (
                          <div key={i} className={`w-5 h-5 rounded-full flex items-center justify-center ${[0,1,2,3,6].includes(i) ? 'bg-[#5B10FF]' : 'bg-gray-100'}`}>
                            {[0,1,2,3,6].includes(i) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-col md:flex-row gap-5 md:gap-10">
              <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 w-full md:w-[100px] shrink-0 z-10 relative">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5B10FF] text-white flex items-center justify-center font-black text-[18px] md:text-[20px] shadow-lg shadow-[#5B10FF]/20 bg-clip-padding border-[3px] border-[#FAFAFA] relative z-20">
                  3
                </div>
                <div className="md:mt-2 md:text-center bg-[#FAFAFA] py-1 md:py-2 relative z-20">
                  <div className="text-[9px] font-black text-brand-purple uppercase tracking-widest mb-1">STEP 3</div>
                  <div className="text-[15px] md:text-[16px] font-bold text-brand-purple leading-tight mb-1">Stay Ahead</div>
                  <div className="text-[11px] md:text-[12px] font-medium text-gray-500 leading-snug">Continuous <br className="hidden md:block"/>growth</div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1px] shadow-sm hover:shadow-md hover:shadow-[#5B10FF]/5 transition-all">
                  <div className="bg-white rounded-[27px] p-6 md:p-8">
                    
                    <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4">
                      LONG TERM MENTORSHIP
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-[40%]">
                        <h3 className="text-[20px] md:text-[26px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3">
                          Keep growing,<br/>for what's next.
                        </h3>
                        <p className="text-[13px] md:text-[14px] text-gray-500 font-medium mb-5 leading-relaxed">
                          Continue the journey with monthly mentorship. Choose a plan that fits your goals — and keep building life-ready skills with expert guidance.
                        </p>
                      </div>

                      <div className="lg:w-[60%] flex flex-col sm:flex-row gap-3">
                        {/* Elite Plan */}
                        <div className="flex-1 bg-white rounded-xl p-4 border border-[#5B10FF]/15 shadow-sm flex flex-col hover:border-[#5B10FF]/30 transition-colors">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[12px]">👑</div>
                            <div>
                              <h4 className="font-bold text-[13px] text-gray-800">Elite Plan</h4>
                              <p className="text-[10px] text-gray-500 font-medium">Only Mentorship</p>
                            </div>
                          </div>
                          <ul className="space-y-2 mt-auto">
                            {['Monthly 1:1 Mentor Sessions', 'Personalized Guidance', 'Progress Review & Support', 'Parent Updates'].map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-gray-600">
                                <div className="w-3 h-3 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2 h-2" strokeWidth={4} />
                                </div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pro Plan */}
                        <div className="flex-1 bg-white rounded-xl p-4 border border-[#5B10FF] shadow-md shadow-[#5B10FF]/10 flex flex-col relative overflow-hidden ring-1 ring-[#5B10FF]/20">
                          <div className="absolute top-0 right-0 bg-[#5B10FF] text-white text-[8px] font-black uppercase px-2.5 py-1 rounded-bl-lg">Most Popular</div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-[#5B10FF]">
                              <Zap className="w-3.5 h-3.5 fill-current" />
                            </div>
                            <div>
                              <h4 className="font-bold text-[13px] text-gray-800">Pro Plan</h4>
                              <p className="text-[9px] text-gray-500 font-medium leading-tight mt-0.5 max-w-[120px]">Mentorship + 6 Skills + Academic</p>
                            </div>
                          </div>
                          <ul className="space-y-2 mt-auto">
                            {['Monthly 1:1 Mentor Sessions', '6 Skills Training (Continued)', 'Academic Growth Guidance', 'Progress Tracking', 'Parent Updates'].map((item, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-[11px] font-bold text-gray-700">
                                <div className="w-3 h-3 rounded-full bg-[#5B10FF] text-white flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2 h-2" strokeWidth={4} />
                                </div>
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
