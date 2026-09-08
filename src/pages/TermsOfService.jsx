import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By registering for, accessing, or using any services provided by Growtopper Education ("Growtopper," "we," "our"), you ("Parent," "Guardian," "User") agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
These Terms apply to the 30-Day Growth Challenge and all associated mentorship programs.`
    },
    {
      title: '2. Program Description',
      content: `Growtopper is a mentor-led student growth platform designed for school students in Grades 6–12. The 30-Day Growth Challenge is a structured, invite-only program covering academics, essential life skills, and personal development. It is not a replacement for school, tuition, or formal coaching.`
    },
    {
      title: '3. Eligibility',
      content: `• The program is open to students in Grades 6–12 residing in India.
• Enrollment is invite-only and subject to availability.
• A parent or legal guardian must submit the application on behalf of the student.
• By submitting the form, you confirm that all details provided are accurate and that you are the parent/guardian of the student.`
    },
    {
      title: '4. Fees, Payment & Refunds',
      content: `• Program fees, if applicable, will be communicated clearly before enrollment confirmation.
• Fees are payable as specified in the enrollment communication.
• Refund Policy: Refund requests must be raised within 3 days of program commencement. No refunds will be issued after the 3-day window or once more than 20% of the program has been delivered.
• Growtopper reserves the right to modify fees for future cohorts with prior notice.`
    },
    {
      title: '5. User Responsibilities',
      content: `As a parent/guardian, you agree to:
• Ensure your child's regular and sincere participation in program sessions.
• Provide accurate information during registration.
• Not share program content, materials, or mentor communications with third parties.
• Treat mentors and staff with respect at all times.
• Monitor your child's engagement in the program and maintain open communication with the assigned mentor.`
    },
    {
      title: '6. Intellectual Property',
      content: `All content, study materials, frameworks, templates, and resources provided by Growtopper are the exclusive intellectual property of Growtopper Education. You may not copy, reproduce, distribute, or sell any program content without prior written permission. Violation may result in immediate removal from the program without refund.`
    },
    {
      title: '7. Results & No Guarantee Disclaimer',
      content: `Growtopper provides a structured system, accountability, and quality mentorship. However, we do not guarantee specific academic results, marks, or career outcomes. Growth depends on the student's consistent effort and participation. Testimonials shared on our platform reflect individual experiences and are not a guarantee of similar results for all students.`
    },
    {
      title: '8. Privacy & Data',
      content: `Your personal data is handled in accordance with our Privacy Policy, which forms an integral part of these Terms. By accepting these Terms, you also agree to our Privacy Policy.`
    },
    {
      title: '9. Termination',
      content: `Growtopper reserves the right to remove a student from the program at any time if:
• There is evidence of fraudulent registration.
• The student or parent engages in abusive or disrespectful behavior toward mentors or staff.
• The student is consistently absent or unresponsive for more than 7 consecutive days without communication.
In cases of termination due to policy violations, no refund will be issued.`
    },
    {
      title: '10. Limitation of Liability',
      content: `To the fullest extent permitted under Indian law, Growtopper Education shall not be liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability for any claim arising out of these Terms shall not exceed the fees paid by you for the specific program in question.`
    },
    {
      title: '11. Governing Law & Dispute Resolution',
      content: `These Terms shall be governed by the laws of India. Any disputes arising out of or relating to these Terms shall first be attempted to be resolved through mutual discussion. If unresolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the courts in India.`
    },
    {
      title: '12. Changes to Terms',
      content: `We may update these Terms from time to time. Material changes will be communicated via email or on our website. Continued use of our services after changes are posted constitutes your acceptance of the updated Terms.`
    },
    {
      title: '13. Contact',
      content: `For any questions regarding these Terms, contact us at:
Growtopper Education
Email: Support@growtopper.app
Phone: +91 78539 88799
Address: Bhubaneswar, India`
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE]">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-brand-dark font-black text-[17px]">
            <div className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            growtopper
          </a>
          <a href="/" className="flex items-center gap-1.5 text-gray-500 hover:text-brand-purple text-[14px] font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
            <FileText className="w-7 h-7 text-brand-purple" />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-black text-brand-dark leading-tight tracking-tight mb-3">Terms of Service</h1>
          <p className="text-gray-500 font-medium text-[15px]">Effective Date: September 2025 &nbsp;•&nbsp; Applies to: growtopper.app</p>
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <p className="text-emerald-800 font-semibold text-[14px] leading-relaxed">
              These Terms of Service govern your use of Growtopper Education's programs and services. By enrolling or using our platform, you agree to these terms. These terms are designed to be fair, transparent, and mutually beneficial — protecting both the student's growth journey and Growtopper's ability to deliver quality education in India.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <h2 className="text-[18px] font-black text-brand-dark mb-3">{sec.title}</h2>
              <p className="text-gray-600 text-[14px] sm:text-[15px] font-medium leading-relaxed whitespace-pre-line">{sec.content}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-[13px] mt-12">© {new Date().getFullYear()} Growtopper Education. All rights reserved.</p>
      </div>
    </div>
  );
}
