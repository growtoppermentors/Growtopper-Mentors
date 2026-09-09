import React, { useState } from 'react';
import { ArrowRight, Brain, Target, Compass, CheckCircle2, Rocket, XCircle, TrendingUp, Shield, BarChart, ChevronDown, Quote, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function CareerLanding() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  const faqs = [
    {
      q: "Is the AI SWOT Test really free?",
      a: "Yes! The 30-minute interactive chat with our AI Mentor is 100% free. You only pay if you want to unlock the detailed report card and schedule the 1-on-1 expert call."
    },
    {
      q: "How is this different from my school counselor?",
      a: "School counselors often use outdated personality tests and have hundreds of students. We use AI to do a deep psychological and academic analysis, and give you a concrete 5-year execution roadmap based on modern market realities."
    },
    {
      q: "What happens during the 1-on-1 Video Call?",
      a: "A human Growth Expert will review your AI Report Card with you, explain your blind spots, and help you finalize your execution strategy so you know exactly what to do next."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans">
      <Navbar onRequestInvite={() => navigate('/counseling-room')} />
      
      <main className="pt-24 md:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
            A New Approach to Career Counseling
          </div>
          
          <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-black text-brand-dark leading-[1.05] tracking-tight mb-6 text-balance">
            We don't tell you what to be. We show you <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">how to achieve it.</span>
          </h1>
          
          <p className="text-[17px] sm:text-[19px] text-gray-500 font-medium max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
            Most platforms give you a generic personality test. We evaluate your current reality, align your passion with earning potential, and build a concrete execution roadmap.
          </p>
          
          {/* Interactive Gamified Hook */}
          <div className="bg-white p-7 sm:p-10 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-2xl mx-auto text-left relative z-10">
            <h3 className="font-black text-brand-dark text-[20px] mb-5 text-center">What is your biggest struggle right now?</h3>
            <div className="space-y-3">
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-200 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all flex items-center justify-between group">
                <span className="font-medium text-[15px] text-gray-700">"I have absolutely no idea what career to choose."</span>
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-200 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all flex items-center justify-between group">
                <span className="font-medium text-[15px] text-gray-700">"I know my goal, but I don't know the steps to get there."</span>
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-200 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all flex items-center justify-between group">
                <span className="font-medium text-[15px] text-gray-700">"I lack the consistency and routine to study properly."</span>
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
            </div>
            <p className="text-center text-[11px] text-gray-400 font-bold mt-6 uppercase tracking-widest">Takes 30 Mins ?" 100% Free AI Chat</p>
          </div>
        </div>

        {/* Cost of Inaction / Pain Point Agitation */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-[28px] sm:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance mb-4">Having a passion without a roadmap is just a hobby.</h2>
          <p className="text-[16px] text-gray-500 font-medium leading-relaxed max-w-xl mx-auto text-balance">
            70% of students choose their college degree based on outdated advice or family pressure. Don't waste 4 years on a path that leads to burnout. Get clarity today.
          </p>
        </div>

        {/* 4 Step Process - Premium Homepage Style */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
              The Framework
            </div>
            <h2 className="text-[32px] md:text-[40px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance">How we align Passion with Profession.</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Step 1: Purple Gradient */}
            <div className="bg-white p-7 rounded-[28px] border border-[#4E14F9]/20 bg-gradient-to-br from-[#4E14F9]/10 via-[#B28BFF]/5 to-transparent flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#4E14F9]/10 flex items-center justify-center mb-5 text-[#4E14F9]">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-black text-brand-dark text-[18px] mb-2">1. AI SWOT Test</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">A 30-min interactive chat to evaluate your strengths, weaknesses, and habits.</p>
            </div>

            {/* Step 2: Orange Gradient */}
            <div className="bg-white p-7 rounded-[28px] border border-[#E96614]/20 bg-gradient-to-br from-[#E96614]/10 via-[#F69748]/5 to-transparent flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#E96614]/10 flex items-center justify-center mb-5 text-[#E96614]">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="font-black text-brand-dark text-[18px] mb-2">2. Report Generation</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">A detailed report card highlighting your current growth stage and market opportunities.</p>
            </div>

            {/* Step 3: Green Gradient */}
            <div className="bg-white p-7 rounded-[28px] border border-[#74AB55]/20 bg-gradient-to-br from-[#74AB55]/10 via-[#9DC67F]/5 to-transparent flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#74AB55]/10 flex items-center justify-center mb-5 text-[#74AB55]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-black text-brand-dark text-[18px] mb-2">3. 1-on-1 Video Call</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">Discuss the results with an expert to ensure your passion has real earning potential.</p>
            </div>

            {/* Step 4: Pink/Magenta Gradient */}
            <div className="bg-white p-7 rounded-[28px] border border-[#9D68A1]/20 bg-gradient-to-br from-[#9D68A1]/10 via-[#C49EC8]/5 to-transparent flex flex-col shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-[14px] bg-[#9D68A1]/10 flex items-center justify-center mb-5 text-[#9D68A1]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-black text-brand-dark text-[18px] mb-2">4. Execution Strategy</h3>
              <p className="text-[14px] text-gray-600 font-medium leading-relaxed">Walk away with a concrete, workable roadmap to achieve your chosen goal.</p>
            </div>

          </div>
        </div>

        {/* Us vs Them Section */}
        <div className="mb-24">
          <h2 className="text-[32px] md:text-[40px] font-black text-brand-dark text-center leading-[1.1] tracking-tight mb-12">Why the traditional approach is broken.</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="bg-white p-7 sm:p-9 rounded-[32px] border border-gray-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-7 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-[22px] font-black text-gray-400">Traditional Platforms</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Give you a basic 5-minute personality test.",
                  "Arbitrarily assign you a career (e.g. \"You should be a doctor\").",
                  "No discussion about market reality, earning potential, or current strengths.",
                  "Leave you with zero execution plan on how to actually achieve it."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center shrink-0 mt-0.5 border border-gray-200">
                      <span className="text-[10px] font-black text-gray-400">{i+1}</span>
                    </div>
                    <p className="text-gray-500 text-[15px] font-medium leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growtopper Way */}
            <div className="bg-white p-7 sm:p-9 rounded-[32px] border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-transparent shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-7 pb-5 border-b border-brand-purple/10">
                <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-[22px] font-black text-brand-dark">The Growtopper Approach</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  <>Evaluate your <strong className="text-brand-dark">current state (SWOT)</strong> through a 30-minute AI chat.</>,
                  <>Educate you on various careers and let <strong className="text-brand-dark">you choose</strong> what sparks your passion.</>,
                  <>1-on-1 human reality check to align passion with <strong className="text-brand-dark">market growth & earning potential</strong>.</>,
                  <>Provide a workable, step-by-step <strong className="text-brand-dark">Execution Roadmap</strong> to bridge the gap.</>
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-purple flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-brand-purple/30">
                      <span className="text-[10px] font-black text-white">{i+1}</span>
                    </div>
                    <p className="text-gray-600 text-[15px] font-medium leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Sneak Peek Section */}
        <div className="mb-24 relative">
          <div className="bg-brand-dark p-8 sm:p-12 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="md:w-1/2 relative z-20 text-center md:text-left">
              <h2 className="text-[32px] sm:text-[40px] font-black text-white leading-[1.1] tracking-tight mb-5 text-balance">See your future, clearly mapped out.</h2>
              <p className="text-[16px] text-gray-400 font-medium mb-8 leading-relaxed max-w-md">Unlock your AI-generated 5-Year Execution Roadmap. Know exactly what skills to learn, which projects to build, and what colleges to target.</p>
              <button onClick={() => navigate('/counseling-room')} className="px-8 py-4 rounded-full bg-white text-brand-dark font-black text-[15px] hover:bg-gray-50 transition-colors shadow-lg w-full sm:w-auto">Generate My Roadmap</button>
            </div>

            {/* Mockup UI */}
            <div className="md:w-1/2 relative z-20 w-full hidden sm:block">
              <div className="bg-white/10 backdrop-blur-xl rounded-[28px] border border-white/10 p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center shrink-0"><BarChart className="w-4 h-4 text-white" /></div>
                  <div className="text-white font-bold text-[15px]">Your Execution Plan</div>
                </div>
                <div className="space-y-3.5">
                  <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                  <div className="h-2 bg-brand-purple/50 rounded-full w-5/6 mt-5"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Earning Potential</div>
                    <div className="text-white font-black text-[18px]">Top 5%</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Burnout Risk</div>
                    <div className="text-green-400 font-black text-[18px]">Low</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Targeted Social Proof - Exact Homepage Clone */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance mb-4">Students who found their clarity.</h2>
            <p className="text-[17px] text-gray-500 font-medium max-w-xl mx-auto text-balance">Real words from parents who got actionable roadmaps for their children.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Testimonial 1 */}
            <div className="relative rounded-[28px] border border-[#4E14F9]/20 bg-gradient-to-br from-[#4E14F9]/10 via-[#B28BFF]/5 to-transparent bg-white overflow-hidden p-7 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-10 h-10 text-[#4E14F9]" />
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current text-[#4E14F9]" />)}
              </div>
              <p className="text-gray-700 text-[15px] sm:text-[16px] font-medium leading-relaxed flex-1">
                "I knew I wanted to do AI, but I was overwhelmed. The Growtopper report told me exactly which 3 skills to master in 11th grade. The 1-on-1 mentor kept me accountable."
              </p>
              <div className="h-px w-full border-t border-[#4E14F9]/20"></div>
              <div>
                <div className="font-black text-brand-dark text-[14px]">Rahul M.</div>
                <div className="text-[12px] font-bold px-2.5 py-0.5 rounded-full inline-block mt-1 bg-[#4E14F9]/10 text-[#4E14F9]">Grade 11 Student</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative rounded-[28px] border border-[#E96614]/20 bg-gradient-to-br from-[#E96614]/10 via-[#F69748]/5 to-transparent bg-white overflow-hidden p-7 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-10 h-10 text-[#E96614]" />
              </div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current text-[#E96614]" />)}
              </div>
              <p className="text-gray-700 text-[15px] sm:text-[16px] font-medium leading-relaxed flex-1">
                "My son had no idea what he wanted to do. The AI chat pulled out his deep interest in economics, and the mentor showed us how to build a lucrative career around it."
              </p>
              <div className="h-px w-full border-t border-[#E96614]/20"></div>
              <div>
                <div className="font-black text-brand-dark text-[14px]">Priya Sharma</div>
                <div className="text-[12px] font-bold px-2.5 py-0.5 rounded-full inline-block mt-1 bg-[#E96614]/10 text-[#E96614]">Parent of Grade 9 Student</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentor Authority - Profile Cards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
              <Shield className="w-3.5 h-3.5" /> GUIDED BY THE BEST
            </div>
            <h2 className="text-[32px] md:text-[40px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4">Meet Your Mentors</h2>
            <p className="text-[17px] text-gray-500 font-medium max-w-2xl mx-auto text-balance">
              Industry experts, alumni, and psychologists dedicated to your child's growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Academic Strategy Mentor",
                subtitle: "IIT/NIT-aligned study planning",
                tag: "Weekly execution review",
                desc: "Turns school, coaching, and self-study into one clear action plan.",
                seed: "academic"
              },
              {
                title: "Student Psychology Mentor",
                subtitle: "Focus, stress, and confidence",
                tag: "Parent-child communication",
                desc: "Helps students manage overload, confidence dips, and routine resistance.",
                seed: "psychology"
              },
              {
                title: "Career Pathway Mentor",
                subtitle: "Subject and goal clarity",
                tag: "Strength-based guidance",
                desc: "Maps interests, subjects, and future options into realistic next steps.",
                seed: "pathway"
              },
              {
                title: "Communication Mentor",
                subtitle: "Speaking and self-expression",
                tag: "Confidence building",
                desc: "Builds better articulation, presentation comfort, and classroom confidence.",
                seed: "comm"
              }
            ].map((mentor, i) => (
              <div key={i} className="bg-white rounded-[28px] border border-gray-200 p-3 flex flex-col hover:shadow-xl hover:border-brand-purple/30 transition-all duration-300 group">
                
                {/* Top Image Box */}
                <div className="bg-[#F8F9FA] rounded-[20px] pt-3 px-3 pb-0 flex flex-col items-center relative overflow-hidden h-[200px]">
                  {/* Purple Top Badge */}
                  <div className="w-full bg-[#5B10FF] text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded-[12px] text-center shadow-sm flex justify-center items-center gap-1.5 z-10">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    GROWTOPPER MENTOR
                  </div>
                  
                  {/* Illustration using Dicebear Notionists style */}
                  <img src={`https://api.dicebear.com/9.x/notionists/svg?seed=${mentor.seed}&backgroundColor=transparent`} alt={mentor.title} className="w-36 h-36 object-contain mt-auto z-0 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-3 left-3 bg-white text-gray-800 text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 z-10 border border-gray-100">
                    <Shield className="w-3 h-3 text-[#5B10FF] fill-current" /> Verified
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="pt-6 pb-4 px-2 text-center flex flex-col items-center flex-1">
                  <h3 className="font-black text-[18px] text-brand-dark leading-tight mb-1">{mentor.title}</h3>
                  <p className="text-[#5B10FF] text-[13px] font-bold mb-3">{mentor.subtitle}</p>
                  
                  <div className="bg-[#5B10FF]/5 text-[#5B10FF] text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-4 border border-[#5B10FF]/10">
                    {mentor.tag}
                  </div>
                  
                  <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                    {mentor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-[32px] font-black text-brand-dark text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[20px] border border-gray-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-[15px] text-brand-dark hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-brand-purple transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-500 text-[15px] font-medium leading-relaxed border-t border-gray-100 pt-4 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
