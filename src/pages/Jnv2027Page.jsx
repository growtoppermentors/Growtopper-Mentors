import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CohortSection from '../components/sections/CohortSection';
import FinalCTA from '../components/sections/FinalCTA';
import { 
  ArrowLeft,
  Calendar, Shield, Users, BookOpen, GraduationCap, Clock, 
  MapPin, CheckCircle, AlertTriangle, FileText, Activity, CreditCard,
  XCircle, CheckSquare, Target, Phone, AlertCircle
} from 'lucide-react';

const GradientCard = ({ title, icon: Icon, children, theme = 'blue', className = "" }) => {
  const themes = {
    blue: 'from-blue-50/50 to-white border-blue-100',
    indigo: 'from-indigo-50/50 to-white border-indigo-100',
    purple: 'from-purple-50/50 to-white border-purple-100',
    emerald: 'from-emerald-50/50 to-white border-emerald-100'
  };
  return (
    <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${themes[theme]} border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group ${className}`}>
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className={`p-3 rounded-2xl bg-white shadow-sm shrink-0 group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 text-${theme}-600`} />
        </div>
        <h3 className="font-bold text-xl sm:text-2xl text-gray-900">{title}</h3>
      </div>
      <div className="relative z-10">{children}</div>
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

const Jnv2027Page = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('class6');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JNV Selection Test (JNVST) 2027 Guide | Growtopper';
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Responsive Mobile Hero Section */}
      <section className="pt-24 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#F0F4F8] via-white to-[#E6EDF5] rounded-[24px] sm:rounded-[32px] border border-blue-100 shadow-sm p-5 sm:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 border border-blue-200/50">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Official Guide 2027
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-3 sm:mb-4 leading-tight tracking-tight">
              Navodaya Vidyalaya Selection <br className="hidden lg:block"/> Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">(JNVST)</span> 2027
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto font-medium px-2">
              The complete research playbook for admission into 650+ Jawahar Navodaya Vidyalayas across India. Prepare for Class VI & IX lateral entry with verified eligibility, syllabi, and strategies.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2 sm:gap-4 mb-2">
              <span className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 bg-white rounded-md border border-gray-100 shadow-sm w-full sm:w-auto"><Calendar className="w-4 h-4 text-blue-500 shrink-0" /> Exam: Jan & April 2027</span>
              <span className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 bg-white rounded-md border border-gray-100 shadow-sm w-full sm:w-auto"><MapPin className="w-4 h-4 text-blue-500 shrink-0" /> All India Level (NVS)</span>
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
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Jul - Aug 2026</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Conducting Body</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">NVS / CBSE</p>
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
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Rural Talent Growth</p>
            </div>
          </div>
        </div>

        {/* Overview & Schools */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" /> What are Navodaya Vidyalayas?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Jawahar Navodaya Vidyalayas (JNVs) are a system of central schools for talented students predominantly from rural areas in India. They are fully residential, co-educational, and managed by Navodaya Vidyalaya Samiti (NVS), an autonomous organization under the Ministry of Education.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Classes:</strong> VI to XII (Fully residential)</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Total Schools:</strong> 650+ across India</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Medium:</strong> Mother tongue till VIII, then English/Hindi (CBSE Board)</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>National Integration:</strong> 30% of Class IX students migrate to a JNV in a different linguistic state.</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600" /> Core Focus & Reservation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              JNVs are structurally designed to uplift rural talent. The reservation system strictly enforces this mandate across all districts in India.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">75%</div>
                <div>
                  <h4 className="font-bold text-gray-900">Rural Quota</h4>
                  <p className="text-xs text-gray-600">A minimum of 75% of seats are strictly reserved for students studying in rural schools.</p>
                </div>
              </div>
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">1/3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Girls Quota</h4>
                  <p className="text-xs text-gray-600">One-third (33%) of the total seats are reserved for girl students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility & Reservation */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">Eligibility Policy</h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner overflow-hidden max-w-full">
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(33.33%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 ${activeTab === 'class6' ? 'left-1.5' : activeTab === 'class9' ? 'left-[calc(33.33%+1.5px)]' : 'left-[calc(66.66%+1.5px)]'}`} />
              <button onClick={() => setActiveTab('class6')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class6' ? 'text-blue-700' : 'text-gray-500'}`}>Class VI (6th)</button>
              <button onClick={() => setActiveTab('class9')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class9' ? 'text-blue-700' : 'text-gray-500'}`}>Class IX (9th)</button>
              <button onClick={() => setActiveTab('class11')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class11' ? 'text-blue-700' : 'text-gray-500'}`}>Class XI (11th)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <GradientCard title="Age & Education" icon={GraduationCap} theme="blue">
              {activeTab === 'class6' && (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 1 May 2015 and 30 Apr 2017 (both inclusive)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must be studying in Class-V for the whole academic session in a Govt/Govt-aided school.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>District Rule:</strong> Must study and reside in the same district where the JNV is located.</span></li>
                </ul>
              )}
              {activeTab === 'class9' && (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 1 May 2012 and 30 Apr 2014 (both inclusive)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must be studying in Class-VIII in a Govt/Govt-aided school. Lateral entry against vacant seats.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>District Rule:</strong> Must study and reside in the same district where the JNV is located.</span></li>
                </ul>
              )}
              {activeTab === 'class11' && (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 1 June 2008 and 31 July 2010 (approx based on past year).</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must be studying in Class-X in a Govt/Govt-aided school. Admission against vacant seats.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>District Rule:</strong> Must study and reside in the same district where the JNV is located.</span></li>
                </ul>
              )}
              <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded-xl text-xs text-orange-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                <p><strong>Note:</strong> No candidate is allowed to appear in the selection test for the second time under any circumstances.</p>
              </div>
            </GradientCard>

            <GradientCard title="Urban vs Rural Criteria" icon={MapPin} theme="indigo">
              <p className="text-sm text-gray-700 mb-4">The determination of rural/urban status is extremely strict and critical for admission.</p>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"/><span><strong>Rural Candidates:</strong> Must have studied Class III, IV, and V continuously in a school located in a rural area (for Class VI entry).</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"/><span><strong>Urban Candidates:</strong> If a candidate has studied in an urban school even for a single day in Class III, IV, or V, they will be considered an urban candidate.</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"/><span><strong>NIOS Students:</strong> Must produce a rural status certificate issued by the District Magistrate/Tehsildar.</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"/><span><strong>Central OBC List:</strong> OBC candidates must be strictly listed in the Central List to avail of the quota.</span></li>
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
                    <th className="p-4 font-bold text-gray-700">Marks</th>
                    <th className="p-4 font-bold text-gray-700">Time / Weightage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {activeTab === 'class6' ? (
                    <>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Mental Ability Test (MAT)</td>
                        <td className="p-4 text-gray-600">40</td>
                        <td className="p-4 font-bold text-blue-600">50</td>
                        <td className="p-4 text-xs text-gray-600">60 Minutes (Odd-Man Out, Figure Matching, Pattern Completion)</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Arithmetic Test</td>
                        <td className="p-4 text-gray-600">20</td>
                        <td className="p-4 font-bold text-blue-600">25</td>
                        <td className="p-4 text-xs text-gray-600">30 Minutes (Number System, Fractions, Decimals, Distance/Time)</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Language Test</td>
                        <td className="p-4 text-gray-600">20</td>
                        <td className="p-4 font-bold text-blue-600">25</td>
                        <td className="p-4 text-xs text-gray-600">30 Minutes (Reading Comprehension passages & Grammar)</td>
                      </tr>
                      <tr className="bg-blue-50/30">
                        <td className="p-4 font-black text-gray-900">Total (120 Minutes)</td>
                        <td className="p-4 font-black text-gray-900">80 Qs</td>
                        <td className="p-4 font-black text-blue-700">100 Marks</td>
                        <td className="p-4 text-xs text-emerald-600 font-bold">No Negative Marking</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">English</td>
                        <td className="p-4 text-gray-600">15</td>
                        <td className="p-4 font-bold text-blue-600">15</td>
                        <td className="p-4 text-xs text-gray-600">Comprehension, Grammar, Spelling</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Hindi</td>
                        <td className="p-4 text-gray-600">15</td>
                        <td className="p-4 font-bold text-blue-600">15</td>
                        <td className="p-4 text-xs text-gray-600">Vyakaran, Comprehension</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">Mathematics</td>
                        <td className="p-4 text-gray-600">35</td>
                        <td className="p-4 font-bold text-blue-600">35</td>
                        <td className="p-4 text-xs text-gray-600">Rational numbers, Squares, Cubes, Direct/Inverse Proportions</td>
                      </tr>
                      <tr className="hover:bg-gray-50/50">
                        <td className="p-4 font-medium text-gray-900">General Science</td>
                        <td className="p-4 text-gray-600">35</td>
                        <td className="p-4 font-bold text-blue-600">35</td>
                        <td className="p-4 text-xs text-gray-600">Crop Production, Microorganisms, Force, Light, Solar System</td>
                      </tr>
                      <tr className="bg-blue-50/30">
                        <td className="p-4 font-black text-gray-900">Total (150 Minutes)</td>
                        <td className="p-4 font-black text-gray-900">100 Qs</td>
                        <td className="p-4 font-black text-blue-700">100 Marks</td>
                        <td className="p-4 text-xs text-emerald-600 font-bold">No Negative Marking</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Process Row */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-orange-500" /> Timeline (Expected)
            </h2>
            <div className="ml-2">
              <TimelineItem title="Online Application Starts" date="July 2026" isExpected={true} />
              <TimelineItem title="Application Deadline" date="September 2026" isExpected={true} />
              <TimelineItem title="Correction Window" date="October 2026" isExpected={true} />
              <TimelineItem title="Phase 1 Exam (Hilly Areas)" date="January 2027" isExpected={true} />
              <TimelineItem title="Phase 2 Exam (Rest of India)" date="April 2027" isExpected={true} />
              <TimelineItem title="Result Declaration" date="June 2027" isExpected={true} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" /> Admission Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
              Admission to JNVs is made strictly on the basis of the JNVST. Selection is localized to the district.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">1</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Apply completely free of cost via navodaya.gov.in portal</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">2</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Appear for the offline OMR-based entrance test</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">3</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Merit list generated at District, State, and National level</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">4</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Submit physical documents to the allotted JNV for verification</p>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Row */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <GradientCard title="Fees & Perks" icon={CreditCard} theme="slate">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Education Fee</p>
                <p className="text-xl font-black text-emerald-600 mb-2">Completely Free</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Boarding, lodging, uniforms, and textbooks are provided free of charge by the Govt. of India.
                </p>
              </div>
              <div className="h-px w-full bg-gray-200"></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">VVN Fee (Class IX - XII Only)</p>
                <p className="text-sm font-semibold text-gray-900">₹600 per month</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  Applicable ONLY to Boys of Gen/OBC categories. <strong>SC/ST, All Girls, and BPL (Below Poverty Line) families are completely exempted.</strong> Govt employees pay ₹1,500/month.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard title="Medical Standards" icon={Activity} theme="emerald">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>Fitness:</strong> Basic medical fitness is required for residential stay.</span></li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>PwD Students:</strong> Divyang (Orthopedically, Hearing, or Visually Impaired) have a 3% reservation.</span></li>
            </ul>
          </GradientCard>

          <GradientCard title="Document Checklist" icon={FileText} theme="indigo">
            <ul className="text-sm text-gray-700 space-y-4">
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Headmaster Certified Study Certificate</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Residence / Domicile Certificate</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Rural Status Certificate (Crucial for 75% quota)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Category Certificate (SC/ST/OBC/PwD)</span></li>
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
                    <th className="p-4 font-bold text-gray-700">Sainik School (AISSEE)</th>
                    <th className="p-4 font-bold text-gray-700">OAV</th>
                    <th className="p-4 font-bold text-blue-700">JNV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Conducting Body</td>
                    <td className="p-4">NTA (Ministry of Defence)</td>
                    <td className="p-4">BSE Odisha (Govt of Odisha)</td>
                    <td className="p-4 text-blue-700 font-medium">NVS (Ministry of Education)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Focus</td>
                    <td className="p-4">Defence / NDA Entry</td>
                    <td className="p-4">Rural talent (Odisha)</td>
                    <td className="p-4 font-medium">Rural talent (National)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Eligibility</td>
                    <td className="p-4">All-India</td>
                    <td className="p-4">Odisha Domicile Only</td>
                    <td className="p-4">District-Specific (75% rural)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Fees (Annual)</td>
                    <td className="p-4">₹2.0 — 2.6 Lakh</td>
                    <td className="p-4">Free (Nominal boarding)</td>
                    <td className="p-4 font-bold text-emerald-600">Completely Free</td>
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
                <span className="text-sm leading-relaxed"><strong>Myth: Urban kids can't apply.</strong><br/>Reality: False! 25% of seats are completely open for urban students.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Myth: Only Hindi medium.</strong><br/>Reality: False. Instruction is in the mother tongue/regional language up to Class VIII.</span>
              </li>
            </ul>
          </GradientCard>

          <GradientCard title="Top Reasons for Rejection" icon={XCircle} theme="red">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Fake Rural Status:</strong> If you studied even a single day of Class 3/4/5 in an urban school, you forfeit the 75% rural quota.</span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Repeat Attempts:</strong> NVS strictly bans applying a second time. Aadhaar tracking enforces this.</span>
              </li>
            </ul>
          </GradientCard>
        </div>

        {/* Preparation Strategy */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">90-Day Strategy to Crack JNVST</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            For Class VI, Mental Ability Test (MAT) forms <strong>50% of the entire paper</strong>. Master patterns and spatial reasoning!
          </p>
          <div className="grid sm:grid-cols-3 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 1-30</h4>
              <p className="text-sm text-blue-100">Build fundamentals in Arithmetic and non-verbal MAT reasoning.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 31-60</h4>
              <p className="text-sm text-blue-100">Drill language comprehension passages daily & solve 1000+ MCQs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 61-90</h4>
              <p className="text-sm text-blue-100">Practice full OMR tests focusing purely on speed and accuracy.</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 w-full pb-4">
            <button onClick={onRequestInvite} className="bg-white text-blue-700 px-8 py-3.5 rounded-full font-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center border-2 border-transparent">
              Request an Invite to Start Preparing
            </button>
            <a href="/1-1-clarity-session-call" className="bg-transparent text-white border-2 border-white/40 hover:bg-white/10 px-8 py-3.5 rounded-full font-bold shadow-sm transition-all w-full sm:w-auto text-center">
              Book 1-1 Strategy Call
            </a>
          </div>
        </div>

      </section>

      <CohortSection onRequestInvite={onRequestInvite} />
      <FinalCTA onRequestInvite={onRequestInvite} />

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Jnv2027Page;
