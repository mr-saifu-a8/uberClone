import Footer from "../components/Footer";
import BlueCTASection from "../components/business/BlueCTASection";
import GetStartedSection from "../components/business/GetStartedSection";
import GlobalPlatformSection from "../components/business/GlobalPlatformSection";
import HeroSection from "../components/business/HeroSection";
import HowCompaniesSection from "../components/business/HowCompaniesSection";
import LearningMoreSection from "../components/business/LearningMoreSection";
import LogosSection from "../components/business/LogosSection";
import Navigation from "../components/business/Navigation";
import TestimonialSection from "../components/business/TestimonialSection";

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
