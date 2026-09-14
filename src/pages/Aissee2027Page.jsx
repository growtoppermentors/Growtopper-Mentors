import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Calendar, Shield, Users, BookOpen, GraduationCap, Clock, 
  MapPin, CheckCircle, AlertTriangle, FileText, Activity, CreditCard
} from 'lucide-react';

const GradientCard = ({ title, icon: Icon, children, theme = 'blue' }) => {
  const themes = {
    blue: 'from-blue-50/50 to-white border-blue-100',
    indigo: 'from-indigo-50/50 to-white border-indigo-100',
    emerald: 'from-emerald-50/50 to-white border-emerald-100',
    orange: 'from-orange-50/50 to-white border-orange-100',
    slate: 'from-slate-50/50 to-white border-slate-100'
  };

  const iconThemes = {
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    orange: 'bg-orange-100 text-orange-600',
    slate: 'bg-slate-100 text-slate-600'
  };

  return (
    <div className={`bg-gradient-to-b ${themes[theme]} rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow h-full flex flex-col`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconThemes[theme]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
      </div>
      <div className="text-gray-600 space-y-4 flex-1">
        {children}
      </div>
    </div>
  );
};

const Aissee2027Page = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('class6');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans allow-select">
      <Helmet>
        <title>Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper</title>
        <meta name="description" content="Complete research playbook for All India Sainik School Entrance Exam (AISSEE) 2027. Get eligibility, exam pattern, dates, and syllabus for Class 6 & 9." />
      </Helmet>

      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#F0F4F8] via-white to-[#E6EDF5] rounded-[32px] border border-blue-100 shadow-sm p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm uppercase tracking-widest mb-6 border border-blue-200/50">
              <Shield className="w-4 h-4" /> Official Guide 2027
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark mb-6 leading-tight tracking-tight">
              All India Sainik School <br className="hidden sm:block"/> Entrance Exam <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">(AISSEE)</span> 2027
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
              The complete research playbook for admission into India's prestigious 102+ Sainik Schools. Prepare for Class VI & IX lateral entry with updated eligibility, exam patterns, and syllabi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-500" /> Exam: Jan 2027 (Expected)</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-500" /> All India Level (NTA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Quick Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0"><Calendar className="w-6 h-6" /></div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Notification</p>
              <p className="text-gray-900 font-bold leading-tight">Sep - Oct 2026<br/><span className="text-xs font-medium text-gray-500">(Expected)</span></p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0"><CheckCircle className="w-6 h-6" /></div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Conducting Body</p>
              <p className="text-gray-900 font-bold leading-tight">NTA<br/><span className="text-xs font-medium text-gray-500">(National Testing Agency)</span></p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0"><Users className="w-6 h-6" /></div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Gender</p>
              <p className="text-gray-900 font-bold leading-tight">Boys & Girls<br/><span className="text-xs font-medium text-gray-500">(Both Eligible)</span></p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0"><Shield className="w-6 h-6" /></div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Goal</p>
              <p className="text-gray-900 font-bold leading-tight">NDA Entry<br/><span className="text-xs font-medium text-gray-500">Defence Services Prep</span></p>
            </div>
          </div>
        </div>

        {/* What are Sainik Schools */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm mb-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="w-7 h-7 text-blue-600" /> What are Sainik Schools?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sainik Schools are a chain of fully residential, CBSE-affiliated schools administered by the Sainik Schools Society under the Ministry of Defence. Their primary goal is to prepare students academically, physically, and mentally for entry into the National Defence Academy (NDA) and other defense services.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Classes:</strong> VI to XII (Fully residential)</span></li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Total Schools:</strong> 33 Traditional + 69 New (102+ total)</span></li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Medium:</strong> English (CBSE Board)</span></li>
                <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="text-sm text-gray-600"><strong>Odisha Locations:</strong> Bhubaneswar & Sambalpur</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Eligibility & Reservation */}
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Eligibility & Reservation Policy</h2>
        
        {/* Toggle for Class 6/9 */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner">
            <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm transition-all duration-300 ${activeTab === 'class6' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`} />
            <button onClick={() => setActiveTab('class6')} className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-full transition-colors ${activeTab === 'class6' ? 'text-blue-700' : 'text-gray-500'}`}>Class VI (6th)</button>
            <button onClick={() => setActiveTab('class9')} className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-full transition-colors ${activeTab === 'class9' ? 'text-blue-700' : 'text-gray-500'}`}>Class IX (9th)</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GradientCard title="Age & Education" icon={GraduationCap} theme="blue">
            {activeTab === 'class6' ? (
              <ul className="space-y-4">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> 10 to 12 years (as on 31 Mar 2027)</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 01 Apr 2015 – 31 Mar 2017 (both inclusive)</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must have passed or currently appearing in Class V from a recognised school.</span></li>
              </ul>
            ) : (
              <ul className="space-y-4">
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Age Range:</strong> 13 to 15 years (as on 31 Mar 2027)</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>DOB Range:</strong> Born between 01 Apr 2012 – 31 Mar 2014 (both inclusive)</span></li>
                <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"/><span><strong>Education:</strong> Must have passed or currently appearing in Class VIII from a recognised school.</span></li>
              </ul>
            )}
            <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded-xl text-xs text-orange-800 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
              <p><strong>Note:</strong> There is absolutely <strong>no age relaxation</strong> for any category (SC/ST/OBC/PwD).</p>
            </div>
          </GradientCard>

          <GradientCard title="Reservation Policy" icon={Users} theme="indigo">
            <p className="mb-4 text-sm font-medium">Sainik Schools allocate seats based on strict quotas:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm font-bold">Home State Quota</span>
                <span className="text-indigo-600 font-black">67%</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm font-bold">Other States Quota</span>
                <span className="text-indigo-600 font-black">33%</span>
              </li>
            </ul>
            <div className="text-xs space-y-2">
              <p><strong>Within each quota:</strong> 27% OBC-NCL, 15% SC, 7.5% ST.</p>
              <p><strong>Defence Quota:</strong> 25% of the remaining seats are reserved for wards of Defence Personnel/Ex-servicemen.</p>
              <p><strong>Girls Quota:</strong> 10% of total strength (or 10 seats) for Class VI.</p>
            </div>
          </GradientCard>
        </div>

        {/* Exam Pattern & Syllabus */}
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Exam Pattern & Syllabus</h2>
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-bold text-gray-700">Subject</th>
                  <th className="p-4 font-bold text-gray-700">Questions</th>
                  <th className="p-4 font-bold text-gray-700">Marks per Q.</th>
                  <th className="p-4 font-bold text-gray-700">Total Marks</th>
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
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">Intelligence</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">Language</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">General Knowledge</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="p-4 font-black text-gray-900">Total (150 Minutes)</td>
                      <td className="p-4 font-black text-gray-900">125</td>
                      <td className="p-4"></td>
                      <td className="p-4 font-black text-blue-700">300</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">Mathematics</td>
                      <td className="p-4 text-gray-600">50</td>
                      <td className="p-4 text-gray-600">4</td>
                      <td className="p-4 font-bold text-blue-600">200</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">Intelligence</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">English</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">General Science</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">Social Science</td>
                      <td className="p-4 text-gray-600">25</td>
                      <td className="p-4 text-gray-600">2</td>
                      <td className="p-4 font-bold text-blue-600">50</td>
                    </tr>
                    <tr className="bg-blue-50/30">
                      <td className="p-4 font-black text-gray-900">Total (180 Minutes)</td>
                      <td className="p-4 font-black text-gray-900">150</td>
                      <td className="p-4"></td>
                      <td className="p-4 font-black text-blue-700">400</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 px-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <strong>No Negative Marking:</strong> Candidates are encouraged to attempt all questions as there is no penalty for wrong answers.
          </p>
        </div>

        {/* Medical & Fees Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GradientCard title="Strict Medical Standards" icon={Activity} theme="emerald">
            <p className="text-sm mb-4">Sainik Schools enforce strict medical fitness criteria before admission. Key checks include:</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span><strong>Eyesight:</strong> 6/6 in one eye, 6/9 in other. Myopia not exceeding -1.5D. NO Color Blindness allowed.</span></li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span><strong>Orthopedic:</strong> No knock knees, no flat foot, spine must be straight (no scoliosis).</span></li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"/><span><strong>General:</strong> No stammering, chronic diseases (heart, lung, kidney), or hearing issues.</span></li>
            </ul>
          </GradientCard>

          <GradientCard title="Fee Structure (Expected)" icon={CreditCard} theme="slate">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Application Fee</p>
                <p className="text-sm font-semibold">General / OBC / Defence: ?850</p>
                <p className="text-sm font-semibold">SC / ST: ?700</p>
              </div>
              <div className="h-px w-full bg-gray-200"></div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Annual School Fees (Approx)</p>
                <p className="text-xl font-black text-gray-900">?2.0 Lakh – ?2.63 Lakh</p>
                <p className="text-xs text-gray-500 mt-1">Includes tuition (~?90k), boarding (~?45k), mess (~?50k), uniform, and books. SC/ST may receive state subsidies.</p>
              </div>
            </div>
          </GradientCard>
        </div>

      </section>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Aissee2027Page;
