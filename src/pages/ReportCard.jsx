import React, { useState } from 'react';
import { Lock, FileText, CheckCircle2, ChevronRight, Award, Zap, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReportCard() {
  const navigate = useNavigate();
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans pb-20">
      
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-sm">
            <FileText className="w-4 h-4" />
          </div>
          <span className="font-black tracking-tight text-lg">AI Growth Report</span>
        </div>
        <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-500 hover:text-brand-purple">
          Exit
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">Your Personalized Roadmap</h1>
          <p className="text-gray-600 font-medium text-lg">Based on your AI assessment, here is your unique career trajectory.</p>
        </div>

        {/* Dashboard Content */}
        <div className="relative">
          
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-500 ${isLocked ? 'blur-md select-none' : ''}`}>
            
            {/* Top Careers */}
            <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-purple" /> Top Career Matches
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">1. Product Manager (Tech)</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">98% Match</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Blends your love for technology, problem-solving, and communication.</p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">2. Data Scientist</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">92% Match</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">Perfect for your analytical mindset and interest in mathematics.</p>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> Core Strengths
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Logical Reasoning
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Creative Thinking
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Empathy & EQ
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" /> Public Speaking
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="md:col-span-3 bg-brand-dark text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
              <h2 className="text-2xl font-black mb-4 relative z-10">Action Plan (Next 5 Years)</h2>
              <p className="text-gray-400 font-medium mb-8 max-w-2xl relative z-10">
                To reach these careers, you should focus on developing these specific real-world skills starting today.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <h3 className="font-bold mb-2">High School (Grade 9-10)</h3>
                  <p className="text-sm text-gray-300">Focus on foundational coding (Python) and participate in 2 debate competitions.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <h3 className="font-bold mb-2">High School (Grade 11-12)</h3>
                  <p className="text-sm text-gray-300">Take Advanced Math and build one independent passion project.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <h3 className="font-bold mb-2">College Degree</h3>
                  <p className="text-sm text-gray-300">B.Tech in Computer Science or B.Sc in Economics & Data Analysis.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Paywall Overlay */}
          {isLocked && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-2xl border border-gray-100 max-w-md w-full text-center mx-4">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black mb-3">Unlock Your Full Report</h2>
                <p className="text-gray-600 font-medium mb-8">
                  Pay a one-time fee of ₹99 to permanently unlock your detailed AI career roadmap and get a free 30-min session with a human mentor.
                </p>
                
                <button 
                  onClick={() => setIsLocked(false)}
                  className="w-full py-4 rounded-xl bg-brand-purple text-white font-black text-lg hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 mb-4"
                >
                  Pay ₹99 to Unlock
                </button>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">100% Secure Payment</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
