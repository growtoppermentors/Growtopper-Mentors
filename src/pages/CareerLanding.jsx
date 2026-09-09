import React from 'react';
import { ArrowRight, Brain, Target, Compass, CheckCircle2, Rocket } from 'lucide-react';
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
            Introducing Growtch AI  3-Step Career Counseling
          </div>
          <h1 className="text-[40px] md:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
            Stop Guessing. Get a Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Execution Plan</span> For Your Future.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-10 text-balance">
            Whether you are completely blank about your future or already have a dream career in mind, our AI mentor analyzes you for 30 minutes and gives you a crystal clear roadmap.
          </p>
          
          <button 
            onClick={() => navigate('/counseling-room')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-purple text-white font-black text-lg hover:bg-brand-purple/90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1"
          >
            Start Your AI Session <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 font-bold mt-4">Takes 30 minutes. 100% Free to Chat.</p>
        </div>

        {/* Two Paths Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl font-black text-center mb-10">We solve two real problems:</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Path 1: The Blank Student */}
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm border border-gray-100 hover:border-brand-purple/30 transition-colors relative group">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black mb-3">1. "I don't know what to do."</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Are you feeling lost? Our AI acts as a deeply empathetic counselor. It will ask you ~30 strategic questions about your interests, habits, and strengths over 30 minutes. 
              </p>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-sm font-bold text-gray-800 mb-1">The Result:</p>
                <p className="text-sm text-gray-600">A clear recommendation of your top 3 perfect career paths and exactly why they fit you.</p>
              </div>
            </div>

            {/* Path 2: The Decided Student */}
            <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm border border-gray-100 hover:border-brand-purple/30 transition-colors relative group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black mb-3">2. "I know my dream career."</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Already know you want to be an Architect or Data Scientist? Tell us your goal. Our AI will analyze the modern industry landscape and your current school year.
              </p>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-sm font-bold text-gray-800 mb-1">The Result:</p>
                <p className="text-sm text-gray-600">A step-by-step execution roadmap telling you exactly what skills to learn and actions to take this year.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Sneak Peek / Trust */}
        <div className="bg-brand-dark rounded-[40px] p-8 md:p-16 text-center text-white max-w-5xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Get clarity today.</h2>
          <p className="text-gray-400 font-medium mb-10 max-w-xl mx-auto relative z-10">
            Traditional career counseling costs thousands and relies on outdated personality tests. Growtch AI dynamically adapts to you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Free 30-min AI Assessment
            </div>
            <div className="hidden sm:block text-gray-600"></div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Detailed Report Card
            </div>
            <div className="hidden sm:block text-gray-600"></div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Human Counselor Follow-up
            </div>
          </div>
        </div>
      </main>
      
      <Footer onRequestInvite={() => navigate('/counseling-room')} />
    </div>
  );
}
