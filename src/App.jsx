import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Pillars from './components/sections/Pillars';
import Journey from './components/sections/Journey';
import ProblemSection from './components/sections/ProblemSection';
import DifferenceSection from './components/sections/DifferenceSection';
import CohortSection from './components/sections/CohortSection';
import PricingSection from './components/sections/PricingSection';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import ApplicationModal from './components/ui/ApplicationModal';
import LiveNotification from './components/ui/LiveNotification';
import SyllabusPage from './pages/SyllabusPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CareerLanding from './pages/CareerLanding';
import CounselingRoom from './pages/CounselingRoom';
import ReportCard from './pages/ReportCard';
import ClaritySession from './pages/ClaritySession';

function HomePage({ openModal }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans">
      <Navbar onRequestInvite={openModal} />
      <main>
        <Hero onRequestInvite={openModal} />
        <Pillars />
        <Journey />
        <ProblemSection />
        <DifferenceSection />
        <CohortSection onRequestInvite={openModal} />
        <PricingSection onRequestInvite={openModal} />
        <FAQ />
        <FinalCTA onRequestInvite={openModal} />
      </main>
      <Footer onRequestInvite={openModal} />
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const autoOpenCount = React.useRef(0);

  const openModal = React.useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const scheduleAutoPopup = React.useCallback((delay) => {
    setTimeout(() => {
      if (autoOpenCount.current < 3) {
        setIsModalOpen(true);
        autoOpenCount.current += 1;
      }
    }, delay);
  }, []);

  const closeModal = React.useCallback(() => {
    setIsModalOpen(false);
    if (autoOpenCount.current < 3) {
      scheduleAutoPopup(30000); // Popup again 30 seconds after closing, up to 3 times
    }
  }, [scheduleAutoPopup]);

  useEffect(() => {
    scheduleAutoPopup(5500); // First popup after 5.5s
  }, [scheduleAutoPopup]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage openModal={openModal} />} />
        <Route path="/syllabus" element={<SyllabusPage onRequestInvite={openModal} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* AI Career Counseling Routes */}
        <Route path="/career-counseling" element={<CareerLanding />} />
        <Route path="/counseling-room" element={<CounselingRoom />} />
        <Route path="/report" element={<ReportCard />} />
        <Route path="/clarity-session" element={<ClaritySession />} />
      </Routes>
      <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />
      <LiveNotification />
    </BrowserRouter>
  );
}

export default App;
