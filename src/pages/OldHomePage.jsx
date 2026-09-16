import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Pillars from '../components/sections/Pillars';
import Journey from '../components/sections/Journey';
import ProblemSection from '../components/sections/ProblemSection';
import DifferenceSection from '../components/sections/DifferenceSection';
import CohortSection from '../components/sections/CohortSection';
import PricingSection from '../components/sections/PricingSection';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

export default function OldHomePage({ openModal }) {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans flex flex-col">
      <Navbar onRequestInvite={openModal} />
      <main className="flex-1 w-full flex flex-col">
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
