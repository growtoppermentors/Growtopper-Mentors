import React from 'react';
import { ArrowRight, Brain, Target, Compass, CheckCircle2, Rocket, XCircle, TrendingUp, Shield, BarChart } from 'lucide-react';
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
            A New Approach to Career Counseling
          </div>
          <h1 className="text-[40px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
            We don't tell you what to be. We show you <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">how to achieve it.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Most platforms give you a generic personality test. We evaluate your current reality, align your passion with earning potential, and build a concrete execution roadmap.
          </p>
          
          <button 
            onClick={() => navigate('/clarity-session')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-purple text-white font-black text-lg hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1"
          >
            See Our Approach <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Us vs Them Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">Why the traditional approach is broken.</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Traditional */}
            <div className="bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-500">Traditional Platforms</h3>
              </div>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-gray-500">1</span></div>
                  <p className="text-gray-500 text-sm font-medium">Give you a basic 5-minute personality test.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-gray-500">2</span></div>
                  <p className="text-gray-500 text-sm font-medium">Arbitrarily assign you a career (e.g. "You should be a doctor").</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-gray-500">3</span></div>
                  <p className="text-gray-500 text-sm font-medium">No discussion about market reality, earning potential, or your actual current academic strengths.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-gray-500">4</span></div>
                  <p className="text-gray-500 text-sm font-medium">Leave you with zero execution plan on how to actually achieve it.</p>
                </li>
              </ul>
            </div>

            {/* Growtopper Way */}
            <div className="bg-brand-dark text-white p-8 rounded-[32px] border border-brand-purple/30 shadow-xl shadow-brand-purple/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black">The Growtopper Approach</h3>
              </div>
              
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-white">1</span></div>
                  <p className="text-gray-300 text-sm font-medium">Evaluate your <strong className="text-white">current state (SWOT)</strong> through a 30-minute AI chat.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-white">2</span></div>
                  <p className="text-gray-300 text-sm font-medium">Educate you on various careers and let <strong className="text-white">you choose</strong> what actually sparks your passion.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold text-white">3</span></div>
                  <p className="text-gray-300 text-sm font-medium">1-on-1 human reality check to align your passion with <strong className="text-white">market growth & earning potential</strong>.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-brand-purple/50"><span className="text-xs font-bold text-white">4</span></div>
                  <p className="text-white text-sm font-bold">Provide a workable, step-by-step Execution Roadmap to bridge the gap.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4 Step Process */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-black text-center mb-12">How we align Passion with Profession.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1: AI SWOT Test - Dashboard Gradient */}
            <div className="p-6 rounded-[32px] shadow-lg flex flex-col items-center text-center bg-gradient-to-br from-[#cd5d10] via-[#f29c54] to-[#d4e3f5] text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/30 shadow-sm group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3 drop-shadow-sm">1. AI SWOT Test</h3>
              <p className="text-sm text-white/90 font-medium leading-relaxed drop-shadow-sm">A 30-min interactive chat to evaluate your strengths, weaknesses, and habits.</p>
            </div>

            {/* Step 2: Report Generation - Startup Program Gradient */}
            <div className="p-6 rounded-[32px] shadow-lg flex flex-col items-center text-center bg-gradient-to-br from-[#6974d6] to-[#b5c2f2] text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/30 shadow-sm group-hover:scale-110 transition-transform">
                <BarChart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3 drop-shadow-sm">2. Report Generation</h3>
              <p className="text-sm text-white/90 font-medium leading-relaxed drop-shadow-sm">A detailed report card highlighting your current growth stage and market opportunities.</p>
            </div>

            {/* Step 3: 1-on-1 Video Call - Brand Gradient */}
            <div className="p-6 rounded-[32px] shadow-lg flex flex-col items-center text-center bg-gradient-to-br from-[#dd6e3d] via-[#865ca2] to-[#5974d5] text-white relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/30 shadow-sm group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-black text-xl mb-3 drop-shadow-sm">3. 1-on-1 Video Call</h3>
              <p className="text-sm text-white/90 font-medium leading-relaxed drop-shadow-sm">Discuss the results with an expert to ensure your passion has real earning potential.</p>
            </div>

            {/* Step 4: Execution Strategy - Sovereign Models Gradient */}
            <div className="p-6 rounded-[32px] shadow-lg flex flex-col items-center text-center bg-gradient-to-br from-[#74ac49] to-[#dcead0] text-gray-900 relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/50 shadow-sm group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-[#5a8b36]" />
              </div>
              <h3 className="font-black text-xl mb-3 drop-shadow-sm text-[#3b6021]">4. Execution Strategy</h3>
              <p className="text-sm text-[#4a752b] font-bold leading-relaxed">Walk away with a concrete, workable roadmap to achieve your chosen goal.</p>
            </div>
          </div>
        </div>

      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
