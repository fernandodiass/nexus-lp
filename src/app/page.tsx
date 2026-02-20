"use client";

import ApiDashboard from '@/components/ApiDashboard';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';

export default function NexusLandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] bg-mesh-dark text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <ApiDashboard />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}