import React, { useState } from 'react';
import { Lock, FileText, CheckCircle2, Zap, Briefcase, Calendar, Video, Download, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ReportCard() {
  const navigate = useNavigate();
  // 'locked' -> 'form' -> 'unlocked'
  const [step, setStep] = useState('locked'); 
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', grade: '', datetime: '' });

  const handlePaymentClick = () => {
    // Mock payment gateway interaction
    // Once "paid", go to scheduling form
    setStep('form');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here we would save to Supabase
    setStep('unlocked');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans pb-20">
      
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between relative z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-sm">
            <FileText className="w-4 h-4" />
          </div>
          <span className="font-black tracking-tight text-lg">AI Growth Report</span>
        </div>
        {step === 'unlocked' && (
          <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-purple bg-brand-purple/10 px-4 py-2 rounded-lg hover:bg-brand-purple/20 transition-colors">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        )}
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black mb-3">Your Personalized Roadmap</h1>
          <p className="text-gray-600 font-medium text-lg">Based on your AI assessment, here is your unique career trajectory.</p>
        </div>

        {/* Dashboard Content */}
        <div className="relative">
          
          <div className={`grid md:grid-cols-3 gap-6 transition-all duration-500 ${step !== 'unlocked' ? 'blur-md select-none' : ''}`}>
            
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

          {/* Overlays */}
          {step === 'locked' && (
            <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
              <div className="bg-white p-6 sm:p-10 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 max-w-[500px] w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-brand-purple text-white text-xs font-bold uppercase tracking-widest py-2">
                  Special Offer — First 100 Students Only
                </div>
                
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 mt-6 text-red-500">
                  <Lock className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black mb-2">Report Successfully Generated</h2>
                <p className="text-gray-500 font-medium mb-8 text-sm px-4">
                  Your personalized AI Growth Report is ready. Unlock it now and schedule your expert consultation.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mb-8 text-left space-y-4 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-purple" />
                      <span className="font-bold text-gray-800">Detailed Report Card</span>
                    </div>
                    <span className="text-gray-400 line-through font-medium">₹499</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-brand-purple" />
                      <span className="font-bold text-gray-800">1-on-1 Video Call with Expert</span>
                    </div>
                    <span className="text-gray-400 line-through font-medium">₹999</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <span className="font-black text-lg">Total Value</span>
                    <div className="text-right">
                      <span className="text-xs text-brand-purple font-bold block mb-0.5">80% OFF TODAY</span>
                      <span className="font-black text-2xl text-brand-purple">₹299</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handlePaymentClick}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-purple-500 text-white font-black text-lg hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 mb-4"
                >
                  Unlock Both for ₹299
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" /> 100% Secure Payment
                </div>
              </div>
            </div>
          )}

          {step === 'form' && (
            <div className="absolute inset-0 z-20 flex items-start sm:items-center justify-center p-4">
              <div className="bg-white p-6 sm:p-8 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 max-w-[500px] w-full text-left">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black mb-2">Payment Successful!</h2>
                <p className="text-gray-500 font-medium mb-8 text-sm">
                  Please fill out the details below to generate your profile in our database and schedule your 1-on-1 video call.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Student Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Grade / Class</label>
                      <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all">
                        <option value="">Select Grade</option>
                        <option value="6">Grade 6</option><option value="7">Grade 7</option>
                        <option value="8">Grade 8</option><option value="9">Grade 9</option>
                        <option value="10">Grade 10</option><option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Parent's WhatsApp Number</label>
                    <input required type="tel" placeholder="+91" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wide">Schedule 1-on-1 Call</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input required type="datetime-local" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" />
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full mt-6 py-4 rounded-xl bg-brand-dark text-white font-black text-lg hover:bg-gray-800 transition-all shadow-xl">
                    Create Profile & View Report
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
