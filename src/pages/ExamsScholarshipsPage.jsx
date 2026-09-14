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
  ArrowRight,
  Zap,
  Sparkles,
  Filter
} from 'lucide-react';

const ExamsScholarshipsPage = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('exams');
  const [examFilter, setExamFilter] = useState('All');
  const [scholarshipFilter, setScholarshipFilter] = useState('All');

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

  const examFilters = ['All', 'School Entrance', 'Lateral Entry', 'Defence School'];
  const scholarshipFilters = ['All', 'Govt. Scholarship', 'State Scholarship', 'National Scholarship'];

  const activeData = activeTab === 'exams' ? exams : scholarships;
  const activeFilters = activeTab === 'exams' ? examFilters : scholarshipFilters;
  const currentFilter = activeTab === 'exams' ? examFilter : scholarshipFilter;
  const setCurrentFilter = activeTab === 'exams' ? setExamFilter : setScholarshipFilter;

  const displayedData = activeData.filter(item => currentFilter === 'All' || item.type === currentFilter);

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
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 shadow-sm"><Calendar className="w-3 h-3" /> Upcoming</span>;
    }
    if (status === 'Coming Soon') {
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold border border-amber-200 shadow-sm"><Clock className="w-3 h-3" /> Coming Soon</span>;
    }
    if (status === 'Active') {
      return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 shadow-sm"><CheckCircle className="w-3 h-3" /> Active Now</span>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Section */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Decorative Blobs */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#5B10FF]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5B10FF]/10 to-[#B28BFF]/10 text-[#5B10FF] font-black text-[13px] uppercase tracking-widest mb-6 border border-[#5B10FF]/20 shadow-sm">
              <Sparkles className="w-4 h-4" /> Hub 2026-2027
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark tracking-tight mb-6 leading-tight">
              Unlock Your Child's <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B10FF] to-[#8C52FF]">True Potential</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Discover highly curated school-level entrance exams and prestigious government scholarships designed for student growth. Well-researched, structured, and always updated.
            </p>

            {/* Premium Sliding Toggle */}
            <div className="relative w-full max-w-sm mx-auto bg-gray-50/80 backdrop-blur-md p-1.5 rounded-2xl sm:rounded-full flex items-center justify-between border border-gray-200/60 shadow-inner">
              {/* Sliding Indicator */}
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#5B10FF] rounded-xl sm:rounded-full shadow-md transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${activeTab === 'exams' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`}
              />
              <button 
                onClick={() => { setActiveTab('exams'); setExamFilter('All'); }}
                className={`relative z-10 flex-1 py-3 text-[14px] sm:text-[15px] font-black transition-colors flex justify-center items-center gap-2 ${activeTab === 'exams' ? 'text-white' : 'text-gray-400 hover:text-gray-900'}`}
              >
                <BookOpen className={`w-4 h-4 ${activeTab === 'exams' ? 'text-white' : 'text-gray-400'}`} /> 
                Exams
              </button>
              <button 
                onClick={() => { setActiveTab('scholarships'); setScholarshipFilter('All'); }}
                className={`relative z-10 flex-1 py-3 text-[14px] sm:text-[15px] font-black transition-colors flex justify-center items-center gap-1.5 ${activeTab === 'scholarships' ? 'text-white' : 'text-gray-400 hover:text-gray-900'}`}
              >
                <Award className={`w-4 h-4 ${activeTab === 'scholarships' ? 'text-white' : 'text-gray-400'}`} /> 
                Scholarships 
                <Zap className={`w-3.5 h-3.5 ${activeTab === 'scholarships' ? 'text-amber-300 fill-amber-300' : 'text-amber-400 fill-amber-400'}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Content Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Dynamic Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-6 mb-4 sm:mb-6 justify-start lg:justify-center px-2">
          <div className="hidden sm:flex items-center gap-2 text-gray-400 mr-2 shrink-0">
            <Filter className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Filter By:</span>
          </div>
          {activeFilters.map(filter => {
            const isActive = currentFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] transition-all duration-300 border ${
                  isActive 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md transform scale-[1.02]' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 shadow-sm'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {displayedData.length > 0 ? (
            displayedData.map((item) => {
              const Icon = item.icon;
              const colors = getColorStyles(item.color);
              const isComingSoon = item.status === 'Coming Soon';

              return (
                <div key={item.id} className="bg-white rounded-[28px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(91,16,255,0.08)] transition-all duration-300 flex flex-col group overflow-hidden relative transform hover:-translate-y-1">
                  {/* Header Area */}
                  <div className={`h-24 w-full ${colors.bg} flex items-start justify-between p-6 relative overflow-hidden`}>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
                    {getStatusBadge(item.status)}
                    <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border ${colors.border} z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <div className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">{item.type}</div>
                    <h3 className="text-[20px] leading-tight font-black text-brand-dark mb-5 group-hover:text-[#5B10FF] transition-colors">{item.title}</h3>
                    
                    <div className="space-y-3.5 mb-8 flex-1">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                          <GraduationCap className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="font-semibold">{item.eligibility}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                          <Calendar className="w-4 h-4 text-gray-400" />
                        </div>
                        <span className="font-semibold">{item.examDate}</span>
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
                      <button disabled className="w-full py-4 rounded-xl bg-gray-50 text-gray-400 font-bold text-sm border border-gray-200 cursor-not-allowed flex justify-center items-center gap-2">
                        <Clock className="w-4 h-4" /> Guide Coming Soon
                      </button>
                    ) : (
                      <Link to={item.link} className="w-full py-4 rounded-xl bg-white border-2 border-[#5B10FF] text-[#5B10FF] hover:bg-[#5B10FF] hover:text-white font-black text-[14px] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md hover:shadow-[#5B10FF]/25">
                        View Complete Guide
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                <Filter className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No matches found</h3>
              <p className="text-gray-500 text-sm">Try selecting a different filter category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer onRequestInvite={onRequestInvite} />
      
      {/* Hide Scrollbar Style Inject */}
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

export default ExamsScholarshipsPage;
