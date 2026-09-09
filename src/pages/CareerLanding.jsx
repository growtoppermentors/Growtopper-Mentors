import React from 'react';
import { ArrowRight, Brain, Target, FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function CareerLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans">
      <Navbar onRequestInvite={() => navigate('/counseling-room')} />
      
      <main className="pt-24 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[13px] tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            Beta Launch • Grades 6-12
          </div>
          <h1 className="text-[40px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
            Discover Your Child's Perfect Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">AI Counseling.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 text-balance">
            Our advanced AI analyzes your child's strengths, hobbies, and personality through an engaging 5-minute chat, generating a 5-year roadmap for success.
          </p>
          
          <button 
            onClick={() => navigate('/counseling-room')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-purple text-white font-black text-lg hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1"
          >
            Start Free AI Assessment <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 font-bold mt-4">100% Free Chat. No credit card required.</p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-brand-purple">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black mb-3">1. Smart AI Chat</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Your child answers 5 simple, engaging questions about what they love doing in a friendly chat environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black mb-3">2. Deep Analysis</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Our model maps their responses against 500+ modern career paths to find their true zone of genius.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black mb-3">3. Growth Report</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Unlock a comprehensive roadmap including recommended degrees, skills to learn, and a free 1-on-1 human mentor session.
            </p>
          </div>
        </div>

        {/* Sneak Peek / Trust */}
        <div className="bg-brand-dark rounded-[40px] p-8 md:p-16 text-center text-white max-w-5xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Stop guessing about their future.</h2>
          <p className="text-gray-400 font-medium mb-10 max-w-xl mx-auto relative z-10">
            Traditional career counseling costs ₹5000+ and relies on outdated personality tests. Our AI model dynamically adapts to your child's unique interests.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Free Chat Session
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Unlock Report for ₹99
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Free 30-min Human Counseling
            </div>
          </div>
        </div>
      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
