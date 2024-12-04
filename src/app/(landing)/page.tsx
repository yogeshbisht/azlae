import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/landing/services";
import Features from "@/components/landing/features";
import GetService from "@/components/landing/get-service";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <Features />
      <GetService />
    </main>
  );
};

export default LandingPage;
