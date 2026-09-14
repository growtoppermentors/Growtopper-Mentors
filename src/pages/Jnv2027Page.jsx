import React, { useEffect, useState } from 'react';
import { BookOpen, Calendar, CheckSquare, Clock, Globe, GraduationCap, Users, Lightbulb, AlertTriangle, FileText, Settings, FileCheck, Award, Briefcase, Calculator, Building, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const GradientCard = ({ children, color = "orange", icon: Icon, className = "" }) => {
  const colorStyles = {
    orange: "bg-gradient-to-br from-[#FFF4ED] to-[#FFFaf0] border-orange-100",
    purple: "bg-gradient-to-br from-[#F5F3FF] to-[#FAFAFF] border-purple-100",
    green: "bg-gradient-to-br from-[#F0FDF4] to-[#F8FFFA] border-green-100",
    blue: "bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFF] border-blue-100",
    multi: "bg-gradient-to-br from-[#FFF4ED] via-[#F5F3FF] to-[#EFF6FF] border-purple-100"
  };

  const iconColors = {
    orange: "text-orange-500 bg-orange-100",
    purple: "text-purple-500 bg-purple-100",
    green: "text-green-500 bg-green-100",
    blue: "text-blue-500 bg-blue-100",
    multi: "text-[#5B10FF] bg-purple-100"
  };

  return (
    <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl shadow-gray-200/50 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${colorStyles[color]} ${className}`}>
      {Icon && (
        <div className={`absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center opacity-80 ${iconColors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const SectionTitle = ({ number, title }) => (
  <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mb-6 flex items-start sm:items-center gap-3">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5B10FF] text-white text-lg font-black flex-shrink-0 shadow-md mt-1 sm:mt-0">
      {number}
    </span>
    <span className="leading-tight">{title}</span>
  </h2>
);

const Jnv2027Page = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('IX');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E9E2CD] bg-[radial-gradient(#d5ceb6_1px,transparent_1px)] [background-size:20px_20px] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />
      
      {/* 1. Header / Banner */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-100">
          <img 
            src="/images/jnv2027-banner.png" 
            alt="JNV Admission 2027: Complete Guide for Class IX and Class XI Lateral Entry" 
            className="w-full h-auto" 
          />
        </div>
        
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4 border border-orange-200">
            Admissions 2027-28
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight mb-6 leading-tight">
            JNV Admission <span className="text-[#5B10FF]">2027</span>
          </h1>
          <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Your complete guide to Jawahar Navodaya Vidyalaya <strong className="text-brand-dark">Class IX & Class XI Lateral Entry</strong>. Find eligibility, exam patterns, syllabi, and official dates.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 inline-flex gap-2">
            <button 
              onClick={() => setActiveTab('IX')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeTab === 'IX' ? 'bg-[#5B10FF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Class IX Guide
            </button>
            <button 
              onClick={() => setActiveTab('XI')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeTab === 'XI' ? 'bg-[#5B10FF] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Class XI Guide
            </button>
          </div>
        </div>
      </section>

      {/* 2. Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-5xl mx-auto">
        <div className="space-y-12">

          {/* About JNV */}
          <section>
            <SectionTitle number="1" title="What is Jawahar Navodaya Vidyalaya (JNV)?" />
            <GradientCard color="blue" icon={Building}>
              <p className="mb-4 text-gray-700 font-medium text-lg leading-relaxed">
                Jawahar Navodaya Vidyalayas are <strong>co-educational, fully residential, CBSE-affiliated schools</strong> administered by the Navodaya Vidyalaya Samiti under the Ministry of Education, Government of India. 
              </p>
              <p className="mb-4 text-gray-700 font-medium text-lg leading-relaxed">
                Education includes boarding, lodging, uniforms, textbooks, and stationery (subject to VVN rules). There are currently <strong>665 functional JNVs across 27 States and 8 Union Territories</strong> (excluding Tamil Nadu).
              </p>
              <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm mt-6">
                <p className="font-bold text-red-600 flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  Crucial Note for Lateral Entry
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  These are <strong>NOT</strong> regular Class VI JNV admissions. Class IX and XI admissions are Lateral Entry Selection Tests conducted <strong>ONLY against available/anticipated vacant seats</strong> in participating JNVs.
                </p>
              </div>
            </GradientCard>
          </section>

          {/* Important Dates */}
          <section>
            <SectionTitle number="2" title="Important Dates (2027 Cycle)" />
            <GradientCard color="orange" icon={Calendar}>
              <div className="overflow-x-auto rounded-xl border border-orange-200">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="bg-orange-50 border-b border-orange-200">
                      <th className="p-4 font-black text-gray-800 whitespace-nowrap">Event</th>
                      <th className="p-4 font-black text-gray-800">Class IX</th>
                      <th className="p-4 font-black text-gray-800">Class XI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 font-bold text-gray-700">Application Mode</td>
                      <td className="p-4 text-gray-600">Online</td>
                      <td className="p-4 text-gray-600">Online</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700">Registration Last Date</td>
                      <td className="p-4 text-red-600 font-black">30 September 2026</td>
                      <td className="p-4 text-red-600 font-black">30 September 2026</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700">Selection Test Date</td>
                      <td className="p-4 text-brand-dark font-black">10 April 2027</td>
                      <td className="p-4 text-brand-dark font-black">10 April 2027</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700">Exam Time</td>
                      <td className="p-4 text-gray-600">11:00 AM – 1:30 PM (2½ hrs)</td>
                      <td className="p-4 text-gray-600">11:00 AM – 1:30 PM (2½ hrs)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700">Result Declaration</td>
                      <td className="p-4 text-gray-600">Via NVS portal & JNV</td>
                      <td className="p-4 text-gray-600 font-bold">Likely May/June 2027</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </GradientCard>
          </section>

          {/* DYNAMIC SECTION: ELIGIBILITY */}
          <section>
            <SectionTitle number="3" title={`Who Can Apply for Class ${activeTab}?`} />
            <GradientCard color="purple" icon={Users}>
              {activeTab === 'IX' ? (
                <div className="space-y-4">
                  <p className="font-bold text-lg text-gray-800 mb-4">A student is eligible for Class IX if they meet ALL of the following:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">The student is an <strong>Indian national</strong>.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Currently studying in <strong>Class VIII during 2026–27</strong> in a Govt. or Govt.-recognized school.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">The school is located in the <strong>same district</strong> where the JNV is located.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">The student's <strong>district of residence and district of Class VIII study must be the same</strong>.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Date of birth must be between <strong>1 May 2012 and 31 July 2014</strong> (both inclusive).</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Has not already passed Class VIII in an earlier academic session.</span></li>
                  </ul>
                  <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm mt-6">
                    <h4 className="font-bold text-purple-800 mb-2">Rural vs Urban Status</h4>
                    <p className="text-sm text-gray-700">Studying in a rural-area school qualifies for the Rural + Open quota. If a student has studied in an urban-area school <strong>even for one day</strong> during the session, they are treated as an urban candidate.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="font-bold text-lg text-gray-800 mb-4">A student is eligible for Class XI if they meet ALL of the following:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">The student is an <strong>Indian national</strong>.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Currently studying in <strong>Class X during 2026–27</strong> in a Govt. or Govt.-recognized school.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">The school is in the <strong>district where the JNV is located</strong>.</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Date of birth must be between <strong>1 June 2010 and 31 July 2012</strong> (both inclusive).</span></li>
                    <li className="flex gap-3"><CheckSquare className="w-6 h-6 text-purple-600 flex-shrink-0" /><span className="text-gray-700">Must <strong>not</strong> have passed Class X before the 2026–27 session.</span></li>
                  </ul>
                  <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm mt-6">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> The Most Important Difference</h4>
                    <p className="text-sm text-gray-700">Class XI admission is <strong>ONLY against vacant seats</strong> remaining after existing JNV Class X students are accommodated. A candidate from one State cannot seek admission in another State.</p>
                  </div>
                </div>
              )}
            </GradientCard>
          </section>

          {/* DYNAMIC SECTION: EXAM PATTERN & SYLLABUS */}
          <section>
            <SectionTitle number="4" title={`Class ${activeTab} Exam Pattern & Syllabus`} />
            
            {activeTab === 'IX' ? (
              <div className="space-y-6">
                <GradientCard color="multi" icon={FileText}>
                  <h3 className="font-black text-xl text-brand-dark mb-4">Exam Pattern</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">Level: Class VIII</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">Duration: 2½ hrs</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">MCQ (OMR)</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-green-600">No Negative Marking</span>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
                    <table className="w-full text-left bg-white min-w-[300px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="p-3 font-bold text-gray-800">Subject</th>
                          <th className="p-3 font-bold text-gray-800 text-right">Questions</th>
                          <th className="p-3 font-bold text-gray-800 text-right">Marks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="p-3 font-medium">English</td><td className="p-3 text-right">15</td><td className="p-3 text-right text-gray-600">15</td></tr>
                        <tr><td className="p-3 font-medium">Hindi</td><td className="p-3 text-right">15</td><td className="p-3 text-right text-gray-600">15</td></tr>
                        <tr><td className="p-3 font-medium">Mathematics</td><td className="p-3 text-right">35</td><td className="p-3 text-right text-gray-600">35</td></tr>
                        <tr><td className="p-3 font-medium">General Science</td><td className="p-3 text-right">35</td><td className="p-3 text-right text-gray-600">35</td></tr>
                        <tr className="bg-gray-50"><td className="p-3 font-black">Total</td><td className="p-3 text-right font-black">100</td><td className="p-3 text-right font-black">100</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-2">Selection Rule</h4>
                    <p className="text-sm text-gray-700">You must achieve the minimum qualifying score in ALL four subjects. However, merit calculation is based on: <strong>Mathematics + Science + higher-scoring language (English or Hindi).</strong></p>
                  </div>
                </GradientCard>

                <GradientCard color="green" icon={BookOpen}>
                  <h3 className="font-black text-xl text-brand-dark mb-4">Syllabus Overview</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-green-700 mb-2 border-b pb-2">Math (35 Marks)</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Rational Numbers, Squares & Cubes, Exponents, Proportions, Percentages, Profit/Loss, SI/CI, Algebraic Expressions, Linear Equations, Quadrilaterals, Mensuration, Data Handling (Graphs, Probability).</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-green-700 mb-2 border-b pb-2">Science (35 Marks)</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Crop Production, Microorganisms, Coal/Petroleum, Combustion, Reproduction, Adolescence, Force/Pressure, Friction, Sound, Chemical Effects of Current, Light.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-green-700 mb-2 border-b pb-2">English (15 Marks)</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Comprehension, Passives, Degrees of Comparison, Modals, Prepositions, Tenses, Reported Speech.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-green-700 mb-2 border-b pb-2">Hindi (15 Marks)</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">वर्ण-विचार, पर्यायवाची/विलोम, मुहावरे/लोकोक्तियाँ, वाक्य शुद्धि, अपठित गद्यांश।</p>
                    </div>
                  </div>
                </GradientCard>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Class XI Streams */}
                <GradientCard color="orange" icon={Briefcase}>
                  <h3 className="font-black text-xl text-brand-dark mb-4">Available Streams & Choices</h3>
                  <p className="text-gray-700 mb-4">Candidates may apply for <strong>up to two streams</strong>. You can choose <strong>up to three JNVs per stream</strong>.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
                      <h4 className="font-bold text-orange-700">Science</h4>
                      <span className="text-xs text-gray-500">Phys & Chem req.</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
                      <h4 className="font-bold text-orange-700">Commerce</h4>
                      <span className="text-xs text-gray-500">Acc, Bus, Eco req.</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
                      <h4 className="font-bold text-orange-700">Humanities</h4>
                      <span className="text-xs text-gray-500">Hist, Geo, Eco req.</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border text-center shadow-sm">
                      <h4 className="font-bold text-orange-700">Vocational</h4>
                      <span className="text-xs text-gray-500">Vocational req.</span>
                    </div>
                  </div>
                </GradientCard>

                {/* Class XI Pattern */}
                <GradientCard color="multi" icon={FileText}>
                  <h3 className="font-black text-xl text-brand-dark mb-4">Exam Pattern</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">Duration: 2½ hrs</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">MCQ (OMR)</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-sm font-bold text-green-600">No Negative Marking</span>
                  </div>
                  
                  <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
                    <table className="w-full text-left bg-white min-w-[400px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="p-3 font-bold text-gray-800">Subject</th>
                          <th className="p-3 font-bold text-gray-800 text-right">Questions</th>
                          <th className="p-3 font-bold text-gray-800 text-right">Marks</th>
                          <th className="p-3 font-bold text-gray-800 text-right hidden sm:table-cell">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="p-3 font-medium">Mental Ability</td><td className="p-3 text-right">20</td><td className="p-3 text-right">20</td><td className="p-3 text-right text-gray-500 text-sm hidden sm:table-cell">30 min</td></tr>
                        <tr><td className="p-3 font-medium">English</td><td className="p-3 text-right">20</td><td className="p-3 text-right">20</td><td className="p-3 text-right text-gray-500 text-sm hidden sm:table-cell">30 min</td></tr>
                        <tr><td className="p-3 font-medium">Science</td><td className="p-3 text-right">20</td><td className="p-3 text-right">20</td><td className="p-3 text-right text-gray-500 text-sm hidden sm:table-cell">30 min</td></tr>
                        <tr><td className="p-3 font-medium">Social Science</td><td className="p-3 text-right">20</td><td className="p-3 text-right">20</td><td className="p-3 text-right text-gray-500 text-sm hidden sm:table-cell">30 min</td></tr>
                        <tr><td className="p-3 font-medium">Mathematics</td><td className="p-3 text-right">20</td><td className="p-3 text-right">20</td><td className="p-3 text-right text-gray-500 text-sm hidden sm:table-cell">30 min</td></tr>
                        <tr className="bg-gray-50"><td className="p-3 font-black">Total</td><td className="p-3 text-right font-black">100</td><td className="p-3 text-right font-black">100</td><td className="p-3 text-right font-black hidden sm:table-cell">2½ hrs</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-3">Merit Calculation (Out of 60)</h4>
                    <p className="text-sm text-gray-700 mb-3">You must score at least <strong>6/20 in each of the five subjects</strong> to qualify.</p>
                    <ul className="space-y-2 text-sm text-gray-800">
                      <li><span className="font-bold">Science Stream:</span> Mental Ability + Science + Mathematics</li>
                      <li><span className="font-bold">Commerce Stream:</span> Mental Ability + Social Science + Mathematics</li>
                      <li><span className="font-bold">Humanities Stream:</span> Mental Ability + Social Science + Highest of remaining 3</li>
                      <li><span className="font-bold">Vocational Stream:</span> Mental Ability + Best 2 of remaining 4</li>
                    </ul>
                  </div>
                </GradientCard>
              </div>
            )}
          </section>

          {/* Application Process & Documents */}
          <section>
            <SectionTitle number="5" title="Application & Documents" />
            <GradientCard color="blue" icon={CheckSquare}>
              <div className="mb-6">
                <p className="font-bold text-lg text-gray-800 mb-2">Apply Online (Free of Cost)</p>
                <a href="https://navodaya.gov.in" target="_blank" rel="noopener noreferrer" className="inline-block bg-white border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  navodaya.gov.in
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-brand-dark mb-3 border-b pb-2">Keep Ready to Apply (JPG 10-100KB)</h4>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                    <li>Candidate photograph</li>
                    <li>Candidate signature</li>
                    <li>Parent signature</li>
                    <li>Aadhaar details</li>
                    <li>State & district details</li>
                    {activeTab === 'IX' && <li>APAAR ID/PEN</li>}
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-brand-dark mb-3 border-b pb-2">Documents for Verification Later</h4>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc pl-4">
                    <li>Birth Certificate</li>
                    <li>Proof of eligibility</li>
                    {activeTab === 'XI' && <li><strong>Class X Pass Certificate</strong></li>}
                    <li>Residence & Rural Area certificate (if applicable)</li>
                    <li>OBC Central List / SC / ST / Divyang certificate</li>
                    <li><strong>Transfer Certificate</strong> (ONLY after admission confirmation)</li>
                  </ul>
                </div>
              </div>
            </GradientCard>
          </section>

          {/* Fees */}
          <section>
            <SectionTitle number="6" title="Fees & JNV Life" />
            <GradientCard color="green" icon={Award}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-3">JNV School Life</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>Fully residential & co-educational (CBSE)</li>
                    <li>Free boarding, lodging, uniform & textbooks</li>
                    <li>Three-Language Formula</li>
                    <li>Migration programme for national integration (Class IX)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-3">Vidyalaya Vikas Nidhi (VVN)</h4>
                  <p className="text-gray-700 text-sm mb-2"><strong>₹600/month</strong> for Classes IX–XII.</p>
                  <p className="text-gray-700 text-sm mb-2"><strong>Exempted completely:</strong> SC/ST, Divyang, All Girls, BPL Families.</p>
                  <p className="text-gray-700 text-sm">Govt. employees pay ₹1,500/month (or actual CEA received, whichever is lower).</p>
                </div>
              </div>
            </GradientCard>
          </section>

          {/* Exam Rules */}
          <section>
            <SectionTitle number="7" title="Exam-Day Rules" />
            <GradientCard color="multi" icon={Settings}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg border shadow-sm"><CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0" /> Bring Admit Card & Govt ID</li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg border shadow-sm"><CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0" /> Use Blue or Black Ball Point Pen</li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg border shadow-sm"><AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" /> Pencils are strictly prohibited</li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-lg border shadow-sm"><AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" /> OMR answers cannot be changed</li>
              </ul>
            </GradientCard>
          </section>

          {/* 10 Things */}
          <section>
            <SectionTitle number="8" title="10 Things Every JNV Aspirant Must Remember" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">1. Lateral entry only.</strong>
                <p className="text-sm text-gray-600">Admission is strictly against vacant seats in IX & XI.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">2. Deadline is 30 Sept 2026.</strong>
                <p className="text-sm text-gray-600">Don't wait for the last minute to apply online.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">3. Exam is 10 April 2027.</strong>
                <p className="text-sm text-gray-600">Both exams are 2½ hours on the same day.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">4. No negative marking.</strong>
                <p className="text-sm text-gray-600">Attempt all questions freely on the OMR sheet.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">5. District match required.</strong>
                <p className="text-sm text-gray-600">Your school & residence must be in the JNV district.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">6. Central OBC List.</strong>
                <p className="text-sm text-gray-600">OBC candidates must be in the Central List to get quota.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">7. IX Merit Calculation.</strong>
                <p className="text-sm text-gray-600">Math + Science + Higher Language score.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">8. XI Stream Selection.</strong>
                <p className="text-sm text-gray-600">Choose streams and JNVs carefully in the portal.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">9. Passing ≠ Admission.</strong>
                <p className="text-sm text-gray-600">Selection is provisional until document verification.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#5B10FF]/30 transition-colors">
                <strong className="text-brand-purple block text-lg mb-1">10. Don't take TC early.</strong>
                <p className="text-sm text-gray-600">Only submit your Transfer Certificate after confirmation.</p>
              </div>
            </div>
          </section>

        </div>
      </section>
      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Jnv2027Page;
