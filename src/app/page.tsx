import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import ApiDashboard from '@/components/ApiDashboard';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ApiDashboard />
        <Pricing />
        <Faq />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
