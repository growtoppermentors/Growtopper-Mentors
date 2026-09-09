import React from 'react';
import { ArrowRight, Brain, Heart, CheckCircle2, Target, BarChart, Clock, Shield, Zap, BookOpen, MessageSquare, Layout, Activity, Compass, Users, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ClaritySession() {
  const navigate = useNavigate();

  const parameters = [
    { name: "Digital Usage", icon: <Layout className="w-5 h-5" /> },
    { name: "Education Ecosystem", icon: <BookOpen className="w-5 h-5" /> },
    { name: "Academic Knowledge", icon: <Brain className="w-5 h-5" /> },
    { name: "Accountability", icon: <Shield className="w-5 h-5" /> },
    { name: "Communication Skills", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Resources & Strategies", icon: <Target className="w-5 h-5" /> },
    { name: "Aspirations & Roadmap", icon: <Compass className="w-5 h-5" /> },
    { name: "Time Utilization", icon: <Clock className="w-5 h-5" /> },
    { name: "Mindset & Motivation", icon: <Zap className="w-5 h-5" /> },
    { name: "Routine & Habits", icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans selection:bg-brand-purple/20">
      <Navbar onRequestInvite={() => navigate('/counseling-room')} />
      
      <main className="pt-24 lg:pt-32 pb-20">
        
        {/* 1. HERO SECTION */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[13px] tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            The 60-Minute Turning Point
          </div>
          <h1 className="text-[40px] md:text-[64px] font-black leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto text-balance">
            Stop guessing. Discover your child's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Real Growth Score.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            A comprehensive 60-minute intervention: 30 minutes of deep AI-powered SWOT analysis, followed by a 30-minute 1-on-1 Mentor strategy call to decode the reality and build an execution roadmap.
          </p>
          
          <button 
            onClick={() => navigate('/counseling-room')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-purple text-white font-black text-lg hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1"
          >
            Book Your Clarity Session <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* 2. THE PROBLEMS (Split View) */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black">The Reality of Modern Education</h2>
            <p className="text-gray-600 font-medium mt-4">The exact problems we decode and solve during the session.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Parents Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-center mb-8">What Parents Face Every Day</h3>
              
              <div className="bg-brand-purple text-white p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">1. High Investment, Low Clarity</h4>
                <p className="text-white/80 text-sm leading-relaxed">Parents spend ₹20,000–₹1,00,000+ a year on courses and coaching yet still have no clear understanding of what's helping or harming their child's growth.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2 text-gray-900">2. Solving Problems Blindly</h4>
                <p className="text-gray-600 text-sm leading-relaxed">When performance drops, parents often buy new courses or tuitions without identifying the root cause — which keeps the cycle repeating.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2 text-brand-purple">3. Weak Parent–School Communication</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Communication with schools is usually superficial, providing little real insight into the child's development.</p>
              </div>

              <div className="bg-[#2A2A2A] text-white p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">4. Desire for Holistic Growth, but No Guidance</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Parents want their child to grow emotionally, academically, mentally, and socially, but don't know how to begin or who can help.</p>
              </div>
            </div>

            {/* Students Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-center mb-8">What Students Struggle With</h3>
              
              <div className="bg-[#2A2A2A] text-white p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">1. Confusion Despite Coaching</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Students attend school and coaching, yet still feel confused, burnt out, or underperforming because no one aligns school + coaching + daily routine.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-2 text-brand-purple">2. Scattered Daily Routine</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Out of 24 hours, 6 hours go to school, 8 hours to sleep — but the remaining 10 hours lack structure. 6–8 of those hours are lost to distractions.</p>
              </div>

              <div className="bg-brand-purple text-white p-6 rounded-3xl shadow-sm">
                <h4 className="font-bold text-lg mb-2">3. Mental Overload & Low Confidence</h4>
                <p className="text-white/80 text-sm leading-relaxed">Students feel mentally overloaded and emotionally drained. They don't know where to start, which creates procrastination and loss of confidence.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-3xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-lg mb-2 text-gray-900">4. No Clarity on What or Why to Study</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Most students don't know why they're studying a topic, how to study it, or what to prioritize — leading to ineffective learning and wasted time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. THE 10 PARAMETERS */}
        <div className="bg-white py-24 border-y border-gray-100 mb-32">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">The 10-Parameter AI SWOT Analysis</h2>
              <p className="text-gray-600 font-medium text-lg">
                During the first 30 minutes, our AI evaluates the student across 10 critical dimensions to calculate their exact Growth Score and Stage.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {parameters.map((param, idx) => (
                <div key={idx} className="bg-[#F8F9FE] border border-gray-100 p-5 rounded-2xl flex flex-col items-center text-center hover:border-brand-purple/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-purple mb-4 group-hover:scale-110 transition-transform">
                    {param.icon}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900">{param.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. AI + HUMAN (The Engine) */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/20 text-brand-purple font-bold text-xs tracking-widest uppercase mb-6">
              <Zap className="w-3 h-3" /> The Growtopper Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              AI Intelligence.<br/><span className="text-brand-purple">Human Empathy.</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto">
              Technology alone can't motivate a teenager. Humans alone can't track millions of data points. We combine both.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-6 relative">
            {/* The Plus Icon */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center z-10 font-black text-gray-400 border border-gray-100">
              +
            </div>

            {/* AI Brain */}
            <div className="flex-1 bg-[#2A2A2A] text-white p-8 md:p-12 rounded-[32px] shadow-xl">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                <Brain className="w-7 h-7 text-gray-300" />
              </div>
              <h3 className="text-2xl font-black mb-8">The AI Brain</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Target className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium text-sm leading-relaxed">Analyzes the 30-min psychology & focus test to identify learning gaps.</span>
                </li>
                <li className="flex items-start gap-4">
                  <FileText className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium text-sm leading-relaxed">Generates hyper-personalized, realistic daily study roadmaps.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Activity className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-medium text-sm leading-relaxed">Tracks habit streaks and automatically flags burnout risks.</span>
                </li>
              </ul>
            </div>

            {/* Human Heart */}
            <div className="flex-1 bg-brand-purple text-white p-8 md:p-12 rounded-[32px] shadow-xl shadow-brand-purple/20">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-8">The Human Heart</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium text-sm leading-relaxed">1-on-1 weekly video calls to review progress and remove blockers.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Shield className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium text-sm leading-relaxed">Provides deep emotional support and builds real-world confidence.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium text-sm leading-relaxed">Strict but friendly daily accountability to ensure the AI plan is actually executed.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. HOW THE SESSION WORKS (CTA Section) */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-gray-200 shadow-sm text-center">
            <h2 className="text-3xl font-black mb-10">What happens on the call?</h2>
            
            <div className="space-y-8 text-left max-w-2xl mx-auto mb-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-black shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Identify The Problem</h4>
                  <p className="text-gray-600 text-sm">We explain the real picture of your child's journey so far, decoded from their AI SWOT test.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-black shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Strategic Correction</h4>
                  <p className="text-gray-600 text-sm">If we find flaws in their execution or mindset, the mentor will explain exactly how to strategically correct them.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center font-black shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">The Execution Plan</h4>
                  <p className="text-gray-600 text-sm">We map out the exact areas they should work on to achieve their desired future goals and stay ahead of trends.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/counseling-room')}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-5 rounded-2xl bg-brand-dark text-white font-black text-lg hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1"
            >
              Book The Clarity Session Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </main>
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
