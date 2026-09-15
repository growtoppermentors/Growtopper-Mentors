import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Clock,
  GraduationCap, 
  Info,
  MapPin, 
  Shield, 
  Star,
  Users,
  FileText,
  AlertTriangle,
  Award,
  Wallet,
  Building,
  MonitorPlay,
  FileCheck2,
  ListOrdered
} from 'lucide-react';

const Shreshta2027Page = ({ onRequestInvite }) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'SHRESHTA NETS 2026-27 | Complete Guide & Exam Details';
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview & Modes', icon: Info },
    { id: 'eligibility', label: 'Eligibility', icon: Users },
    { id: 'financials', label: 'Financial Benefits', icon: Wallet },
    { id: 'exam', label: 'Exam Pattern', icon: FileText },
    { id: 'admission', label: 'Admission Process', icon: ListOrdered },
    { id: 'guidelines', label: 'Crucial Guidelines', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Responsive Mobile Hero Section */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link to="/exams-scholarships" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-sm font-bold mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Exams
        </Link>
        <div className="bg-gradient-to-br from-[#F0F4F8] via-white to-[#E6EDF5] rounded-[24px] sm:rounded-[32px] border border-blue-100 shadow-sm p-5 sm:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 border border-blue-200/50">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" /> Scheme for Residential Education (SC Students)
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-3 sm:mb-4 leading-tight tracking-tight">
              SHRESHTA NETS <br className="hidden lg:block"/> Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2026-27</span>
            </h1>
            
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto font-medium px-2">
              A central sector scheme providing meritorious SC students access to high-quality residential school education in top private CBSE/State Board schools across India.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2 sm:gap-4 mb-2">
              <span className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 bg-white rounded-md border border-gray-100 shadow-sm w-full sm:w-auto"><Users className="w-4 h-4 text-blue-500 shrink-0" /> ~3,000 Seats (Class 9 & 11)</span>
              <span className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 bg-white rounded-md border border-gray-100 shadow-sm w-full sm:w-auto"><Wallet className="w-4 h-4 text-blue-500 shrink-0" /> Up to ₹1.35L/Year</span>
              <span className="flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 bg-white rounded-md border border-gray-100 shadow-sm w-full sm:w-auto"><FileText className="w-4 h-4 text-blue-500 shrink-0" /> NETS Exam by NTA</span>
            </div>

            </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 py-3 overflow-x-auto hide-scrollbar">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-200' : 'text-gray-400'}`} />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Section 1: Overview & Modes */}
            <section id="overview" className="scroll-mt-40 md:scroll-mt-48">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-blue-600 shrink-0" /> Mission & Operating Modes
              </h2>
              
              <div className="prose prose-lg prose-blue max-w-none text-gray-600 font-medium leading-relaxed mb-8">
                <p>
                  SHRESHTA is a central sector scheme by the Ministry of Social Justice & Empowerment (MoSJ&E). Its core mission is to provide bright SC students from low-income families with the same high-quality residential education access as their more advantaged peers, promoting educational equity and social mobility.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-black text-xs uppercase tracking-wider rounded-lg mb-4">
                      Mode 1 (NETS Exam)
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-3">SHRESHTA Schools</h3>
                    <p className="text-gray-600 text-sm font-medium mb-4">
                      Meritorious SC students are admitted into the best-performing private residential schools (CBSE/State Boards) via the NETS exam.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>Government pays 100% of school and hostel fees.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>For Classes 9 (4 years funding) and 11 (2 years funding).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>Schools must have &gt;75% pass rate in past 3 years.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-black text-xs uppercase tracking-wider rounded-lg mb-4">
                      Mode 2 (Grant-in-Aid)
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-3">NGO/VO-operated Hostels</h3>
                    <p className="text-gray-600 text-sm font-medium mb-4">
                      Focuses on supporting existing NGO/VO infrastructure running schools and hostels in service-deficient SC-dominant areas.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>Grants paid per SC student to cover charges.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>Strict continuation criteria based on satisfactory performance.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>Policy push to upgrade these to Class 12 capacity.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: Eligibility */}
            <section id="eligibility" className="scroll-mt-40 md:scroll-mt-48">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-600 shrink-0" /> Student Eligibility Criteria
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0"><Shield className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Caste Category</p>
                    <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Strictly reserved for SC candidates.</p>
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0"><Wallet className="w-5 h-5 sm:w-6 sm:h-6" /></div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Income Limit</p>
                    <p className="text-sm sm:text-base text-gray-900 font-bold leading-tight">Annual income ≤ ₹2.5 lakh/year.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">Admission Class</th>
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">Previous Academic Requirement</th>
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">Selection Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-blue-600">Class 9</td>
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">Must have passed Class 8 from a recognised school. Age per board norms.</td>
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">NETS Score + Web Counselling</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-blue-600">Class 11</td>
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">Must have passed Class 10 from a recognised board. Age per board norms.</td>
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">NETS Score + Web Counselling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Financial Benefits */}
            <section id="financials" className="scroll-mt-40 md:scroll-mt-48">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <Award className="w-6 h-6 text-emerald-600 shrink-0" /> Financial Benefits & Coverage
              </h2>
              
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 mb-8">
                <h3 className="text-lg font-black text-emerald-900 mb-2">100% Comprehensive Coverage (Mode 1)</h3>
                <p className="text-emerald-800 text-sm font-medium leading-relaxed">
                  The government directly covers the school fee (including tuition), hostel fee (including mess/food), and provides an extra 10% for custom bridge courses to help students adapt academically to their new elite environments.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" /> 
                    Mode 1 Caps (Per Student/Year)
                  </h3>
                  <div className="space-y-3">
                    {['Class 9: ₹1,00,000', 'Class 10: ₹1,10,000', 'Class 11: ₹1,25,000', 'Class 12: ₹1,35,000'].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                        <span className="font-black text-gray-700">{item.split(':')[0]}</span>
                        <span className="font-bold text-emerald-600">{item.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-purple-600" /> 
                    Mode 2 NGO Grants (Per SC Student)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col gap-1 text-sm">
                      <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                        <span className="text-gray-600 font-medium">Primary Res. School</span>
                        <span className="font-bold text-gray-900">₹44,000</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-gray-200 py-2">
                        <span className="text-gray-600 font-medium">Secondary Res. School</span>
                        <span className="font-bold text-gray-900">₹55,000</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-gray-200 py-2">
                        <span className="text-gray-600 font-medium">Primary Non-Residential</span>
                        <span className="font-bold text-gray-900">₹27,000</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-gray-600 font-medium">Hostel (Pri/Sec)</span>
                        <span className="font-bold text-gray-900">₹30,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 4: Exam Pattern */}
            <section id="exam" className="scroll-mt-40 md:scroll-mt-48">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-600 shrink-0" /> NETS Exam Pattern
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                  <div className="text-gray-500 text-xs font-bold uppercase mb-1">Mode</div>
                  <div className="text-lg font-black text-gray-900">Offline (Pen & Paper)</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                  <div className="text-gray-500 text-xs font-bold uppercase mb-1">Duration</div>
                  <div className="text-lg font-black text-gray-900">3 Hours</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                  <div className="text-gray-500 text-xs font-bold uppercase mb-1">Total Marks</div>
                  <div className="text-lg font-black text-gray-900">400 Marks</div>
                </div>
                <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-sm text-center">
                  <div className="text-emerald-700 text-xs font-bold uppercase mb-1">Negative Marking</div>
                  <div className="text-lg font-black text-emerald-700">NONE (0 Marks)</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600 flex items-start gap-2 sm:gap-3">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" /> Syllabus is based on NCERT (Class 8 for 9th admission, Class 10 for 11th admission).
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white border-b border-gray-200">
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">Subject Section</th>
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">No. of Questions</th>
                        <th className="py-4 px-6 font-bold text-gray-900 text-sm">Marks (+4 per correct)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-700">Mathematics</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">30</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">120</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-700">Science</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">20</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">80</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-700">Social Science</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">25</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">100</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-700">General Awareness / GK</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">25</td>
                        <td className="py-4 px-6 text-gray-600 font-medium">100</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-4 px-6 font-black text-gray-900">Total</td>
                        <td className="py-4 px-6 font-black text-gray-900">100 Questions</td>
                        <td className="py-4 px-6 font-black text-blue-600">400 Marks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 5: Admission Process */}
            <section id="admission" className="scroll-mt-40 md:scroll-mt-48">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <ListOrdered className="w-6 h-6 text-blue-600 shrink-0" /> Admission Process & Documents
              </h2>

              {/* Timeline Steps */}
              <div className="space-y-6 mb-10">
                {[
                  { title: "NTA Registration", desc: "Apply online at exams.nta.nic.in/shreshta. Upload SC & Income certs, photo, signature. Generating Application No." },
                  { title: "NETS Exam & Results", desc: "Download admit card, sit for the offline 3-hour exam, and await scorecard release on the NTA portal." },
                  { title: "NIC Web Counselling", desc: "Qualified candidates log into MoSJ&E portal to verify docs, fill school choices, and receive rank-based seat allotment." },
                  { title: "Physical Admission", desc: "Report to the allotted school with original documents, TC, and consent forms to finalize 100% funded admission." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform shadow-md">
                        {idx + 1}
                      </div>
                      {idx !== 3 && <div className="w-0.5 h-full bg-blue-100 mt-2"></div>}
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex-1 mb-2 group-hover:border-blue-300 transition-colors">
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Documents Needed */}
              <div className="bg-gray-50 rounded-3xl p-5 sm:p-8 border border-gray-200">
                <h3 className="font-black text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-gray-600" /> Essential Documents Checklist
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-blue-800 mb-3 text-sm uppercase tracking-wider">At Registration</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div> SC Caste Certificate (SDO/Tehsildar)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div> Income Certificate (≤ ₹2.5 Lakh)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></div> Scanned Photo & Signature
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-800 mb-3 text-sm uppercase tracking-wider">At School Reporting</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div> NETS Admit Card & Scorecard
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div> Original Marksheets & TC
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5"></div> Medical/Boarding Consent Forms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 6: Guidelines */}
            <section id="guidelines" className="scroll-mt-40 md:scroll-mt-48 pb-8">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" /> Hidden Clauses & Strict Guidelines
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mb-4">
                    <Wallet className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Fee Extraction</h3>
                  <p className="text-sm text-gray-600 font-medium">Under no circumstances can the allotted school charge the student. All admissible tuition and boarding costs are reimbursed by the Govt directly to the school.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                    <MonitorPlay className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Surveillance & MIS</h3>
                  <p className="text-sm text-gray-600 font-medium">Participating schools must install CCTV with live feeds and use the real-time MIS portal to track academic progress for MoSJ&E inspection teams.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Building className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">No Mid-Way Transfers</h3>
                  <p className="text-sm text-gray-600 font-medium">Students are expected to remain in the allotted school until Class 12. Leaving early requires the school to notify the center and refund unused funds.</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Academic Progression</h3>
                  <p className="text-sm text-gray-600 font-medium">Continuous funding is strictly subject to the student passing their class each year. Failing an academic year can lead to discontinuation of the scholarship.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Action Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl shadow-blue-900/5 sticky top-32">
              <h3 className="text-xl font-black text-gray-900 mb-2">Ready to Apply?</h3>
              <p className="text-gray-500 text-sm font-medium mb-6">Applications are processed via the official NTA portal. Preparation is key.</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Registration Opens</div>
                    <div className="text-sm font-black text-gray-900">Oct 2026 (Expected)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Exam Date</div>
                    <div className="text-sm font-black text-gray-900">Dec 2026 (Expected)</div>
                  </div>
                </div>
              </div>

              <a 
                href="https://exams.nta.nic.in/shreshta/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-xl bg-blue-600 text-white font-black text-[15px] hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mb-3 shadow-lg shadow-blue-600/20"
              >
                Go to Official NTA Portal <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={onRequestInvite}
                className="w-full py-4 rounded-xl bg-gray-50 text-gray-700 font-bold text-[15px] border border-gray-200 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get Exam Alerts
              </button>
            </div>

            {/* Quick Helper */}
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100">
              <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" /> Counseling Tip
              </h4>
              <p className="text-sm text-amber-800 font-medium leading-relaxed">
                NTA only conducts the NETS exam. The actual school seat allotment is handled purely by the MoSJ&E web counselling platform based on opening and closing ranks.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer onRequestInvite={onRequestInvite} />
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Shreshta2027Page;
