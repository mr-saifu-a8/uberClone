import BlueCTASection from "./BlueCTASection";
import Footer from "./Footer";
import GetStartedSection from "./GetStartedSection";
import GlobalPlatformSection from "./GlobalPlatformSection";
import HeroSection from "./HeroSection";
import HowCompaniesSection from "./HowCompaniesSection";
import LearningMoreSection from "./LearningMoreSection";
import LogosSection from "./LogosSection";
import Navigation from "./Navigation";
import TestimonialSection from "./TestimonialSection";

export default function Business() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navigation />
      <HeroSection />
      <GlobalPlatformSection />
      <HowCompaniesSection />
      <GetStartedSection />
      <LogosSection />
      <TestimonialSection />
      <BlueCTASection />
      <LearningMoreSection />
      <Footer />
    </div>
  );
}
