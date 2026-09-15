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
      id: 'schaeffler',
      title: 'Schaeffler India Hope Engg Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Schaeffler India',
      totalSchools: 'Engg Undergraduates',
      classes: 'Merit-cum-means',
      examFreq: '30 Sep 2026',
      fee: '₹50,000/year',
      website: 'buddy4study.com',
      features: ['All-India', 'Online App'],
      link: '#',
      icon: Award,
      color: 'blue'
    },
    {
      id: 'adobe-ai',
      title: 'Adobe India AI Research Fellowship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Adobe India',
      totalSchools: 'PG/PhD AI/ML',
      classes: 'AI Research Focus',
      examFreq: '31 Oct 2026',
      fee: '₹12,00,000 (Total)',
      website: 'adobe.com',
      features: ['High Value', 'Research'],
      link: '#',
      icon: Star,
      color: 'purple'
    },
    {
      id: 'bharti-airtel',
      title: 'Bharti Airtel Scholarship Program',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Bharti Foundation',
      totalSchools: 'UG / PG Students',
      classes: 'Merit-cum-means',
      examFreq: '31 Oct 2026',
      fee: '₹3,00,000',
      website: 'buddy4study.com',
      features: ['All-India', 'High Value'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'iocl-sports',
      title: 'IndianOil Sports Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'IOCL',
      totalSchools: 'Sportspersons',
      classes: 'Performance-based',
      examFreq: '31 Oct 2026',
      fee: '₹1.4L–₹2.4L/yr',
      website: 'iocl.com',
      features: ['Sports Focus', 'Elite Players'],
      link: '#',
      icon: Award,
      color: 'green'
    },
    {
      id: 'google-apac',
      title: 'Generation Google Scholarship (APAC-India)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Google',
      totalSchools: 'UG CS/STEM',
      classes: 'Diversity & Merit',
      examFreq: '31 Oct 2026',
      fee: '₹2,10,000',
      website: 'buildyourfuture.withgoogle.com',
      features: ['Women in Tech', 'STEM Focus'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'google-apac-2026',
      title: 'Generation Google Scholarship (APAC)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Google',
      totalSchools: 'APAC UG CS Students',
      classes: 'CS/STEM UG',
      examFreq: '31 Oct 2026',
      fee: '₹2,10,000',
      website: 'buildyourfuture.withgoogle.com',
      features: ['APAC Region', 'Diversity'],
      link: '#',
      icon: Star,
      color: 'purple'
    },
    {
      id: 'idfc-mba',
      title: 'IDFC FIRST Bank MBA Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'IDFC FIRST Bank',
      totalSchools: 'MBA Students',
      classes: 'Enrolled in MBA',
      examFreq: '31 Oct 2026',
      fee: '₹1L–₹2L/year',
      website: 'idfcfirstbank.com',
      features: ['Merit-cum-means', 'All-India'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'gail-sports',
      title: 'GAIL Sports Scholarship Scheme',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'GAIL (India) Limited',
      totalSchools: 'Sports trainees',
      classes: 'Performance-tier',
      examFreq: '31 Oct 2026',
      fee: '₹1.4L–₹1.92L/year',
      website: 'gailonline.com',
      features: ['Sports Focus', 'Selection-based'],
      link: '#',
      icon: Award,
      color: 'green'
    },
    {
      id: 'lnt-build',
      title: 'L&T Build India Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Larsen & Toubro',
      totalSchools: 'Civil/Mech Final Yr',
      classes: 'M.Tech Tie-up',
      examFreq: '31 Oct 2026',
      fee: '₹1.6L + M.Tech Fee',
      website: 'lntecc.com',
      features: ['Service Bond', 'Sponsorship'],
      link: '#',
      icon: Building,
      color: 'orange'
    },
    {
      id: 'infosys-stem',
      title: 'Infosys Foundation STEM Stars',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Infosys Foundation',
      totalSchools: '1st-yr Female UG',
      classes: 'Income ≤₹8 Lakh',
      examFreq: '31 Oct 2026',
      fee: '₹1,00,000/year',
      website: 'infosys.org',
      features: ['Girls Only', 'STEM'],
      link: '#',
      icon: Star,
      color: 'green'
    },
    {
      id: 'loreal-fywis',
      title: 'L’Oréal India FYWIS',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'L’Oréal India',
      totalSchools: 'Women in Science',
      classes: 'Science ≥85%',
      examFreq: '31 Oct 2026',
      fee: '₹62k–₹1L/year',
      website: 'loreal.com',
      features: ['Girls Only', 'UG/PG Science'],
      link: '#',
      icon: Award,
      color: 'purple'
    },
    {
      id: 'tata-realty',
      title: 'Tata Realty Scholarship for Girls',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Tata Realty',
      totalSchools: 'Girl Students',
      classes: 'UG/Professional',
      examFreq: '31 Oct 2026',
      fee: '₹50k–₹1L',
      website: 'buddy4study.com',
      features: ['Merit-cum-means', 'Girls Only'],
      link: '#',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'jsw-udaan',
      title: 'JSW Udaan Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'JSW Foundation',
      totalSchools: 'School/UG/PG',
      classes: 'Merit-cum-means',
      examFreq: '31 Oct 2026',
      fee: '₹10k–₹60k',
      website: 'buddy4study.com',
      features: ['All-India', 'Multiple Tracks'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'glow-lovely',
      title: 'Glow & Lovely Careers',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Hindustan Unilever',
      totalSchools: 'Women (UG/PG)',
      classes: 'Marks Criteria',
      examFreq: '31 Oct 2026',
      fee: '₹25k–₹50k',
      website: 'glowandlovelycareers.in',
      features: ['Girls Only', 'Vocational'],
      link: '#',
      icon: Award,
      color: 'green'
    },
    {
      id: 'amazon-ffe',
      title: 'Amazon Future Engineer',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Amazon & FFE',
      totalSchools: '1st-yr CS/Engg',
      classes: 'Merit-cum-means',
      examFreq: '31 Dec 2026',
      fee: '₹50,000/year',
      website: 'ffe.org',
      features: ['Tech Focus', 'All-India'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'sitaram-jindal',
      title: 'Sitaram Jindal Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Sitaram Jindal Found.',
      totalSchools: 'Class 11–PG, ITI',
      classes: 'Income ≤₹4 Lakh',
      examFreq: '30 Sep 2026',
      fee: 'Up to ₹38k/year',
      website: 'sitaramjindalfoundation.org',
      features: ['All-India', 'Many Courses'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'tata-pankh',
      title: 'Tata Capital Pankh',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Tata Capital',
      totalSchools: 'Class 11–12, UG',
      classes: 'Economically Weaker',
      examFreq: '15 Nov 2026',
      fee: 'Up to ₹80,000',
      website: 'tatacapital.com',
      features: ['Merit-cum-means', 'All-India'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'rolls-royce',
      title: 'Rolls-Royce Wings4Her',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Rolls-Royce India',
      totalSchools: 'Female STEM',
      classes: 'Merit-cum-means',
      examFreq: '30 Nov 2026',
      fee: '₹25k–₹35k',
      website: 'buddy4study.com',
      features: ['Girls Only', 'STEM Focus'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'tata-aia',
      title: 'TATA AIA PARAS Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'TATA AIA Life',
      totalSchools: 'School/College',
      classes: 'Merit-cum-means',
      examFreq: '30 Nov 2026',
      fee: '₹15,000',
      website: 'buddy4study.com',
      features: ['Weaker Sections', 'All-India'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'ongc-sports',
      title: 'ONGC Sports Scholarship Scheme',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'ONGC',
      totalSchools: 'Recognised athletes',
      classes: 'State/National level',
      examFreq: '31 Dec 2026',
      fee: '₹1.8L–₹3.6L/year',
      website: 'ongcindia.com',
      features: ['Sports Focus', 'Elite Players'],
      link: '#',
      icon: Award,
      color: 'purple'
    },
    {
      id: 'lic-vidyadhan',
      title: 'LIC HFL Vidyadhan',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'LIC HFL',
      totalSchools: 'Class 8–PG',
      classes: 'Income ≤₹3 Lakh',
      examFreq: '31 Dec 2026',
      fee: '₹10k–₹25k/year',
      website: 'buddy4study.com',
      features: ['All-India', 'Multiple Tracks'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'jn-tata',
      title: 'JN Tata Endowment Loan',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Tata Trusts',
      totalSchools: 'Grads going Abroad',
      classes: 'Merit-based',
      examFreq: 'Feb-Mar 2027',
      fee: 'Loan (Varies)',
      website: 'jntataendowment.org',
      features: ['Overseas Study', 'Low Interest'],
      link: '#',
      icon: GraduationCap,
      color: 'purple'
    },
    {
      id: 'jk-tyre',
      title: 'JK Tyre Shiksha Sarthi',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'JK Tyre',
      totalSchools: 'Drivers\' daughters',
      classes: 'Father is driver',
      examFreq: 'Sep 2026',
      fee: '₹15k–₹25k',
      website: 'buddy4study.com',
      features: ['Girls Only', 'Specific States'],
      link: '#',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'virtusa',
      title: 'Virtusa Engineering Excellence',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Virtusa Foundation',
      totalSchools: '1st/2nd yr B.Tech',
      classes: 'Income <₹6L',
      examFreq: 'Aug-Oct 2026',
      fee: '₹50,000/year',
      website: 'buddy4study.com',
      features: ['Engineering', 'Merit-based'],
      link: '#',
      icon: Star,
      color: 'orange'
    },
    {
      id: 'hdfc-ecss',
      title: 'HDFC Parivartan ECSS',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'HDFC Bank',
      totalSchools: 'Class 1–PG, ITI',
      classes: 'Crisis / Low Income',
      examFreq: '31 Oct 2026',
      fee: '₹15k–₹75k/year',
      website: 'buddy4study.com',
      features: ['Crisis Support', 'All-India'],
      link: '#',
      icon: Shield,
      color: 'blue'
    },
    {
      id: 'panasonic',
      title: 'Panasonic Ratti Chhatr',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Panasonic India',
      totalSchools: '1st yr B.Tech (IITs)',
      classes: 'IIT entrants',
      examFreq: '20 Aug 2026',
      fee: '₹70,250/year',
      website: 'buddy4study.com',
      features: ['IIT Students', 'Merit-based'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'kotak-kanya',
      title: 'Kotak Kanya & Suraksha',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Kotak Mahindra Group',
      totalSchools: '1st yr Girls & PwD',
      classes: 'Income <₹6L',
      examFreq: 'Jun-Sep 2026',
      fee: '₹1,50,000/year',
      website: 'kotakeducation.org',
      features: ['Girls & PwD', 'Professional UG'],
      link: '#',
      icon: Star,
      color: 'green'
    },
    {
      id: 'santoor',
      title: 'Santoor Scholarship Program',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Wipro',
      totalSchools: 'Girls in AP/KA/TS/CG',
      classes: 'Govt school passouts',
      examFreq: 'Aug-Oct 2026',
      fee: '₹24,000/year',
      website: 'buddy4study.com',
      features: ['Regional', 'Girls Only'],
      link: '#',
      icon: Award,
      color: 'orange'
    },
    {
      id: 'reliance-ug',
      title: 'Reliance Foundation UG/PG',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Reliance Foundation',
      totalSchools: '1st-yr Undergrads/PG',
      classes: 'Aptitude Test',
      examFreq: 'Aug-Oct 2026',
      fee: 'Up to ₹6,00,000 (PG)',
      website: 'scholarships.reliancefoundation.org',
      features: ['5000+ Awards', 'High Value'],
      link: '#',
      icon: Star,
      color: 'orange'
    },
    {
      id: 'swayam',
      title: 'SWAYAM Trust Aspire',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'SWAYAM Trust',
      totalSchools: '1st yr B.Tech',
      classes: '11 Listed Institutes',
      examFreq: 'Jul-Sep 2026',
      fee: 'Full Academic Exp',
      website: 'buddy4study.com',
      features: ['Full Funding', 'IITs/IIITs'],
      link: '#',
      icon: Building,
      color: 'purple'
    },
    {
      id: 'tata-means',
      title: 'Tata Trusts Means Grant',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Tata Trusts',
      totalSchools: 'UG/PG students',
      classes: 'Means-tested',
      examFreq: 'Mid-year 2026',
      fee: '₹5k–₹50k/year',
      website: 'tatatrusts.org',
      features: ['Fee Reimbursement', 'All-India'],
      link: '#',
      icon: Shield,
      color: 'blue'
    },
    {
      id: 'infosys-nonstem',
      title: 'Infosys Foundation (Non-STEM)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Infosys Foundation',
      totalSchools: 'UG students',
      classes: 'Income ≤₹8L',
      examFreq: 'Annual 2026',
      fee: 'Approx ₹1,00,000/yr',
      website: 'infosys.org',
      features: ['Merit-cum-means', 'All-India'],
      link: '#',
      icon: GraduationCap,
      color: 'green'
    },
    {
      id: 'kotak-shiksha',
      title: 'Kotak Shiksha Nidhi',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Kotak Ed Foundation',
      totalSchools: 'School/College',
      classes: 'COVID-19 Loss',
      examFreq: 'Mid-year 2026',
      fee: 'Varies',
      website: 'kotakeducation.org',
      features: ['Crisis Support', 'All-India'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'lic-golden',
      title: 'LIC Golden Jubilee',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'LIC Foundation',
      totalSchools: 'Class 11 onwards',
      classes: 'Economically weaker',
      examFreq: 'Dec 2026',
      fee: '₹20k–₹30k/year',
      website: 'licindia.in',
      features: ['Merit-based', 'All-India'],
      link: '#',
      icon: Award,
      color: 'blue'
    },
    {
      id: 'ffe-schol',
      title: 'Foundation for Excellence (FFE)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'FFE',
      totalSchools: 'Engg/Medical UG',
      classes: 'Low-income, High marks',
      examFreq: 'Annual 2026',
      fee: '₹50,000+ per year',
      website: 'ffe.org',
      features: ['Professional Courses', 'Merit-cum-means'],
      link: '#',
      icon: Star,
      color: 'purple'
    },
    {
      id: 'rajendra-prasad',
      title: 'Dr Rajendra Prasad Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Private Trust/NGO',
      totalSchools: 'Class 10+ students',
      classes: 'Merit-cum-means',
      examFreq: '30 Sep 2026',
      fee: 'Varies',
      website: 'buddy4study.com',
      features: ['All-India', 'School & College'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'vivo-kanya',
      title: 'vivo KanyaGyaan',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'vivo India (CSR)',
      totalSchools: 'Girls in STEM',
      classes: 'School/College',
      examFreq: 'Annual 2026',
      fee: 'Varies',
      website: 'buddy4study.com',
      features: ['Girls Only', 'STEM Focus'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'vidyasaarathi',
      title: 'Vidyasaarathi Portal',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'NSDL e-Gov',
      totalSchools: 'School to PG',
      classes: 'Multiple CSR schemes',
      examFreq: 'Rolling 2026',
      fee: '₹10k–₹70k/year',
      website: 'vidyasaarathi.co.in',
      features: ['Platform', 'Various Corporates'],
      link: '#',
      icon: Building,
      color: 'orange'
    },
    {
      id: 'agnipankh',
      title: 'Agnipankh Scholarship Exam',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Private Organiser',
      totalSchools: 'Class 1–10',
      classes: 'Exam performance',
      examFreq: 'Annual 2026',
      fee: 'Merit Cash Awards',
      website: 'hbkcareers.org',
      features: ['Exam-based', 'All-India'],
      link: '#',
      icon: Calculator,
      color: 'purple'
    },
    {
      id: 'pwsat',
      title: 'PW Scholarship Test (PWSAT)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'PhysicsWallah (PW)',
      totalSchools: 'Class 6–12',
      classes: 'Exam-based',
      examFreq: 'Year-round 2026',
      fee: 'Up to 90% Waiver',
      website: 'pw.live',
      features: ['Coaching', 'Fee Waiver'],
      link: '#',
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'nikon',
      title: 'Nikon Scholarship Programme',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Nikon India',
      totalSchools: 'Photo/Media students',
      classes: 'Merit-cum-means',
      examFreq: '23 Sep 2026',
      fee: 'Varies',
      website: 'buddy4study.com',
      features: ['Media Focus', 'All-India'],
      link: '#',
      icon: Star,
      color: 'green'
    },
    {
      id: 'sbi-asha',
      title: 'SBI Foundation Asha',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'SBI Foundation',
      totalSchools: 'Class 6–PG',
      classes: 'Income ≤₹6 Lakh',
      examFreq: 'Sep-Nov 2026',
      fee: '₹15,000+',
      website: 'sbifoundation.in',
      features: ['SC/ST Quota', 'All-India'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'vidyadhan',
      title: 'Vidyadhan Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Sarojini Damodaran',
      totalSchools: 'Class 11 and UG',
      classes: 'Low-income, Merit',
      examFreq: 'May-Aug 2026',
      fee: '₹10k–₹60k/year',
      website: 'vidyadhan.org',
      features: ['State-wise', 'Merit-cum-means'],
      link: '#',
      icon: Award,
      color: 'purple'
    },
    {
      id: 'colgate',
      title: 'Colgate Keep India Smiling',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Colgate-Palmolive',
      totalSchools: 'Class 11 Onwards',
      classes: 'Merit-cum-means',
      examFreq: 'Sep-Oct 2026',
      fee: 'Up to ₹75,000',
      website: 'colgatecares.co.in',
      features: ['Sports/Dental', 'All-India'],
      link: '#',
      icon: Star,
      color: 'blue'
    },
    {
      id: 'legrand',
      title: 'Legrand Empowering',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Group Legrand India',
      totalSchools: 'PwD, Girls, LGBTQ+',
      classes: 'Special Categories',
      examFreq: 'Aug-Dec 2026',
      fee: 'Up to ₹1L/year',
      website: 'legrandscholarship.co.in',
      features: ['Inclusivity', 'B.Tech/Arch'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'faea',
      title: 'FAEA Undergraduate',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'FAEA',
      totalSchools: 'UG (SC/ST/BPL)',
      classes: 'Socially Disadvantaged',
      examFreq: 'Apr-Jun 2026',
      fee: 'Full/Partial Fee',
      website: 'faeaindia.org',
      features: ['High Impact', 'Minorities'],
      link: '#',
      icon: Building,
      color: 'green'
    },
    {
      id: 'aakash-anthe',
      title: 'Aakash ANTHE',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Aakash Institute',
      totalSchools: 'Class 7–12',
      classes: 'Exam-based',
      examFreq: 'Sep-Oct 2026',
      fee: '100% Fee Waiver',
      website: 'aakash.ac.in',
      features: ['Coaching', 'Merit-based'],
      link: '#',
      icon: BookOpen,
      color: 'purple'
    },
    {
      id: 'allen-tallentex',
      title: 'Allen TALLENTEX',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Allen Institute',
      totalSchools: 'Class 5–11',
      classes: 'Exam-based',
      examFreq: 'Sep-Nov 2026',
      fee: 'Cash + Waivers',
      website: 'tallentex.com',
      features: ['Coaching', 'Cash Rewards'],
      link: '#',
      icon: Calculator,
      color: 'blue'
    },
    {
      id: 'aditya-birla',
      title: 'Aditya Birla Scholarship',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Aditya Birla Group',
      totalSchools: 'Top IIT/IIM/NLU',
      classes: 'Nominated by Inst.',
      examFreq: 'Aug-Oct 2026',
      fee: '₹1.5L–₹3L/year',
      website: 'adityabirlascholars.net',
      features: ['Elite Institutes', 'Prestigious'],
      link: '#',
      icon: Star,
      color: 'orange'
    },
    {
      id: 'amazon-ffe-2026',
      title: 'Amazon Future Engineer 2026',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Amazon & FFE',
      totalSchools: '1st-yr CS/Engg',
      classes: 'Merit-cum-means',
      examFreq: '31 Dec 2026',
      fee: '₹50,000/year',
      website: 'ffe.org',
      features: ['Tech Focus', '2026 Cohort'],
      link: '#',
      icon: Star,
      color: 'green'
    },
    {
      id: 'sitaram-jindal-hbk',
      title: 'Sitaram Jindal (HBK)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Sitaram Jindal Found.',
      totalSchools: 'Class 11–PG, ITI',
      classes: 'Income ≤₹4L/₹2.5L',
      examFreq: '30 Sep 2026',
      fee: '₹3,200/month DBT',
      website: 'sitaramjindalfoundation.org',
      features: ['Half-yearly DBT', 'All-India'],
      link: '#',
      icon: Building,
      color: 'blue'
    },
    {
      id: 'hdfc-ecss-hbk',
      title: 'HDFC Parivartan ECSS (HBK)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'HDFC Bank',
      totalSchools: 'Class 1–PG, ITI',
      classes: 'Income <₹2.5L',
      examFreq: 'Aug-Oct 2026',
      fee: '₹15k–₹75k/year',
      website: 'buddy4study.com',
      features: ['Family Crisis', 'All Levels'],
      link: '#',
      icon: Shield,
      color: 'orange'
    },
    {
      id: 'tata-pankh-hbk',
      title: 'Tata Capital Pankh (HBK)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Tata Capital',
      totalSchools: 'Class 11–12, College',
      classes: 'Economically Weaker',
      examFreq: 'Mid-Nov 2026',
      fee: 'Up to ₹80,000/yr',
      website: 'tatacapital.com',
      features: ['School + College', 'Merit-cum-means'],
      link: '#',
      icon: Award,
      color: 'purple'
    },
    {
      id: 'reliance-ug-hbk',
      title: 'Reliance Foundation UG (HBK)',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Reliance Foundation',
      totalSchools: '1st-yr UG students',
      classes: 'Class 12 ≥60%',
      examFreq: 'Aug-Oct 2026',
      fee: 'Up to ₹2,00,000',
      website: 'scholarships.reliancefoundation.org',
      features: ['5000 Awards', 'All-India'],
      link: '#',
      icon: Star,
      color: 'green'
    },
    {
      id: 'buddy4study-foundation',
      title: 'Buddy4Study India Foundation',
      type: 'Private Scholarship',
      status: 'Coming Soon',
      conductedBy: 'Buddy4Study Found.',
      totalSchools: 'Class 11–12 & UG',
      classes: 'Income <₹8L, ≥60%',
      examFreq: 'Jun-Aug 2026',
      fee: '₹6k–₹75k',
      website: 'buddy4study.com',
      features: ['Girls/PwD Pref', 'Govt School'],
      link: '#',
      icon: GraduationCap,
      color: 'blue'
    }
  ];

  const examFilters = ['All', 'National Level', 'Defence School', 'State (Odisha)', 'State (AP/TS)', 'State (Others)'];
  const scholarshipFilters = ['All', 'National Scholarship', 'State Scholarship', 'Private Scholarship'];

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
              Discover highly curated school-level entrance exams and prestigious private scholarships designed for student growth. Well-researched, structured, and updated.
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
                onClick={() => { setActiveTab('scholarships'); setScholarshipFilter('Private Scholarship'); }}
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
                  
                  {/* Dense Data Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-5 p-4 bg-white/60 rounded-xl border border-gray-100/60 flex-1">
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">
                        {activeTab === 'exams' ? 'Conducted By' : 'Provided By'}
                      </span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-2 leading-tight" title={item.conductedBy}>{item.conductedBy}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">
                        {activeTab === 'exams' ? 'Total Schools' : 'Target Audience'}
                      </span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-2 leading-tight">{item.totalSchools}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">
                        {activeTab === 'exams' ? 'Classes' : 'Eligibility'}
                      </span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-1">{item.classes}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">
                        {activeTab === 'exams' ? 'App Fee' : 'Grant Amount'}
                      </span>
                      <span className="text-gray-800 text-[12px] font-bold line-clamp-1">{item.fee}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-between border-t border-gray-100/80 pt-3 mt-1">
                       <div>
                         <span className="text-gray-400 block text-[9px] uppercase font-bold tracking-wider mb-1">
                           {activeTab === 'exams' ? 'Exam Freq.' : 'Deadline'}
                         </span>
                         <span className="text-gray-800 text-[12px] font-bold">{item.examFreq}</span>
                       </div>
                       <a href={item.website.startsWith('http') ? item.website : `https://${item.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors">
                         {item.website.replace(/^https?:\/\//, '').split('/')[0]} <ExternalLink className="w-3 h-3" />
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
              <p className="text-gray-500 text-[14px]">Try selecting a different filter category or check back later.</p>
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
