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
  Filter,
  ExternalLink
} from 'lucide-react';

const ExamsScholarshipsPage = ({ onRequestInvite }) => {
  const [activeTab, setActiveTab] = useState('exams');
  const [examFilter, setExamFilter] = useState('All');
  const [scholarshipFilter, setScholarshipFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Exams & Scholarships | Growtopper';
  }, []);

  const exams = [
    // --- NATIONAL LEVEL ---
    {
      id: 'jnvst',
      title: 'JNV Selection Test (JNVST)',
      type: 'National Level',
      status: 'Active',
      conductedBy: 'NVS (Ministry of Edu)',
      totalSchools: '661+ JNVs',
      classes: 'VI, IX, XI',
      examFreq: 'Annual (Nov-Dec)',
      fee: 'Free',
      website: 'navodaya.gov.in',
      features: ['75% Rural Quota', 'Free Residential'],
      link: '/jnv2027',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'aissee',
      title: 'All India Sainik School Exam (AISSEE)',
      type: 'Defence School',
      status: 'Active',
      conductedBy: 'NTA (Ministry of Def)',
      totalSchools: '102+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Jan)',
      fee: '₹850 (Gen), ₹700 (SC/ST)',
      website: 'aissee.nta.nic.in',
      features: ['Defence Focus', 'Medical Mandatory'],
      link: '/aissee2027',
      icon: Shield,
      color: 'green'
    },
    {
      id: 'rms-cet',
      title: 'Rashtriya Military School CET (RMS)',
      type: 'Defence School',
      status: 'Coming Soon',
      conductedBy: 'DGMS (Min of Defence)',
      totalSchools: '5 RMS Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Dec)',
      fee: '₹850 (Gen), ₹700 (SC/ST)',
      website: 'rashtriyamilitaryschools.edu.in',
      features: ['67% Defence Quota', 'Boys Only'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'emrsst-nat',
      title: 'National EMRS Selection Test',
      type: 'National Level',
      status: 'Coming Soon',
      conductedBy: 'NESTS (NTA)',
      totalSchools: '740+ Target Schools',
      classes: 'VI',
      examFreq: 'Annual (Feb-Mar)',
      fee: 'Free',
      website: 'nests.tribal.gov.in',
      features: ['100% ST Quota', 'Fully Free'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'shreshta',
      title: 'SHRESHTA NETS',
      type: 'National Level',
      status: 'Coming Soon',
      conductedBy: 'NTA (Min of Social Justice)',
      totalSchools: '100+ Top Pvt Schools',
      classes: 'IX, XI',
      examFreq: 'Annual (Dec)',
      fee: 'Free',
      website: 'shreshta.admissions.nic.in',
      features: ['SC/ST Focused', 'Fully Funded'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'kvs',
      title: 'Kendriya Vidyalaya Admission',
      type: 'National Level',
      status: 'Coming Soon',
      conductedBy: 'KVS (Ministry of Edu)',
      totalSchools: '1,260+ KVs',
      classes: 'I to XI',
      examFreq: 'Annual (Mar-Apr)',
      fee: 'Free',
      website: 'kvsangathan.nic.in',
      features: ['Priority System', 'Lottery Based'],
      link: '#',
      icon: GraduationCap,
      color: 'orange'
    },

    // --- STATE LEVEL (ODISHA) ---
    {
      id: 'oavet',
      title: 'Odisha Adarsha Vidyalaya (OAV)',
      type: 'State (Odisha)',
      status: 'Active',
      conductedBy: 'BSE Odisha + OAVS',
      totalSchools: '314 Schools',
      classes: 'VI, VII, VIII, IX, XI',
      examFreq: 'Annual (Jan)',
      fee: 'Nominal / Free',
      website: 'oav.edu.in',
      features: ['50% Girls Quota', 'Block Domicile'],
      link: '/oav2027',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'emrs-odisha',
      title: 'EMRS Selection Test (Odisha)',
      type: 'State (Odisha)',
      status: 'Coming Soon',
      conductedBy: 'ST & SC Dept, Odisha',
      totalSchools: '20+ EMRSs',
      classes: 'VI, VIII',
      examFreq: 'Annual (Feb-Mar)',
      fee: 'Free',
      website: 'stsc.odisha.gov.in',
      features: ['ST Students Only', 'CBSE Curriculum'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'kmrs-odisha',
      title: 'Kalinga Model Residential (KMRS)',
      type: 'State (Odisha)',
      status: 'Coming Soon',
      conductedBy: 'ST & SC Dept, Odisha',
      totalSchools: '10+ KMRSs',
      classes: 'VI, VIII',
      examFreq: 'Annual (Feb-Mar)',
      fee: 'Free',
      website: 'stsc.odisha.gov.in',
      features: ['SC/ST Focus', 'Free Residential'],
      link: '#',
      icon: Building,
      color: 'orange'
    },
    {
      id: 'bpav-odisha',
      title: 'Biju Patnaik Adarsha Vidyalaya',
      type: 'State (Odisha)',
      status: 'Coming Soon',
      conductedBy: 'ST & SC Dept, Odisha',
      totalSchools: '10+ BPAVs',
      classes: 'VI, VIII',
      examFreq: 'Annual (Feb-Mar)',
      fee: 'Free',
      website: 'stsc.odisha.gov.in',
      features: ['SC/ST Focus', 'CBSE Curriculum'],
      link: '#',
      icon: Building,
      color: 'blue'
    },

    // --- STATE LEVEL (AP/TS) ---
    {
      id: 'emrs-ap',
      title: 'AP EMRS CET (Andhra Pradesh)',
      type: 'State (AP/TS)',
      status: 'Coming Soon',
      conductedBy: 'APTWREIS',
      totalSchools: '100+ EMRSs',
      classes: 'VI, VIII',
      examFreq: 'Annual (Apr)',
      fee: 'Free',
      website: 'aptwgurukulam.ap.gov.in',
      features: ['ST Focus', 'Income Limit ₹2.5L'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'aprs',
      title: 'APRS 5th Class Admission (AP)',
      type: 'State (AP/TS)',
      status: 'Coming Soon',
      conductedBy: 'APREIS',
      totalSchools: '100+ AP Gurukulam',
      classes: 'V (Entry to VI)',
      examFreq: 'Annual (Apr)',
      fee: '₹100',
      website: 'aprs.apcfss.in',
      features: ['SC/ST/BC', 'Income Limit ₹2.5L'],
      link: '#',
      icon: BookOpen,
      color: 'orange'
    },
    {
      id: 'tgcet',
      title: 'Telangana Gurukul CET (TGCET)',
      type: 'State (AP/TS)',
      status: 'Coming Soon',
      conductedBy: 'TS Gurukulam',
      totalSchools: '100+ Schools',
      classes: 'V (Entry to VI)',
      examFreq: 'Annual (May)',
      fee: 'Free',
      website: 'tgcet.cgg.gov.in',
      features: ['SC/ST/BC/Gen', 'Free Boarding'],
      link: '#',
      icon: BookOpen,
      color: 'purple'
    },
    {
      id: 'ts-wreis',
      title: 'Telangana Tribal Welfare',
      type: 'State (AP/TS)',
      status: 'Coming Soon',
      conductedBy: 'TTWREIS',
      totalSchools: '50+ Schools',
      classes: 'VI to IX',
      examFreq: 'Annual (Feb)',
      fee: 'Free',
      website: 'ttwreis.cgg.gov.in',
      features: ['ST Only', 'Free Residential'],
      link: '#',
      icon: Building,
      color: 'blue'
    },

    // --- STATE LEVEL (OTHERS) ---
    {
      id: 'cm-shri',
      title: 'CM SHRI Schools Admission',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'DoE Delhi',
      totalSchools: '100+ Schools',
      classes: 'VI, IX, XI',
      examFreq: 'Annual (Apr)',
      fee: 'Free',
      website: 'edudel.nic.in',
      features: ['Delhi Specific', 'Modern Infra'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'atal-up',
      title: 'Atal Residential Exam (UP)',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'UP Education Dept',
      totalSchools: '100+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Mar)',
      fee: 'Free',
      website: 'up.gov.in',
      features: ['UP Domicile', 'Merit-Based'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'gyanshakti-guj',
      title: 'Gyanshakti / Rakshashakti CET',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Gujarat Education Dept',
      totalSchools: '50+ Schools',
      classes: 'I, VI',
      examFreq: 'Annual (Jan)',
      fee: 'Free',
      website: 'gujarat.gov.in',
      features: ['Tribal/Defence', 'Free Edu'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'kar-res',
      title: 'Karnataka Residential (KRS/EMRS)',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'KREIS',
      totalSchools: '50+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Mar-Apr)',
      fee: 'Free',
      website: 'karnataka.gov.in',
      features: ['SC/ST/BC Focus', 'Free Residential'],
      link: '#',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'tn-adi',
      title: 'TN Adi Dravidar Welfare',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Adi Dravidar Dept',
      totalSchools: '100+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Apr-May)',
      fee: 'Free',
      website: 'tn.gov.in',
      features: ['SC/ST Students', 'Free Education'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'maha-ashram',
      title: 'Maharashtra Ashram Shala',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Social Justice Dept',
      totalSchools: '100+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Mar-Apr)',
      fee: 'Free',
      website: 'maharashtra.gov.in',
      features: ['Tribal Welfare', 'Free Residential'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'bihar-res',
      title: 'Bihar Residential Schools',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Bihar Edu Dept',
      totalSchools: '50+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Apr-May)',
      fee: 'Free',
      website: 'bihar.gov.in',
      features: ['Bihar Domicile', 'Merit-Based'],
      link: '#',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'jharkhand-res',
      title: 'Jharkhand Residential (JAC)',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'JAC & Tribal Welfare',
      totalSchools: '30+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Mar-Apr)',
      fee: 'Free',
      website: 'jac.jharkhand.gov.in',
      features: ['SC/ST Focus', 'Free Education'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'wb-res',
      title: 'West Bengal State Residential',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'WB Edu Dept',
      totalSchools: '50+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Apr-May)',
      fee: 'Free',
      website: 'wbeducation.gov.in',
      features: ['SC/ST/BC Focus', 'Free Education'],
      link: '#',
      icon: Building,
      color: 'orange'
    },
    {
      id: 'raj-res',
      title: 'Rajasthan Residential Schools',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Raj Edu Dept',
      totalSchools: '50+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Mar-Apr)',
      fee: 'Free',
      website: 'rajasthan.gov.in',
      features: ['SC/ST Focus', 'Free Education'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'har-res',
      title: 'Haryana Residential Schools',
      type: 'State (Others)',
      status: 'Coming Soon',
      conductedBy: 'Haryana Edu Dept',
      totalSchools: '20+ Schools',
      classes: 'VI, IX',
      examFreq: 'Annual (Apr)',
      fee: 'Free',
      website: 'haryana.gov.in',
      features: ['SC/ST/BC Focus', 'Free Education'],
      link: '#',
      icon: Building,
      color: 'blue'
    }
  ];

  const scholarships = [
    {
      id: 'nmms',
      title: 'National Means-cum-Merit Scholarship (NMMS)',
      type: 'Govt. Scholarship',
      status: 'Coming Soon',
      conductedBy: 'MoE, Govt of India',
      totalSchools: 'All Govt Schools',
      classes: 'Class VIII',
      examFreq: 'Annual (Nov)',
      fee: 'Free',
      website: 'scholarships.gov.in',
      features: ['₹12,000/year', 'Merit + Means'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'pmst',
      title: 'Pathani Samanta Math Scholarship (PMST)',
      type: 'State Scholarship',
      status: 'Coming Soon',
      conductedBy: 'BSE Odisha',
      totalSchools: 'Odisha Schools',
      classes: 'Class VI, IX, XI',
      examFreq: 'Annual (Dec)',
      fee: 'Free',
      website: 'bseodisha.ac.in',
      features: ['Math Talent', 'Financial Reward'],
      link: '#',
      icon: Calculator,
      color: 'purple'
    },
    {
      id: 'ntse',
      title: 'National Talent Search Exam (NTSE)',
      type: 'National Scholarship',
      status: 'Coming Soon',
      conductedBy: 'NCERT',
      totalSchools: 'All India',
      classes: 'Class X',
      examFreq: 'Annual',
      fee: 'Free',
      website: 'ncert.nic.in',
      features: ['Monthly Stipend', 'PhD Support'],
      link: '#',
      icon: Star,
      color: 'blue'
    }
  ];

  const examFilters = ['All', 'National Level', 'Defence School', 'State (Odisha)', 'State (AP/TS)', 'State (Others)'];
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
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 shrink-0"><Calendar className="w-2.5 h-2.5" /> Upcoming</span>;
    }
    if (status === 'Coming Soon') {
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 text-[10px] font-bold border border-amber-100 shrink-0"><Clock className="w-2.5 h-2.5" /> Coming Soon</span>;
    }
    if (status === 'Active') {
      return <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold border border-blue-100 shrink-0"><CheckCircle className="w-2.5 h-2.5" /> Active</span>;
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
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Dynamic Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 sm:mb-6 justify-center px-1">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {displayedData.length > 0 ? (
            displayedData.map((item) => {
              const Icon = item.icon;
              const colors = getColorStyles(item.color);
              const isComingSoon = item.status === 'Coming Soon';

              return (
                <div key={item.id} className={`rounded-[24px] border ${colors.border} ${colors.hoverBorder} ${colors.bg} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6 group relative transform hover:-translate-y-1`}>
                  
                  {/* Header Area */}
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center border ${colors.border} shadow-sm group-hover:scale-105 transition-transform shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    {getStatusBadge(item.status)}
                  </div>

                  {/* Title Area */}
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5">{item.type}</div>
                  <h3 className="text-[18px] leading-snug font-black text-brand-dark mb-4 group-hover:text-brand-purple transition-colors line-clamp-2 min-h-[46px]">{item.title}</h3>
                  
                  {/* Dense Data Grid (The Game Changer) */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-5 p-4 bg-white/60 rounded-xl border border-gray-100/60 flex-1">
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">Conducted By</span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-2 leading-tight" title={item.conductedBy}>{item.conductedBy}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">Total Schools</span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-2 leading-tight">{item.totalSchools}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">Classes</span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-1">{item.classes}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">App Fee</span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-1">{item.fee}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-between border-t border-gray-100/80 pt-3 mt-1">
                       <div>
                         <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">Exam Freq.</span>
                         <span className="text-gray-800 text-[12px] font-bold">{item.examFreq}</span>
                       </div>
                       <a href={`https://${item.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors">
                         {item.website} <ExternalLink className="w-3 h-3" />
                       </a>
                    </div>
                  </div>

                  {/* Feature Tags (Compact) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="px-2.5 py-1.5 bg-white border border-gray-100 text-gray-600 text-[11px] font-bold rounded-lg whitespace-nowrap shadow-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {isComingSoon ? (
                    <button disabled className="w-full py-3.5 rounded-xl bg-gray-50 text-gray-400 font-bold text-[14px] border border-gray-200 cursor-not-allowed flex justify-center items-center gap-2">
                      <Clock className="w-4 h-4" /> Coming Soon
                    </button>
                  ) : (
                    <Link to={item.link} className="w-full py-3.5 rounded-xl bg-white border border-gray-200 text-brand-purple hover:bg-brand-purple hover:text-white hover:border-brand-purple font-black text-[14px] transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm">
                      View Full Guide
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                <Filter className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No matches found</h3>
              <p className="text-gray-500 text-[14px]">Try selecting a different filter category.</p>
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
