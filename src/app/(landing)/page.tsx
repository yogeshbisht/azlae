import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <Features />
    </main>
  );
};

export default LandingPage;
