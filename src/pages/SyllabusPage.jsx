import React, { useState } from 'react';
import {
  ArrowLeft, Check, Trophy, Award, ChevronDown,
  Atom, BrainCircuit, Building2, Landmark, Mic2, Flame, Compass,
  Calculator, FlaskConical, Sparkles, Medal
} from 'lucide-react';

// ─── ICONS ─────────────────────────────────────────────────────────────────────
const ICONS = {
  math:    <Atom className="w-6 h-6" />,
  tech:    <BrainCircuit className="w-6 h-6" />,
  biz:     <Building2 className="w-6 h-6" />,
  finance: <Landmark className="w-6 h-6" />,
  comm:    <Mic2 className="w-6 h-6" />,
  growth:  <Flame className="w-6 h-6" />,
};

// ─── DATA ──────────────────────────────────────────────────────────────────────
const skills = [
  {
    key: 'math', title: 'Mathematics & Science',
    color: 'from-[#4E14F9] to-[#875BFB]', lightGrad: 'from-[#4E14F9]/6 to-transparent',
    bg: 'bg-[#4E14F9]/5', border: 'border-[#4E14F9]/20', text: 'text-[#4E14F9]', sessions: 8,
    // Quality over quantity: 2 core topic areas with subtopics
    junior: [
      {
        week: '1 & 2', area: 'Mathematics',
        icon: <Calculator className="w-4 h-4" />,
        subtopics: [
          'Number systems, fractions & percentages in real life',
          'Ratio & proportion through everyday scenarios',
          'Algebra: expressions, simple equations & substitution',
          'Geometry: angles, triangles, area & perimeter',
        ]
      },
      {
        week: '3 & 4', area: 'Science',
        icon: <FlaskConical className="w-4 h-4" />,
        subtopics: [
          'Matter & Materials: states, properties & changes',
          'Living World: cells, ecosystems & human body basics',
          'Physics intro: force, light & sound',
          'Applied challenge: real-world Math + Science problems',
        ]
      }
    ],
    senior: [
      {
        week: '1 & 2', area: 'Mathematics',
        icon: <Calculator className="w-4 h-4" />,
        subtopics: [
          'Quadratic equations & coordinate geometry',
          'Trigonometry: ratios, identities & applications',
          'Statistics & probability: data interpretation',
          'Board exam strategies, shortcuts & timed practice',
        ]
      },
      {
        week: '3 & 4', area: 'Science',
        icon: <FlaskConical className="w-4 h-4" />,
        subtopics: [
          'Physics: mechanics, electricity & electromagnetic waves',
          'Chemistry: bonding, periodic table & reactions',
          'Applied science: connect concepts to board problems',
          'Mock paper: full timed evaluation under exam conditions',
        ]
      }
    ]
  },
  {
    key: 'tech', title: 'Technology & AI',
    color: 'from-[#0EA5E9] to-[#38BDF8]', lightGrad: 'from-[#0EA5E9]/6 to-transparent',
    bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', sessions: 8,
    junior: [
      { week: 1, topic: 'Digital literacy: safe internet, passwords & responsible usage' },
      { week: 1, topic: 'How computers work: hardware, software & OS basics' },
      { week: 2, topic: 'Coding fundamentals: logic, patterns & Scratch programming' },
      { week: 2, topic: 'AI in daily life: how Google, YouTube & Alexa think' },
      { week: 3, topic: 'Productivity tools: Google Docs, Slides & Sheets for school' },
      { week: 3, topic: 'Cybersafety: digital footprint & what not to share online' },
      { week: 4, topic: 'Creative tech: Canva AI for posters & presentations' },
      { week: 4, topic: 'Mini project: build a short interactive story using Scratch' },
    ],
    senior: [
      { week: 1, topic: 'Python basics: variables, data types, conditions & loops' },
      { week: 1, topic: 'Functions & logic building: writing clean, readable code' },
      { week: 2, topic: 'Machine learning concepts: how AI models learn from data' },
      { week: 2, topic: 'AI tools in practice: ChatGPT, Gemini & automation' },
      { week: 3, topic: 'Data basics: spreadsheet analysis & simple visualization' },
      { week: 3, topic: 'Web fundamentals: HTML/CSS — build and style a webpage' },
      { week: 4, topic: 'Digital portfolio: personal site or GitHub profile setup' },
      { week: 4, topic: 'Mini project: AI-assisted solution to a real problem' },
    ]
  },
  {
    key: 'biz', title: 'Business & Strategy',
    color: 'from-[#E96614] to-[#F69748]', lightGrad: 'from-[#E96614]/6 to-transparent',
    bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', sessions: 8,
    junior: [
      { week: 1, topic: 'What is a business? Products, services, customers & value' },
      { week: 1, topic: 'Needs vs wants: demand, scarcity & smart choices' },
      { week: 2, topic: 'Indian student entrepreneurs & what made them successful' },
      { week: 2, topic: 'Design thinking: empathize → define → ideate' },
      { week: 3, topic: 'Create your idea: build a simple product/service concept' },
      { week: 3, topic: 'Marketing basics: how to name, describe & promote your idea' },
      { week: 4, topic: 'How pricing works: cost, profit margin & fair value' },
      { week: 4, topic: 'Mini pitch: present your idea to the mentor in 3 minutes' },
    ],
    senior: [
      { week: 1, topic: 'Business model canvas: map a business from idea to revenue' },
      { week: 1, topic: 'Market research: identify a problem, validate with data' },
      { week: 2, topic: 'Branding & marketing: how great Indian brands communicate' },
      { week: 2, topic: 'Sales psychology: how people buy & ethical persuasion' },
      { week: 3, topic: 'Reading a P&L: revenue, costs & profit in simple terms' },
      { week: 3, topic: 'Startup ecosystem: Zomato, Zepto, CRED — what they solved' },
      { week: 4, topic: 'Competitive strategy: SWOT, positioning & differentiation' },
      { week: 4, topic: 'Final pitch: validated idea + business model canvas' },
    ]
  },
  {
    key: 'finance', title: 'Financial Literacy',
    color: 'from-[#F59E0B] to-[#FBBF24]', lightGrad: 'from-[#F59E0B]/6 to-transparent',
    bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', sessions: 8,
    junior: [
      { week: 1, topic: 'What is money? How it\'s created, earned & why it matters' },
      { week: 1, topic: 'Earning & saving: pocket money management basics' },
      { week: 2, topic: 'Spending smartly: impulse buying vs planned spending' },
      { week: 2, topic: 'Budgeting for beginners: track your spending for one week' },
      { week: 3, topic: 'Banking basics: savings account & how interest works' },
      { week: 3, topic: 'Goals & saving: how to save for something you want' },
      { week: 4, topic: 'Needs, wants & assets: intro to wealth thinking' },
      { week: 4, topic: 'My savings plan: personal 30-day money goal tracker' },
    ],
    senior: [
      { week: 1, topic: 'Personal budgeting: 50-30-20 rule applied to student life' },
      { week: 1, topic: 'Banking deep dive: FD, RD, UPI & card types explained' },
      { week: 2, topic: 'Investing basics: stocks, mutual funds, SIPs simplified' },
      { week: 2, topic: 'Compound interest: the most powerful wealth concept' },
      { week: 3, topic: 'Insurance & risk: why families need insurance' },
      { week: 3, topic: 'Tax awareness: income tax basics every student should know' },
      { week: 4, topic: 'Indian financial system: RBI, SEBI, NSE/BSE simplified' },
      { week: 4, topic: 'My wealth roadmap: 1-year financial goal with action plan' },
    ]
  },
  {
    key: 'comm', title: 'Communication Skills',
    color: 'from-[#74AB55] to-[#9DC67F]', lightGrad: 'from-[#74AB55]/6 to-transparent',
    bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', sessions: 8,
    junior: [
      { week: 1, topic: 'Active listening: how to truly hear what someone is saying' },
      { week: 1, topic: 'Speaking clearly: voice, pace, tone & body language' },
      { week: 2, topic: 'Expressing opinions respectfully without creating conflict' },
      { week: 2, topic: 'Storytelling: beginning, middle & end for any idea' },
      { week: 3, topic: 'Asking powerful questions: curiosity as a superpower' },
      { week: 3, topic: 'Written communication: emails & WhatsApp messages done right' },
      { week: 4, topic: 'Group discussion: contributing without interrupting' },
      { week: 4, topic: 'Mini presentation: 2-minute talk + mentor feedback' },
    ],
    senior: [
      { week: 1, topic: 'Public speaking: structure, delivery & close' },
      { week: 1, topic: 'Professional communication: emails, reports & messages' },
      { week: 2, topic: 'Debate: defending and challenging ideas logically' },
      { week: 2, topic: 'Non-verbal communication: posture, eye contact & signals' },
      { week: 3, topic: 'Interview skills: academic & professional communication' },
      { week: 3, topic: 'Conflict resolution: disagree professionally & stay composed' },
      { week: 4, topic: 'Personal branding: LinkedIn setup & online presence' },
      { week: 4, topic: 'Final: 5-minute structured talk on a topic of your choice' },
    ]
  },
  {
    key: 'growth', title: 'Personal Growth',
    color: 'from-[#9D68A1] to-[#C49EC8]', lightGrad: 'from-[#9D68A1]/6 to-transparent',
    bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', sessions: 8,
    junior: [
      { week: 1, topic: 'Knowing yourself: strengths, weaknesses & learning style' },
      { week: 1, topic: 'Building a morning routine: small habits that change everything' },
      { week: 2, topic: 'SMART goals: write 3 real goals for school & life now' },
      { week: 2, topic: 'Time management: plan your week & track for 7 days' },
      { week: 3, topic: 'Study habits: spaced repetition, Pomodoro & active recall' },
      { week: 3, topic: 'Growth mindset: "I can\'t do it yet" changes everything' },
      { week: 4, topic: 'Emotional intelligence: manage feelings under pressure' },
      { week: 4, topic: 'My 90-day plan: personal growth goals post-program' },
    ],
    senior: [
      { week: 1, topic: 'Self-awareness: values, identity & decision-making style' },
      { week: 1, topic: 'Productivity systems: time-blocking, weekly reviews' },
      { week: 2, topic: 'Academic accountability: consistency under board pressure' },
      { week: 2, topic: 'Stress management: breathing, journaling & reframing' },
      { week: 3, topic: 'Digital detox: screen time audit & intentional tech habits' },
      { week: 3, topic: 'Resilience: bouncing back from failure & bad days' },
      { week: 4, topic: 'Career clarity: passions, aptitude & paths after Class 10/12' },
      { week: 4, topic: 'My 90-day execution roadmap: structured action plan' },
    ]
  },
];

const weekDays = [
  { fullDay: 'Monday',    skills: ['Mathematics & Science', 'Technology & AI'],      type: 'study',  color: 'from-[#4E14F9]/8', border: 'border-[#4E14F9]/15', dot: 'bg-[#4E14F9]' },
  { fullDay: 'Tuesday',   skills: ['Business & Strategy', 'Financial Literacy'],     type: 'study',  color: 'from-[#E96614]/8', border: 'border-[#E96614]/15', dot: 'bg-[#E96614]' },
  { fullDay: 'Wednesday', skills: ['Mathematics & Science', 'Communication Skills'], type: 'study',  color: 'from-[#4E14F9]/8', border: 'border-[#4E14F9]/15', dot: 'bg-[#4E14F9]' },
  { fullDay: 'Thursday',  skills: ['Technology & AI', 'Personal Growth'],            type: 'study',  color: 'from-[#0EA5E9]/8', border: 'border-[#0EA5E9]/15', dot: 'bg-[#0EA5E9]' },
  { fullDay: 'Friday',    skills: ['Communication Skills', 'Personal Growth'],       type: 'study',  color: 'from-[#74AB55]/8', border: 'border-[#74AB55]/15', dot: 'bg-[#74AB55]' },
  { fullDay: 'Saturday',  skills: ['Mentor 1:1 Review', 'Weekly Progress Check'],    type: 'mentor', color: 'from-emerald-100', border: 'border-emerald-200',   dot: 'bg-emerald-500' },
  { fullDay: 'Sunday',    skills: ['Rest & Reflect', 'Optional journaling'],         type: 'rest',   color: 'from-gray-100',    border: 'border-gray-200',     dot: 'bg-gray-300' },
];

const assessmentParams = [
  { num: 1,  label: 'Digital Usage & Productivity',   icon: <BrainCircuit className="w-4 h-4" />,  color: 'text-[#0EA5E9]', bg: 'bg-[#0EA5E9]/8', border: 'border-[#0EA5E9]/15' },
  { num: 2,  label: 'Academic Knowledge Application', icon: <Atom className="w-4 h-4" />,          color: 'text-[#4E14F9]', bg: 'bg-[#4E14F9]/8', border: 'border-[#4E14F9]/15' },
  { num: 3,  label: 'Accountability & Consistency',   icon: <Check className="w-4 h-4" />,         color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { num: 4,  label: 'Communication Confidence',       icon: <Mic2 className="w-4 h-4" />,          color: 'text-[#74AB55]', bg: 'bg-[#74AB55]/8', border: 'border-[#74AB55]/20' },
  { num: 5,  label: 'Resources & Strategy Awareness', icon: <Building2 className="w-4 h-4" />,     color: 'text-[#E96614]', bg: 'bg-[#E96614]/8', border: 'border-[#E96614]/15' },
  { num: 6,  label: 'Aspirations & Roadmap Clarity',  icon: <Compass className="w-4 h-4" />,        color: 'text-[#9D68A1]', bg: 'bg-[#9D68A1]/8', border: 'border-[#9D68A1]/15' },
  { num: 7,  label: 'Time Utilization & Planning',    icon: <Award className="w-4 h-4" />,         color: 'text-amber-600',  bg: 'bg-amber-50',    border: 'border-amber-200' },
  { num: 8,  label: 'Mindset & Motivation',           icon: <Flame className="w-4 h-4" />,        color: 'text-[#4E14F9]', bg: 'bg-[#4E14F9]/8', border: 'border-[#4E14F9]/15' },
  { num: 9,  label: 'Routine & Habits Built',         icon: <Check className="w-4 h-4" />,         color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { num: 10, label: 'Financial Awareness',            icon: <Landmark className="w-4 h-4" />,      color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/8', border: 'border-[#F59E0B]/20' },
];

export default function SyllabusPage({ onRequestInvite }) {
  const [activeTab, setActiveTab] = useState('junior');
  const [openSkills, setOpenSkills] = useState(new Set(skills.map(s => s.key)));

  const toggle = (key) => setOpenSkills(prev => {
    const n = new Set(prev); n.has(key) ? n.delete(key) : n.add(key); return n;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FE]">

      {/* Sticky nav */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-brand-dark font-black text-[17px]">
            <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white shadow-md shadow-brand-purple/30">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            growtopper
          </a>
          <a href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-brand-purple text-[14px] font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
            30-Day Full Curriculum
          </div>
          <h1 className="text-[34px] md:text-[50px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4 text-balance">
            The 6-Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Growth Syllabus.</span>
          </h1>
          <p className="text-gray-500 text-[15px] md:text-[17px] font-medium max-w-xl mx-auto text-balance">
            Quality over quantity. 2 focused sessions per skill per week. Final evaluation on Day 29–30.
          </p>
        </div>

        {/* Grade Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm gap-1">
            {[{ key: 'junior', label: 'Grade 6–8' }, { key: 'senior', label: 'Grade 9–12' }].map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className={`px-7 py-3 rounded-xl font-bold text-[14px] sm:text-[15px] transition-all duration-200 ${
                  activeTab === t.key ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/25' : 'text-gray-500 hover:text-brand-dark'
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── WEEKLY SCHEDULE ── */}
        <div className="mb-12">
          <h2 className="text-[18px] font-black text-brand-dark mb-5">Weekly Schedule</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {weekDays.map((d, i) => (
              <div key={i} className={`rounded-2xl border bg-gradient-to-b ${d.color} to-white ${d.border} p-4 flex flex-col gap-2.5 min-h-[140px] ${d.type === 'rest' ? 'opacity-55' : ''}`}>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${d.dot}`}></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">{d.fullDay}</span>
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  {d.skills.map((s, si) => (
                    <div key={si} className="text-[11px] font-semibold text-gray-600 bg-white/70 rounded-lg px-2 py-1.5 leading-snug">
                      {s}
                    </div>
                  ))}
                </div>
                <span className={`self-start text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  d.type === 'mentor' ? 'bg-emerald-100 text-emerald-700' :
                  d.type === 'rest'   ? 'bg-gray-100 text-gray-400' : 'bg-white text-gray-500 border border-gray-200'
                }`}>
                  {d.type === 'mentor' ? 'Mentor' : d.type === 'rest' ? 'Rest' : '2 Skills'}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Weeks 1–4', desc: 'Skill sessions 2× per week', c: 'bg-brand-purple/5 border-brand-purple/15 text-brand-purple' },
              { label: 'Every Saturday', desc: 'Mentor 1:1 review', c: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
              { label: 'Days 25–28', desc: 'Revision & mock test', c: 'bg-orange-50 border-orange-200 text-orange-700' },
              { label: 'Days 29–30', desc: 'Final exam + Awards', c: 'bg-amber-50 border-amber-200 text-amber-700' },
            ].map((t, i) => (
              <div key={i} className={`rounded-xl border px-4 py-3 ${t.c}`}>
                <div className="font-black text-[12px]">{t.label}</div>
                <div className="text-[11px] font-medium opacity-75 mt-0.5">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SKILL CARDS ── */}
        <div className="mb-12">
          <h2 className="text-[18px] font-black text-brand-dark mb-1">
            {activeTab === 'junior' ? 'Grade 6–8' : 'Grade 9–12'} — Topics by Skill
          </h2>
          <p className="text-gray-400 text-[12px] font-medium mb-6">8 sessions per skill · 4 weeks · 2 per week</p>

          <div className="space-y-3">
            {skills.map((skill) => {
              const isOpen = openSkills.has(skill.key);
              const data = activeTab === 'junior' ? skill.junior : skill.senior;
              const isMath = skill.key === 'math';

              return (
                <div key={skill.key} className={`rounded-2xl border overflow-hidden shadow-sm ${skill.border} bg-white`}>

                  {/* Header */}
                  <button onClick={() => toggle(skill.key)}
                    className={`w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left bg-gradient-to-r ${skill.color}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                        {ICONS[skill.key]}
                      </div>
                      <div>
                        <div className="font-black text-white text-[15px] sm:text-[17px]">{skill.title}</div>
                        <div className="text-white/65 text-[11px] font-semibold mt-0.5">{skill.sessions} sessions · 2/week · 4 weeks</div>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-white" />
                    </div>
                  </button>

                  {/* Content */}
                  {isOpen && (
                    <div className={`bg-gradient-to-b ${skill.lightGrad} bg-white`}>
                      {isMath ? (
                        // Math: 2 topic areas with subtopics
                        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                          {data.map((area, ai) => (
                            <div key={ai} className="p-5 sm:p-6">
                              <div className="flex items-center gap-2 mb-4">
                                <div className={`w-7 h-7 rounded-lg ${skill.bg} ${skill.text} flex items-center justify-center border ${skill.border}`}>
                                  {area.icon}
                                </div>
                                <div>
                                  <span className="font-black text-brand-dark text-[14px]">{area.area}</span>
                                  <span className={`ml-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${skill.bg} ${skill.text} border ${skill.border}`}>Week {area.week}</span>
                                </div>
                              </div>
                              <ul className="space-y-2.5">
                                {area.subtopics.map((sub, si) => (
                                  <li key={si} className="flex items-start gap-2.5">
                                    <div className={`w-4 h-4 rounded-full ${skill.bg} border ${skill.border} flex items-center justify-center shrink-0 mt-0.5`}>
                                      <Check className={`w-2.5 h-2.5 stroke-[3px] ${skill.text}`} />
                                    </div>
                                    <span className="text-[13px] font-medium text-gray-600 leading-snug">{sub}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Other skills: week-by-week 4 columns
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 divide-gray-100">
                          {[1, 2, 3, 4].map(week => (
                            <div key={week} className={`p-4 sm:p-5 ${week % 2 === 0 ? 'sm:border-l' : ''} border-gray-100`}>
                              <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${skill.bg} ${skill.text} border ${skill.border}`}>
                                Week {week}
                              </span>
                              <div className="space-y-2.5">
                                {data.filter(t => t.week === week).map((t, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <div className={`w-4 h-4 rounded-full ${skill.bg} border ${skill.border} flex items-center justify-center shrink-0 mt-0.5`}>
                                      <Check className={`w-2.5 h-2.5 stroke-[3px] ${skill.text}`} />
                                    </div>
                                    <span className="text-[12px] sm:text-[13px] font-medium text-gray-600 leading-snug">{t.topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── FINAL EVALUATION ── */}
        <div className="bg-white rounded-[28px] border border-brand-purple/15 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-[#1a0533] via-[#2d1060] to-[#4E14F9] p-6 sm:p-8">
            <h2 className="text-white font-black text-[20px] sm:text-[24px] mb-2">Final Growth Evaluation — Day 29 & 30</h2>
            <p className="text-white/65 font-medium text-[14px] max-w-2xl">
              Comprehensive assessment across all 6 skills. Top performers are rewarded, recognised, and offered continued growth.
            </p>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Evaluation Structure */}
            <div>
              <h3 className="font-black text-brand-dark text-[15px] mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-purple" /> Evaluation Structure
              </h3>
              <div className="flex flex-col gap-3">
                {/* 100 Marks Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-purple font-black text-sm">100</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-dark text-[13px] mb-0.5">One Final Exam</h5>
                    <p className="text-gray-500 text-[12px] font-medium leading-relaxed">100 Total Marks. Divided across core skills (20 marks per skill). A true test of applied knowledge.</p>
                  </div>
                </div>

                {/* Skill Champion Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900 text-[13px] mb-0.5">The Skill Champions</h5>
                    <p className="text-emerald-700/80 text-[12px] font-medium leading-relaxed">The single highest scorer in each specific skill takes the crown for that domain among the 20 students.</p>
                  </div>
                </div>

                {/* Overall Rank Block */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Medal className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-amber-900 text-[13px] mb-0.5">The Grand Rank</h5>
                    <p className="text-amber-700/80 text-[12px] font-medium leading-relaxed">Rank 1 goes to the student holding the highest number of Skill Champion titles. Followed by Rank 2 and Rank 3.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex flex-col h-full">
              <h3 className="font-black text-brand-dark text-[15px] mb-5 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" /> Rewards & Recognition
              </h3>
              <div className="flex flex-col gap-2.5 h-full">
                {[
                  { rank: 'Rank 1', icon: <Trophy className="w-5 h-5 text-amber-600" />, reward: '₹3,000 Cash + Goodies + 3-Month Mentorship (Worth ₹15,000)', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
                  { rank: 'Rank 2', icon: <Award className="w-5 h-5 text-gray-500" />, reward: '₹1,500 Cash + Goodies + 1-Month Mentorship Extension', bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700' },
                  { rank: 'Rank 3', icon: <Award className="w-5 h-5 text-orange-600" />, reward: '₹500 Cash + Goodies + Priority Access to Next Program', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800' },
                  { rank: 'All Finishers', icon: <Check className="w-5 h-5 text-[#4E14F9]" />, reward: 'Certificate + Public Recognition + Next Cohort Priority', bg: 'bg-[#4E14F9]/5', border: 'border-[#4E14F9]/15', text: 'text-[#4E14F9]' },
                ].map((r, i) => (
                  <div key={i} className={`flex-1 rounded-2xl border ${r.border} ${r.bg} px-4 py-3 flex items-center gap-3`}>
                    <div className="shrink-0">
                      {r.icon}
                    </div>
                    <div>
                      <div className={`font-black text-[12px] ${r.text}`}>{r.rank}</div>
                      <div className="text-gray-600 text-[12px] font-medium leading-snug">{r.reward}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-white border border-gray-200 rounded-[32px] px-8 md:px-16 py-12 shadow-sm">
            {/* Subtle light background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <p className="text-[26px] md:text-[32px] font-black text-brand-dark mb-2">Ready to begin?</p>
              <p className="text-gray-500 font-medium mb-8 text-[15px] sm:text-[16px]">Limited seats per cohort. Invite-only.</p>
              <button onClick={onRequestInvite} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-purple text-white font-bold text-[15px] hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(78,20,249,0.25)]">
                Request Invite Only Access →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
