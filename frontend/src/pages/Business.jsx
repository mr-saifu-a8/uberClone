import Footer from "../Footer";
import BlueCTASection from "../business/BlueCTASection";
import GetStartedSection from "../business/GetStartedSection";
import GlobalPlatformSection from "../business/GlobalPlatformSection";
import HeroSection from "../business/HeroSection";
import HowCompaniesSection from "../business/HowCompaniesSection";
import LearningMoreSection from "../business/LearningMoreSection";
import LogosSection from "../business/LogosSection";
import Navigation from "../business/Navigation";
import TestimonialSection from "../business/TestimonialSection";

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
     <Footer/>
    </div>
  );
}
