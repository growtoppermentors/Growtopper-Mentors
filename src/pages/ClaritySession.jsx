import React from 'react';
import { ArrowRight, Brain, Heart, CheckCircle2, Target, BarChart, Clock, Shield, Zap, BookOpen, MessageSquare, Layout, Activity, Compass, Users, FileText, Star, Check, ChevronRight, Video } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const parameters = [
  { name: "Digital Usage", desc: "Screen time habits & device dependency", Icon: Layout, color: 'bg-gradient-to-br from-purple-50 to-white text-purple-600 border-purple-100' },
  { name: "Education Ecosystem", desc: "Impact of school & coaching environment", Icon: BookOpen, color: 'bg-gradient-to-br from-blue-50 to-white text-blue-600 border-blue-100' },
  { name: "Academic Knowledge", desc: "Core conceptual clarity and learning gaps", Icon: Brain, color: 'bg-gradient-to-br from-indigo-50 to-white text-indigo-600 border-indigo-100' },
  { name: "Accountability", desc: "Level of self-discipline & ownership", Icon: Shield, color: 'bg-gradient-to-br from-green-50 to-white text-green-600 border-green-100' },
  { name: "Communication Skills", desc: "Ability to express thoughts confidently", Icon: MessageSquare, color: 'bg-gradient-to-br from-sky-50 to-white text-sky-600 border-sky-100' },
  { name: "Resources & Strategies", desc: "Effectiveness of current study methods", Icon: Target, color: 'bg-gradient-to-br from-orange-50 to-white text-orange-600 border-orange-100' },
  { name: "Aspirations & Roadmap", desc: "Clarity on future goals and direction", Icon: Compass, color: 'bg-gradient-to-br from-pink-50 to-white text-pink-600 border-pink-100' },
  { name: "Time Utilization", desc: "How effectively the 24 hours are used", Icon: Clock, color: 'bg-gradient-to-br from-teal-50 to-white text-teal-600 border-teal-100' },
  { name: "Mindset & Motivation", desc: "Drive to succeed and resilience", Icon: Zap, color: 'bg-gradient-to-br from-amber-50 to-white text-amber-600 border-amber-100' },
  { name: "Routine & Habits", desc: "Consistency in productive daily behaviors", Icon: Activity, color: 'bg-gradient-to-br from-rose-50 to-white text-rose-600 border-rose-100' },
];

const stats = [
  { val: '60', unit: 'min', label: 'Deep Dive Session' },
  { val: '10+', unit: '',   label: 'AI Parameters' },
  { val: '₹1', unit: '',    label: 'One-Time Setup' },
  { val: '500+', unit: '',  label: 'Students Helped' },
];

const parentProblems = [
  { n:'01', title:'High Investment, Low Clarity', desc:"Parents spend ₹20,000–₹1,00,000+ a year on courses yet have no clear understanding of what's helping or harming growth.", style:'orange' },
  { n:'02', title:'Solving Problems Blindly', desc:"When performance drops, parents buy new courses without identifying root cause — the cycle keeps repeating.", style:'purple' },
  { n:'03', title:'Weak Parent–School Communication', desc:"Communication with schools is usually superficial, providing little real insight into the child's actual development.", style:'green' },
  { n:'04', title:'Desire for Holistic Growth, but No Guidance', desc:"Parents want emotional, academic, mental & social growth — but don't know how to begin or who can help.", style:'multi' },
];

const studentProblems = [
  { n:'01', title:'Confusion Despite Coaching', desc:"Students attend school and coaching yet still feel confused and burnt out because no one aligns school + coaching + routine.", style:'multi' },
  { n:'02', title:'Scattered Daily Routine', desc:"Out of 24 hours, 6 go to school, 8 to sleep — the remaining 10 lack structure. 6–8 of those are lost to distractions.", style:'purple' },
  { n:'03', title:'Mental Overload & Low Confidence', desc:"Mentally overloaded and emotionally drained. They don't know where to start — creating procrastination and loss of confidence.", style:'orange' },
  { n:'04', title:'No Clarity on What or Why to Study', desc:"Most students don't know why they're studying a topic, how to study it, or what to prioritize — leading to wasted time.", style:'green' },
];

const getGradientClass = (style) => {
  switch(style) {
      case 'orange': return 'bg-gradient-to-br from-[#FFF4ED] to-[#FFFaf0] border-orange-100 text-gray-900';
      case 'purple': return 'bg-gradient-to-br from-[#F4F1FF] to-[#FAFAFF] border-purple-100 text-gray-900';
      case 'green': return 'bg-gradient-to-br from-[#F0FDF4] to-[#F8FAFC] border-green-100 text-gray-900';
      case 'multi': return 'bg-gradient-to-br from-[#FFF0E5] via-[#F3E8FF] to-[#E0F2FE] border-purple-100 text-gray-900';
      default: return 'bg-white border-gray-100 text-gray-900';
  }
};

export default function ClaritySession() {
  const handleBook = () => window.open('https://pages.razorpay.com/setupcall', '_blank');

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-sans flex flex-col">
      <Navbar onRequestInvite={handleBook} />

      {/* ──────────────────── HERO ──────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 w-full max-w-[1100px] mx-auto pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left: Text */}
          <div className="w-full lg:max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF4ED] border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              The 60-Minute Turning Point
            </div>

            <h1 className="text-[30px] md:text-[40px] lg:text-[46px] font-black leading-[1.05] tracking-tight mb-5 text-balance">
              1-on-1 Video Call for<br />
              <span className="text-[#5B10FF]">Student Growth Check.</span>
            </h1>

            <p className="text-[14px] md:text-[15px] text-gray-500 font-medium max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed">
              A comprehensive 60-minute intervention: 30 minutes of deep AI-powered SWOT analysis, followed by a 30-minute 1-on-1 Mentor strategy call to decode reality and build an execution roadmap.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-lg mx-auto lg:mx-0">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 text-center">
                  <div className="font-black text-[20px] md:text-[22px] text-[#5B10FF] leading-none">
                    {s.val}<span className="text-[14px]">{s.unit}</span>
                  </div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={handleBook}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B10FF] text-white font-bold text-[14px] hover:bg-[#4E0EE6] transition-colors shadow-lg shadow-[#5B10FF]/25"
            >
              Book for ₹1 <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Hero Card (Abode-style) */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1.5px] shadow-md">
              <div className="bg-white rounded-[27px] p-6 lg:p-7">
                <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[9px] font-black uppercase tracking-widest mb-4">
                  CLARITY SESSION
                </div>
                <h3 className="text-[20px] font-black text-brand-dark leading-[1.1] mb-4">
                  Understand your child holistically.
                </h3>

                <div className="flex flex-col gap-3 mb-5">
                  {[
                    { icon: FileText, color: 'bg-blue-50 text-blue-500', title: '30 min AI SWOT Test', desc: 'Data-driven insights on strengths, weaknesses & interests.' },
                    { icon: Video,    color: 'bg-purple-50 text-[#5B10FF]', title: '30 min 1:1 Mentor Call', desc: 'Personalized discussion to decode results & set direction.' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-gray-50/60 rounded-xl p-3 border border-gray-100">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${item.color}`}>
                            <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </div>
                          <h4 className="font-bold text-[12px] text-gray-800">{item.title}</h4>
                        </div>
                        <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* SWOT mini card */}
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-4">
                  <h4 className="font-bold text-[11px] text-gray-800 mb-2.5 pb-2 border-b border-gray-100">SWOT Report Preview</h4>
                  <ul className="space-y-2">
                    {[
                      { label: 'Strengths',    color: 'bg-green-500',   w: 'w-4/5' },
                      { label: 'Weaknesses',   color: 'bg-red-400',     w: 'w-3/5' },
                      { label: 'Opportunities',color: 'bg-[#5B10FF]',   w: 'w-[90%]' },
                      { label: 'Growth Areas', color: 'bg-amber-400',   w: 'w-2/3' },
                    ].map(s => (
                      <li key={s.label} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.color} shrink-0`} />
                        <span className="text-[10px] font-semibold text-gray-600 w-20 shrink-0">{s.label}</span>
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full ${s.color} rounded-full ${s.w}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── PROBLEMS (2 col) ──────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4">
            THE REAL PROBLEM
          </div>
          <h2 className="text-[26px] md:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance">
            Problems we decode & solve.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Parents */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 text-center lg:text-left">What Parents Face</p>
            <div className="space-y-4">
              {parentProblems.map((p) => (
                <div key={p.n} className={`p-6 md:p-8 rounded-2xl border shadow-sm ${getGradientClass(p.style)}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-[12px] font-black shrink-0 mt-0.5 text-gray-400 opacity-60">{p.n}</span>
                    <div>
                      <h4 className="font-bold text-[15px] md:text-[16px] mb-2 text-gray-900">{p.title}</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 text-center lg:text-left">What Students Struggle With</p>
            <div className="space-y-4">
              {studentProblems.map((p) => (
                <div key={p.n} className={`p-6 md:p-8 rounded-2xl border shadow-sm ${getGradientClass(p.style)}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-[12px] font-black shrink-0 mt-0.5 text-gray-400 opacity-60">{p.n}</span>
                    <div>
                      <h4 className="font-bold text-[15px] md:text-[16px] mb-2 text-gray-900">{p.title}</h4>
                      <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── 10 PARAMETERS ──────────────────── */}
      <section className="bg-white border-y border-gray-100 py-20 mb-0">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4">
              <BarChart className="w-3 h-3" /> AI ANALYSIS ENGINE
            </div>
            <h2 className="text-[26px] md:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3">
              The 10-Parameter AI SWOT Analysis
            </h2>
            <p className="text-[14px] text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
              Our AI evaluates the student across 10 critical dimensions to calculate their exact Growth Score and developmental Stage. Here is what we measure:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {parameters.map((p, idx) => {
              const Icon = p.Icon;
              return (
                <div key={idx} className={`rounded-2xl p-5 flex flex-col border shadow-sm hover:shadow-md transition-all group ${p.color}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-[14px] text-gray-900 leading-tight mb-1">{p.name}</h3>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────── AI + HUMAN ENGINE ──────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFF4ED] border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
            THE GROWTOPPER ENGINE
          </div>
          <h2 className="text-[26px] md:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3">
            AI Intelligence. <span className="text-[#5B10FF]">Human Empathy.</span>
          </h2>
          <p className="text-[14px] text-gray-500 font-medium max-w-xl mx-auto">
            Technology alone can't motivate a teenager. Humans alone can't track millions of data points. We combine both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* AI Brain Card */}
          <div className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/20 via-transparent to-[#5B10FF]/10 p-[1.5px] shadow-sm hover:shadow-md hover:shadow-[#5B10FF]/5 transition-all">
            <div className="bg-white rounded-[27px] p-7">
              <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center mb-5">
                <Brain className="w-6 h-6 text-gray-700" />
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-[#5B10FF]/5 text-[#5B10FF] text-[9px] font-black uppercase tracking-widest mb-3">THE AI BRAIN</div>
              <h3 className="text-[20px] font-black text-brand-dark mb-5">Precision Analysis</h3>
              <ul className="space-y-4">
                {[
                  { Icon: Target,   text: "Analyzes the 30-min psychology & focus test to identify precise learning gaps." },
                  { Icon: FileText, text: "Generates hyper-personalized, realistic daily study roadmaps." },
                  { Icon: Activity, text: "Tracks habit streaks and automatically flags burnout risks." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#5B10FF]/8 rounded-xl flex items-center justify-center shrink-0">
                      <item.Icon className="w-4 h-4 text-[#5B10FF]" strokeWidth={2} />
                    </div>
                    <span className="text-gray-500 font-medium text-[13px] leading-relaxed pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Human Heart Card */}
          <div className="rounded-[28px] bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-orange-100/30 p-[1.5px] shadow-sm hover:shadow-md transition-all">
            <div className="bg-gradient-to-br from-[#FFF9F5] to-white rounded-[27px] p-7">
              <div className="w-12 h-12 bg-white border border-orange-100 rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <div className="inline-block px-3 py-1 rounded-md bg-orange-50 text-orange-600 text-[9px] font-black uppercase tracking-widest mb-3">THE HUMAN HEART</div>
              <h3 className="text-[20px] font-black text-brand-dark mb-5">Empathy & Accountability</h3>
              <ul className="space-y-4">
                {[
                  { Icon: Users,        text: "1-on-1 weekly video calls to review progress and remove blockers." },
                  { Icon: Shield,       text: "Provides deep emotional support and builds real-world confidence." },
                  { Icon: CheckCircle2, text: "Strict but friendly daily accountability to ensure the AI plan is executed." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                      <item.Icon className="w-4 h-4 text-orange-500" strokeWidth={2} />
                    </div>
                    <span className="text-gray-600 font-medium text-[13px] leading-relaxed pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── HOW THE SESSION WORKS ──────────────────── */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-purple/5 text-brand-purple text-[10px] font-black uppercase tracking-widest mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-[26px] md:text-[36px] font-black text-brand-dark leading-[1.1] tracking-tight mb-3">
              What happens on the call?
            </h2>
            <p className="text-[14px] text-gray-500 font-medium max-w-lg mx-auto">
              Three focused steps that give your child the clearest roadmap they've ever had.
            </p>
          </div>

          {/* 3-step card grid */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16">
            {[
              { n:'01', Icon: BarChart, title:'Identify The Problem', desc:"We decode the real picture of your child's journey from the AI SWOT test — no assumptions, just data-backed insights." },
              { n:'02', Icon: Target,   title:'Strategic Correction', desc:"If we find flaws in execution or mindset, our mentor explains exactly how to strategically correct them with precision." },
              { n:'03', Icon: FileText, title:'The Execution Roadmap', desc:"We map out the exact areas to work on to achieve desired goals and keep the student consistently ahead of trends." },
            ].map((step, i) => {
              const Icon = step.Icon;
              return (
                <div key={i} className="rounded-[28px] bg-gradient-to-br from-[#5B10FF]/15 via-transparent to-[#5B10FF]/8 p-[1px] hover:shadow-lg hover:shadow-[#5B10FF]/5 transition-all group">
                  <div className="bg-white rounded-[27px] p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-black text-[#5B10FF] tracking-widest">{step.n}</span>
                      <div className="w-9 h-9 bg-[#5B10FF]/8 rounded-xl flex items-center justify-center group-hover:bg-[#5B10FF] transition-colors">
                        <Icon className="w-4 h-4 text-[#5B10FF] group-hover:text-white transition-colors" strokeWidth={2} />
                      </div>
                    </div>
                    <h4 className="font-black text-[16px] text-brand-dark mb-2">{step.title}</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner — Abode-style orange+white gradient */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#FFF4ED] via-white to-[#FDF0FF] border border-orange-100 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4ED] border border-orange-200 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
                <Star className="w-3 h-3 fill-orange-500" /> One-Time Setup Fee
              </div>
              <h3 className="text-[24px] md:text-[30px] font-black text-brand-dark leading-tight mb-2">
                Ready to see where your<br />child actually stands?
              </h3>
              <p className="text-[13px] text-gray-500 font-medium max-w-md leading-relaxed">
                Just 60 minutes of honest, data-backed clarity. No long-term commitments. No pressure.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={handleBook}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B10FF] text-white font-bold text-[14px] hover:bg-[#4E0EE6] transition-colors shadow-lg shadow-[#5B10FF]/25"
              >
                Book for ₹1 <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/pricing"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold text-[14px] hover:border-[#5B10FF]/30 hover:text-[#5B10FF] transition-colors"
              >
                View Plans <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer onRequestInvite={handleBook} />
    </div>
  );
}
