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
      
      <main className="pt-24 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Hero Section with Interactive Hook */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[13px] tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            A New Approach to Career Counseling
          </div>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
            We don't tell you what to be. We show you <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">how to achieve it.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Most platforms give you a generic personality test. We evaluate your current reality, align your passion with earning potential, and build a concrete execution roadmap.
          </p>
          
          {/* Interactive Gamified Hook */}
          <div className="bg-white p-6 sm:p-8 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 max-w-2xl mx-auto text-left relative z-10">
            <h3 className="font-bold text-gray-800 mb-4 text-center">What is your biggest struggle right now?</h3>
            <div className="space-y-3">
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-100 hover:border-brand-purple hover:bg-brand-purple/5 transition-all font-medium text-gray-700 flex items-center justify-between group">
                "I have absolutely no idea what career to choose."
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-100 hover:border-brand-purple hover:bg-brand-purple/5 transition-all font-medium text-gray-700 flex items-center justify-between group">
                "I know my goal, but I don't know the steps to get there."
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
              <button onClick={() => navigate('/counseling-room')} className="w-full text-left px-5 py-4 rounded-2xl border border-gray-100 hover:border-brand-purple hover:bg-brand-purple/5 transition-all font-medium text-gray-700 flex items-center justify-between group">
                "I lack the consistency and routine to study properly."
                <ArrowRight className="w-4 h-4 text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 font-bold mt-5 uppercase tracking-wide">Takes 30 Mins , 100% Free AI Chat</p>
          </div>
        </div>

        {/* Cost of Inaction / Pain Point Agitation */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Having a passion without a roadmap is just a hobby.</h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            70% of students choose their college degree based on outdated advice or family pressure. Don't waste 4 years and lakhs of rupees on a path that leads to burnout. Get clarity today.
          </p>
        </div>

        {/* Visual Sneak Peek Section */}
        <div className="max-w-5xl mx-auto mb-24 relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FE]/80 to-transparent pointer-events-none z-10 hidden sm:block"></div>
          <div className="bg-brand-dark p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/30 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="md:w-1/2 relative z-20 text-center md:text-left">
              <h2 className="text-3xl font-black text-white mb-4">See your future, clearly mapped out.</h2>
              <p className="text-gray-400 font-medium mb-6 leading-relaxed">Unlock your AI-generated 5-Year Execution Roadmap. Know exactly what skills to learn, which projects to build, and what colleges to target.</p>
              <button onClick={() => navigate('/counseling-room')} className="px-6 py-4 rounded-xl bg-white text-brand-dark font-black hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">Generate My Roadmap</button>
            </div>

            {/* Mockup UI */}
            <div className="md:w-1/2 relative z-20 w-full hidden sm:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center shrink-0"><BarChart className="w-4 h-4 text-white" /></div>
                  <div className="text-white font-bold text-sm">Your Execution Plan</div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                  <div className="h-2 bg-brand-purple/50 rounded-full w-5/6 mt-4"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Earning Potential</div>
                    <div className="text-white font-bold text-sm">Top 5%</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Burnout Risk</div>
                    <div className="text-green-400 font-bold text-sm">Low</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Us vs Them Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 px-4">Why the traditional approach is broken.</h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4 sm:px-0">
            {/* Traditional */}
            <div className="p-6 sm:p-8 rounded-[32px] border border-[#FAD4D4] shadow-sm bg-gradient-to-br from-[#FDF2F2] to-[#FFFFFF] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 shadow-sm shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Traditional Platforms</h3>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100"><span className="text-xs font-bold">1</span></div>
                  <p className="text-gray-700 text-sm font-medium">Give you a basic 5-minute personality test.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100"><span className="text-xs font-bold">2</span></div>
                  <p className="text-gray-700 text-sm font-medium">Arbitrarily assign you a career (e.g. "You should be a doctor").</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100"><span className="text-xs font-bold">3</span></div>
                  <p className="text-gray-700 text-sm font-medium">No discussion about market reality, earning potential, or your actual current strengths.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100"><span className="text-xs font-bold">4</span></div>
                  <p className="text-gray-700 text-sm font-medium">Leave you with zero execution plan on how to actually achieve it.</p>
                </li>
              </ul>
            </div>

            {/* Growtopper Way */}
            <div className="p-6 sm:p-8 rounded-[32px] border border-[#DDE4FF] shadow-sm bg-gradient-to-br from-[#EEF2FF] to-[#FFFFFF] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-gray-900">The Growtopper Approach</h3>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100"><span className="text-xs font-bold">1</span></div>
                  <p className="text-gray-800 text-sm font-medium">Evaluate your <strong>current state (SWOT)</strong> through a 30-minute AI chat.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100"><span className="text-xs font-bold">2</span></div>
                  <p className="text-gray-800 text-sm font-medium">Educate you on various careers and let <strong>you choose</strong> what actually sparks your passion.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100"><span className="text-xs font-bold">3</span></div>
                  <p className="text-gray-800 text-sm font-medium">1-on-1 human reality check to align your passion with <strong>market growth & earning potential</strong>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><span className="text-xs font-bold">4</span></div>
                  <p className="text-gray-900 text-sm font-bold">Provide a workable, step-by-step Execution Roadmap to bridge the gap.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Step Process */}
        <div className="max-w-5xl mx-auto mb-24 px-4 sm:px-0">
          <h2 className="text-3xl font-black text-center mb-12">How we align Passion with Profession.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 sm:p-8 rounded-[32px] shadow-sm border border-[#E8D9FF] bg-gradient-to-br from-[#F5EEFF] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 shadow-sm shrink-0">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">1. AI SWOT Test</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">A 30-min interactive chat to evaluate your strengths, weaknesses, and habits.</p>
            </div>

            <div className="p-6 sm:p-8 rounded-[32px] shadow-sm border border-[#FFEDDE] bg-gradient-to-br from-[#FFF5ED] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-orange-600 shadow-sm shrink-0">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">2. Report Generation</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">A detailed report card highlighting your current growth stage and market opportunities.</p>
            </div>

            <div className="p-6 sm:p-8 rounded-[32px] shadow-sm border border-[#D6F0C2] bg-gradient-to-br from-[#F2FAED] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 text-green-600 shadow-sm shrink-0">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">3. 1-on-1 Video Call</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Discuss the results with an expert to ensure your passion has real earning potential.</p>
            </div>

            <div className="p-6 sm:p-8 rounded-[32px] shadow-sm border border-[#F2CFE1] bg-gradient-to-br from-[#FDF0F6] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 text-pink-600 shadow-sm shrink-0">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">4. Execution Strategy</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Walk away with a concrete, workable roadmap to achieve your chosen goal.</p>
            </div>
          </div>
        </div>

        {/* Targeted Social Proof */}
        <div className="max-w-5xl mx-auto mb-24 px-4 sm:px-0">
          <h2 className="text-3xl font-black text-center mb-12">Students who found their clarity.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[32px] border border-[#E8D9FF] bg-gradient-to-br from-[#F5EEFF] to-[#FFFFFF] relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-purple-200/50 rotate-12" />
              <div className="flex gap-1 text-purple-500 mb-5 relative z-10"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-700 font-medium mb-6 relative z-10 leading-relaxed text-sm sm:text-base">"I knew I wanted to do AI, but I was overwhelmed. The Growtopper report told me exactly which 3 skills to master in 11th grade. The 1-on-1 mentor kept me accountable."</p>
              <div className="relative z-10 mt-auto pt-4 border-t border-purple-100">
                <h4 className="font-black text-gray-900">Rahul M.</h4>
                <span className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">Grade 11 Student</span>
              </div>
            </div>

            <div className="p-8 rounded-[32px] border border-[#FFEDDE] bg-gradient-to-br from-[#FFF5ED] to-[#FFFFFF] relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-orange-200/50 rotate-12" />
              <div className="flex gap-1 text-orange-500 mb-5 relative z-10"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
              <p className="text-gray-700 font-medium mb-6 relative z-10 leading-relaxed text-sm sm:text-base">"My son had no idea what he wanted to do. The AI chat pulled out his deep interest in economics, and the mentor showed us how to build a lucrative career around it."</p>
              <div className="relative z-10 mt-auto pt-4 border-t border-orange-100">
                <h4 className="font-black text-gray-900">Priya Sharma</h4>
                <span className="inline-block mt-1 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">Parent of Grade 9 Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mentor Authority */}
        <div className="max-w-4xl mx-auto mb-24 text-center px-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center mx-auto mb-6 text-brand-purple">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black mb-4">Meet your Growth Experts</h2>
          <p className="text-gray-500 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">Your 1-on-1 video call isn't with a generic school counselor. You'll be speaking directly with industry veterans and top alumni who understand modern market trends.</p>
          <div className="inline-flex flex-wrap justify-center items-center gap-3">
            <div className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-bold text-sm text-gray-700 shadow-sm">IIT / NIT Alumni</div>
            <div className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-bold text-sm text-gray-700 shadow-sm">EdTech Founders</div>
            <div className="px-5 py-2.5 rounded-full bg-white border border-gray-200 font-bold text-sm text-gray-700 shadow-sm">Product Managers</div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-20 px-4 sm:px-0">
          <h2 className="text-3xl font-black text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-gray-600 font-medium leading-relaxed border-t border-gray-50 pt-4 mt-1">
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
