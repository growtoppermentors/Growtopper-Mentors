import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CohortSection from '../components/sections/CohortSection';
import FinalCTA from '../components/sections/FinalCTA';
import {
  Calendar,
  CheckCircle,
  FileText,
  AlertCircle,
  Info,
  GraduationCap,
  ClipboardCheck,
  MapPin,
  Clock,
  BookOpen,
  Award,
  Users,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  ShieldCheck,
  Zap,
  Globe,
  Wallet
} from 'lucide-react';

const GradientCard = ({ children, title, icon: Icon, color = 'multi' }) => {
  const styles = {
    orange: 'bg-gradient-to-br from-[#FFF4ED] to-[#FFFaf0] border-orange-100',
    purple: 'bg-gradient-to-br from-[#F4F1FF] to-[#FAFAFF] border-purple-100',
    green: 'bg-gradient-to-br from-[#F0FDF4] to-[#F8FAFC] border-green-100',
    blue: 'bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border-blue-100',
    multi: 'bg-gradient-to-br from-white via-[#FCFBFF] to-[#F4F1FF] border-purple-100',
    default: 'bg-white border-gray-100'
  };

  const activeStyle = styles[color] || styles.default;
  const iconColors = {
    orange: 'text-orange-600 bg-orange-100/50',
    purple: 'text-[#5B10FF] bg-[#5B10FF]/10',
    green: 'text-green-600 bg-green-100/50',
    blue: 'text-blue-600 bg-blue-100/50',
    multi: 'text-[#7280DE] bg-[#7280DE]/10',
    default: 'text-gray-500 bg-gray-100'
  };
  const iconColor = iconColors[color] || iconColors.default;

  return (
    <div className={`relative rounded-[24px] border shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 h-full mb-8 ${activeStyle}`}>
      {title && (
        <div className="flex items-center gap-4 mb-6">
          {Icon && (
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconColor}`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-black text-brand-dark">{title}</h2>
        </div>
      )}
      <div className="text-gray-700 leading-relaxed text-[15px] sm:text-[16px] space-y-4">
        {children}
      </div>
    </div>
  );
};

const SectionTitle = ({ number, title }) => (
  <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mb-6 flex items-center gap-3">
    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#7280DE] to-[#B28BFF] text-white text-lg flex-shrink-0 shadow-sm">
      {number}
    </span>
    {title}
  </h2>
);

const Oav2027Page = ({ onRequestInvite }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#E9E2CD] bg-[radial-gradient(#d5ceb6_1px,transparent_1px)] [background-size:20px_20px] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Banner Section */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="w-full mb-8 overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-100">
          <img 
            src="/images/oav2027-banner.png" 
            alt="OAV Admission 2027: Complete Guide for Students and Parents" 
            className="w-full h-auto" 
          />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-4 leading-tight">Odisha Adarsha Vidyalaya Entrance Exam 2027</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Planning to appear for the OAV Entrance Examination 2027? Here is the essential information you and your parents need to know.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-[13px] sm:text-sm text-yellow-800 bg-yellow-100 px-5 py-3 rounded-2xl font-bold border border-yellow-200 text-left shadow-sm">
            <AlertTriangle className="w-6 h-6 flex-shrink-0 text-yellow-600" />
            <p><strong>Important:</strong> The official OAV Admission 2027 notification has not yet been released. Dates shown for 2027 are expected based on the previous admission cycle.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        
        {/* 1. Quick Overview */}
        <section>
          <SectionTitle number="1" title="OAV Admission 2027 — Quick Overview" />
          <GradientCard color="multi" icon={Calendar}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    ['Notification', 'November 2026'],
                    ['Application', 'November–December 2026'],
                    ['Admit Card', 'Late December 2026'],
                    ['Entrance Exam', 'January 2027'],
                    ['Result', 'February 2027'],
                    ['Merit List', 'February–March 2027'],
                    ['Document Verification', 'March–April 2027'],
                    ['Final Admission', 'April–May 2027'],
                    ['Waiting List', 'May–June 2027'],
                    ['Application Mode', 'Online'],
                    ['Exam Mode', 'Offline / OMR'],
                    ['Exam Language', 'Odia & English'],
                    ['Negative Marking', 'No'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#7280DE]/10 last:border-0 hover:bg-white/50 transition-colors">
                      <td className="py-3 px-3 font-bold text-gray-900 w-1/2">{row[0]}</td>
                      <td className="py-3 px-3 font-medium text-[#7280DE]">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">* These 2027 dates are expected, not officially announced.</p>
          </GradientCard>
        </section>

        {/* 2. Who Can Apply */}
        <section>
          <SectionTitle number="2" title="Who Can Apply?" />
          <GradientCard color="orange" icon={Users} title="Basic Eligibility">
            <ul className="space-y-4 font-medium">
              <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" /> <span className="pt-0.5">Must be a <strong>permanent resident of Odisha.</strong></span></li>
              <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" /> <span className="pt-0.5">Must apply to the OAV located in the student's <strong>native residential block.</strong></span></li>
              <li className="flex gap-3"><AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" /> <span className="pt-0.5">A student already enrolled in an OAV is <strong>not eligible</strong> for fresh admission.</span></li>
              <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" /> <span className="pt-0.5">Students studying in Government, CBSE, ICSE or recognized Odia-medium private schools may be eligible.</span></li>
              <li className="flex gap-3"><CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" /> <span className="pt-0.5">Private-school students must have a valid <strong>Certificate of Recognition (CoR)</strong> where required.</span></li>
            </ul>
            <div className="mt-6 p-5 bg-white rounded-[20px] shadow-sm border border-[#7280DE]/20 text-brand-dark font-bold flex gap-3 items-center">
              <Info className="w-6 h-6 text-[#7280DE]" />
              Only one OAV application is allowed according to the eligibility guidelines.
            </div>
          </GradientCard>
        </section>

        {/* 3. Class-Wise Eligibility */}
        <section>
          <SectionTitle number="3" title="Class-Wise Eligibility" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GradientCard color="green" title="Class VI">
              <ul className="space-y-3 font-medium">
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Age</span> <strong>10–12 years</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Expected DOB</span> <strong>1 Apr 2014 – 31 Mar 2017</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Previous/Current Level</span> <strong>Class V</strong></li>
                <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">Entrance Syllabus</span> <strong className="text-[#7280DE]">Class V</strong></li>
              </ul>
            </GradientCard>
            <GradientCard color="blue" title="Class VII">
              <ul className="space-y-3 font-medium">
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Age</span> <strong>11–13 years</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Expected DOB</span> <strong>1 Apr 2013 – 31 Mar 2016</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Previous/Current Level</span> <strong>Class VI</strong></li>
                <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">Entrance Syllabus</span> <strong className="text-[#7280DE]">Class VI</strong></li>
              </ul>
              <div className="mt-4 text-sm text-[#9D68A1] font-bold bg-white p-3 rounded-xl border border-[#9D68A1]/20">Admission depends on vacancies.</div>
            </GradientCard>
            <GradientCard color="purple" title="Class VIII">
              <ul className="space-y-3 font-medium">
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Age</span> <strong>12–14 years</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Expected DOB</span> <strong>1 Apr 2012 – 31 Mar 2015</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Previous/Current Level</span> <strong>Class VII</strong></li>
                <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">Entrance Syllabus</span> <strong className="text-[#7280DE]">Class VII</strong></li>
              </ul>
              <div className="mt-4 text-sm text-[#9D68A1] font-bold bg-white p-3 rounded-xl border border-[#9D68A1]/20">Admission depends on vacancies.</div>
            </GradientCard>
            <GradientCard color="orange" title="Class IX">
              <ul className="space-y-3 font-medium">
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Age</span> <strong>13–15 years</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Expected DOB</span> <strong>1 Apr 2011 – 31 Mar 2014</strong></li>
                <li className="flex justify-between items-center border-b border-[#7280DE]/10 pb-2"><span className="text-gray-500 text-sm">Previous/Current Level</span> <strong>Class VIII</strong></li>
                <li className="flex justify-between items-center"><span className="text-gray-500 text-sm">Entrance Syllabus</span> <strong className="text-[#7280DE]">Class VIII</strong></li>
              </ul>
              <div className="mt-4 text-sm text-[#9D68A1] font-bold bg-white p-3 rounded-xl border border-[#9D68A1]/20">Admission depends on vacancies.</div>
            </GradientCard>
          </div>
          <div className="p-5 bg-white rounded-[20px] shadow-sm border border-[#7280DE]/20 mt-4 flex items-start gap-4">
            <Info className="w-6 h-6 text-[#7280DE] flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              The age is calculated as of <strong>31 March 2027</strong>. Candidates with 40%+ certified disability receive a <strong>2-year upper-age relaxation</strong>.
            </p>
          </div>
        </section>

        {/* 4. Important Rules */}
        <section>
          <SectionTitle number="4" title="Important Eligibility Rules" />
          <GradientCard color="multi" icon={ShieldCheck}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-[#7280DE]/10 shadow-sm">
                <h4 className="font-bold text-lg text-brand-dark mb-2">Native Block Rule</h4>
                <p className="text-sm text-gray-600">You normally need to apply for the OAV in your <strong>native residential block</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#7280DE]/10 shadow-sm">
                <h4 className="font-bold text-lg text-brand-dark mb-2">Studying Outside</h4>
                <p className="text-sm text-gray-600">A student may be eligible even if they study in another block, provided the required residential documentation is available.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#7280DE]/10 shadow-sm">
                <h4 className="font-bold text-lg text-brand-dark mb-2">Private School Students</h4>
                <p className="text-sm text-gray-600">Students from private schools need a valid <strong>Certificate of Recognition (CoR)</strong> from the State Government where applicable.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#7280DE]/10 shadow-sm">
                <h4 className="font-bold text-lg text-brand-dark mb-2">Transfer</h4>
                <p className="text-sm text-gray-600">Transfer is permitted only for <strong>Classes VI–VIII</strong>, subject to rules. No transfer admission for Classes IX–XII.</p>
              </div>
            </div>
          </GradientCard>
        </section>

        {/* 5. Reservation */}
        <section>
          <SectionTitle number="5" title="Reservation" />
          <GradientCard color="purple" icon={MapPin}>
            <p className="mb-6 font-medium text-gray-700">OAV admission follows category-based and horizontal reservation provisions.</p>
            <div className="overflow-x-auto bg-white rounded-2xl border border-[#7280DE]/10 shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">SC</td><td className="py-3 px-4 text-gray-600">According to block-level SC population</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">ST</td><td className="py-3 px-4 text-gray-600">According to block-level ST population</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">SEBC</td><td className="py-3 px-4 text-gray-600">Remaining seats after applicable SC/ST reservation</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">General / UR</td><td className="py-3 px-4 text-gray-600">Remaining seats</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">PwD</td><td className="py-3 px-4 text-gray-600">4% horizontal reservation</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">Girls</td><td className="py-3 px-4 text-gray-600">50% in each category</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">OAV Employees' Wards</td><td className="py-3 px-4 text-gray-600">Preference subject to appearing in exam</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">MLA Quota</td><td className="py-3 px-4 text-gray-600">2 seats per OAV, Class VI</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">MP Quota</td><td className="py-3 px-4 text-gray-600">1 seat per OAV, Class VI</td></tr>
                  <tr className="border-b border-[#7280DE]/10 hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">Collector Quota</td><td className="py-3 px-4 text-gray-600">2 seats, Class VI</td></tr>
                  <tr className="hover:bg-gray-50"><td className="py-3 px-4 font-bold text-gray-900 w-1/3">State Govt/PSU</td><td className="py-3 px-4 text-gray-600">5% within respective categories</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex gap-3 text-sm bg-red-50 p-5 rounded-2xl text-red-900 border border-red-100 shadow-sm">
              <AlertTriangle className="w-6 h-6 flex-shrink-0" />
              <p><strong>Important:</strong> Even candidates recommended under MLA/MP/Collector quotas must appear in the entrance examination; recommendation does not mean direct admission.</p>
            </div>
          </GradientCard>
        </section>

        {/* 6. How to Apply */}
        <section>
          <SectionTitle number="6" title="How to Apply" />
          <GradientCard color="green" icon={CheckSquare}>
            <div className="space-y-8 relative border-l-2 border-[#7280DE]/30 ml-4 pl-8 py-2">
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#7280DE] to-[#B28BFF] ring-4 ring-white shadow-sm"></div>
                <h4 className="font-black text-xl text-brand-dark">Step 1 — Wait for the Official Notification</h4>
                <div className="inline-block mt-2 mb-3 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500">Expected: November 2026</div>
                <p className="text-gray-600">It will confirm application dates, exam date, eligibility, reservation, syllabus, and other admission instructions.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#7280DE] to-[#B28BFF] ring-4 ring-white shadow-sm"></div>
                <h4 className="font-black text-xl text-brand-dark">Step 2 — Complete Online Application</h4>
                <div className="inline-block mt-2 mb-3 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500">Expected: November–December 2026</div>
                <p className="text-gray-600">Application is expected to be available through <strong>oav.edu.in</strong> or <strong>bseodisha.ac.in</strong>. Keep mobile numbers available for login/OTP.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#7280DE] to-[#B28BFF] ring-4 ring-white shadow-sm"></div>
                <h4 className="font-black text-xl text-brand-dark">Step 3 — Download Admit Card</h4>
                <div className="inline-block mt-2 mb-3 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500">Expected: Late December 2026</div>
                <p className="text-gray-600">Contains examination centre, exam date, exam time, and candidate details.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#7280DE] to-[#B28BFF] ring-4 ring-white shadow-sm"></div>
                <h4 className="font-black text-xl text-brand-dark">Step 4 — Appear for OAV Entrance</h4>
                <div className="inline-block mt-2 mb-3 bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500">Expected: January 2027</div>
                <p className="text-gray-600">The examination is conducted <strong>offline using OMR</strong>. It is bilingual in Odia and English and has <strong>no negative marking</strong>.</p>
              </div>

            </div>
          </GradientCard>
        </section>

        {/* 7. Exam Pattern */}
        <section>
          <SectionTitle number="7" title="OAV Entrance Exam Pattern" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GradientCard color="blue" title="Class VI">
              <div className="bg-white rounded-2xl border border-[#7280DE]/10 overflow-hidden shadow-sm mb-6">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#7280DE]/5">
                    <tr><th className="py-3 px-4 font-bold text-gray-900">Subject</th><th className="py-3 px-4 text-right font-bold text-gray-900">Questions</th><th className="py-3 px-4 text-right font-bold text-gray-900">Marks</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">English</td><td className="py-3 px-4 text-right font-medium">15</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">15</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Mathematics</td><td className="py-3 px-4 text-right font-medium">15</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">15</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Science</td><td className="py-3 px-4 text-right font-medium">15</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">15</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Social Science</td><td className="py-3 px-4 text-right font-medium">15</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">15</td></tr>
                    <tr className="font-black bg-[#7280DE]/10"><td className="py-3 px-4 text-brand-dark">Total</td><td className="py-3 px-4 text-right text-brand-dark">60</td><td className="py-3 px-4 text-right text-brand-dark">60</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Duration</span> <strong className="text-gray-900">2 hours</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Type & Mode</span> <strong className="text-gray-900">MCQ (OMR)</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Language</span> <strong className="text-gray-900">Odia & English</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Negative Marking</span> <strong className="text-green-600">No</strong></div>
                <div className="col-span-2 bg-[#7280DE]/10 p-3 rounded-xl border border-[#7280DE]/20 text-center"><span className="text-gray-700">Syllabus:</span> <strong className="text-brand-dark">Class V</strong></div>
              </div>
            </GradientCard>
            
            <GradientCard color="orange" title="Classes VII–IX">
               <div className="bg-white rounded-2xl border border-[#7280DE]/10 overflow-hidden shadow-sm mb-6">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#7280DE]/5">
                    <tr><th className="py-3 px-4 font-bold text-gray-900">Subject</th><th className="py-3 px-4 text-right font-bold text-gray-900">Questions</th><th className="py-3 px-4 text-right font-bold text-gray-900">Marks</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">English</td><td className="py-3 px-4 text-right font-medium">20</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">20</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Odia</td><td className="py-3 px-4 text-right font-medium">20</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">20</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Mathematics</td><td className="py-3 px-4 text-right font-medium">20</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">20</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Science</td><td className="py-3 px-4 text-right font-medium">20</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">20</td></tr>
                    <tr className="border-b border-[#7280DE]/5"><td className="py-3 px-4 text-gray-600">Social Science</td><td className="py-3 px-4 text-right font-medium">20</td><td className="py-3 px-4 text-right font-medium text-[#7280DE]">20</td></tr>
                    <tr className="font-black bg-[#7280DE]/10"><td className="py-3 px-4 text-brand-dark">Total</td><td className="py-3 px-4 text-right text-brand-dark">100</td><td className="py-3 px-4 text-right text-brand-dark">100</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Duration</span> <strong className="text-gray-900">3 hours</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Type & Mode</span> <strong className="text-gray-900">MCQ (OMR)</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Language</span> <strong className="text-gray-900">Odia & English</strong></div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100"><span className="block text-gray-500 mb-1">Negative Marking</span> <strong className="text-green-600">No</strong></div>
                <div className="col-span-2 bg-[#7280DE]/10 p-3 rounded-xl border border-[#7280DE]/20 text-center"><span className="text-gray-700">Syllabus:</span> <strong className="text-brand-dark">Previous class</strong></div>
              </div>
            </GradientCard>
          </div>
        </section>

        {/* 8. Syllabus */}
        <section>
          <SectionTitle number="8" title="What Syllabus Should You Study?" />
          <GradientCard color="multi" icon={BookOpen}>
            <p className="mb-6 font-medium text-gray-700 text-lg">The entrance examination is based on the <strong>previous class level</strong>.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Class VI aspirants</h4>
                <p className="text-sm text-gray-600">Study the <strong>complete Class V syllabus</strong> (English, Math, Science, Social Science).</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Class VII aspirants</h4>
                <p className="text-sm text-gray-600">Study the <strong>Class VI syllabus</strong> (English, Odia, Math, Science, Social Science).</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Class VIII aspirants</h4>
                <p className="text-sm text-gray-600">Study the <strong>Class VII syllabus</strong>.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Class IX aspirants</h4>
                <p className="text-sm text-gray-600">Study the <strong>Class VIII syllabus</strong>.</p>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 p-4 bg-[#7280DE]/10 rounded-xl border border-[#7280DE]/20">
               <Info className="w-5 h-5 text-[#7280DE] mt-0.5" />
               <p className="text-sm font-medium text-brand-dark">For Class VI, completing the NCERT Class V textbooks across all four subjects is specifically recommended in the preparation guidance.</p>
            </div>
          </GradientCard>
        </section>

        {/* 9. 90-Day Plan */}
        <section>
          <SectionTitle number="9" title="90-Day Preparation Plan — Class VI" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GradientCard color="blue">
                <div className="flex justify-center mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-black text-2xl shadow-lg">1</div></div>
                <h4 className="font-black text-xl text-center text-brand-dark mb-1">Days 1–30</h4>
                <p className="text-center text-gray-500 text-sm font-bold mb-4 uppercase tracking-wider">Build Foundation</p>
                <div className="bg-white p-3 rounded-xl text-center text-sm font-bold text-[#7280DE] mb-4 border border-[#7280DE]/10">Daily study: 3–4 hours</div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Complete textbook chapters.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Understand concepts.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Make short notes.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Identify weak subjects/topics.</li>
                </ul>
            </GradientCard>
            <GradientCard color="purple">
                <div className="flex justify-center mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7280DE] to-[#B28BFF] text-white flex items-center justify-center font-black text-2xl shadow-lg">2</div></div>
                <h4 className="font-black text-xl text-center text-brand-dark mb-1">Days 31–60</h4>
                <p className="text-center text-gray-500 text-sm font-bold mb-4 uppercase tracking-wider">Strengthen Prep</p>
                <div className="bg-white p-3 rounded-xl text-center text-sm font-bold text-[#7280DE] mb-4 border border-[#7280DE]/10">Daily study: 4–5 hours</div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Revise difficult topics.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Practice MCQs regularly.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Analyse mistakes.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Improve accuracy and speed.</li>
                </ul>
            </GradientCard>
            <GradientCard color="orange">
                <div className="flex justify-center mb-6"><div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white flex items-center justify-center font-black text-2xl shadow-lg">3</div></div>
                <h4 className="font-black text-xl text-center text-brand-dark mb-1">Days 61–90</h4>
                <p className="text-center text-gray-500 text-sm font-bold mb-4 uppercase tracking-wider">Revision + Speed</p>
                <div className="bg-white p-3 rounded-xl text-center text-sm font-bold text-[#7280DE] mb-4 border border-[#7280DE]/10">Daily study: 5–6 hours</div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Revise complete syllabus.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Take full-length mock tests.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Practise OMR-style answering.</li>
                  <li className="flex gap-2 items-start"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /> Improve time management.</li>
                </ul>
            </GradientCard>
          </div>
          <div className="text-center mt-2 text-gray-600 font-medium bg-white p-4 rounded-xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
            Recommended practice includes <strong>500+ MCQs per subject</strong> and progressively increasing mock-test frequency.
          </div>
        </section>

        {/* 10. Exam Strategy */}
        <section>
          <SectionTitle number="10" title="Exam-Day Strategy" />
          <GradientCard color="green" icon={Lightbulb}>
            <p className="mb-6 font-bold text-brand-dark text-lg md:text-xl">Because there is <span className="text-red-500">no negative marking</span>, students should aim to attempt all questions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Read every question carefully.</span></div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Do not spend too long on one question.</span></div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Keep track of time throughout.</span></div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Mark answers carefully on OMR.</span></div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Return to difficult questions later.</span></div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-3"><CheckCircle className="w-6 h-6 text-[#7280DE] flex-shrink-0" /> <span className="text-gray-700 font-medium">Use final minutes to check empty ones.</span></div>
            </div>
            <div className="bg-[#7280DE]/10 p-4 rounded-xl border border-[#7280DE]/20 flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-[#7280DE]" />
              <p className="text-brand-dark font-bold">For Class VI, the examination provides 120 minutes for 60 questions.</p>
            </div>
          </GradientCard>
        </section>

        {/* 11. After Exam */}
        <section>
          <SectionTitle number="11" title="After the Examination" />
          <GradientCard color="multi" icon={Award}>
             <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-brand-dark">Result</h4>
                  <span className="bg-[#7280DE]/10 text-[#7280DE] px-3 py-1 rounded-full text-xs font-bold w-max">Expected: February 2027</span>
                </div>
                <p className="text-gray-600 text-sm">The result is expected to include the student's score and merit information.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-brand-dark">Merit List</h4>
                  <span className="bg-[#7280DE]/10 text-[#7280DE] px-3 py-1 rounded-full text-xs font-bold w-max">Expected: Feb–Mar 2027</span>
                </div>
                <p className="text-gray-600 text-sm">A common merit list is prepared, followed by category-wise selection. Lists may be published through district-level channels and the respective OAV.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-brand-dark">Document Verification</h4>
                  <span className="bg-[#7280DE]/10 text-[#7280DE] px-3 py-1 rounded-full text-xs font-bold w-max">Expected: March–April 2027</span>
                </div>
                <p className="text-gray-600 text-sm">Selected candidates must report for verification with the required original documents and photocopies.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-brand-dark">Final Admission</h4>
                  <span className="bg-[#7280DE]/10 text-[#7280DE] px-3 py-1 rounded-full text-xs font-bold w-max">Expected: April–May 2027</span>
                </div>
                <p className="text-gray-600 text-sm">After successful verification, students complete admission formalities and hostel arrangements where applicable.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="font-bold text-lg text-brand-dark">Waiting List</h4>
                  <span className="bg-[#7280DE]/10 text-[#7280DE] px-3 py-1 rounded-full text-xs font-bold w-max">Expected: May–June 2027</span>
                </div>
                <p className="text-gray-600 text-sm">If seats remain vacant, approved waiting-list candidates may be considered (maximum of three phases).</p>
              </div>
             </div>
          </GradientCard>
        </section>

        {/* 12. Documents */}
        <section>
          <SectionTitle number="12" title="Documents You Must Keep Ready" />
          <GradientCard color="orange" icon={FileText}>
            <p className="mb-6 font-bold text-gray-700 text-lg">Prepare these documents <strong>before the application window opens</strong>.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                <h4 className="font-bold text-xl text-green-700 mb-4 border-b border-green-50 pb-2">Essential Documents</h4>
                <ul className="space-y-3 font-medium text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Birth Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Aadhaar Card</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Residential Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Previous Class Marksheet</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Transfer Certificate (TC)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Passport-size Photograph</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Student Signature</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-xl text-blue-700 mb-4 border-b border-blue-50 pb-2">Where Applicable</h4>
                <ul className="space-y-3 font-medium text-gray-700 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Caste Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Certificate of Recognition (CoR)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> PwD Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Employer Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> MLA/MP/Collector Letter</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">Some documents are required during online application, while originals and photocopies are required during verification.</p>
          </GradientCard>
        </section>

        {/* 13. Rejection Reasons */}
        <section>
          <SectionTitle number="13" title="Why Applications Can Be Rejected" />
          <GradientCard color="purple" icon={AlertTriangle}>
            <p className="font-bold text-gray-700 mb-6">Avoid these common mistakes to prevent disqualification:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 border-b border-red-50 pb-2">Application Problems</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Incomplete application form</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Missing documents</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Incorrect information</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Incorrect photograph/signature</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 border-b border-red-50 pb-2">Eligibility Problems</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Age outside the permitted range</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Not meeting residence requirements</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Already enrolled in an OAV</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Applying to the wrong OAV/block</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 border-b border-red-50 pb-2">Document Problems</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Invalid Residential Certificate</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Missing/invalid Caste Certificate</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Missing CoR for private schools</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <h4 className="font-bold text-red-700 mb-3 border-b border-red-50 pb-2">Admission Problems</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Not reporting within deadline</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Missing original documents</li>
                  <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> Found ineligible during verification</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-100 flex gap-3">
              <Info className="w-6 h-6 text-red-600 flex-shrink-0" />
              <p className="text-sm font-bold text-red-900">Selection: Meeting eligibility does not guarantee selection. Selection depends on examination performance, merit, reservation and available seats.</p>
            </div>
          </GradientCard>
        </section>

        {/* 14. Class Wise Admission */}
        <section>
          <SectionTitle number="14" title="Class-Wise Admission" />
          <GradientCard color="blue" icon={GraduationCap}>
             <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-xl text-brand-dark mb-2">Class VI — Main Entry Point</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Admission through OAV Entrance Test (Class V syllabus).</li>
                  <li>• Available across OAVs (Standard intake is 80 students per class).</li>
                  <li>• Special quotas exist, but candidates must still appear in the examination.</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-xl text-brand-dark mb-2">Classes VII–IX — Lateral Entry</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Admission is subject to <strong>vacancies</strong> (Only OAVs with available seats participate).</li>
                  <li>• Examination is based on the previous class syllabus.</li>
                  <li>• Exam pattern: 100 marks, 100 questions, 3 hours.</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-xl text-brand-dark mb-2">Class XI</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>No entrance examination.</strong> Selection is merit-based (Class X board marks).</li>
                  <li>• Science, Commerce and Arts may be available depending on the OAV.</li>
                  <li>• Existing OAV students receive preference. External students may also apply.</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-xl text-brand-dark mb-2">Classes X & XII</h4>
                <p className="text-sm text-gray-600">There is <strong>no fresh admission</strong>; students continue from the previous stage.</p>
              </div>
             </div>
          </GradientCard>
        </section>

        {/* 15. Fees */}
        <section>
          <SectionTitle number="15" title="Fees & Cost" />
          <GradientCard color="green" icon={Wallet}>
            <div className="text-center bg-green-50 p-6 rounded-2xl border border-green-200 mb-6">
              <p className="font-black text-2xl text-green-700">OAV provides free tuition / state-funded education.</p>
            </div>
            <p className="font-medium text-gray-700 mb-3 text-center">Parents may still have to bear certain expenses, such as:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">Boarding/hostel charges</span>
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">Mess/food charges</span>
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">Uniform</span>
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">Books</span>
              <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-700 shadow-sm">Other personal expenses</span>
            </div>
            <p className="mt-6 text-sm text-gray-500 italic text-center">The exact 2027 fee amounts have not been publicly verified in the available information.</p>
          </GradientCard>
        </section>

        {/* 16. Important Dates Recap */}
        <section>
          <SectionTitle number="16" title="Important Dates — Save These" />
          <GradientCard color="multi" icon={Clock}>
            <p className="text-sm font-bold text-yellow-800 mb-6 bg-yellow-100 px-4 py-2 rounded-xl inline-block border border-yellow-200">These dates are expected only. Wait for the official 2027 notification before treating them as final.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">November 2026</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Notification</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">Nov–Dec 2026</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Online Application</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">Late Dec 2026</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Admit Card</div>
              </div>
              <div className="flex items-center gap-4 bg-[#7280DE]/10 p-4 rounded-xl shadow-sm border border-[#7280DE]/20 transform scale-[1.02]">
                <div className="w-1/3 md:w-1/4 font-black text-brand-dark">January 2027</div>
                <div className="w-2/3 md:w-3/4 font-black text-brand-dark">Entrance Examination</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">February 2027</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Result</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">Feb–Mar 2027</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Merit/Selection List</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">Mar–Apr 2027</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Document Verification</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">Apr–May 2027</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Final Admission</div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="w-1/3 md:w-1/4 font-black text-[#7280DE]">May–June 2027</div>
                <div className="w-2/3 md:w-3/4 font-medium text-gray-700">Waiting List Movement</div>
              </div>
            </div>
          </GradientCard>
        </section>

        {/* 17. Checklist */}
        <section>
          <SectionTitle number="17" title="Parent & Student Checklist" />
          <GradientCard color="orange" icon={CheckSquare}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-lg text-brand-dark mb-4 border-b pb-2 border-gray-100">Before Application</h4>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Check age eligibility.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Confirm Odisha permanent residence.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Identify the native-block OAV.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Arrange Residential Certificate.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Arrange Caste Certificate if applicable.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Arrange CoR if studying in a private school.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Keep photograph and signature ready.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Keep Aadhaar and school documents ready.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-lg text-brand-dark mb-4 border-b pb-2 border-gray-100">During Application</h4>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Register on the official portal.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Enter student details correctly.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Enter parent/school details.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Upload required documents.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Upload photograph and signature.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Pay the applicable fee if required.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Submit the application.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Save/print application number.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-lg text-brand-dark mb-4 border-b pb-2 border-gray-100">Before the Exam</h4>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Download the admit card.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Check exam centre, date, time.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Complete previous-class syllabus.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Practise MCQs & full-length mock tests.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Prepare OMR answering strategy.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-black text-lg text-brand-dark mb-4 border-b pb-2 border-gray-100">After the Exam</h4>
                <ul className="space-y-3 text-sm text-gray-700 font-medium">
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Check result and merit list.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Prepare original documents.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Attend document verification.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Complete admission within deadline.</li>
                  <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 rounded text-[#7280DE] focus:ring-[#7280DE]" /> Complete hostel formalities.</li>
                </ul>
              </div>

            </div>
          </GradientCard>
        </section>

        {/* 18. Websites */}
        <section>
          <SectionTitle number="18" title="Official Websites & Updates" />
          <GradientCard color="blue" icon={Globe}>
            <p className="mb-6 font-medium text-gray-700">For the latest and final information, always check the official sources:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <a href="https://oav.edu.in" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#7280DE] text-[#7280DE] px-4 py-4 rounded-xl font-black text-center hover:bg-[#7280DE] hover:text-white transition-all shadow-sm">oav.edu.in</a>
              <a href="https://bseodisha.ac.in" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#7280DE] text-[#7280DE] px-4 py-4 rounded-xl font-black text-center hover:bg-[#7280DE] hover:text-white transition-all shadow-sm">bseodisha.ac.in</a>
              <a href="https://oav.edu.in/notifications.php?GROUP_CODE=OAVS" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#7280DE] text-[#7280DE] px-4 py-4 rounded-xl font-black text-center hover:bg-[#7280DE] hover:text-white transition-all shadow-sm">OAV Notifications</a>
            </div>
            <p className="text-sm bg-yellow-50 p-4 rounded-xl text-yellow-800 border border-yellow-200 font-medium">The official notification should be treated as the final authority for the 2027 exam date, application dates, fees, eligibility changes and other admission rules.</p>
          </GradientCard>
        </section>

        {/* 19. Confirmed vs Expected */}
        <section>
          <SectionTitle number="19" title="What Is Confirmed vs What Is Expected?" />
          <GradientCard color="multi">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-black text-xl text-green-700 mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6" /> Confirmed</h4>
                <p className="text-xs text-green-600 mb-4 bg-green-50 px-2 py-1 rounded inline-block font-bold border border-green-200">Based on Official Guidelines</p>
                <ul className="space-y-3 text-sm font-medium text-gray-700">
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Odisha permanent residence requirement</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Class-wise eligibility framework</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Native-block application rule</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Online application process</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> OMR-based examination</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Bilingual examination</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> No negative marking</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Reservation provisions</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Required documents</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Free tuition</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-green-500 rounded-full mt-1.5" /> Applicable transfer rules</li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xl text-brand-purple mb-4 flex items-center gap-2"><Clock className="w-6 h-6" /> Expected for 2027</h4>
                <p className="text-xs text-[#7280DE] mb-4 bg-[#7280DE]/10 px-2 py-1 rounded inline-block font-bold border border-[#7280DE]/20">Await Official Notification</p>
                <ul className="space-y-3 text-sm font-medium text-gray-700 mb-6">
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact notification date</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact application dates</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact exam date</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact result date</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact application fee</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Exact 2027 vacancy details</li>
                  <li className="flex gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full mt-1.5" /> Final 2027 admission schedule</li>
                </ul>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm text-brand-dark font-bold">
                  As of 14 September 2026, the 2027 notification has not been officially released.
                </div>
              </div>
            </div>
          </GradientCard>
        </section>

        {/* 20. 10 Things to Know */}
        <section>
          <SectionTitle number="20" title="The 10 Things Every OAV Aspirant Should Know" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">1. Check eligibility first.</strong>
              <p className="text-sm text-gray-600">Your age, residence and class eligibility matter.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">2. Apply to the correct OAV.</strong>
              <p className="text-sm text-gray-600">The native residential block rule is important.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">3. Study previous class syllabus.</strong>
              <p className="text-sm text-gray-600">For Class VI, prepare Class V.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">4. Know the exam pattern.</strong>
              <p className="text-sm text-gray-600">Class VI: 60 questions, 60 marks, 2 hours.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">5. Classes VII–IX differ.</strong>
              <p className="text-sm text-gray-600">100 questions, 100 marks, 3 hours.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">6. No negative marking.</strong>
              <p className="text-sm text-gray-600">Attempt every question carefully.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">7. Keep documents ready early.</strong>
              <p className="text-sm text-gray-600">Do not wait until the application deadline.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">8. Admission is merit-based.</strong>
              <p className="text-sm text-gray-600">Eligibility alone does not guarantee selection.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">9. Lateral entry depends on seats.</strong>
              <p className="text-sm text-gray-600">Classes VII–IX do not have the same availability as Class VI.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#7280DE]/30 transition-colors">
              <strong className="text-brand-purple block text-lg mb-1">10. Follow official updates.</strong>
              <p className="text-sm text-gray-600">The 2027 dates are currently expected, not final.</p>
            </div>
          </div>
        </section>

        {/* Final Disclaimer */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 md:p-12 rounded-[32px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 tracking-tight">Important Notice</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6 text-lg leading-relaxed">
              OAV Admission 2027 notification is yet to be officially released. The information marked "Expected" is based on the previous admission cycle and should be used for planning and preparation only. Students and parents should verify the final details from the official OAVS/BSE Odisha notification when it is published.
            </p>
            <p className="text-sm font-bold text-gray-400 bg-white/10 inline-block px-4 py-2 rounded-full border border-white/10">Last updated: 14 September 2026</p>
          </div>
        </div>

      </main>
      
      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Oav2027Page;
