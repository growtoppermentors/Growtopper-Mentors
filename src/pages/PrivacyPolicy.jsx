import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you submit a request to join our program, we collect the following information:
• Student's name, class, school, and board of education
• Parent/guardian name and mobile number
• Email address (for OTP verification and communication)
• Preferred call date and time slot
This information is collected solely to facilitate onboarding and program delivery.`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information collected for the following purposes:
• To contact you regarding your application and program enrollment
• To personalize the mentor-student experience
• To send program updates, schedules, and progress reports via email or WhatsApp
• To improve our services based on feedback
• To comply with legal obligations under applicable Indian law
We do not sell, rent, or share your personal data with third parties for marketing purposes.`
    },
    {
      title: '3. Data Storage & Security',
      content: `All data is stored securely. We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. Data is stored on servers within India or with providers compliant with Indian data protection laws.`
    },
    {
      title: '4. Data Retention',
      content: `We retain your personal data for as long as necessary to deliver the program and meet legal obligations. Upon request, we will delete your data within 30 days, except where retention is required by law.`
    },
    {
      title: '5. Children\'s Privacy',
      content: `Growtopper serves students in Grades 6–12. All data is collected from parents or legal guardians on behalf of minor students. We do not knowingly collect data directly from children under 18 without verified parental consent. By submitting the application form, parents confirm they are providing consent on behalf of their child.`
    },
    {
      title: '6. Your Rights',
      content: `Under applicable Indian law, you have the right to:
• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to legal retention requirements)
• Withdraw consent at any time by contacting us
To exercise these rights, email us at: privacy@growtopper.app`
    },
    {
      title: '7. Cookies & Analytics',
      content: `Our website may use cookies and basic analytics tools (such as Google Analytics) to understand user behavior and improve our service. No personally identifiable information is collected through cookies. You may disable cookies through your browser settings.`
    },
    {
      title: '8. Third-Party Services',
      content: `We may use trusted third-party platforms (such as email service providers or CRM tools) to facilitate program delivery and communication. These parties are bound by confidentiality obligations and may not use your data for any other purpose.`
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this Privacy Policy periodically. Any material changes will be communicated via email or prominently displayed on our website. Continued use of our services after such changes constitutes your acceptance of the updated policy.`
    },
    {
      title: '10. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:
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
            <Shield className="w-7 h-7 text-brand-purple" />
          </div>
          <h1 className="text-[36px] md:text-[48px] font-black text-brand-dark leading-tight tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-gray-500 font-medium text-[15px]">Effective Date: September 2025 &nbsp;•&nbsp; Applies to: growtopper.app</p>
          <div className="mt-4 p-4 bg-brand-purple/5 border border-brand-purple/15 rounded-2xl">
            <p className="text-brand-dark font-semibold text-[14px] leading-relaxed">
              At Growtopper Education, we are committed to protecting the privacy and personal data of our users — especially parents and students. This policy explains how we collect, use, and safeguard your information in accordance with applicable Indian laws including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
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
