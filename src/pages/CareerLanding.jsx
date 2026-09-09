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
            <div className="p-8 rounded-[32px] border border-[#FAD4D4] shadow-sm bg-gradient-to-br from-[#FDF2F2] to-[#FFFFFF] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 shadow-sm">
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
                  <p className="text-gray-700 text-sm font-medium">No discussion about market reality, earning potential, or your actual current academic strengths.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5 border border-red-100"><span className="text-xs font-bold">4</span></div>
                  <p className="text-gray-700 text-sm font-medium">Leave you with zero execution plan on how to actually achieve it.</p>
                </li>
              </ul>
            </div>

            {/* Growtopper Way */}
            <div className="p-8 rounded-[32px] border border-[#DDE4FF] shadow-sm bg-gradient-to-br from-[#EEF2FF] to-[#FFFFFF] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
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
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-black text-center mb-12">How we align Passion with Profession.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1: Purple Pale */}
            <div className="p-8 rounded-[32px] shadow-sm border border-[#E8D9FF] bg-gradient-to-br from-[#F5EEFF] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600 shadow-sm">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">1. AI SWOT Test</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">A 30-min interactive chat to evaluate your strengths, weaknesses, and habits.</p>
            </div>

            {/* Step 2: Orange Pale */}
            <div className="p-8 rounded-[32px] shadow-sm border border-[#FFEDDE] bg-gradient-to-br from-[#FFF5ED] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-orange-600 shadow-sm">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">2. Report Generation</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">A detailed report card highlighting your current growth stage and market opportunities.</p>
            </div>

            {/* Step 3: Green Pale */}
            <div className="p-8 rounded-[32px] shadow-sm border border-[#D6F0C2] bg-gradient-to-br from-[#F2FAED] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 text-green-600 shadow-sm">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">3. 1-on-1 Video Call</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Discuss the results with an expert to ensure your passion has real earning potential.</p>
            </div>

            {/* Step 4: Pink Pale */}
            <div className="p-8 rounded-[32px] shadow-sm border border-[#F2CFE1] bg-gradient-to-br from-[#FDF0F6] to-[#FFFFFF] flex flex-col items-start hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 text-pink-600 shadow-sm">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="font-black text-xl mb-3 text-gray-900">4. Execution Strategy</h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">Walk away with a concrete, workable roadmap to achieve your chosen goal.</p>
            </div>

          </div>
        </div>

      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
