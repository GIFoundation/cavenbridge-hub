import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CompaniesSection } from '@/components/sections/CompaniesSection';
import { WhatWeBuildSection } from '@/components/sections/WhatWeBuildSection';
import { GovernanceSection } from '@/components/sections/GovernanceSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <CompaniesSection />
        <WhatWeBuildSection />
        <GovernanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
