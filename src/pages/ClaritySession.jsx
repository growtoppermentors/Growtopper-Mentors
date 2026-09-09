import React, { useState } from 'react';
import { ArrowRight, Brain, Heart, CheckCircle2, Target, BarChart, Clock, Shield, Zap, BookOpen, MessageSquare, Layout, Activity, Compass, Users, FileText, Star, Check, ChevronRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const parameters = [
  { name: "Digital Usage",          icon: Layout,      color: "bg-violet-50 text-violet-600" },
  { name: "Education Ecosystem",    icon: BookOpen,    color: "bg-blue-50 text-blue-600" },
  { name: "Academic Knowledge",     icon: Brain,       color: "bg-purple-50 text-purple-600" },
  { name: "Accountability",         icon: Shield,      color: "bg-green-50 text-green-600" },
  { name: "Communication Skills",   icon: MessageSquare, color: "bg-pink-50 text-pink-600" },
  { name: "Resources & Strategies", icon: Target,      color: "bg-orange-50 text-orange-600" },
  { name: "Aspirations & Roadmap",  icon: Compass,     color: "bg-sky-50 text-sky-600" },
  { name: "Time Utilization",       icon: Clock,       color: "bg-teal-50 text-teal-600" },
  { name: "Mindset & Motivation",   icon: Zap,         color: "bg-amber-50 text-amber-600" },
  { name: "Routine & Habits",       icon: Activity,    color: "bg-rose-50 text-rose-600" },
];

const problems = {
  parents: [
    { title: "High Investment, Low Clarity", desc: "Parents spend ₹20,000–₹1,00,000+ a year on courses and coaching yet still have no clear understanding of what's helping or harming their child's growth.", accent: true },
    { title: "Solving Problems Blindly", desc: "When performance drops, parents buy new courses without identifying the root cause — which keeps the cycle repeating." },
    { title: "Weak Parent–School Communication", desc: "Communication with schools is usually superficial, providing little real insight into the child's actual development journey." },
    { title: "Desire for Holistic Growth, but No Guidance", desc: "Parents want their child to grow emotionally, academically, mentally, and socially — but don't know how to begin or who can help.", dark: true },
  ],
  students: [
    { title: "Confusion Despite Coaching", desc: "Students attend school and coaching, yet still feel confused and burnt out because no one aligns school + coaching + daily routine.", dark: true },
    { title: "Scattered Daily Routine", desc: "Out of 24 hours, 6 go to school, 8 to sleep — the remaining 10 lack structure. 6–8 of those are lost to distractions.", purple: true },
    { title: "Mental Overload & Low Confidence", desc: "Students feel mentally overloaded and emotionally drained. They don't know where to start, which creates procrastination.", accent: true },
    { title: "No Clarity on What or Why to Study", desc: "Most students don't know why they're studying a topic, how to study it, or what to prioritize — leading to wasted time." },
  ],
};

const steps = [
  { n: "01", title: "Identify The Problem", desc: "We decode the real picture of your child's journey from the AI SWOT test — no assumptions, just data-backed insights.", icon: BarChart },
  { n: "02", title: "Strategic Correction", desc: "If we find flaws in execution or mindset, our mentor explains exactly how to strategically correct them with precision.", icon: Target },
  { n: "03", title: "The Execution Roadmap", desc: "We map out the exact areas to work on to achieve desired goals and keep the student ahead of every academic trend.", icon: FileText },
];

export default function ClaritySession() {
  const [openModal, setOpenModal] = useState(false);

  const handleBook = () => {
    window.open('https://calendly.com/growtopper', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#111827] font-sans selection:bg-brand-purple/20">
      <Navbar onRequestInvite={handleBook} />

      <main className="pt-24 lg:pt-32 pb-20">

        {/* ─── HERO ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[11px] tracking-widest uppercase mb-6 border border-brand-purple/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            The 60-Minute Turning Point
          </div>

          <h1 className="text-[38px] md:text-[56px] lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto text-gray-900">
            1-on-1 Video Call for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-500 to-pink-500">
              Student Growth Check.
            </span>
          </h1>

          <p className="text-[16px] md:text-[18px] text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            A comprehensive 60-minute intervention: 30 minutes of deep AI-powered SWOT analysis, followed by a 30-minute 1-on-1 Mentor strategy call to decode reality and build an execution roadmap.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { val: "60 min", label: "Deep Dive Session" },
              { val: "10+", label: "AI Parameters Analysed" },
              { val: "Free", label: "Zero Cost to Start" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm min-w-[120px]">
                <span className="text-[22px] font-black text-brand-purple">{s.val}</span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleBook}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-purple text-white font-black text-[16px] hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1 active:scale-[0.98]"
          >
            Book Free Clarity Session <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* ─── PROBLEMS (2-col) ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-gray-500 font-bold text-[11px] tracking-widest uppercase mb-4">
              The Reality of Modern Education
            </div>
            <h2 className="text-[28px] md:text-[38px] font-black tracking-tight">Problems we decode and solve.</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Parents */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-5 text-center lg:text-left">What Parents Face Every Day</h3>
              <div className="space-y-4">
                {problems.parents.map((p, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${
                    p.accent ? 'bg-brand-purple text-white border-brand-purple' :
                    p.dark   ? 'bg-[#1a1a1a] text-white border-transparent' :
                    'bg-white text-gray-900 border-gray-100'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black shrink-0 mt-0.5 ${p.accent || p.dark ? 'text-white/50' : 'text-brand-purple'}`}>{String(i+1).padStart(2,'0')}</span>
                      <div>
                        <h4 className={`font-bold text-[15px] mb-1 ${p.accent ? 'text-white' : p.dark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h4>
                        <p className={`text-[13px] leading-relaxed ${p.accent ? 'text-white/75' : p.dark ? 'text-gray-400' : 'text-gray-500'}`}>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Students */}
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-5 text-center lg:text-left">What Students Struggle With</h3>
              <div className="space-y-4">
                {problems.students.map((p, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${
                    p.purple ? 'bg-brand-purple text-white border-brand-purple' :
                    p.dark   ? 'bg-[#1a1a1a] text-white border-transparent' :
                    p.accent ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100' :
                    'bg-white text-gray-900 border-gray-100'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className={`text-[11px] font-black shrink-0 mt-0.5 ${p.purple || p.dark ? 'text-white/50' : 'text-brand-purple'}`}>{String(i+1).padStart(2,'0')}</span>
                      <div>
                        <h4 className={`font-bold text-[15px] mb-1 ${p.purple ? 'text-white' : p.dark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h4>
                        <p className={`text-[13px] leading-relaxed ${p.purple ? 'text-white/75' : p.dark ? 'text-gray-400' : 'text-gray-500'}`}>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10 PARAMETERS ─── */}
        <section className="bg-white border-y border-gray-100 py-24 mb-28">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-5">
                <BarChart className="w-7 h-7" />
              </div>
              <h2 className="text-[28px] md:text-[38px] font-black mb-4 tracking-tight">The 10-Parameter AI SWOT Analysis</h2>
              <p className="text-gray-500 font-medium text-[15px] leading-relaxed">
                During the first 30 minutes, our AI evaluates the student across 10 critical dimensions to calculate their exact Growth Score and developmental Stage.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {parameters.map((param, idx) => {
                const Icon = param.icon;
                return (
                  <div key={idx} className="bg-[#F8F9FE] border border-gray-100 p-5 rounded-2xl flex flex-col items-center text-center hover:border-brand-purple/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${param.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[12px] text-gray-800 leading-tight">{param.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── AI + HUMAN ENGINE ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-28">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple font-bold text-[11px] tracking-widest uppercase mb-5">
              <Zap className="w-3 h-3" /> The Growtopper Engine
            </div>
            <h2 className="text-[28px] md:text-[42px] font-black tracking-tight mb-3">
              AI Intelligence.{' '}
              <span className="text-brand-purple">Human Empathy.</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto text-[15px]">
              Technology alone can't motivate a teenager. Humans alone can't track millions of data points. We combine both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* AI Brain */}
            <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-[28px] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-[20px] font-black mb-6">The AI Brain</h3>
              <ul className="space-y-5">
                {[
                  { icon: Target,    text: "Analyzes the 30-min psychology & focus test to identify precise learning gaps." },
                  { icon: FileText,  text: "Generates hyper-personalized, realistic daily study roadmaps." },
                  { icon: Activity,  text: "Tracks habit streaks and automatically flags burnout risks." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-purple/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-purple" />
                      </div>
                      <span className="text-gray-600 font-medium text-[13px] leading-relaxed pt-1">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Human Heart */}
            <div className="bg-gradient-to-br from-brand-purple/5 to-purple-50 border border-purple-100 p-8 lg:p-10 rounded-[28px] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white border border-purple-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-6 h-6 text-brand-purple" />
              </div>
              <h3 className="text-[20px] font-black mb-6">The Human Heart</h3>
              <ul className="space-y-5">
                {[
                  { icon: Users,         text: "1-on-1 weekly video calls to review progress and remove blockers." },
                  { icon: Shield,        text: "Provides deep emotional support and builds real-world confidence." },
                  { icon: CheckCircle2,  text: "Strict but friendly daily accountability to ensure the AI plan is executed." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-brand-purple/15 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-purple" />
                      </div>
                      <span className="text-gray-700 font-medium text-[13px] leading-relaxed pt-1">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── HOW THE SESSION WORKS ─── */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-28">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[38px] font-black tracking-tight">What happens on the call?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="bg-white border border-gray-100 rounded-[24px] p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-black text-brand-purple tracking-widest">{step.n}</span>
                    <div className="w-9 h-9 bg-brand-purple/10 rounded-xl flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 text-brand-purple group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h4 className="font-black text-[16px] text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-brand-purple to-purple-600 rounded-[32px] p-10 md:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white font-bold text-[11px] tracking-widest uppercase mb-5">
                <Star className="w-3 h-3 fill-white" /> Completely Free
              </div>
              <h3 className="text-[26px] md:text-[34px] font-black mb-3 leading-tight">
                Ready to see where your child<br />actually stands?
              </h3>
              <p className="text-white/75 font-medium text-[14px] max-w-lg mx-auto mb-8">
                No commitments. No sales pitch. Just 60 minutes of honest, data-backed clarity about your child's growth trajectory.
              </p>
              <button
                onClick={handleBook}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-brand-purple font-black text-[15px] hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1 active:scale-[0.98]"
              >
                Book Free Clarity Session <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer onRequestInvite={handleBook} />
    </div>
  );
}
