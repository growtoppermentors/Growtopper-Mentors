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
      features: ['Free Education', 'CBSE Board', 'English Medium'],
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
      status: 'Active',
      eligibility: 'Class VI & IX',
      examDate: 'Jan 2027',
      features: ['Military Training', 'NDA Prep', 'Discipline'],
      link: '/aissee2027',
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
      eligibility: 'Class VIII',
      examDate: 'Nov 2026',
      features: ['?12,000/year', 'Govt Schools', 'Merit + Means'],
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
      features: ['Math Talent', 'Financial Reward', 'Certificate'],
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
      features: ['Prestigious Tag', 'Monthly Stipend', 'PhD Support'],
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
      case 'purple': return { bg: 'bg-gradient-to-b from-[#F9F7FF] to-white', iconBg: 'bg-[#F4F1FF]', text: 'text-[#5B10FF]', border: 'border-[#5B10FF]/15', hoverBorder: 'hover:border-[#5B10FF]/30' };
      case 'blue': return { bg: 'bg-gradient-to-b from-[#F5FAFF] to-white', iconBg: 'bg-[#EBF4FF]', text: 'text-blue-600', border: 'border-blue-500/15', hoverBorder: 'hover:border-blue-500/30' };
      case 'green': return { bg: 'bg-gradient-to-b from-[#F4FCF7] to-white', iconBg: 'bg-[#E6F8EC]', text: 'text-green-600', border: 'border-green-500/15', hoverBorder: 'hover:border-green-500/30' };
      case 'orange': return { bg: 'bg-gradient-to-b from-[#FFF8F4] to-white', iconBg: 'bg-[#FFEDE1]', text: 'text-orange-600', border: 'border-orange-500/15', hoverBorder: 'hover:border-orange-500/30' };
      default: return { bg: 'bg-gradient-to-b from-[#F9F9F9] to-white', iconBg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200', hoverBorder: 'hover:border-gray-300' };
    }
  };

  const getStatusBadge = (status) => {
    if (status === 'Upcoming') {
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100"><Calendar className="w-2.5 h-2.5" /> Upcoming</span>;
    }
    if (status === 'Coming Soon') {
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 text-[10px] font-bold border border-amber-100"><Clock className="w-2.5 h-2.5" /> Coming Soon</span>;
    }
    if (status === 'Active') {
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold border border-blue-100"><CheckCircle className="w-2.5 h-2.5" /> Active</span>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans allow-select">
      <Navbar onRequestInvite={onRequestInvite} />

      {/* Hero Section */}
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF4E6] rounded-[24px] sm:rounded-[32px] border border-orange-100/50 shadow-[0_8px_30px_rgba(249,115,22,0.04)] p-6 sm:p-10 relative overflow-hidden text-center max-w-4xl mx-auto">
          {/* Decorative Blobs */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-bold text-[11px] uppercase tracking-wider mb-5 border border-orange-200/50 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Hub 2026-2027
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight mb-4 leading-tight">
              Exam & Scholarship <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">for Student Growth</span>
            </h1>
            
            <p className="text-[14px] sm:text-[15px] text-gray-600 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Discover highly curated school-level entrance exams and prestigious government scholarships designed for student growth. Well-researched, structured, and updated.
            </p>

            {/* Premium Sliding Toggle */}
            <div className="relative w-full max-w-[340px] mx-auto bg-white/80 backdrop-blur-md p-1.5 rounded-xl sm:rounded-full flex items-center justify-between border border-orange-200/60 shadow-sm">
              {/* Sliding Indicator */}
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#5B10FF] rounded-lg sm:rounded-full shadow-sm transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${activeTab === 'exams' ? 'left-1.5' : 'left-[calc(50%+4.5px)]'}`}
              />
              <button 
                onClick={() => { setActiveTab('exams'); setExamFilter('All'); }}
                className={`relative z-10 flex-1 py-2.5 text-[13px] font-black transition-colors flex justify-center items-center gap-1.5 whitespace-nowrap ${activeTab === 'exams' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <BookOpen className={`w-3.5 h-3.5 ${activeTab === 'exams' ? 'text-white' : 'text-gray-400'}`} /> 
                Exams
              </button>
              <button 
                onClick={() => { setActiveTab('scholarships'); setScholarshipFilter('All'); }}
                className={`relative z-10 flex-1 py-2.5 text-[13px] font-black transition-colors flex justify-center items-center gap-1 whitespace-nowrap ${activeTab === 'scholarships' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <Award className={`w-3.5 h-3.5 ${activeTab === 'scholarships' ? 'text-white' : 'text-gray-400'}`} /> 
                Scholarships 
                <Zap className={`w-3 h-3 ${activeTab === 'scholarships' ? 'text-amber-300 fill-amber-300' : 'text-amber-400 fill-amber-400'}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Dynamic Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-4 mb-4 sm:mb-6 justify-start sm:justify-center px-1">
          <div className="hidden sm:flex items-center gap-1.5 text-gray-400 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Filter By:</span>
          </div>
          {activeFilters.map(filter => {
            const isActive = currentFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-bold text-[12px] transition-all duration-300 border ${
                  isActive 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-sm' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {displayedData.length > 0 ? (
            displayedData.map((item) => {
              const Icon = item.icon;
              const colors = getColorStyles(item.color);
              const isComingSoon = item.status === 'Coming Soon';

              return (
                <div key={item.id} className={`rounded-[20px] sm:rounded-[24px] border ${colors.border} ${colors.hoverBorder} ${colors.bg} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-5 group relative transform hover:-translate-y-1`}>
                  
                  {/* Header Area */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center border ${colors.border} shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    {getStatusBadge(item.status)}
                  </div>

                  {/* Title Area */}
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">{item.type}</div>
                  <h3 className="text-[17px] leading-snug font-black text-brand-dark mb-4 group-hover:text-brand-purple transition-colors line-clamp-2 min-h-[42px]">{item.title}</h3>
                  
                  {/* Info Points */}
                  <div className="space-y-2.5 mb-5 flex-1">
                    <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                        <GraduationCap className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="font-semibold">{item.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[13px] text-gray-600">
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                        <Calendar className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="font-semibold">{item.examDate}</span>
                    </div>
                  </div>

                  {/* Feature Tags (Compact) */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white border border-gray-100 text-gray-500 text-[10px] font-bold rounded-md whitespace-nowrap shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {isComingSoon ? (
                    <button disabled className="w-full py-3 rounded-xl bg-gray-50 text-gray-400 font-bold text-[13px] border border-gray-200 cursor-not-allowed flex justify-center items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Coming Soon
                    </button>
                  ) : (
                    <Link to={item.link} className="w-full py-3 rounded-xl bg-white border border-gray-200 text-brand-purple hover:bg-brand-purple hover:text-white hover:border-brand-purple font-black text-[13px] transition-all duration-300 flex items-center justify-center gap-1.5 group/btn shadow-sm">
                      View Guide
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-gray-100">
                <Filter className="w-5 h-5 text-gray-300" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">No matches found</h3>
              <p className="text-gray-500 text-[13px]">Try selecting a different filter category.</p>
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
