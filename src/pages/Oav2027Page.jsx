import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CohortSection from '../components/sections/CohortSection';
import FinalCTA from '../components/sections/FinalCTA';
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

const Oav2027Page = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('class6');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Odisha Adarsha Vidyalaya (OAV) Entrance 2027 Guide | Growtopper';
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
              Odisha Adarsha Vidyalaya <br className="hidden lg:block"/> Entrance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">(OAV)</span> 2027
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-7 max-w-2xl mx-auto font-medium px-2">
              The complete research playbook for admission into 315+ OAVs across Odisha. Prepare for Class VI & IX lateral entry with verified eligibility, syllabi, and strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-gray-500">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-gray-100 shadow-sm"><Calendar className="w-4 h-4 text-blue-500" /> Exam: Feb - Mar 2027</span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-md border border-gray-100 shadow-sm"><MapPin className="w-4 h-4 text-blue-500" /> State Level (BSE Odisha)</span>
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
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Nov 2026</p>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Conducting Body</p>
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">BSE Odisha</p>
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
              <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Block-Level Excellence</p>
            </div>
          </div>
        </div>

        {/* Overview & Schools */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" /> What are OAVs?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              Odisha Adarsha Vidyalayas (OAVs) are a network of massive English-medium CBSE schools established by the Govt of Odisha to provide free, high-quality education at the block level.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Classes:</strong> VI to XII (Day boarding/Hostel mixed)</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Total Schools:</strong> 315+ across all 314 blocks of Odisha</span></li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Medium:</strong> Purely English Medium (CBSE Board)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600" /> Core Focus & Reservation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              OAVs strictly recruit talent locally from their respective blocks. The admission policies are heavily skewed to support girls and reserved categories.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">50%</div>
                <div>
                  <h4 className="font-bold text-gray-900">Girls Quota</h4>
                  <p className="text-xs text-gray-600">A massive 50% of total seats in each category are strictly reserved for girl students.</p>
                </div>
              </div>
              <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-indigo-600 shrink-0">B</div>
                <div>
                  <h4 className="font-bold text-gray-900">Block-level Domicile</h4>
                  <p className="text-xs text-gray-600">Students must be permanent residents or studying in the exact block where the OAV is situated.</p>
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
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 ${activeTab === 'class6' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`} />
              <button onClick={() => setActiveTab('class6')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class6' ? 'text-blue-700' : 'text-gray-500'}`}>Class VI (6th)</button>
              <button onClick={() => setActiveTab('class9')} className={`relative z-10 px-4 sm:px-8 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-colors ${activeTab === 'class9' ? 'text-blue-700' : 'text-gray-500'}`}>Class VII/VIII/IX</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <GradientCard title="Age & Education" icon={GraduationCap} theme="blue">
              {activeTab === 'class6' ? (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> 10 to 12 years (as on 31 Mar 2027)</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must be continuing Class V (or passed Class V) from a recognised school.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Block Rule:</strong> Must be a permanent resident of the block OR studying in the block.</span></li>
                </ul>
              ) : (
                <ul className="space-y-4">
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> Progressively +1 year for each subsequent class.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must have passed the previous class.</span></li>
                  <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Vacancy Rule:</strong> Lateral entry is ONLY allowed against officially declared vacant seats in the school.</span></li>
                </ul>
              )}
              <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded-xl text-xs text-orange-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                <p><strong>Note:</strong> Students must apply online via the official BSE Odisha portal.</p>
              </div>
            </GradientCard>

            <GradientCard title="Seat Quotas (Per 80 Seats)" icon={Users} theme="indigo">
              <p className="text-sm text-gray-700 mb-4">Each OAV typically inducts 80 students (2 sections of 40) in Class VI. Here is the strict reservation breakdown:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Unreserved (UR)</span> <strong>50% (40 Seats)</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>SC Candidates</span> <strong>16% (13 Seats)</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>ST Candidates</span> <strong>23% (18 Seats)</strong></li>
                <li className="flex justify-between border-b border-gray-100 pb-2"><span>State Govt Employees</span> <strong>5% (4 Seats)</strong></li>
                <li className="flex justify-between pt-1"><span>Girls (across all above)</span> <strong>50% (40 Seats)</strong></li>
              </ul>
            </GradientCard>
          </div>
        </div>

        {/* Detailed Syllabus & Exam Pattern */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">Exam Pattern & Syllabus (Class VI)</h2>
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-bold text-gray-700">Subject</th>
                    <th className="p-4 font-bold text-gray-700">Questions</th>
                    <th className="p-4 font-bold text-gray-700">Marks</th>
                    <th className="p-4 font-bold text-gray-700">Weightage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">Mathematics</td>
                    <td className="p-4 text-gray-600">15</td>
                    <td className="p-4 font-bold text-blue-600">15</td>
                    <td className="p-4 text-xs text-gray-600">25% (Class V Standard)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">Science</td>
                    <td className="p-4 text-gray-600">15</td>
                    <td className="p-4 font-bold text-blue-600">15</td>
                    <td className="p-4 text-xs text-gray-600">25% (Class V Standard)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">Social Science</td>
                    <td className="p-4 text-gray-600">15</td>
                    <td className="p-4 font-bold text-blue-600">15</td>
                    <td className="p-4 text-xs text-gray-600">25% (Class V Standard)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">English</td>
                    <td className="p-4 text-gray-600">15</td>
                    <td className="p-4 font-bold text-blue-600">15</td>
                    <td className="p-4 text-xs text-gray-600">25% (Class V Standard)</td>
                  </tr>
                  <tr className="bg-blue-50/30">
                    <td className="p-4 font-black text-gray-900">Total (120 Minutes)</td>
                    <td className="p-4 font-black text-gray-900">60 Qs</td>
                    <td className="p-4 font-black text-blue-700">60 Marks</td>
                    <td className="p-4 text-xs text-emerald-600 font-bold">No Negative Marking</td>
                  </tr>
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
              <TimelineItem title="Official Notification" date="November 2026" isExpected={true} />
              <TimelineItem title="Application Window" date="Dec 2026 - Jan 2027" isExpected={true} />
              <TimelineItem title="Admit Card Release" date="February 2027" isExpected={true} />
              <TimelineItem title="OAV Entrance Exam" date="Late Feb / Early Mar 2027" isExpected={true} />
              <TimelineItem title="Merit List & Results" date="April 2027" isExpected={true} />
              <TimelineItem title="Admission & Session Start" date="May 2027" isExpected={true} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" /> Admission Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
              Admission is strictly merit-based via the OAV Entrance Exam conducted by BSE Odisha.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">1</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Apply online on the BSE Odisha portal (oav.edu.in)</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">2</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Appear for the offline OMR-based entrance test in your block</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">3</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Block-wise merit list generated and published by BSE Odisha</p>
              </div>
              <div className="flex gap-4 items-start">
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black shrink-0 shadow-sm">4</div>
                 <p className="text-sm font-semibold text-gray-700 pt-1">Submit physical documents to the allotted OAV for verification</p>
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
                  Tuition, textbooks, and uniforms are entirely free, managed by the Govt. of Odisha.
                </p>
              </div>
              <div className="h-px w-full bg-gray-200"></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Hostel Fees</p>
                <p className="text-sm font-semibold text-gray-900">Free / Subsidized</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  Many OAVs are now getting 100-bed girls' hostels. Fees are either waived for SC/ST or highly subsidized.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard title="Medical Standards" icon={Activity} theme="emerald">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span className="leading-relaxed"><strong>Fitness:</strong> Unlike Sainik Schools, OAV has NO strict medical/vision criteria. General fitness to attend school is enough.</span></li>
            </ul>
          </GradientCard>

          <GradientCard title="Document Checklist" icon={FileText} theme="indigo">
            <ul className="text-sm text-gray-700 space-y-4">
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Class V Pass Certificate & TC (at admission time)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Residential / Domicile Certificate (Block level)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Caste Certificate (SC/ST only)</span></li>
              <li className="flex items-start gap-2"><CheckSquare className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0"/> <span className="leading-relaxed font-medium">Employer Certificate (For State Govt. Quota)</span></li>
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
                    <th className="p-4 font-bold text-blue-700">OAV</th>
                    <th className="p-4 font-bold text-gray-700">JNV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Conducting Body</td>
                    <td className="p-4">NTA (Ministry of Defence)</td>
                    <td className="p-4 text-blue-700 font-medium">BSE Odisha (Govt of Odisha)</td>
                    <td className="p-4">NVS (Ministry of Education)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Focus</td>
                    <td className="p-4">Defence / NDA Entry</td>
                    <td className="p-4 font-medium">Rural talent (Odisha)</td>
                    <td className="p-4">Rural talent (National)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Eligibility</td>
                    <td className="p-4">All-India</td>
                    <td className="p-4">Odisha Block Domicile Only</td>
                    <td className="p-4">District-Specific (75% rural)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium">Class VI Exam</td>
                    <td className="p-4">125 Qs, 300 Marks</td>
                    <td className="p-4 font-bold text-emerald-600">60 Qs, 60 Marks</td>
                    <td className="p-4">80 Qs, 100 Marks</td>
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
                <span className="text-sm leading-relaxed"><strong>Myth: OAVs are Odia medium.</strong><br/>Reality: False! OAVs are strictly affiliated to CBSE, New Delhi and teach purely in English.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Myth: Only 6th class entry.</strong><br/>Reality: False. Lateral entry for Class 7th, 8th, and 9th happens whenever there are vacant seats.</span>
              </li>
            </ul>
          </GradientCard>

          <GradientCard title="Top Reasons for Rejection" icon={XCircle} theme="red">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Domicile Fraud:</strong> Applying in a block where you do not reside or study. Verification is extremely strict.</span>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" /> 
                <span className="text-sm leading-relaxed"><strong>Failing Class 5:</strong> If a student passes the entrance but fails their final Class 5 exams in their current school, admission is revoked.</span>
              </li>
            </ul>
          </GradientCard>
        </div>

        {/* Preparation Strategy */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl sm:text-3xl font-black mb-4 relative z-10">90-Day Strategy to Crack OAV</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            The exam is straightforward (60 marks) based heavily on the <strong>Class V SCERT/NCERT Syllabus</strong>. All subjects have equal weightage!
          </p>
          <div className="grid sm:grid-cols-3 gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 1-30</h4>
              <p className="text-sm text-blue-100">Master Class V Maths and Science textbooks thoroughly.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 31-60</h4>
              <p className="text-sm text-blue-100">Focus on English grammar & Social Science revision.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-bold mb-1">Days 61-90</h4>
              <p className="text-sm text-blue-100">Take 2-hour full mock tests daily to perfect timing.</p>
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

export default Oav2027Page;
