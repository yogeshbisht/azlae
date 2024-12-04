import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/section/services-section";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </main>
  );
};

export default LandingPage;
