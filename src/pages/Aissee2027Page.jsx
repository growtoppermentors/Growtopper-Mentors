import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Calendar, Shield, Users, BookOpen, GraduationCap, Clock, 
  MapPin, CheckCircle, AlertTriangle, FileText, Activity, CreditCard,
  XCircle, CheckSquare, Target, Phone, AlertCircle
} from 'lucide-react';

const GradientCard = ({ title, icon: Icon, children, theme = 'blue', className = "" }) => {
  const themes = {
    blue: 'from-blue-50/50 to-white border-blue-100',
    indigo: 'from-indigo-50/50 to-white border-indigo-100',
    emerald: 'from-emerald-50/50 to-white border-emerald-100',
    orange: 'from-orange-50/50 to-white border-orange-100',
    slate: 'from-slate-50/50 to-white border-slate-100',
    red: 'from-red-50/50 to-white border-red-100'
  };

  const iconThemes = {
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    orange: 'bg-orange-100 text-orange-600',
    slate: 'bg-slate-100 text-slate-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className={`bg-gradient-to-b ${themes[theme]} rounded-2xl border shadow-sm p-5 sm:p-8 hover:shadow-md transition-shadow h-full flex flex-col ${className}`}>
      <div className="flex items-center gap-4 mb-5 sm:mb-6">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${iconThemes[theme]}`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-4 flex-1 text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
};

const TimelineItem = ({ title, date, isExpected }) => (
  <div className="relative pl-6 pb-6 border-l-2 border-blue-200 last:border-0 last:pb-0">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full" />
    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h4>
    <p className="text-blue-600 font-semibold text-sm mt-1">{date} {isExpected && <span className="text-xs text-gray-400 font-normal ml-1">(Expected)</span>}</p>
  </div>
);

const Aissee2027Page = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('class6');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper';
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Responsive Mobile Hero Section */}
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#F0F4F8] via-white to-[#E6EDF5] rounded-[24px] sm:rounded-[32px] border border-blue-100 shadow-sm p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-5 border border-blue-200/50">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Official Guide 2027
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-brand-dark mb-4 sm:mb-5 leading-tight tracking-tight">
              All India Sainik School Entrance Exam <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">(AISSEE)</span> 2027
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-7 max-w-2xl mx-auto font-medium px-2">
              The complete research playbook for admission into India's prestigious 102+ Sainik Schools. Prepare for Class VI & IX lateral entry with verified eligibility, syllabi, and strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-gray-500">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-gray-100 shadow-sm"><Calendar className="w-4 h-4 text-blue-500" /> Exam: Jan 2027</span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-gray-100 shadow-sm"><MapPin className="w-4 h-4 text-blue-500" /> All India Level (NTA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0"><Calendar className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Notification</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Sep - Oct 2026</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Conducting Body</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">NTA</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0"><Users className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Gender</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Boys & Girls</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0"><Target className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Goal</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">NDA Entry</p>
            </div>
          </div>
        </div>

        {/* Overview & Odisha Schools */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" /> What are Sainik Schools?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Sainik Schools are a chain of fully residential, CBSE-affiliated schools administered by the Sainik Schools Society under the Ministry of Defence. Their primary goal is to prepare students academically, physically, and mentally for entry into the National Defence Academy (NDA).
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Classes:</strong> VI to XII (Fully residential)</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Total Schools:</strong> 33 Traditional + 69 New (102+ total)</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Medium:</strong> English (CBSE Board)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600" /> Odisha Sainik Schools
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Odisha hosts two prestigious Sainik Schools. 67% of seats in these schools are strictly reserved for Odisha domicile candidates (Home State Quota).
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h4 className="font-bold text-gray-900">1. Sainik School Bhubaneswar</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Est: 1962 | District: Khurda</p>
                </div>
                <a href="https://sainikschoolbhubaneswar.edu.in" target="_blank" rel="noreferrer" className="text-xs text-indigo-600 bg-white px-3 py-1.5 rounded-full border border-indigo-200 font-semibold mt-3 sm:mt-0 inline-block hover:bg-indigo-50">Visit Website →</a>
              </div>
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h4 className="font-bold text-gray-900">2. Sainik School Sambalpur</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">Est: 2020 | District: Sambalpur</p>
                </div>
                <a href="https://sainikschoolsambalpur.in" target="_blank" rel="noreferrer" className="text-xs text-indigo-600 bg-white px-3 py-1.5 rounded-full border border-indigo-200 font-semibold mt-3 sm:mt-0 inline-block hover:bg-indigo-50">Visit Website →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility & Reservation */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">Eligibility & Reservation Policy</h2>
          
          {/* Toggle for Class 6/9 */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner overflow-hidden max-w-full">
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 ${activeTab === 'class6' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`} />
              <button onClick={() => setActiveTab('class6')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class6' ? 'text-blue-700' : 'text-gray-500'}`}>Class VI (6th)</button>
              <button onClick={() => setActiveTab('class9')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class9' ? 'text-blue-700' : 'text-gray-500'}`}>Class IX (9th)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <GradientCard title="Age & Education" icon={GraduationCap} theme="blue">
              {activeTab === 'class6' ? (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> 10 to 12 years (as on 31 Mar 2027)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 01 Apr 2015 — 31 Mar 2017 (both inclusive)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must have passed or currently appearing in Class V from a recognised school.</span></li>
                </ul>
              ) : (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> 13 to 15 years (as on 31 Mar 2027)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 01 Apr 2012 — 31 Mar 2014 (both inclusive)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must have passed or currently appearing in Class VIII from a recognised school.</span></li>
                </ul>
              )}
              <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded-xl text-xs text-orange-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                <p><strong>Note:</strong> There is absolutely <strong>no age relaxation</strong> for any category (SC/ST/OBC/PwD).</p>
              </div>
            </GradientCard>

            <GradientCard title="Seat Quotas & Reservation" icon={Users} theme="indigo">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 p-3 bg-white rounded-lg border border-indigo-50 text-center">
                  <p className="text-xs font-bold text-gray-500">Home State</p>
                  <p className="text-xl font-black text-indigo-600">67%</p>
                </div>
                <div className="flex-1 p-3 bg-white rounded-lg border border-indigo-50 text-center">
                  <p className="text-xs font-bold text-gray-500">Other States</p>
                  <p className="text-xl font-black text-indigo-600">33%</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>OBC-NCL</span> <strong>27%</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>SC Candidates</span> <strong>15%</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>ST Candidates</span> <strong>7.5%</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Defence/Ex-servicemen</span> <strong>25% (of remaining)</strong></li>
                <li className="flex justify-between pt-1"><span>Girls (Class VI Only)</span> <strong>10% (or 10 seats)</strong></li>
              </ul>
            </GradientCard>
          </div>
        </div>

        {/* Detailed Syllabus & Exam Pattern */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">Exam Pattern & Syllabus</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-bold text-gray-700">Subject</th>
                    <th className="p-4 font-bold text-gray-700">Questions</th>
                    <th className="p-4 font-bold text-gray-700">Marks per Q.</th>
                    <th className="p-4 font-bold text-gray-700">Total Marks</th>
                    <th className="p-4 font-bold text-gray-700">Key Syllabus Topics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activeTab === 'class6' ? (
                    <>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Mathematics</td>
                        <td className="p-4 text-gray-600">50</td>
                        <td className="p-4 text-gray-600">3</td>
                        <td className="p-4 font-bold text-blue-600">150</td>
                        <td className="p-4 text-xs text-gray-600">Number System, Fractions, Decimals, Percentage, Geometry, Area/Perimeter, Simple Interest, Time & Speed, Profit & Loss.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Intelligence</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">2</td>
                        <td className="p-4 font-bold text-blue-600">50</td>
                        <td className="p-4 text-xs text-gray-600">Analogies, Coding-Decoding, Pattern Completion, Classification, Series, Blood Relations, Direction Sense.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Language (Eng/Hin)</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">2</td>
                        <td className="p-4 font-bold text-blue-600">50</td>
                        <td className="p-4 text-xs text-gray-600">Reading Comprehension, Grammar (Tenses, Prepositions, Articles, Verbs), Vocabulary, Synonyms, Antonyms.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">General Knowledge</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">2</td>
                        <td className="p-4 font-bold text-blue-600">50</td>
                        <td className="p-4 text-xs text-gray-600">Science basics (Food, Body, Plants, Water, Force), SST (History, Geography, Civics), Current Affairs, Awards.</td>
                      </tr>
                      <tr className="bg-blue-50/30">
                        <td className="p-4 font-black text-gray-900">Total (150 Minutes)</td>
                        <td className="p-4 font-black text-gray-900">125</td>
                        <td className="p-4"></td>
                        <td className="p-4 font-black text-blue-700">300</td>
                        <td className="p-4 text-xs text-emerald-600 font-bold">No Negative Marking</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Mathematics</td>
                        <td className="p-4 text-gray-600">50</td>
                        <td className="p-4 text-gray-600">4</td>
                        <td className="p-4 font-bold text-blue-600">200</td>
                        <td className="p-4 text-xs text-gray-600">Rational numbers, Polynomials, Linear Eq, Geometry, Mensuration, Probability, Exponents, SI/CI.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Intelligence</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">1</td>
                        <td className="p-4 font-bold text-blue-600">25</td>
                        <td className="p-4 text-xs text-gray-600">Verbal/Non-Verbal reasoning, Blood Relations, Direction Sense, Analytical Reasoning.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">English</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">2</td>
                        <td className="p-4 font-bold text-blue-600">50</td>
                        <td className="p-4 text-xs text-gray-600">Comprehension, Active/Passive Voice, Narration, Clauses, Idioms, Sentence Correction, Para Jumbles.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">General Science</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">3</td>
                        <td className="p-4 font-bold text-blue-600">75</td>
                        <td className="p-4 text-xs text-gray-600">Physics (Force, Light, Magnetism), Chem (Matter, Metals), Bio (Cells, Diseases, Human Body).</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Social Science</td>
                        <td className="p-4 text-gray-600">25</td>
                        <td className="p-4 text-gray-600">3</td>
                        <td className="p-4 font-bold text-blue-600">75</td>
                        <td className="p-4 text-xs text-gray-600">History (Modern India), Geo (Resources, Climate), Civics (Constitution, Parliament), Economics (Budget, Poverty).</td>
                      </tr>
                      <tr className="bg-blue-50/30">
                        <td className="p-4 font-black text-gray-900">Total (180 Minutes)</td>
                        <td className="p-4 font-black text-gray-900">150</td>
                        <td className="p-4"></td>
                        <td className="p-4 font-black text-blue-700">400</td>
                        <td className="p-4 text-xs text-emerald-600 font-bold">No Negative Marking</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Process Row: Admission Timeline & E-Counselling */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-500" /> Timeline (Expected)
            </h2>
            <div className="ml-2">
              <TimelineItem title="Notification & Form" date="Sep - Oct 2026" isExpected={true} />
              <TimelineItem title="Correction Window" date="November 2026" isExpected={true} />
              <TimelineItem title="Admit Card" date="December 2026" isExpected={true} />
              <TimelineItem title="AISSEE Exam" date="January 2027" isExpected={true} />
              <TimelineItem title="Result & Answer Key" date="February 2027" isExpected={true} />
              <TimelineItem title="AISSAC E-Counselling" date="March 2027" isExpected={true} />
              <TimelineItem title="Medical & Admission" date="April 2027" isExpected={true} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" /> AISSAC E-Counselling
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
              Post-exam seat allocation happens strictly via the online AISSAC portal over multiple rounds. The process is entirely digital.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">1</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Register using AISSEE application number</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">2</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Fill choice of up to 10 Sainik Schools (Traditional + New)</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">3</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Wait for Seat Allotment (Round 1, 2, Special, Spot)</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">4</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Accept, Reconsider, or Exit based on allotted seat</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">5</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Report to school for Medical Test upon Acceptance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Row: Fees, Medical, Documents */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <GradientCard title="Fees Structure" icon={CreditCard} theme="slate">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Application Fee</p>
                <p className="text-sm font-semibold text-gray-900">Gen / OBC / Defence: ₹850</p>
                <p className="text-sm font-semibold text-gray-900">SC / ST: ₹700</p>
              </div>
              <div className="h-px w-full bg-gray-200"></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Annual School Fees</p>
                <p className="text-xl font-black text-gray-900 mb-2">₹2.0 Lakh — ₹2.63 Lakh</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Includes tuition (~₹90k), boarding (~₹45k), mess (~₹50k), uniform, and books. 
                  SC/ST candidates may receive state subsidies.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard title="Medical Standards" icon={Activity} theme="emerald">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>Eyesight:</strong> 6/6 one eye, 6/9 other. Myopia not exceeding -1.5D. NO Color Blindness (CP-III required).</span></li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>Orthopedic:</strong> No knock knees, no flat foot, straight spine (no scoliosis).</span></li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>General:</strong> BMI appropriate. No stammering, hearing issues, or chronic diseases.</span></li>
            </ul>
          </GradientCard>

          <GradientCard title="Document Checklist" icon={FileText} theme="indigo">
            <ul className="text-sm text-gray-700 space-y-4">
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Birth Certificate (Original) & Aadhaar</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Domicile Certificate (For Home State Quota)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Caste / EWS / Disability Certificate</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Defence Service Certificate (If applicable)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Class V/VIII Pass Marksheet & TC</span></li>
            </ul>
          </GradientCard>
        </div>

        {/* Comparison Table */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">AISSEE vs OAV vs JNV</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-bold text-gray-700">Feature</th>
                    <th className="p-4 font-bold text-blue-700">Sainik School (AISSEE)</th>
                    <th className="p-4 font-bold text-gray-700">OAV</th>
                    <th className="p-4 font-bold text-gray-700">JNV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Conducting Body</td>
                    <td className="p-4 text-blue-700 font-medium">NTA (Ministry of Defence)</td>
                    <td className="p-4">BSE Odisha (Govt of Odisha)</td>
                    <td className="p-4">NVS (Ministry of Education)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Focus</td>
                    <td className="p-4">Defence / NDA Entry</td>
                    <td className="p-4">Rural talent (Odisha)</td>
                    <td className="p-4">Rural talent (National)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Eligibility</td>
                    <td className="p-4">All-India (No Domicile restriction)</td>
                    <td className="p-4">Odisha Domicile Only</td>
                    <td className="p-4">District-Specific (75% rural)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Fees (Annual)</td>
                    <td className="p-4">₹2.0 — 2.6 Lakh</td>
                    <td className="p-4">Free (Nominal boarding ₹2k-4k)</td>
                    <td className="p-4">Completely Free</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Medical Test</td>
                    <td className="p-4 font-bold text-red-500">Strict & Mandatory</td>
                    <td className="p-4">Not Required</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Class VI Exam</td>
                    <td className="p-4">125 Qs, 300 Marks (150m)</td>
                    <td className="p-4">60 Qs, 60 Marks (120m)</td>
                    <td className="p-4">80 Qs, 100 Marks (120m)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Myths & Reasons for Rejection */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <GradientCard title="Common Myths Busted" icon={AlertCircle} theme="blue">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Myth: Only Boys can apply.</strong><br/>Reality: False! Girls are eligible (10% quota in Class VI since 2021).</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Myth: Fixed height/weight required.</strong><br/>Reality: False. No fixed minimum at tender age, just age-appropriate BMI.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Myth: Only defence kids get in.</strong><br/>Reality: False. 25% is defence quota, meaning 75% is entirely open for civilians.</span>
              </li>
            </ul>
          </GradientCard>

          <GradientCard title="Top Reasons for Rejection" icon={XCircle} theme="red">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Age Mismatch:</strong> Strict DOB cutoff. Do not apply if outside the exact date range for your class.</span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Medical Failures:</strong> Color blindness, knock knees, or high myopia (&gt; -1.5D) cause immediate rejection.</span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Missing Documents:</strong> Failing to produce valid Caste, Domicile, or Disability certificates at counselling.</span>
              </li>
            </ul>
          </GradientCard>
        </div>

        {/* Preparation Strategy */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">90-Day Strategy to Crack AISSEE</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            Mathematics holds <strong>50% weightage</strong> (150 marks for Class VI, 200 for Class IX). Focus strictly on NCERT books and solving previous years' OMR papers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 1-30</h4>
              <p className="text-sm text-blue-100">Clear NCERT concepts (Math, GK, Science).</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 31-60</h4>
              <p className="text-sm text-blue-100">Practice 2000+ MCQs & resolve weak areas.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 61-90</h4>
              <p className="text-sm text-blue-100">Full OMR mock tests 3x a week for speed.</p>
            </div>
          </div>
        </div>

        {/* Official Contacts */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 text-center">Official Contacts & Helpline (2027)</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">NTA Helpline</p>
              <p className="text-sm text-gray-600 flex items-center gap-2"><Phone className="w-4 h-4" /> 011-40759000</p>
              <p className="text-sm text-gray-600 mt-1">Email: aissee@nta.ac.in</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">aissee.nta.nic.in</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="font-bold text-gray-900 mb-2">Sainik Schools Society</p>
              <p className="text-sm text-gray-600 flex items-center gap-2"><Phone className="w-4 h-4" /> 011-26183405</p>
              <p className="text-sm text-gray-600 mt-1">Email: sss@nic.in</p>
              <p className="text-sm text-blue-600 font-semibold mt-2">sainikschoolsociety.in</p>
            </div>
          </div>
        </div>

      </section>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Aissee2027Page;
