import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import {
  Calendar,
  CheckCircle,
  FileText,
  AlertCircle,
  Info,
  GraduationCap,
  ClipboardCheck,
  MapPin
} from 'lucide-react';

const Oav2027Page = ({ onRequestInvite }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Banner Section */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full mb-10 overflow-hidden rounded-2xl shadow-xl border border-gray-100">
          <img 
            src="/images/oav2027-banner.png" 
            alt="OAV Admission 2027: Complete Guide for Students and Parents" 
            className="w-full h-auto object-cover" 
          />
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">OAV Admission Process & Eligibility 2027</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the Odisha Adarsha Vidyalaya Entrance Test (OAVET) 2027. 
            Official guidelines, dates, eligibility matrix, and preparation strategies in one place.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-yellow-700 bg-yellow-50 px-4 py-2 rounded-full font-medium border border-yellow-200">
            <Info className="w-5 h-5" />
            Note: 2027 expected timeline based on 2026 patterns. Official notification expected November 2026.
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">
        
        {/* Quick Summary Grid */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-brand-purple" />
            <h2 className="text-2xl font-bold text-brand-dark">Quick Summary (2027 Expectations)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 font-medium text-sm">Application Period</h3>
              <p className="text-xl font-bold text-brand-dark mt-1">Nov – Dec 2026</p>
              <p className="text-sm text-gray-400 mt-2">Expected</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 font-medium text-sm">Entrance Exam Date</h3>
              <p className="text-xl font-bold text-brand-dark mt-1">January 2027</p>
              <p className="text-sm text-gray-400 mt-2">OMR Based (Expected)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 font-medium text-sm">Result Declaration</h3>
              <p className="text-xl font-bold text-brand-dark mt-1">February 2027</p>
              <p className="text-sm text-gray-400 mt-2">Expected</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-gray-500 font-medium text-sm">Final Admission</h3>
              <p className="text-xl font-bold text-brand-dark mt-1">April – May 2027</p>
              <p className="text-sm text-gray-400 mt-2">Expected</p>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-brand-purple" />
            <h2 className="text-2xl font-bold text-brand-dark">Eligibility Criteria 2027</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">A. Basic Eligibility</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-6 h-6 text-brand-purple flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Odisha Domicile:</strong> 
                  <span className="text-gray-600 ml-2">Permanent resident of Odisha only (mandatory).</span>
                </div>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-brand-purple flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Current OAV Students:</strong> 
                  <span className="text-gray-600 ml-2">Already enrolled in any OAV = NOT eligible.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <GraduationCap className="w-6 h-6 text-brand-purple flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">School Type:</strong> 
                  <span className="text-gray-600 ml-2">Must be studying in Government, CBSE, ICSE, or recognized Odia-medium private school (Certificate of Recognition required).</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">B. Class-wise Age & Eligibility (2027–28 Expected)</h3>
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-light text-gray-700 text-sm">
                  <th className="p-4 rounded-tl-xl font-semibold border-b">Class</th>
                  <th className="p-4 font-semibold border-b">Age Limit (As on 31 Mar 2027)</th>
                  <th className="p-4 font-semibold border-b">Date of Birth Range</th>
                  <th className="p-4 rounded-tr-xl font-semibold border-b">Current Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">VI (Primary)</td>
                  <td className="p-4">10 – 12 years</td>
                  <td className="p-4">01 Apr 2014 – 31 Mar 2017</td>
                  <td className="p-4">Continuing Class V or VI</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">VII (Lateral)</td>
                  <td className="p-4">11 – 13 years</td>
                  <td className="p-4">01 Apr 2013 – 31 Mar 2016</td>
                  <td className="p-4">Continuing Class VI or VII</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">VIII (Lateral)</td>
                  <td className="p-4">12 – 14 years</td>
                  <td className="p-4">01 Apr 2012 – 31 Mar 2015</td>
                  <td className="p-4">Continuing Class VII or VIII</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-bold text-gray-900">IX (Lateral)</td>
                  <td className="p-4">13 – 15 years</td>
                  <td className="p-4">01 Apr 2011 – 31 Mar 2014</td>
                  <td className="p-4">Continuing Class VIII or IX</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-3">* PwD Relaxation: Upper age limit relaxed by 2 years for candidates with 40%+ disability.</p>
          </div>
        </section>

        {/* Exam Pattern & Syllabus */}
        <section className="bg-brand-dark rounded-3xl p-8 shadow-xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <ClipboardCheck className="w-8 h-8 text-brand-purple" />
            <h2 className="text-2xl font-bold">Exam Pattern & Syllabus 2027</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-brand-purple mb-4">Class VI (OAVET)</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>English (Class V Level)</span> <span className="font-bold">15 Marks</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Mathematics (Class V Level)</span> <span className="font-bold">15 Marks</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Science (Class V Level)</span> <span className="font-bold">15 Marks</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Social Science (Class V Level)</span> <span className="font-bold">15 Marks</span></li>
                <li className="flex justify-between text-white font-bold pt-2 text-lg mt-4"><span>Total</span> <span>60 Marks (2 Hrs)</span></li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-brand-purple mb-4">Classes VII, VIII, IX</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>English</span> <span className="font-bold">20 Marks</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Odia</span> <span className="font-bold">20 Marks</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Mathematics, Science, SST</span> <span className="font-bold">60 Marks</span></li>
                <li className="flex justify-between text-white font-bold pt-2 text-lg mt-8"><span>Total</span> <span>100 Marks (3 Hrs)</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="bg-brand-purple/20 text-brand-purple px-4 py-2 rounded-full text-sm font-bold border border-brand-purple/30">OMR Based (Offline)</span>
            <span className="bg-brand-purple/20 text-brand-purple px-4 py-2 rounded-full text-sm font-bold border border-brand-purple/30">No Negative Marking</span>
            <span className="bg-brand-purple/20 text-brand-purple px-4 py-2 rounded-full text-sm font-bold border border-brand-purple/30">Bilingual (Odia & English)</span>
          </div>
        </section>

        {/* Admission Process Step-by-Step */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
           <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-brand-purple" />
            <h2 className="text-2xl font-bold text-brand-dark">Admission Process</h2>
          </div>
          
          <div className="relative border-l-2 border-brand-purple/20 ml-4 space-y-8 pb-4">
            
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-purple"></div>
              <h3 className="text-lg font-bold text-gray-900">1. Official Notification</h3>
              <p className="text-gray-600 mt-1">Released on <span className="font-medium">oav.edu.in</span> and <span className="font-medium">bseodisha.ac.in</span> (Expected Nov 2026).</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-purple"></div>
              <h3 className="text-lg font-bold text-gray-900">2. Online Application</h3>
              <p className="text-gray-600 mt-1">Parents apply online via BSE portal. Upload photo, signature, Residential & Caste certificates.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-purple"></div>
              <h3 className="text-lg font-bold text-gray-900">3. Admit Card Download</h3>
              <p className="text-gray-600 mt-1">Available online in late December containing exam centre details.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-purple"></div>
              <h3 className="text-lg font-bold text-gray-900">4. Entrance Examination (OAVET)</h3>
              <p className="text-gray-600 mt-1">Offline OMR-based test held across designated centers in January 2027.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-purple"></div>
              <h3 className="text-lg font-bold text-gray-900">5. Result Declaration & Verification</h3>
              <p className="text-gray-600 mt-1">Scores published district-wise (February 2027). Selected candidates report with original documents.</p>
            </div>

          </div>
        </section>

        {/* Document Checklist & Reservation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Document Checklist</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Birth Certificate</strong> (Original + Photocopy)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Residential Certificate</strong> (Sarpanch/Tahsildar)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Transfer Certificate (TC)</strong> from previous school</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Aadhaar Card</strong> of student and parents</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Caste/PwD Certificate</strong> (If applicable)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Certificate of Recognition (CoR)</strong> (For private school students only)</span>
              </li>
            </ul>
          </section>

          <section className="bg-brand-purple/5 rounded-3xl p-8 border border-brand-purple/10">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">Reservation Policy</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900">SC / ST Category</p>
                <p className="text-sm text-gray-600">Reserved as per the specific block's population percentage.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900">Girls Quota (Horizontal)</p>
                <p className="text-sm text-gray-600">50% seats reserved for girls within every category.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-bold text-gray-900">PwD Category</p>
                <p className="text-sm text-gray-600">4% horizontal reservation for 40%+ disability.</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Note: Unfilled reserved seats are transferred sequentially according to state rules.</p>
          </section>

        </div>

        {/* Warning Section */}
        <section className="bg-red-50 rounded-3xl p-8 border border-red-100 flex flex-col md:flex-row gap-6 items-center">
          <div className="bg-red-100 p-4 rounded-full flex-shrink-0">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Common Reasons for Rejection</h3>
            <p className="text-red-800 text-sm mb-3">Ensure your application is flawless to prevent disqualification:</p>
            <ul className="text-red-800 text-sm list-disc pl-5 space-y-1">
              <li>Applying to an OAV outside your native residential block.</li>
              <li>Missing or invalid Certificate of Recognition (CoR) for private school students.</li>
              <li>Date of birth falling outside the strict 10–12 year age bracket for Class VI.</li>
              <li>Failing to produce original documents during the physical verification stage.</li>
            </ul>
          </div>
        </section>

        {/* Official Links */}
        <section className="text-center pb-8 border-t border-gray-200 pt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Official Verification Sources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://oav.edu.in" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline font-medium">OAVS Official Website</a>
            <span className="text-gray-300">|</span>
            <a href="https://bseodisha.ac.in" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline font-medium">BSE Odisha Portal</a>
            <span className="text-gray-300">|</span>
            <a href="https://oav.edu.in/notifications.php?GROUP_CODE=OAVS" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline font-medium">Official Notifications</a>
          </div>
        </section>

      </main>
      
      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default Oav2027Page;

