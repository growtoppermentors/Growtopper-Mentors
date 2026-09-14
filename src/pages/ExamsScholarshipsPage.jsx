import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Building, 
  Calculator, 
  Shield, 
  Star, 
  Calendar,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

const ExamsScholarshipsPage = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('exams');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const exams = [
    {
      id: 'oav2027',
      title: 'Odisha Adarsha Vidyalaya (OAV) 2027',
      type: 'School Entrance',
      status: 'Upcoming', 
      eligibility: 'Class VI to IX',
      examDate: 'Expected Feb 2027',
      features: ['Free Premium Education', 'CBSE Board', 'English Medium'],
      link: '/oav2027',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'jnv2027',
      title: 'Jawahar Navodaya Vidyalaya (JNV) 2027',
      type: 'Lateral Entry',
      status: 'Upcoming',
      eligibility: 'Class IX & XI',
      examDate: 'Expected Feb 2027',
      features: ['Fully Residential', 'CBSE Board', 'Co-educational'],
      link: '/jnv2027',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      id: 'sainik2027',
      title: 'All India Sainik School (AISSEE) 2027',
      type: 'Defence School',
      status: 'Coming Soon',
      eligibility: 'Class VI & IX',
      examDate: 'Jan 2027',
      features: ['Military Training', 'NDA Preparation', 'Discipline Focus'],
      link: '#',
      icon: Shield,
      color: 'green'
    }
  ];

  const scholarships = [
    {
      id: 'nmms',
      title: 'National Means-cum-Merit Scholarship (NMMS)',
      type: 'Govt. Scholarship',
      status: 'Coming Soon',
      eligibility: 'Class VIII (Govt Schools)',
      examDate: 'Nov 2026',
      features: ['?12,000/year Support', 'Merit + Means Base', 'Classes 9 to 12'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'pmst',
      title: 'Pathani Samanta Math Scholarship (PMST)',
      type: 'State Scholarship',
      status: 'Coming Soon',
      eligibility: 'Class VI, IX, XI',
      examDate: 'Dec 2026',
      features: ['Math Talent Search', 'Financial Reward', 'State Recognition'],
      link: '#',
      icon: Calculator,
      color: 'purple'
    },
    {
      id: 'ntse',
      title: 'National Talent Search Exam (NTSE)',
      type: 'National Scholarship',
      status: 'Coming Soon',
      eligibility: 'Class X',
      examDate: 'Expected 2027',
      features: ['Prestigious Tag', 'Monthly Stipend', 'UG to PhD Support'],
      link: '#',
      icon: Star,
      color: 'blue'
    }
  ];

  const data = activeTab === 'exams' ? exams : scholarships;

  const getColorStyles = (color) => {
    switch (color) {
      case 'purple': return { bg: 'bg-[#5B10FF]/10', text: 'text-[#5B10FF]', border: 'border-[#5B10FF]/20', badge: 'bg-[#5B10FF] text-white' };
      case 'blue': return { bg: 'bg-blue-100/50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-500 text-white' };
      case 'green': return { bg: 'bg-green-100/50', text: 'text-green-600', border: 'border-green-200', badge: 'bg-green-500 text-white' };
      case 'orange': return { bg: 'bg-orange-100/50', text: 'text-orange-600', border: 'border-orange-200', badge: 'bg-orange-500 text-white' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200', badge: 'bg-gray-500 text-white' };
    }
  };

  const getStatusBadge = (status) => {
    if (status === 'Upcoming') {
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200"><Calendar className="w-3 h-3" /> Upcoming</span>;
    }
    if (status === 'Coming Soon') {
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold border border-amber-200"><Clock className="w-3 h-3" /> Coming Soon</span>;
    }
    if (status === 'Active') {
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200"><CheckCircle className="w-3 h-3" /> Active Now</span>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#5B10FF]/10 text-[#5B10FF] font-bold text-sm tracking-wide mb-6 border border-[#5B10FF]/20 shadow-sm">
          Exams & Scholarships Hub
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight mb-6 leading-tight">
          Discover Your Next <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B10FF] to-[#B28BFF]">Big Opportunity</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Your centralized hub for the most prestigious school-level entrance exams and government scholarships. Stay ahead with our comprehensive guides.
        </p>

        {/* Custom Toggle Switch */}
        <div className="inline-flex items-center p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm mx-auto mb-16 relative w-full max-w-md sm:w-auto flex-col sm:flex-row">
          <button 
            onClick={() => setActiveTab('exams')}
            className={`w-full sm:w-48 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 z-10 flex items-center justify-center gap-2 ${activeTab === 'exams' ? 'bg-[#5B10FF] text-white shadow-md shadow-[#5B10FF]/25' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
          >
            <BookOpen className={`w-5 h-5 ${activeTab === 'exams' ? 'text-white' : 'text-gray-400'}`} />
            Entrance Exams
          </button>
          <button 
            onClick={() => setActiveTab('scholarships')}
            className={`w-full sm:w-48 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 z-10 flex items-center justify-center gap-2 ${activeTab === 'scholarships' ? 'bg-[#5B10FF] text-white shadow-md shadow-[#5B10FF]/25' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
          >
            <Award className={`w-5 h-5 ${activeTab === 'scholarships' ? 'text-white' : 'text-gray-400'}`} />
            Scholarships
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {data.map((item) => {
            const Icon = item.icon;
            const colors = getColorStyles(item.color);
            const isComingSoon = item.status === 'Coming Soon';

            return (
              <div key={item.id} className="bg-white rounded-[28px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(91,16,255,0.08)] transition-all duration-300 flex flex-col group overflow-hidden relative">
                {/* Header Area */}
                <div className={`h-24 w-full ${colors.bg} flex items-start justify-between p-6 relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
                  {getStatusBadge(item.status)}
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border ${colors.border} z-10`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{item.type}</div>
                  <h3 className="text-xl font-black text-brand-dark mb-4 group-hover:text-[#5B10FF] transition-colors">{item.title}</h3>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="font-medium">{item.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="font-medium">{item.examDate}</span>
                    </div>
                  </div>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[11px] font-bold rounded-lg whitespace-nowrap">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {isComingSoon ? (
                    <button disabled className="w-full py-3.5 rounded-xl bg-gray-50 text-gray-400 font-bold text-sm border border-gray-200 cursor-not-allowed">
                      Guide Coming Soon
                    </button>
                  ) : (
                    <Link to={item.link} className="w-full py-3.5 rounded-xl bg-white border-2 border-[#5B10FF] text-[#5B10FF] hover:bg-[#5B10FF] hover:text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 group/btn">
                      View Complete Guide
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
};

export default ExamsScholarshipsPage;
